import { MainLayout } from "@/components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { TypeMovie } from "../components/TypeMovie";
import { useGetTVShows } from "@/quries/home.queries";

export const TvShows = () => {
  const { data } = useGetTVShows();
  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  return (
    <div>
      <MainLayout>
        <TypeMovie data={data} handleNextPageWatch={handleNextPageWatch} />
      </MainLayout>
    </div>
  );
};
