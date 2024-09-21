import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

function App() {
  const [images, setImages] = useState([]);
  const onSubmit = (query) => {
    async function fetchImages() {
      const searchParams = new URLSearchParams({
        client_id: "q8K-hn8CmZ4p8o3ZENauWeqzH9ggaqdJR7d788qieXM",
        query: query,
        per_page: 12,
        orientation: "landscape",
      })

      const response = await axios.get(`https://api.unsplash.com/search/photos?${searchParams}`);
      setImages(response.data.results);
      console.log(response.data.results);
    }
    fetchImages();
  };


  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
