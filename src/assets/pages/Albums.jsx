import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState(null);
  const [fullAlbumsList, setFullAlbumsList] = useState(null);

  useEffect(() => {
    getAllAlbums();
  }, []);

  function getAllAlbums() {
    axios
      .get(API_URL)
      .then((response) => {
        setAlbums(response.data);
        setFullAlbumsList(response.data); // Update full album list
      })
      .catch((e) => console.log(e));
  }

  function searchAlbumOrArtist(query) {
    const needle = query.toLowerCase();

    const searchResult = fullAlbumsList.filter((album) => {
      const artistName = album.artist.toLowerCase();
      const albumName = album.title.toLowerCase();
      if (
        artistName.includes(needle) ||
        albumName.includes(needle)
      ) {
        return true;
      }
    });
    setAlbums(searchResult);
  }

  function getGenre(query) {
    setAlbums(fullAlbumsList);
    if (query === "All") {
      return;
    }
    const searchResult = fullAlbumsList.filter((album) => album.genre === query);
    setAlbums(searchResult);
  }

  return (
    <>
      <Search
        searchAlbumOrArtist={searchAlbumOrArtist}
        getAllAlbums={getAllAlbums}
        getGenre={getGenre}
      />

      <section className="grid grid-cols-3 gap-10">
        {albums?.map((album, index) => (
          <div key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <div className="p-4 rounded-lg shadow-lg bg-slate-400 drop-shadow-xl">
                <img src={album.image_url} alt={album.title} />
                {album.artist} <br />
                {album.title}
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Albums;
