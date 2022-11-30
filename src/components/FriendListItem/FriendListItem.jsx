import PropTypes from 'prop-types';
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

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}