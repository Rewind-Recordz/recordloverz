import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import HomePage from "./assets/pages/HomePage";
import Albums from "./assets/pages/Albums";
import AlbumDetailsPage from "./assets/pages/AlbumDetailPage";

export default function App() {
  return (
    <>
      <Navbar />
      {/* responsive container */}
      <div className="container mx-auto">
        <Albums />
      </div>


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<Albums />} /> 
        <Route path="/albums" element={<AlbumDetailsPage />} /> 

      </Routes>

    </>
  );
}
