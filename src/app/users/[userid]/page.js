
async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function Page({ params }) {
    const user = await getUser(params.userid);
    console.log(user);
    return (
        <div>
            <h2>User Details</h2>
            <h4>Id: {user.id}</h4>
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Age: {user.age}</h4>
        </div>
    )
}