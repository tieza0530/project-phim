import { Button } from "@/components/ui/button";
import { RootMovie } from "@/type/moive.type";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaPlay } from "react-icons/fa";

export type SeriesMovieProps = {
  data: RootMovie | undefined;
  handleTab: () => void;
};

export function Movie({ data, handleTab }: SeriesMovieProps) {
  const urlIMG = data?.data.APP_DOMAIN_CDN_IMAGE;
  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };

  return (
    <div className="lg:mt-20 max-sm:mt-6 sm:mt-6 md:mt-10 w-full">
      <div className="flex justify-between bg-gray-100 rounded-lg items-center max-sm:rounded-sm max-sm:py-1 sm:py-1 md:py-2 lg:py3 ">
        <p className="text-3xl ml-4 text-black  max-sm:text-sm sm:text-[16px] md:text-lg lg:text-xl">
          Danh sách {data?.data.titlePage}
        </p>
        <Button
          className="font-medium text-sm mr-4 max-sm:text-[8px] max-sm:h-6 max-sm:rounded-sm max-sm:mr-1 sm:text-xs sm:h-7 md:text-sm md:h-8 lg:text-lg lg:h-10"
          onClick={handleTab}
        >
          Xem thêm
        </Button>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 mt-5">
        {data?.data.seoOnPage.og_image.slice(0, 18).map((item, idx) => (
          <div className="relative group m-1 " key={`item-movie-series-` + idx}>
            <LazyLoadImage
              className="object-cover rounded-sm aspect-[2/3]"
              src={urlIMG + item}
              alt={item}
              effect="black-and-white"
            />
            <div className="p-1 absolute top-0 hidden rounded-sm group-hover:block group-hover:scale-100 w-full h-full bg-neutral-600/70 ">
              <p className="font-medium text-sm   ">
                {data.data.items[idx].name}
              </p>
              <p className="text-xs">{data.data.items[idx].origin_name}</p>
              <div className="flex items-center text-xs my-2 ">
                <StarFilledIcon className="text-yellow-400" />
                <span className="mr-2 ml-0.5">
                  {data.data.items[idx].tmdb.vote_average.toFixed(1)}
                </span>
                <span className="mr-2">{data.data.items[idx].year}</span>
                <span className="mr-2 ">{data.data.items[idx].type}</span>
              </div>
              <b className="bg-white text-black text-[10px] p-1 rounded-sm ">
                {data.data.items[idx].lang}
              </b>
              <b className=" bg-white text-black text-[10px] p-1 rounded-sm ml-1">
                {data.data.items[idx].time === "0 Phút"
                  ? "update"
                  : data.data.items[idx].time}
              </b>
              <Button
                className="absolute bottom-2 left-1 bg-red-600 py-1 hover:bg-red-500"
                onClick={() => handleNextPageWatch(data.data.items[idx].slug)}
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
