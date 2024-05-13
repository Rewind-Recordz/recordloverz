import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddDetail from "../components/AddDetail";
import "../stylesheets/albumdetails.css"

import { API_URL } from "../constants";
//Do we need to create & import a component to add comments or price to the albums?

function AlbumDetailsPage() {
  const [album, setAlbum] = useState(null);

  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbum();
  }, []);


  const getAlbum = () => {
    console.log("Detailpage " + albumId)
    axios
      .get(`${API_URL}/${albumId}?_embed=details`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((e) => console.log("Error getting album details from API", e));
  };

  
  // Function to delete Album:

  const removeAlbum = () => {
    axios
        .delete(`${API_URL}/${albumId}`)
        .then (() => {
            navigate("/projects");
        })
        .catch (e => console.log("Error deleting the album", e))
  };

  //For showing the loder while waiting:

    if (album === null) {
      return <div className="loader"></div>
    }

  return (

    <div className="AlbumDetailsPage">

        {album && (
            <div className="albumCard">
                <img src={album.image_url} alt="" />
                <h1>{album.title}</h1>
                <h2>{album.artist}</h2>
            </div>
        )}

 {/*Rendering of the component AddDetail => */}

        <AddDetail 
            albumId={albumId}
            callbackToUpdate={getAlbum}
        />


        {album &&
            album.details.map((detail) => (
                <li className="DetailCard card" key={detail.id}>
                    <h3>{detail.title}</h3>
                    <h4>More details:</h4>
                    <p>{detail.desciption}</p>
                </li>
            ))}

        <div className="controlButton">
            <Link to={`/albums/edit/${albumId}`}>
                <button>Edit</button>
            </Link>

            <button onClick={removeAlbum}>Remove</button>
        </div>

        <Link to="/albums">
            <button>Back to albums</button>
        </Link>


    </div>
  );
}

export default AlbumDetailsPage;
