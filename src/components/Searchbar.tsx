import { useState, useEffect } from "react";
import styled from "styled-components";

import { colors, breakpoints } from "../assets/style/variables";

import { ReactComponent as SearchIcon } from "../assets/svg/icon-search.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/icon-close.svg";

interface Props {
  setSearchbarInputValue: (value: string) => void;
  searchbarInputValue: string;
}

const Searchbar: React.FC<Props> = ({
  searchbarInputValue,
  setSearchbarInputValue,
}) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(true);

  useEffect(() => {
    searchbarInputValue !== ""
      ? setShowDeleteIcon(true)
      : setShowDeleteIcon(false);
  }, [searchbarInputValue]);

  const handleChange = (event: any) => {
    const target = event.target as HTMLInputElement;
    setSearchbarInputValue(target.value);
  };

  return (
    <InputContainer>
      <SearchInput
        type='text'
        placeholder='Rechercher par client'
        spellCheck='false'
        value={searchbarInputValue}
        onChange={(event: any) => handleChange(event)}
      />

      {showDeleteIcon ? (
        <ResetInputButton onClick={() => setSearchbarInputValue("")}>
          <CloseIconExtended />
        </ResetInputButton>
      ) : (
        <SearchIconExtended />
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  transition: 100ms ease-in;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.whiteToLightDark};
  border-radius: 0.4rem;
  border: 1px solid
    ${({ theme }) => theme.lightGreySecondaryToLightDarkSecondary};
  padding-left: 1.2rem;
  min-height: 4rem;

  @media ${breakpoints.sm} {
    max-width: 27.5rem;
  }
`;

const SearchInput = styled.input`
  transition: 100ms ease-in;
  color: ${({ theme }) => theme.darkToWhite};
  background: ${({ theme }) => theme.whiteToLightDark};
  padding-right: 1.2rem;
  width: 100%;
  outline: none;
  border: none;

  &::placeholder {
    color: ${colors.grey};
  }

  &:focus {
    ${InputContainer} {
      border-color: ${colors.violet};
    }
  }
`;

const ResetInputButton = styled.div`
  display: flex;
  margin-right: 1.2rem;
  cursor: pointer;
`;

const CloseIconExtended = styled(CloseIcon)`
  fill: ${colors.red};
  height: 1.8rem;
  width: 1.8rem;
`;

const SearchIconExtended = styled(SearchIcon)`
  fill: ${colors.grey};
  margin-right: 1.2rem;
  height: 100%;
`;

export default Searchbar;
