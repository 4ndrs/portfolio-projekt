import { forwardRef, useImperativeHandle, useRef } from "react";
import SearchSVG from "@/components/SearchSVG";

import styles from "./SearchBar.module.css";

import type { SearchBarElement } from "@/interfaces";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const SearchBar = forwardRef<SearchBarElement, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      blur() {
        inputRef.current?.blur();
      },
    }),
    []
  );

  return (
    <div className={styles.container} onClick={() => inputRef.current?.focus()}>
      <SearchSVG width="31" height="31" />
      <input ref={inputRef} type="search" {...props} />
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
