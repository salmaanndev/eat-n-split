import { useState } from 'react';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendList from './components/FriendList';
import initialFriends from './data';

function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  }

  const handleAddFriend = (friend) => {
      setFriends((friends) => [...friends, friend]);
      setShowAddFriend(!showAddFriend);
  }

  const handleSelection = (friend) =>{
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  const handleSplitBill = (value) => {
    setFriends(friends=> friends.map(friend=>friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
    setSelectedFriend(null)
  }

  return (
    <div className="app">
        <div className='sidebar'>
            <FriendList friends={friends} handleSelection={handleSelection} selectedFriend={selectedFriend}  />
            {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
            <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'} </Button>
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
