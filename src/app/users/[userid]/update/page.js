"use client"
import '../../../../styles.css'
import { useEffect, useState } from "react";

export default function Page({ params }) {
    let id = params.userid;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateUser = async () => {
        let result = await fetch("http://localhost:3000/api/users/" + id, {
            method: 'PUT',
            body: JSON.stringify(name, age, email)
        });
        result = await result.json()
        console.log(result);
    }

    return (
        <div className="add-user">
            <h1>Update User Details</h1>
            <input
                className="input-field"
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="input-field"
                type="number"
                value={age}
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
            />

            <input
                className="input-field"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn' onClick={updateUser}>Update User</button>
        </div>
    )
};