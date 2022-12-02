import filterEmoji from "./FilterEmoji";

export default function SearchBar(props){
    function handleChange(e){
        const value=e.target.value;
        const filteredEmojis=filterEmoji(value,20);
        props.setEmoji(filteredEmojis);
    }
    return(
    <div className="component-search-input">
    <div>
      <input onChange={handleChange} />
    </div>
  </div>
    )
}
