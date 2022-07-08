import { StyledFooter } from "../styled/Footer.styled"
import { Flex } from "../styled/Flex.styled"
import styled from "styled-components"

function Footer() {
  return (
    <StyledFooter>
        <Flex>
            <ul>
                <h3>Abstract</h3>
                <li><a href="#">Start Trial</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Download</a></li>
            </ul>
            <ul>
                <h3>Resources</h3>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Release Notes</a></li>
                <li><a href="#">Status</a></li>
            </ul>
            <ul>
                <h3>Community</h3>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Dribble</a></li>
                <li><a href="#">Podcast</a></li>
            </ul>
            <ul>
                <h3>Company</h3>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Legal</a></li>
                <h4>Contact Us</h4>
                <li>info@abstract.com</li>
            </ul>
            <StyledDiv>
                <p>&copy; Copyright 2022</p>
                <p>Abstract Studio Design,Inc.</p>
                <p>All rights reserved</p>
            </StyledDiv>
        </Flex>
    </StyledFooter>
  )
}

const StyledDiv = styled.div`
    margin-top: 200px
`

export default Footer