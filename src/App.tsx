import React from "react";
import { Content } from "./components/content";
import Masthead from "./components/masthead";
import SearchBar from "./components/search-bar";
import useFetch from "./hooks/use-fetch";
import imgUrl from '/assets/images/img1.jpg'

const App = () => {
  const { data, setData, type, setType } = useFetch();
  const [value, setValue] = React.useState("");
  return (
    <div>
      <Masthead
        title='React Gallery Search'
        paragraph='Cool images and videos. Search, love & share!'
        imagePath={imgUrl}
      />
      <SearchBar
        placeholder='Cats, bikes, mountains, etc...'
        value={value}
        onClick={() => {
          setData({ ...data, slug: value });
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Content data={data} />
    </div>
  );
};

export default App;
