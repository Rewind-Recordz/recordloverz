import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    getAllAlbums();
  }, []);

  function getAllAlbums() {
    axios
      .get(API_URL)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((e) => console.log(e));
  }

  function searchAlbumOrArtist(query) {
    const needle = query.toLowerCase();

    const searchResult = albums.filter((album) => {
      const artistName = album.artist.toLowerCase();
      const albumName = album.title.toLowerCase();
      if (
        artistName.indexOf(needle) !== -1 ||
        albumName.indexOf(needle) !== -1
      ) {
        return true;
      }
    });
    setAlbums(searchResult);
  }

  return (
    <>
      <Search
        searchAlbumOrArtist={searchAlbumOrArtist}
        getAllAlbums={getAllAlbums}
      />

      <section className="grid grid-cols-3 gap-10">
        {albums &&
          albums.map((album, index) => {
            return (
              <div key={album.id}>
                <Link to={`/albums/${album.id}`}>
                  <div className="p-4 rounded-lg shadow-lg bg-slate-400 drop-shadow-xl">
                    <img src={album.image_url} alt={album.title} />
                    {album.artist} <br />
                    {album.title}
                  </div>
                </Link>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Albums;
