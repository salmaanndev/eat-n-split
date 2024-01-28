import React from 'react'
import Button from './Button'

const Friend = ({ friend, handleSelection, selectedFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p className='red'>You owe {friend.name} Rs.{Math.abs(friend.balance)}</p>}
            {friend.balance > 0 && <p className='green'>{friend.name} owes you Rs.{Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p className=''>You and {friend.name} are even</p>}
            <Button onClick={()=>handleSelection(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    )
}

export default Friend
