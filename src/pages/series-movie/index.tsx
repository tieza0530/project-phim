import { MainLayout } from "@/components/layout/MainLayout";
import { TypeMovie } from "../components/TypeMovie";
import { useGetSeriesMovie } from "@/quries/single.queries";
import { useNavigate, useParams } from "react-router-dom";
import { PaginationMovie } from "../components/PaginationMovie";
import { useEffect } from "react";

export const SeriesPage = () => {
  const params = useParams();
  const navigator = useNavigate();
  const { data: seriesMovie, refetch } = useGetSeriesMovie(Number(params.page));

  useEffect(() => {
    refetch();
  }, [seriesMovie]);

  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  const totalPage: number = Math.ceil(
    (seriesMovie?.data.params.pagination.totalItems ?? 0) /
      (seriesMovie?.data.params.pagination.totalItemsPerPage ?? 1)
  );

  return (
    <div>
      <MainLayout>
        <TypeMovie
          data={seriesMovie}
          handleNextPageWatch={handleNextPageWatch}
        />
        <PaginationMovie
          totalPage={totalPage}
          pageRanges={seriesMovie?.data.params.pagination.pageRanges!}
          type={seriesMovie?.data.type_list}
        />
      </MainLayout>
    </div>
  );
};
