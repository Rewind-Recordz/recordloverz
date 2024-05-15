import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../constants";
import "../stylesheets/editalbum.css"

function EditAlbum() {
  const [image_url, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_date, setRelease] = useState("");
  //   const [comments, setComments] = useState([]);
  const [genre, setGenre] = useState("");

  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/albums/${albumId}`)
      .then((response) => {
        setImage(response.data.image_url);
        setTitle(response.data.title);
        setArtist(response.data.artist);
        setRelease(response.data.release_date);
        // setComments(response.data.comments)
        setGenre(response.data.genre);
      })
      .catch((e) => console.log("Error getting album details from API", e));
  }, [albumId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      image_url,
      title,
      artist,
      release_date,
      //comments,
      genre,
    };

    axios
      .put(`${API_URL}/albums/${albumId}`, newDetails)
      .then((response) => {
        console.log(response.data);
        navigate(`/albums/${albumId}`);
      })
      .catch(e => console.log("Error updating album", e))
  };

  //Line for the loader

  return (
    <div className="EditAlbum">
      <h2>Edit Project:</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="image_url"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <label>
          Release Date:
          <input
            type="text"
            name="release_date"
            value={release_date}
            onChange={(e) => setRelease(e.target.value)}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditAlbum
