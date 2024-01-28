import React, { useState } from 'react'
import Button from './Button'

const FormAddFriend = ({handleAddFriend}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const id = crypto.randomUUID()

    const addFriend = (e) => {
        e.preventDefault();
        if (!name || !image) {
            return;
        }

        const friend = {id, name, image: `${image}?=${id}`, balance: 0  };

        handleAddFriend(friend);

        setName('');
        setImage('https://i.pravatar.cc/48');


    }

  return (
    <form className='form-add-friend' onSubmit={addFriend}>
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />

      <label>Image Url</label>
      <input type='text' value={image} onChange={(e)=>setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend
