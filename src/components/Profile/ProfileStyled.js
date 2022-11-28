import styled from 'styled-components';


export const ProfileStyled = styled.div`
width: 300px;
margin-left: auto;
margin-right: auto;
border-radius: 5px;
background-color: #fff;
box-shadow: 14px 17px 29px -9px rgba(89, 86, 89, 1);
display:block;
margin-bottom: 50px;
`
export const Avatar = styled.img`
width:120px;
margin-left: auto;
margin-right: auto;
display:block;
`
export const UserName = styled.div`
text-align:center;
color: #000;
font-size: 40px;
margin-bottom: 10px;
`
export const UserTag = styled.div`
text-align:center;
color:grey;
margin-bottom: 10px

`
export const UserLocation = styled.div`
text-align: center;
color:grey;
margin-bottom: 30px;
`
export const UserList = styled.ul`
display: flex;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
border: 1px solid grey;
justify-content: space-between;
list-style:none;
background-color:#e2e2e2;
padding:10px;
`
export const UserItem = styled.li`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
padding: 10px;
:not(:last-child) {
  border-right: 1px solid grey;
}

`
export const Label = styled.span`
color: grey;
margin-bottom: 4px;
`
export const Quantity = styled.span`
width: 100%;
  text-align: center;
  font-weight: 700;
`