
import { useState } from "react";
import SearchBar from "./Searchbar";
import Header from "./Header";
import Emojilist from "./Emojilist";
import filterEmoji from "./FilterEmoji";

export default function App(){
  const initialEmojis=filterEmoji("",20);
  

  const[filteredEmojis,setFilterEmoji]=useState(initialEmojis);
    return(
      <>
     <div>
      <Header/>
      <SearchBar setEmoji={setFilterEmoji}/>
      <Emojilist data={filteredEmojis}/> 
     </div>
     </>
    );
}

