import { useGetNewMovie } from "@/quries/single.queries";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ListMovieTop = () => {
  const { data } = useGetNewMovie();
  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  const urlImg = data?.pathImage;
  return (
    <div className="cursor-pointer  w-[calc(100%/3)] max-sm:hidden">
      <p className=" mb-3 2xl:text-3xl xl:text-2xl lg:text-xl md:text-[18px] sm:text-[16px] max-sm:text-[16px]">
        Phim mới cập nhật
      </p>
      {data?.items.slice(0, 10).map((item) => (
        <div
          key={`new-moive-` + item._id}
          className="grid grid-cols-3 mb-2  min-w-40"
          onClick={() => handleNextPageWatch(item.slug)}
        >
          <LazyLoadImage
            className="col-span-1 rounded-sm object-cover aspect-auto"
            src={urlImg + item.thumb_url}
            alt={item.slug}
            effect="black-and-white"
          />
          <div className="col-span-2 ml-3">
            <p className="font-medium  lg:text-sm md:text-[12px] sm:text-[10px] max-sm:text-[8px]">
              {item.name} ({item.origin_name})
            </p>
            <b className="text-sm mr-2 lg:text-xs md:text-[10px] sm:text-[8px] max-sm:text-[6px] ">
              {item.tmdb.type === "tv" ? "TV" : "MOVIE"}
            </b>
            <b className="text-sm mr-2 lg:text-xs md:text-[10px] sm:text-[8px] max-sm:text-[6px] ">
              {item.year}
            </b>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};
