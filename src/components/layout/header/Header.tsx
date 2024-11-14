import { Input } from "@/components/ui/input";
import { useGetTypeMovie } from "@/quries/home.queries";
import { Menu } from "./menu";

export const Header = () => {
  const { data } = useGetTypeMovie();  
  return (
    <div className="flex justify-around items-center py-4 ">
      <p className="text-4xl font-medium text-white">PHIM365</p>
      <Menu data={data} />
      <div className="flex">
        <Input
          className="w-64 mr-5 bg-var(--secondary-)"
          type="text"
          placeholder="Tìm kiếm phim"
        />
      </div>
    </div>
  );
};
