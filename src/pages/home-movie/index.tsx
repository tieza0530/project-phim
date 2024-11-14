import { MainLayout } from "@/components/layout/MainLayout";
import { Movie } from "./components/Moive";
import { CarouselCartool } from "./components/CarouselCartool";
import { useGetSeriesMovie, useGetSingleMovie } from "@/quries/single.queries";
import { useNavigate } from "react-router-dom";
import { useGetTVShows } from "@/quries/home.queries";

export const HomePage = () => {
  const { data: seriesData } = useGetSeriesMovie(1);

  const { data: singleData } = useGetSingleMovie(1);
  const { data: tvShowsData } = useGetTVShows();
  const navigator = useNavigate();
  const handleTabSeries = () => {
    navigator("/phim-bo/1");
  };
  const handleTabSingle = () => {
    navigator("/phim-le/1");
  };
  const handleTabTvShows = () => {
    navigator("/tv-shows");
  };

  return (
    <div>
      <MainLayout>
        <CarouselCartool />
        <Movie data={seriesData} handleTab={handleTabSeries} />
        <Movie data={singleData} handleTab={handleTabSingle} />
        <Movie data={tvShowsData} handleTab={handleTabTvShows} />
      </MainLayout>
    </div>
  );
};
