import Navbar from "./assets/components/Navbar";
import Albums from "./assets/pages/Albums";

export default function App() {
  return (
    <>
      <Navbar />
      {/* responsive container */}
      <div className="container mx-auto">
        <Albums />
      </div>
    </>
  );
}
