import { useGetTypeMovie } from "@/quries/home.queries";
import { Menu } from "./menu";
import { InputSearch } from "./InputSearch";


export const Header = () => {
  const { data } = useGetTypeMovie();

  return (
    <div className="flex justify-around items-center py-4 ">
      <p className="text-4xl font-medium text-white">PHIM365</p>
      <Menu data={data} />
      <InputSearch />
    </div>
  );
};
