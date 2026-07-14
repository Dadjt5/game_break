import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contacto from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacidad from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import TicTacRandom from "./games/TicTacRandom/TicTacRandom";
import Info from "./games/TicTacRandom/Info";
import Objetivo from "./games/TicTacRandom/Objetivo";
import Credits from "./games/TicTacRandom/Credits";
import HallOfFame from "./games/TicTacRandom/HallOfFame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacto", element: <Contacto /> },
      { path: "legal", element: <Legal /> },
      { path: "privacidad", element: <Privacidad /> },
      { path: "cookies", element: <Cookies /> },      
      {
        path: "TicTacRandom",
        element: <TicTacRandom />,
        children: [
          { index: true, element: <Navigate to="info" replace /> },
          { path: "info", element: <Info /> },
          { path: "objetivo", element: <Objetivo /> },
          { path: "hall-of-fame", element: <HallOfFame /> },
          { path: "credits", element: <Credits /> },
        ],
      },
    ],
  },
]);
