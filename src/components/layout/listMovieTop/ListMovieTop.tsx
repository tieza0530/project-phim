import { useGetNewMovie } from "@/quries/single.queries";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ListMovieTop = () => {
  const { data } = useGetNewMovie();
  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  const urlImg = data?.pathImage;  
  return (
    <div className="mr-10 cursor-pointer  w-[calc(100%/3)]">
      <p className="text-3xl mb-3">Phim mới cập nhật</p>
      {data?.items.slice(0, 10).map((item) => (
        <div
          key={`new-moive-` + item._id}
          className="grid grid-cols-3 mb-2"
          onClick={() => handleNextPageWatch(item.slug)}
        >
          <LazyLoadImage
            className="col-span-1 rounded-sm object-cover aspect-auto"
            src={urlImg + item.thumb_url}
            alt={item.slug}
            effect="black-and-white"
          />
          <div className="col-span-2 ml-3">
            <p className="font-medium md:text-sm">
              {item.name} ({item.origin_name})
            </p>
            <b className="text-sm mr-2 md:text-xs ">
              {item.tmdb.type === "tv" ? "TV" : "MOVIE"}
            </b>
            <b className="text-sm mr-2 md:text-xs">{item.year}</b>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};
