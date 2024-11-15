import { Suspense } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { ListMovieTop } from "./listMovieTop/ListMovieTop";
import { Loading } from "../ui/Loading";

export type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-neutral-700">
        <Header />
        <div className="flex text-white justify-between mt-5 2xl:mx-28 xl:mx-20 lg:mx-16 md:mx-10 sm:mx-5 max-sm:mx-5">
          <main className="mr-10 max-sm:mr-0 w-full">{children} </main>
          <ListMovieTop />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};
