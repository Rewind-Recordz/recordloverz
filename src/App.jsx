import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import HomePage from "./assets/pages/HomePage";
import Albums from "./assets/pages/Albums";
import AlbumDetailsPage from "./assets/pages/AlbumDetailPage";
import AddAlbumPage from "./assets/pages/AddAlbumPage"

export default function App() {
  return (
    <>
      <Navbar />
      {/* responsive container */}
      <div className="container mx-auto">

        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/add-album" element={<AddAlbumPage />}/>
        <Route path="/albums/:albumId" element={<AlbumDetailsPage />} /> 

      </Routes>
      </div>

      <Footer />
    </>
  );
}
