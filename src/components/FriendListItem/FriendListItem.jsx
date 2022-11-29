import {Item,Avatar,IsOnline,Name} from './FriendListItemStyled'
export const FriendListItem = ({name,avatar,isOnline})=>{
return (
    <Item>
        <IsOnline>{isOnline}</IsOnline>
        <Avatar src={avatar} alt={name} />
        <Name>{name}</Name>
    </Item>
    )
}