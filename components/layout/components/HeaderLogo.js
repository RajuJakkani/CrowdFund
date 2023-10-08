import styled from "styled-components"

const HeaderLogo = () => {
  return (
    <Logo>CrowdFunding</Logo>
  )
}

const Logo = styled.h1`
  font-weight:bold;
  font-size:30px;
  margin-left:10px;
  font-family:"Playfair";
`

export default HeaderLogo