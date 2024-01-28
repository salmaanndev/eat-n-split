import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
    const [bill, setBill] = useState("");
    const [paidByuser, setPaidByUser] = useState("");
    const paidByFriend = bill ? bill - paidByuser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByuser) {
            return;
        }
        handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByuser);

    }

    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰Bill Value</label>
            <input type='text' value={bill} onChange={(e) => setBill(e.target.value)} />

            <label>👲Your Expense</label>
            <input type='text' value={paidByuser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByuser : Number(e.target.value))} />

            <label>🧑‍🤝‍🧑{selectedFriend.name}'s Expense</label>
            <input type='text' value={paidByFriend} disabled />

            <label>🤑Who's paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill
