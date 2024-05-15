import { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.searchAlbumOrArtist(searchTerm);
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    // reset to all albums
    if (e.target.value == "") {
      props.getAllAlbums();
    }
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <div id="search">
        <div className="flex items-center px-4 py-3 rounded-md border-2 border-gray-700 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <form onSubmit={onSubmit} className="flex w-full">
            <input
              name="searchAlbumOrArtist"
              type="text"
              placeholder="Search Album or Artist"
              className="flex-grow outline-none bg-transparent text-gray-600 text-sm"
              onChange={handleChange}
            />
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-gray-600"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div id="genre">
        <button
          onClick={() => {
            props.getGenre("All");
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          All
        </button>
        <button
          onClick={() => {
            props.getGenre("Rock");
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Rock
        </button>

        <button
          onClick={() => {
            props.getGenre("Folk Rock");
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Folk Rock
        </button>
        <button
          onClick={() => {
            props.getGenre("Pop");
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Disco
        </button>
        <button
          onClick={() => {
            props.getGenre("Soul");
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Soul
        </button>
      </div>
    </div>
  );
}

export default Search;
