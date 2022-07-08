import { ButtonLink } from "../styled/ButtonLink.styled"
import { Flex } from "../styled/Flex.styled"
import { StyledNav } from "../styled/Nav.styled"
import styled from "styled-components"
import { Container } from "../styled/Container.styled"

function Nav() {
  return (
    <StyledNav>
        <Flex>
            <p>Abstract |</p>
            <a href="#">Help Center</a>
        </Flex>
        <div>
            <ButtonLink bg="#000000">Submit a request</ButtonLink>
            <FadeButton bg="#4C5FD5">Sign in</FadeButton>
        </div>
    </StyledNav>
  )
}

const FadeButton = styled(ButtonLink)`
  &:hover {
    background-color: #ffff;
    color: #000000;
    transition: all 200ms ease-in-out;
  }
`

export default Nav