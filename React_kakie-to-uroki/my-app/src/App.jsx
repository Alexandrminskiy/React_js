import React from "react";
import UserName from "./UserName";
import './index.css'

let USERS = [
    { id: 1, name: 'Alex', surname: 'Test', age: 21 },
    // { name: 'John', surname: 'test2', age: 25 },
    // { name: 'Bob', surname: 'test3', age: 29 },
    // { name: 'Bob', surname: 'test4', age: 19 },
]

let App = () => {
    const changeName = (id,  newName) => {
USERS.map((user)=>{
    if (user.id === id) {
        return {
            id: user.id,
            name: newName,
            surname: user.surname,
            age: user.age,
        }
    }
    return user;
})
    }
    const data = []
    USERS.forEach((user) => {
        const key = genKey(user);

        data.push(
            <div key={key}>
                <UserName
                    userName={user.name}
                    userSurname={user.surname}
                    age={user.age}
                    changeName={changeName}
                />

            </div>
        )
    });
    return (
        <div>{data}</div>
    )
}

function genKey(user) {
    return `${user.name}_${user.surname}_${user.age}`;
}

export default App;