import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJob from "../pages/MyJob";

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
    ],
  },
]);

export default Router;
