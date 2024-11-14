import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homeMovie";
import { SinglePage } from "./pages/singleMovie";
import { SeriesPage } from "./pages/seriesMoive";
import { WatchMovie } from "./pages/watchMoive";
import { TvShows } from "./pages/typeMovie/tvShow";
import { TypeMovieList } from "./pages/typeMovie";
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
};
