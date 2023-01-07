import { useState } from "react";
import serachImages from "./api";
import ImageList from "./components/ImageList";
import SerachBar from "./components/SearchBar";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await serachImages(term);
    setImages(result);
  };

  return (
    <div>
      <SerachBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
