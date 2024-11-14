import { MainLayout } from "@/components/layout/MainLayout";
import { useGetSingleMovie } from "@/quries/single.queries";
import { useNavigate, useParams } from "react-router-dom";
import { TypeMovie } from "../components/TypeMovie";
import { PaginationSeries } from "../components/PaginationSeries";
import { useEffect } from "react";

export const SinglePage = () => {
  const params = useParams();
  const { data: singleMovie, refetch } = useGetSingleMovie(Number(params.page));
  useEffect(() => {
    refetch();
  }, [singleMovie]);

  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  const totalPage: number = Math.ceil(
    (singleMovie?.data.params.pagination.totalItems ?? 0) /
      (singleMovie?.data.params.pagination.totalItemsPerPage ?? 1)
  );

  return (
    <div>
      <MainLayout>
        <TypeMovie
          data={singleMovie}
          handleNextPageWatch={handleNextPageWatch}
        />
        <PaginationSeries
          totalPage={totalPage}
          pageRanges={singleMovie?.data.params.pagination.pageRanges!}
          type={singleMovie?.data.type_list}
        />
      </MainLayout>
    </div>
  );
};
