import React from 'react'
import Friend from './Friend';

const FriendList = ({friends, handleSelection, selectedFriend}) => {
    
  return (
    <ul>
        {friends.map((friend)=>{
            return <Friend friend={friend} key={friend.id} handleSelection={handleSelection} selectedFriend={selectedFriend} />
        })}
    </ul>
  )
}

export default FriendList
