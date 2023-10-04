import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AtuhProvider from "./providers/AtuhProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AtuhProvider>
      <RouterProvider router={router}></RouterProvider>
    </AtuhProvider>
  </React.StrictMode>
);
