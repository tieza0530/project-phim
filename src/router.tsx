import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home-movie";
import { SinglePage } from "./pages/single-movie";
import { SeriesPage } from "./pages/series-movie";
import { TvShows } from "./pages/type-movie/tvShow";
import { TypeMovieList } from "./pages/type-movie";
import { WatchMovie } from "./pages/watch-movie";
import { SearchPage } from "./pages/search-movie";
export const routes: IRoutes = {
  root: {
    path: "/",
    display: "Home Page",
  },
  singlePage: {
    path: "/phim-le/:page",
    display: "Single Page",
  },
  seriesPage: {
    path: "/phim-bo/:page",
    display: "Series Page",
  },
  tvshowPage: {
    path: "/tv-shows",
    display: "tvShow Page",
  },
  watchMovie: {
    path: "/xem-phim/:slug",
    display: "Watch Page",
  },
  watch: {
    path: "/xem-phim/:slug/:episode",
    display: "Watch",
  },
  theloai: {
      path: "/the-loai/:slug/:page",
      display: "theloai",
  },
  searchMovie: {
    path: "/tim-kiem/",
    display: "searchMovie Page",
  }
};

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <HomePage />,
  },
  {
    path: routes.singlePage.path,
    element: <SinglePage />,
  },
  {
    path: routes.seriesPage.path,
    element: <SeriesPage />,
  },
  {
    path: routes.watchMovie.path,
    element: <WatchMovie />,
  },
  {
    path: routes.watch.path,
    element: <WatchMovie />,
  },
  {
    path: routes.theloai.path,
    element: <TypeMovieList />,
  },
  {
    path: routes.tvshowPage.path,
    element: <TvShows />,
  },
  {
    path: routes.searchMovie.path,
    element: <SearchPage />,
  },
]);

export interface IRoute {
  path: string;
  display: string;
}
export type IRoutes = {
  root: IRoute;
  singlePage: IRoute;
  seriesPage: IRoute;
  watchMovie: IRoute;
  tvshowPage: IRoute;
  watch: IRoute;
  theloai: IRoute;
  searchMovie: IRoute;

};
