import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RootItem } from "@/type/itemMovie";

export type EpisodeProps = {
  data: RootItem | undefined;
  handleWatchMovie: (slug: string) => void;
  isWatching: boolean;
  isEpisode: string;
};
export const EpisodeMovie = ({
  data,
  handleWatchMovie,
  isWatching,
  isEpisode,
}: EpisodeProps) => {
  return (
    <div className="mt-10 ">
      <div className="mb-2">
        <p>Danh sách tập phim: </p>
      </div>
      {data?.episodes.map((item) =>
        item.server_data.map((result, idx) => (
          <Button
            className={cn(
              "m-1 w-10",
              Number(isEpisode) === Number(result.slug) &&
                "bg-white text-black hover:bg-white hover:text-black",
              !isWatching && "bg-black  text-white"
            )}
            onClick={() => handleWatchMovie(String(idx + 1))}
            key={`episodes-${result.slug}`}
            disabled={
              data.movie.episode_current === "Tập 0" ||
              data.movie.episode_current === "Full" ||
              data.movie.episode_current === "Trailer"
            }
          >
            {idx + 1}
          </Button>
        ))
      )}
      {isWatching && (
        <div>
          <p className="text-2xl mt-10">{data?.movie.name}</p>
          <p
            className="mt-1"
            dangerouslySetInnerHTML={{ __html: data?.movie.content! }}
          ></p>
        </div>
      )}
    </div>
  );
};
