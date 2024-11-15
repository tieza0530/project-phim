import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { FaPlay } from "react-icons/fa";
import { RootMovie } from "@/type/moive.type";
import { LazyLoadImage } from "react-lazy-load-image-component";
export type TypeMovieProps = {
  data: RootMovie | undefined;
  handleNextPageWatch: (slug: string) => void;
};

export function TypeMovie({ data, handleNextPageWatch }: TypeMovieProps) {
  const urlImg = data?.data.APP_DOMAIN_CDN_IMAGE + "/uploads/movies/";
  return (
    <div className="w-full mt-10">
      <div className="flex justify-between items-end bg-gray-100 py-3 rounded-lg">
        <p className="xl:text-3xl lg:text-2xl md:text-xl ml-4 text-black">
          Danh sách {data?.data.titlePage}
        </p>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2  mt-4">
        {data?.data.items.map((item) => (
          <div
            className="aspect-[2/3]  relative group"
            key={`item-movie-series-` + item._id}
          >
            <LazyLoadImage
              className="aspect-[2/3] p-1 object-cover rounded-lg"
              src={urlImg + item.thumb_url}
              alt={item.slug}
              effect="black-and-white"
            />
            <div className="p-2 absolute top-0 hidden rounded-sm group-hover:block  w-full h-full bg-neutral-600/80">
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs">{item.origin_name}</p>
              <div className="flex items-center text-xs my-2 ">
                <StarFilledIcon className="text-yellow-400" />
                <span className="mr-2 ml-0.5">
                  {item.tmdb.vote_average.toFixed(1)}
                </span>
                <span className="mr-2">{item.year}</span>
                <span className="mr-2 ">{item.type}</span>
              </div>
              <b className="bg-white text-black text-[10px] p-1 rounded-sm ">
                {item.lang}
              </b>
              <b className=" bg-white text-black text-[10px] p-1 rounded-sm ml-1">
                {item.time === "0 Phút" ? "update" : item.time}
              </b>
              <Button
                className="absolute bottom-2 left-2 bg-red-600 py-1 hover:bg-red-500"
                onClick={() => handleNextPageWatch(item.slug)}
              >
                <FaPlay className="mr-1" />
                Xem ngay
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
