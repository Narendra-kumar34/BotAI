import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
