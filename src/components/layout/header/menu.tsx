import { GenreResponse } from "@/type/genre.type";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { useNavigate } from "react-router-dom";

interface MenuProps {
    data : GenreResponse | undefined
}

export const Menu = ({data}: MenuProps) => {  
  const navigator = useNavigate()
  const handlePageHome = () => {
    navigator('/');
  }
  const handlePageSingle = () => {
    navigator('/phim-le/1');
  }
  const handlePageSeries = () => {
    navigator('/phim-bo/1');
  }
  const handleTypeMovie = (type: string) => {
    navigator(`/the-loai/${type}/1`);
  }
  return (
    <div className="flex  text-white text-base whitespace-nowrap cursor-pointer ">
      <b className="mx-3" onClick={handlePageHome}>Trang chủ</b>
      <b className="mx-3" onClick={handlePageSingle}>Phim lẻ</b>
      <b className="mx-3" onClick={handlePageSeries}>Phim bộ</b>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-3">
              <b>Thể loại</b>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-96 absolute">
              <div className="absolute p-2 mt-4 rounded-sm z-50 bg-primary grid grid-cols-3">
                {data?.data.items.map((item) => (
                  <p onClick={() => handleTypeMovie(item.slug)} className="hover:bg-white hover:rounded-sm hover:text-black px-3 " key={item._id}>{item.name}</p>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
