import Link from "next/link";
import '../../styles.css';

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page() {

    const users = await getUsers();
    console.log(users);

    return (
        <div>
            <h1>User List</h1>
            {
                users.map((user) => (
                    // <h3>Name : {user.name}, Age: {user.age}, Email: {user.email}</h3>

                    <div className="user-item">
                        <span> <Link href={`users/${user.id}`}>{user.name}</Link></span>
                        <span><Link href={`users/${user.id}/update`}> Edit</Link></span>
                    </div>
                ))
            }
        </div>
    )
}