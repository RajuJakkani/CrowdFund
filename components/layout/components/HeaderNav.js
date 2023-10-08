import styled from "styled-components"

const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
      <HeaderNavLinks>
        Campaigns
      </HeaderNavLinks>
      <HeaderNavLinks>
        Create Campaign
      </HeaderNavLinks>
      <HeaderNavLinks>
        Dashboard
      </HeaderNavLinks>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding:6px;
  height: 50%;
  border-radius:10px;

`

const HeaderNavLinks = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgSubDiv};
  font-family:'Roboto';
  margin:8px;
  padding:2px 5px;
  border-radius:5px;
  cursor:pointer;
  text-transform:uppercase;
  font-weight:bold;
  font-size:16px;
`

export default HeaderNav