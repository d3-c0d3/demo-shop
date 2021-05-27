import classes from "./SearchBar.module.css";

const SearchBar=(props)=>(
    <div>
    <input onChange={props.onInputChange} className={classes.Input} type='text' placeholder={props.placeholder} />
</div>
)

export default SearchBar;