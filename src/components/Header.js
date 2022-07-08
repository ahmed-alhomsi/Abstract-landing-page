import { StyledHeader } from "../styled/Header.styled"

function Header() {
  return (
    <StyledHeader>
        <h1>How can we help?</h1>
        <div>
            <input placeholder="search" type='text'></input>
        </div>
    </StyledHeader>
  )
}

export default Header