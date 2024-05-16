import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylesheets/albumdetails.css";
import { API_URL } from "../constants";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import notAvailableImg from "../images/img-not-available.png";

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
        <div className="albumCard">
          <img
            src={album.image_url}
            alt={album.title}
            onError={(e) => {
              e.target.src = notAvailableImg;
            }}
          />

          <br />

          <h1>{album.title}</h1>
          <h2>Artist: {album.artist}</h2>
          <h2>{album.release_date}</h2>
          <h2>{album.comments}</h2>
          <h2>Genre: {album.genre}</h2>
          <span className="AlbumInfo">
            <p>{album.info}</p>
          </span>

          <div className="AlbumControllers">
            <Link to="/albums">
              <button>Back to albums</button>
            </Link>
            {
              // If logged in, user can delete or edit album
              isLoggedIn && (
                <div className="HiddenButtons">
                  <Link to={`/albums/edit/${albumId}`}>
                    <button>Edit Album</button>
                  </Link>
                  <button className="DeleteButton" onClick={() => removeAlbum()}>Delete</button>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
}
export default AlbumDetailsPage;
