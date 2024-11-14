import { useGetTVShows } from "@/quries/home.queries";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CarouselCartool = () => {
  const { data: cartoon } = useGetTVShows();
  const urlIMG = cartoon?.data.APP_DOMAIN_CDN_IMAGE + "/uploads/movies/";
  const navigator = useNavigate();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {cartoon?.data.items.slice(0, 5).map((item) => (
          <CarouselItem key={`value-carousel-` + item._id}>
            <div className="relative aspect-video group">
              <img
                className="rounded-xl  aspect-video"
                src={urlIMG + item.poster_url}
                alt={item.slug}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block cursor-pointer">
                <FaPlay
                  className="text-4xl text-red-500"
                  onClick={() => handleNextPageWatch(item.slug)}
                  title="xem ngay"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16 bg-inherit border-none hover:bg-transparent hover:text-white" />
      <CarouselNext className="mr-16 bg-inherit border-none hover:bg-transparent hover:text-white" />
    </Carousel>
  );
};
