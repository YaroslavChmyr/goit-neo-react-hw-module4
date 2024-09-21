import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const onSubmit = query => {
    setQuery(query);
    console.log(query);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  )
}

export default App
