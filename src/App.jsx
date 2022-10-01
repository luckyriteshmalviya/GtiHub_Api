import React from "react";
import MainPage from "./5C_network/MainPage";
import { Routes, Route } from "react-router-dom";
import RepoDetail from "./5C_network/RepoDetail/RepoDetail";

function App() {
  return (
    <>
      <RepoDetail />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
export default App;
