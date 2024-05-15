import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import notAvailableImg from "../images/img-not-available.png"

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
        const albumsFromApi = response.data.reverse(); //revert the order of the albums once a new one created appears as the first.
        setAlbums(albumsFromApi);
        setFullAlbumsList(albumsFromApi); // Update full album list
      })
      .catch((e) => console.log(e));
  }

  function searchAlbumOrArtist(query) {
    const needle = query.toLowerCase();

    const searchResult = fullAlbumsList.filter((album) => {
      const artistName = album.artist.toLowerCase();
      const albumName = album.title.toLowerCase();
      if (artistName.includes(needle) || albumName.includes(needle)) {
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
    const searchResult = fullAlbumsList.filter(
      (album) => album.genre === query
    );
    setAlbums(searchResult);
  }

  return (
    <>
      <Search
        searchAlbumOrArtist={searchAlbumOrArtist}
        getAllAlbums={getAllAlbums}
        getGenre={getGenre}
      />

      <section className="grid gap-5 md:grid-cols-3 ml-5 mr-5 mb-5 CoverCard">
        {albums?.map((album, index) => (
          <div key={album.id} className="w-full md:w-auto">
            <Link to={`/albums/${album.id}`}>
              <div className="hover:bg-white p-4 rounded-lg shadow-lg bg-slate-100 drop-shadow-xl">
                <img
                  src={album.image_url}
                  alt={album.title}
                  onError={(e) => {
                    e.target.src = notAvailableImg;
                  }}
                />
                <h1>{album.title}</h1>
                <hr />
                {album.artist}
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Albums;
