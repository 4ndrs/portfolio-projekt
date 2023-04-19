import { forwardRef } from "react";
import SearchSVG from "@/components/SearchSVG";

import styles from "./SearchBar.module.css";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const SearchBar = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <div className={styles.container}>
    <SearchSVG width="31" height="31" />
    <input ref={ref} type="search" {...props} />
  </div>
));

SearchBar.displayName = "SearchBar";

export default SearchBar;
