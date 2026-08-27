import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import NotFoundPage from "pages/NotFoundPage";


export enum AppRoutes {
    MAIN='main',
     ABOUT='about',
    NOT_FOUND='not-found',

 }
 export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]:'/',
     [AppRoutes.ABOUT]:'/about',
     [AppRoutes.NOT_FOUND]:'*',
 }
export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath["not-found"],
        element: <NotFoundPage />,
    }
};