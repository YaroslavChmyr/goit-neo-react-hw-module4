import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import { useState } from "react";

const CLIENT_ID = "q8K-hn8CmZ4p8o3ZENauWeqzH9ggaqdJR7d788qieXM";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImages = async (query, page = 1) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("", {
        params: {
          client_id: CLIENT_ID,
          query: query,
          page: page,
          per_page: 12,
          orientation: "landscape",
        },
      });

      setImages((prevImages) =>
        page === 1
          ? response.data.results
          : [...prevImages, ...response.data.results]
      );
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    fetchImages(newQuery, 1);
  };

  const onLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
    </>
  );
}

export default App;
