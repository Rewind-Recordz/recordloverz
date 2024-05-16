import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../constants";
import "../stylesheets/editalbum.css"
import { AuthContext } from "../components/AuthContext";

function EditAlbumPage() {

  const [image_url, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_date, setRelease] = useState("");
  const [info, setInfo] = useState("");
  const [genre, setGenre] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/${albumId}`)
      .then((response) => {
        setImage(response.data.image_url);
        setTitle(response.data.title);
        setArtist(response.data.artist);
        setRelease(response.data.release_date);
        setInfo(response.data.info)
        setGenre(response.data.genre);
      })
      .catch((e) => console.log("Error getting album details from API", e));
  }, [albumId]);

  //****************************************************************************************

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      image_url,
      title,
      artist,
      release_date,
      genre,
      info
    };

    axios
      .put(`${API_URL}/${albumId}`, newDetails)
      .then((response) => {
        console.log(response.data);
        navigate(`/albums/${albumId}`);
      })
      .catch(e => console.log("Error updating album", e))
  };

  //Line for the loader

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg">
        {isLoggedIn ? (
          <>
            <h1 className="mb-6">Edit Album</h1>

            <form className="w-[500px]" onSubmit={handleSubmit}>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Title:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  placeholder="Enter album title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Artist:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="artist"
                  placeholder="Enter the artist"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Add cover:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="image_url"
                  placeholder="Image URL"
                  value={image_url}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Release Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="release_date"
                  placeholder="YYYY-MM-DD"
                  value={release_date}
                  onChange={(e) => setRelease(e.target.value)}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Genre:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="genre"
                  placeholder="What's the genre?"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-32" style={{ marginTop: "3px", textAlign: "left" }}>
                  Info:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="5"
                  name="info"
                  placeholder="Album information"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
              </div>

              <button
                className="w-[200px] bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[100px]"
                type="submit"
              >
                Update Album
              </button>
            </form>
          </>
        ) : (
          <Link to="/login">
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default EditAlbumPage;
