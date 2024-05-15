import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylesheets/albumdetails.css";
import { API_URL } from "../constants";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import EditAlbum from "../components/EditAlbum";

//Do we need to create & import a component to add comments or price to the albums?

function AlbumDetailsPage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [album, setAlbum] = useState(null);
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = () => {
    //console.log("Detailpage " + albumId);
    axios
      .get(`${API_URL}/${albumId}?_embed=details`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((e) => console.log("Error getting album details from API", e));
  };

  // Function to delete Album:

  const removeAlbum = () => {
    console.log("delete");
    axios
      .delete(`${API_URL}/${albumId}`)
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.log("Error deleting the album", e));
  };

  //For showing the loder while waiting:

  if (album === null) {
    return <div className="loader"></div>;
  }

  return (
    <div className="AlbumDetailsPage">
      {album && (
        <div>
          <div className="albumCard">
            <img src={album.image_url} alt="" />
            <h1>{album.title}</h1>
            <h2>Artist: {album.artist}</h2>
            <h2>{album.release_date}</h2>
            <h2>{album.comments}</h2>
            <h2>Genre: {album.genre}</h2>
            <section className="AlbumInfo">
              <p>{album.info}</p>
            </section>

          </div>

          <div>
            <br />
            <Link to="/albums">
              <button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                Back to albums
              </button>
            </Link>
          </div>
        </div>
      )}

      {
        // If logged in, user can delete or edit album
        isLoggedIn && (
          <div>
            <button
              onClick={() => removeAlbum()}
              className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
            >
              Delete Album
            </button>
            <br />

            <div className="EditSection">
              <EditAlbum />
            </div>

            {/* <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
              Edit Album
            </button> */}
    
          </div>
        )
      }

   
    </div>
  );
}

export default AlbumDetailsPage;
