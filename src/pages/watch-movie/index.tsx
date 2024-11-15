import { MainLayout } from "@/components/layout/MainLayout";
import { useGetTypeDetailMovie, useGetWatchMovie } from "@/quries/home.queries";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailMovie } from "./DetailMovie";
import { Watch } from "./Watch";
import { EpisodeMovie } from "./EpisodeMovie";
import { RelatedMovies } from "./RelatedMovies";

export const WatchMovie = () => {
  const params = useParams();
  const navigator = useNavigate();
  const [isWatchingMovie, setIsWatchingMovie] = useState(true);
  const [episode, setEpisode] = useState("1");
  const { data, refetch: refetchWatchMovie } = useGetWatchMovie(params.slug!);
  const { data: dataType, refetch: refetchTypeDetailMovie } =
    useGetTypeDetailMovie(data?.movie.category[0].slug!, 1);
  const urlIMG = dataType?.data.APP_DOMAIN_CDN_IMAGE + "/uploads/movies/";

  useEffect(() => {
    refetchWatchMovie();
    refetchTypeDetailMovie();
    setIsWatchingMovie(true);
  }, [params.slug, data?.movie.category[0].slug, setIsWatchingMovie]);

  const handleWatchMovie = (slug: string) => {
    setIsWatchingMovie(false);
    setEpisode(slug);
    navigator(`/xem-phim/${data?.movie.slug}/tap-${slug}`);
  };

  return (
    <MainLayout>
      {isWatchingMovie ? (
        <DetailMovie
          data={data}
          handleWatchMovie={() =>
            handleWatchMovie(
              data?.movie.episode_current === "Full" ? "full" : "1"
            )
          }
        />
      ) : (
        <Watch
          watch={episode}
          episode={data?.episodes}
          data={data}
          setEpisode={setEpisode}
        />
      )}
      <EpisodeMovie
        data={data}
        handleWatchMovie={handleWatchMovie}
        isWatching={!isWatchingMovie}
        isEpisode={episode}
      />
      <div className="mt-20">
        <RelatedMovies dataType={dataType} urlImg={urlIMG} />
      </div>
    </MainLayout>
  );
};
