import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import { useState } from "react";

const CLIENT_ID = "q8K-hn8CmZ4p8o3ZENauWeqzH9ggaqdJR7d788qieXM";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get("", {
        params: {
          client_id: CLIENT_ID,
          query: query,
          per_page: 12,
          orientation: "landscape",
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
