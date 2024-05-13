import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Search from "../components/Search";

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

  function searchAlbumOrArtist(query) {
    console.log(query);
    const needle = query.toLowerCase();
    const searchResult = albums.filter((album) => {
      const artistName = album.artist.toLowerCase();
      const albumName = album.artist.toLowerCase();
      if (artistName.indexOf(needle) !== -1 || albumName.indexOf(needle) !== -1) {
        return true;
      }
    });
    setAlbums(searchResult);
    console.log(searchResult);
  }

  return (
    <>
      <Search searchAlbumOrArtist={searchAlbumOrArtist} />
      
      <section className="grid grid-cols-3 gap-10">
        {albums &&
          albums.map((album, index) => {
            return (
              <div
                className="p-4 rounded-lg shadow-lg bg-slate-400 drop-shadow-xl"
                key={index}
              >
                <img src={album.image_url} alt={album.title} />
                {album.artist} <br />
                {album.title}
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Albums;
