import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Episode, RootItem } from "@/type/itemMovie";
import {
  DoubleArrowRightIcon,
  DoubleArrowLeftIcon,
  EyeOpenIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type WatchMovieProps = {
  episode: Episode[] | undefined;
  watch: string;
  data: RootItem | undefined;
  setEpisode: React.Dispatch<React.SetStateAction<string>>;
};
export const Watch = ({
  episode,
  watch,
  data,
  setEpisode,
}: WatchMovieProps) => {
  const navigator = useNavigate();
  const [isNextButtonDisable, setIsNextButtonDisable] = useState(false);
  const [isPrevButtonDisable, setIsPrevButtonDisable] = useState(true);
  const [isLightOn, setIsLightOn] = useState(true);

  useEffect(() => {
    if (Number(watch) > 1) {
      setIsPrevButtonDisable(false);
    } else {
      setIsPrevButtonDisable(true);
    }
    const isEpisodeFull = data?.movie.episode_current === "Full";
    const isAnySingleServerData =
      episode?.some(
        (item) =>
          item.server_data.length === 1 ||
          item.server_data.length === Number(watch)
      ) || false;
    setIsNextButtonDisable(isEpisodeFull || isAnySingleServerData);
  }, [data, episode, setIsNextButtonDisable, setIsPrevButtonDisable, watch]);

  const hanldeNextEpisode = () => {
    episode?.map((item) => {
      if (item.server_data.length - 1 === Number(watch)) {
        setIsNextButtonDisable(true);
      }
      setIsPrevButtonDisable(false);
      let episodeNext = Number(watch) + 1;
      setEpisode(String(episodeNext));
      navigator(`/xem-phim/${data?.movie.slug}/tap-${episodeNext}`);
    });
  };

  const hanldePrevEpisode = () => {
    episode?.map((item) => {
      if (Number(watch) < item.server_data.length - 1) {
        setIsNextButtonDisable(false);
      }
      if (Number(watch) === 2) {
        setIsPrevButtonDisable(true);
      }
      let episodeNext = Number(watch) - 1;
      setEpisode(String(episodeNext));
      navigator(`/xem-phim/${data?.movie.slug}/tap-${episodeNext}`);
    });
  };

  const hanldeLight = () => setIsLightOn(!isLightOn);
  return (
    <div className="relative">
      {!isLightOn && (
        <div className="fixed inset-0 bg-black opacity-80 z-10"></div>
      )}
      <div className="relative z-20">
        {episode?.map((item) =>
          item.server_data.map(
            (result) =>
              (result.slug === watch ||
                result.slug === `0${watch}` ||
                result.name === `0${watch}` ||
                result.name === `${watch}` ||
                (watch === "full" && result.slug === "1")) && (
                <iframe
                  src={result.link_embed}
                  width={"100%"}

                  className="aspect-video "
                  key={`episodesMovie-${result.slug}-${result.name}`}
                ></iframe>
              )
          )
        )}
        <div className="flex items-center justify-end mt-1 ">
          <Button
            className=" text-[10px] "
            onClick={hanldePrevEpisode}
            disabled={isPrevButtonDisable}
          >
            <DoubleArrowLeftIcon className="mr-1" />
            Tập trước
          </Button>
          <Button
            className="ml-1 text-[10px]"
            onClick={hanldeNextEpisode}
            disabled={isNextButtonDisable}
          >
            Tập tiếp theo <DoubleArrowRightIcon className="ml-1" />
          </Button>
          <Button
            className={cn(
              "ml-1 text-xs",
              isLightOn && "bg-white text-black hover:bg-white "
            )}
            onClick={hanldeLight}
          >
            {!isLightOn ? <MoonIcon /> : <SunIcon />}
          </Button>
          <p className="text-xs ml-1 flex items-center bg-primary p-2 rounded-md">
            Tập: {watch}
          </p>
          <p className="sm:text-xs ml-1 flex items-center bg-primary p-2 rounded-md  max-md:hidden">
            <EyeOpenIcon className="mr-1" /> {data?.movie.view} lượt xem
          </p>
        </div>
      </div>
    </div>
  );
};
