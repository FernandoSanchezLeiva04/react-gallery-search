import React from "react";
import { BarWrapper } from "./styles";

interface BarProps {
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  readonly placeholder?: string;
  readonly value?: string;
}

const SearchBar = (props: BarProps) => {
  const { value, onClick, placeholder, onChange } = props;
  return (
    <BarWrapper>
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button className="search__cta" onClick={onClick}>
        Search
      </button>
    </BarWrapper>
  );
};

export default SearchBar;
