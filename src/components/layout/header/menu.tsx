import { GenreResponse } from "@/type/genre.type";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { useNavigate } from "react-router-dom";
import { RowsIcon } from "@radix-ui/react-icons";
import { InputSearch } from "./InputSearch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuProps {
  data: GenreResponse | undefined;
}

export const Menu = ({ data }: MenuProps) => {
  const navigator = useNavigate();
  const handlePageHome = () => {
    navigator("/");
  };
  const handlePageSingle = () => {
    navigator("/phim-le/1");
  };
  const handlePageSeries = () => {
    navigator("/phim-bo/1");
  };
  const handleTypeMovie = (type: string) => {
    navigator(`/the-loai/${type}/1`);
  };
  return (
    <div className="flex items-center text-white text-base whitespace-nowrap cursor-pointer sm:text-xs max-sm:text-xs md:text-sm lg:text-[16px] xl:text-[16px] ">
      <div className="flex items-center max-sm:hidden ">
        <b className="mx-3" onClick={handlePageHome}>
          Trang chủ
        </b>
        <b className="mx-3" onClick={handlePageSingle}>
          Phim lẻ
        </b>
        <b className="mx-3" onClick={handlePageSeries}>
          Phim bộ
        </b>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="mx-3">
                <b>Thể loại</b>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-96 absolute">
                <div className="absolute p-2 mt-4 rounded-sm z-50 bg-primary grid grid-cols-3">
                  {data?.data.items.map((item) => (
                    <p
                      onClick={() => handleTypeMovie(item.slug)}
                      className="hover:bg-white hover:rounded-sm hover:text-black px-3 "
                      key={item._id}
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="max-sm:block hidden">
        <Sheet>
          <SheetTrigger>
            <RowsIcon />
          </SheetTrigger>
          <SheetContent className="w-full bg-white/70 cursor-pointer ">
            <SheetHeader>
              <div className="flex justify-center items-center mt-10">
                <b>Tìm kiếm: </b>
                <InputSearch />
              </div>
              <SheetTitle className="text-lg pt-5 pl-5">Menu</SheetTitle>
              <b className="hover:bg-white/30 pl-5" onClick={handlePageHome}>
                Trang chủ
              </b>
              <b className="hover:bg-white/30 pl-5" onClick={handlePageSingle}>
                Phim lẻ
              </b>
              <b className="hover:bg-white/30 pl-5" onClick={handlePageSeries}>
                Phim bộ
              </b>
              <b className="hover:bg-white/30 pl-5">Thể loại</b>
              <div className="grid grid-cols-2 pl-10">
                {data?.data.items.map((item) => (
                  <p
                    onClick={() => handleTypeMovie(item.slug)}
                    className="hover:bg-white hover:rounded-sm hover:text-black "
                    key={item._id}
                  >
                    - {item.name}
                  </p>
                ))}
              </div>
              <SheetDescription>Danh sách thể loại</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
