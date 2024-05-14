import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import HomePage from "./assets/pages/HomePage";
import Albums from "./assets/pages/Albums";
import AlbumDetailsPage from "./assets/pages/AlbumDetailPage";
import AddAlbumPage from "./assets/pages/AddAlbumPage";
import Login from "./assets/pages/Login";
import { AuthProvider } from "./assets/components/AuthContext";

export default function App() {
  return (
      <AuthProvider>
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Albums />} />
            <Route path="/login" element={<Login />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/add-album" element={<AddAlbumPage />} />
            <Route path="/albums/:albumId" element={<AlbumDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
  );
}
