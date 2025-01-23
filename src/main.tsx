import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainContainer from "./components/MainContainer.tsx";
import SearchBox from "./components/SearchBox.tsx";
import Map from "./components/Map.tsx";
import Header from "./components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <Header/>
      <MainContainer>
        <SearchBox />
        <Map />
      </MainContainer>
    </App>
  </StrictMode>
);
