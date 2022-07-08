import { Flex } from "../styled/Flex.styled"
import Card from "./Card"
import styled from "styled-components"

function Body() {
  return (
    <StyledCardsFlex>
        <Card img="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" h3="Using Abstract" p="Abstract lets you manage, version, and document your designs in one place." />
        <Card img="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png" h3="Manage your account" p="Configure your account settings, such as your email, profile details, and password." />
        <Card img="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png" h3="Manage organizations, teams, and projects" p="Use Abstract organizations, teams, and projects to organize your people and your work." />
        <Card img="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png" h3="Manage billing" p="Change subscriptions and payment details." />
        <Card img="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png" h3="Authenticate to Abstract" p="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
        <Card img="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png" h3="Abstract support" p="Get in touch with a human." />
    </StyledCardsFlex>
  )
}

const StyledCardsFlex = styled(Flex)`
    padding: 8em;
    gap: 10px;

    img {
        margin-right: 10px;
    }

    h3 {
        font-size: x-large;
        font-weight: 700;
    }
`

export default Body