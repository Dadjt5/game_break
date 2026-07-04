import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contacto from "./pages/Contact";
import TicTacRandom from "./games/TicTacRandom/TicTacRandom";
import Info from "./games/TicTacRandom/Info";
import Objetivo from "./games/TicTacRandom/Objetivo";
import Credits from "./games/TicTacRandom/Credits";
import HallOfFame from "./games/TicTacRandom/HallOfFame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout general: aquí vive el Navbar + <Outlet/>
    children: [
      { index: true, element: <Home /> },
      { path: "contacto", element: <Contacto /> },
      {
        path: "TicTacRandom",
        element: <TicTacRandom />, // layout del juego: pestañas + <Outlet/>
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