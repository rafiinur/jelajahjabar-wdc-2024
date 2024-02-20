import { createBrowserRouter } from "react-router-dom";
import { HomePage, DetailPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />,
    element: <DetailPage />,
  },
]);

export default router;
