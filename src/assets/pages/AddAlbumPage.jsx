import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import "../stylesheets/addalbumpage.css"

function AddAlbumPage() {
  const [image_url, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_date, setRelease] = useState("");
  const [info, setInfo] = useState("");
  const [genre, setGenre] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const albumDetails = {
      image_url: image_url,
      title:  title,
      artist: artist,
      release_date: release_date,
      genre: genre,
      info: info
    };

    axios
      .post(`${API_URL}`, albumDetails)
      .then((response) => {
        console.log("SUCCESS");
        console.log(response.data);
        navigate("/albums");
      })
      .catch((e) =>
        console.log("Error it was not possible to add the album", e)
      );
  };

  return (
    <div className="AddNewAlbum">
      <h1>Add a new Album:</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Add cover:
          <input
            type="text"
            name="image_url"
            placeholder="image URL"
            value={image_url}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Enter album's title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          Artist:
          <input
            type="text"
            name="artist"
            placeholder="Enter the artist"
            value={artist}
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          />
        </label>

        <label>
          Release Date:
          <input
            type="text"
            name="release_date"
            placeholder="Enter release date"
            value={release_date}
            onChange={(e) => {
              setRelease(e.target.value);
            }}
          />
        </label>

        <label>
          Genre:
          <input
            type="text"
            name="genre"
            placeholder="What's the genre?"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </label>

        <label>
          Info:
          <input
            type="text"
            name="genre"
            placeholder="Do you have more info?"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
          />
        </label>

        <button>Add album</button>
      </form>
    </div>
  );
}

export default AddAlbumPage;
