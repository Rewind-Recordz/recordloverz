import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";

function Albums() {
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setAlbums(response.data);
        console.log(albums);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="grid grid-cols-3 gap-10">
      {albums &&
        albums.map((album, index) => {
          return (
            <div className="p-4 rounded-lg shadow-lg bg-indigo-500" key={index}>
              <img src={album.image_url} alt={album.title} />
              {album.artist} <br />
              {album.title}
            </div>
          );
        })}
    </section>
  );
}

export default Albums;
