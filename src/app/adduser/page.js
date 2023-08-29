"use client"
import { useState } from "react";
import "../../styles.css";

export default function Page() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/users", {
            method: "post",
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        if (response.success) {
            alert('New user added')
        }
        else {
            alert("Error found check and try again")
        }
        console.log(response);
    }

    return (
        <div className="add-user">
            <h1>Add New User</h1>
            <input
                type="name"
                placeholder="Enter name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter age"
                className="input-field"
                value={age} onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                className="input-field"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={addUser} className="btn">Add user</button>
        </div>
    )
};