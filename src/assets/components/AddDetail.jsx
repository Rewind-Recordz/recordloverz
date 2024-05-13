import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

import "../stylesheets/albumdetails.css"

function AddDetail(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentAlbumId = parseInt(props.albumId);

    const newDetail = {
      title,
      description,
      albumId: currentAlbumId,
    };

    axios
      .post(`${API_URL}/details`, newDetail)
      .then((response) => {
        //console.log(response.data);

        //Here reseting the state and clear inputs
        setTitle("");
        setDescription("");

        props.callbackToUpdate();
      })
      .catch((e) => console.log("error adding details", e));
  };

  return (
    <div className="AddDetail">
      <h3>Add more details</h3>

      <form onSubmit={handleSubmit}>
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
            Description:
            <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
        </label>

        <button type="submit">Add Task</button>

      </form>
    </div>
  );
}

export default AddDetail;
