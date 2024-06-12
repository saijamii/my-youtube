import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

export default function AppRoutes() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}
