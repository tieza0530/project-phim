import { MainLayout } from "@/components/layout/MainLayout";
import { useGetTypeDetailMovie } from "@/quries/home.queries";
import { useNavigate, useParams } from "react-router-dom";
import { TypeMovie } from "../components/TypeMovie";
import { PaginationSeries } from "../components/PaginationSeries";
import { useEffect } from "react";

export const TypeMovieList = () => {
  const params = useParams();
  const { data, refetch } = useGetTypeDetailMovie(params.slug, params.page);
  useEffect(() => {
    refetch();
  }, [data]);

  const navigator = useNavigate();
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };
  const totalPage: number = Math.ceil(
    (data?.data.params.pagination.totalItems ?? 0) /
      (data?.data.params.pagination.totalItemsPerPage ?? 1)
  );

  return (
    <div>
      <MainLayout>
        <TypeMovie data={data} handleNextPageWatch={handleNextPageWatch} />
        <PaginationSeries
          totalPage={totalPage}
          pageRanges={data?.data.params.pagination.pageRanges!}
          type={`the-loai/${data?.data.type_list}`}
        />
      </MainLayout>
    </div>
  );
};
