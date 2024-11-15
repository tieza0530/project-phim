import { Button } from "@/components/ui/button";
import { RootMovie } from "@/type/moive.type";
import { PlayIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export type RelatedMoviesProps = {
  dataType: RootMovie | undefined;
  urlImg: string;
};
export const RelatedMovies = ({ dataType, urlImg  }: RelatedMoviesProps) => {
  const navigator = useNavigate();
  const handleWatchMovie = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  useEffect(() => {}, [dataType?.status]);
  return (
    <div className="w-full">
      <div className="flex justify-between items-end bg-gray-100 py-3 rounded-lg">
        <p className="text-3xl ml-4 text-black">Phim liên quan</p>
      </div>
      <div className="grid  2xl:grid-cols-6 2xl:gap-4 xl:grid-cols-5  md:grid-cols-4 md:gap-4 sm:grid-cols-3 sm:gap-3 mt-4">
        {dataType?.data.items.slice(0, 12).map((item) => (
          <div
            className="aspect-[2/3]  relative group"
            key={`item-movie-series-` + item._id}
          >
            <LazyLoadImage
              className="aspect-[2/3] object-cover rounded-sm"
              src={urlImg + item.thumb_url}
              alt={item.slug}
              effect="black-and-white"
            />
            <div className="p-2 absolute top-0 hidden rounded-sm group-hover:block w-full h-full bg-neutral-600">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs">{item.origin_name}</p>
              <div className="flex items-center text-xs my-2 ">
                <StarFilledIcon className="text-yellow-400" />
                <span className="mr-2 ml-0.5">
                  {item.tmdb.vote_average.toFixed(1)}
                </span>
                <span className="mr-2">{item.year}</span>
                <span className="mr-2 ">{item.type}</span>
              </div>
              <b className="bg-white text-black text-[10px] p-1 rounded-sm  ">
                {item.lang}
              </b>
              <b className=" bg-white text-black text-[10px] p-1 rounded-sm ml-1">
                {item.time}
              </b>
              <Button className="absolute bottom-2 left-2 bg-red-600 py-1 hover:bg-red-500" onClick={() => handleWatchMovie(item.slug)}>
                <PlayIcon />
                Xem ngay
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
