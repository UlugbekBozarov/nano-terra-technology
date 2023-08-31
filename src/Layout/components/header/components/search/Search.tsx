import { Search as SearchIcon } from "components/Icons";

import { SearchContent, StyledSearchInput } from "./Search.style";

const Search = () => {
  return (
    <SearchContent>
      <StyledSearchInput placeholder="John doe" prefix={<SearchIcon />} />
    </SearchContent>
  );
};

export default Search;
