import { MainLayout } from "@/components/layout/MainLayout";
import { useGetSearch } from "@/quries/search.queries";
import { useNavigate, useParams } from "react-router-dom";
import { ResultSearch } from "./ResultSearch";

export const SearchPage = () => {
  const params = useParams();
  const navigator = useNavigate();
  const { data: dataSearch } = useGetSearch(params.key!);
  const handleNextPageWatch = (slug: string) => {
    navigator(`/xem-phim/${slug}`);
  };

  return (
    <MainLayout>
      <ResultSearch
        dataSearch={dataSearch!}
        handleNextPageWatch={handleNextPageWatch}
      />
    </MainLayout>
  );
};
