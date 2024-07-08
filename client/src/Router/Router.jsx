import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJob from "../pages/MyJob";
import UpdateJob from "../pages/UpdateJob";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-job",
        element: <MyJob />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
      },
    ],
  },
]);

export default Router;
