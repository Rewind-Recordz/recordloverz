import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import { AuthContext } from "../components/AuthContext";

function AddAlbumPage() {
  const [image_url, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_date, setRelease] = useState("");
  const [info, setInfo] = useState("");
  const [genre, setGenre] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const albumDetails = {
      image_url,
      title,
      artist,
      release_date,
      genre,
      info,
    };

    axios
      .post(API_URL, albumDetails)
      .then((response) => {
        console.log("Success by creating the album!");
        console.log(response.data);
        navigate("/albums");
      })
      .catch((e) =>
        console.log("Error it was not possible to add the album", e)
      );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg">
        {isLoggedIn ? (
          <>
            <h1 className="mb-6">Add a new Album</h1>

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
                Add album
              </button>
            </form>
          </>
        ) : (
          <Link to="/login">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700">
              Login to proceed
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AddAlbumPage;
