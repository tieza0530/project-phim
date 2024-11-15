import { Button } from "@/components/ui/button";
import { RootItem } from "@/type/itemMovie";
import { CalendarIcon, ClockIcon, PlayIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export type DetailMovieProps = {
  data: RootItem | undefined;
  handleWatchMovie: () => void;
};

export const DetailMovie = ({ data, handleWatchMovie }: DetailMovieProps) => {
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);

  useEffect(() => {
    if (
      data?.movie.episode_current === "Tập 0" ||
      data?.movie.episode_current === "Trailer"
    ) {
      setIsPlayDisabled(true);
    } else {
      setIsPlayDisabled(false);
    }
  }, [setIsPlayDisabled, data]);

  return (
    <div className="grid md:grid-cols-3 sm:flex max-sm:flex  items-center ">
      <div className=" ">
        <LazyLoadImage
          key={data?.movie.thumb_url}
          className="object-cover rounded-xl md:col-span-1 sm:h-72 max-sm:h-52 max-sm:w-48 "
          src={data?.movie.thumb_url}
          alt={data?.movie.slug}
          effect="black-and-white"
        />
      </div>
      <div className="max-sm:ml-5 ml-10 md:col-span-2 text-sm">
        <b className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
          {data?.movie.name}
        </b>
        <p className="xl:text-lg lg:text-[16px] md:text-[14px] sm:text-[12px] lg:text-sm">
          {data?.movie.origin_name}
        </p>
        <div className="flex text-sm md:text-xs sm:text-[10px] lg:text-sm xl:text-lg my-2">
          <p className="mr-2 flex items-center ">
            <CalendarIcon className="mr-1" />
            {data?.movie.year}
          </p>
          <p className="flex items-center">
            <ClockIcon className="mx-1" />
            {data?.movie.time}
          </p>
        </div>
        <p className="mb-2 md:text-xs sm:text-[10px] lg:text-sm">
          Đang phát: {data?.movie.episode_current}
        </p>
        {data?.movie.country.map((item, idx) => (
          <p
            className="mb-2 md:text-xs sm:text-[10px] lg:text-sm"
            key={`country-${idx}`}
          >
            Quốc gia: {item.name}
          </p>
        ))}
        <span className="md:text-xs sm:text-[10px] lg:text-sm">Thể loại: </span>
        {data?.movie.category.map((item, idx) => (
          <b
            key={`type-movie-${idx}`}
            className="md:text-xs sm:text-[10px] lg:text-sm"
          >
            {item.name}
            {idx !== data.movie.category.length - 1 ? ",  " : "."}
          </b>
        ))}
        <p className="mt-2">Diễn viên: </p>
        {data?.movie.actor.map((item, idx) => (
          <b
            key={`actor-${idx}`}
            className="md:text-xs sm:text-[10px] lg:text-sm"
          >
            {item}
            {idx !== data.movie.actor.length - 1 ? ",  " : "."}
          </b>
        ))}
        <br />
        <Button
          className="mt-5 bg-red-600 hover:bg-white hover:text-red-600"
          disabled={isPlayDisabled}
          onClick={() => handleWatchMovie()}
        >
          <PlayIcon className="mr-2" /> Xem ngay
        </Button>
      </div>
    </div>
  );
};
