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
  const [isPlayDisabled , setIsPlayDisabled ] = useState(false);

  useEffect(() => {
    if (data?.movie.episode_current === "Tập 0" || data?.movie.episode_current === "Trailer" ) {
      setIsPlayDisabled(true);
    } else {
      setIsPlayDisabled(false);
    }
  }, [setIsPlayDisabled, data]);

  return (
    <div className="flex mt-20 mr-32 items-center ">
      <div className="ml-16">
        <LazyLoadImage
          key={data?.movie.thumb_url}
          className="w-60 h-96 object-cover rounded-xl"
          src={data?.movie.thumb_url}
          alt={data?.movie.slug}
          effect="black-and-white"
        />
      </div>
      <div className="ml-10 w-[calc(100%-15rem)] text-sm">
        <b className="text-4xl">{data?.movie.name}</b>
        <p className="text-lg">{data?.movie.origin_name}</p>
        <div className="flex text-sm my-2">
          <p className="mr-2 flex items-center">
            <CalendarIcon className="mr-1" />
            {data?.movie.year}
          </p>
          <p className="flex items-center">
            <ClockIcon className="mx-1" />
            {data?.movie.time}
          </p>
        </div>
        <p className="mb-2">Đang phát: {data?.movie.episode_current}</p>
        {data?.movie.country.map((item, idx) => (
          <p className="mb-2" key={`country-${idx}`}>
            Quốc gia: {item.name}
          </p>
        ))}
        <span>Thể loại: </span>
        {data?.movie.category.map((item, idx) => (
          <b key={`type-movie-${idx}`}>
            {item.name}
            {idx !== data.movie.category.length - 1 ? ",  " : "."}
          </b>
        ))}
        <p className="mt-2">Diễn viên: </p>
        {data?.movie.actor.map((item, idx) => (
          <b key={`actor-${idx}`}>
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
