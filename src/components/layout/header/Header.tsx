import { useGetTypeMovie } from "@/quries/home.queries";
import { Menu } from "./menu";
import { InputSearch } from "./InputSearch";

export const Header = () => {
  const { data } = useGetTypeMovie();

  return (
    <div className="flex justify-around items-center py-4 md:mx-5 sm:mx-3 max-sm:mx-3 max-sm:justify-between">
      <p className="text-4xl font-medium text-white md:text-xl lg:text-2xl xl:text-3xl sm:text-lg max-sm:text-lg">
        PHIM365
      </p>
      <Menu data={data} />
      <div className="max-sm:hidden">
        <InputSearch />
      </div>
    </div>
  );
};
