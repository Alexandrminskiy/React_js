import React from "react";
import './index.css'
import UserName from "./UserName";

const USERS = [
    { name: 'Alex', surname: 'test1' },
    { name: 'Alex', surname: 'test2' },
    { name: 'John', surname: 'test3' },
    { name: 'Bob', surname: 'test4' },
]

const App = () => {
    const data = [];
            USERS.forEach((user) => {
                const key = genKey(user);

                data.push(
                    <div key={key}>
                        <UserName />
                    {/* <p>{user.name} {user.surname}</p> */}
                    </div>
                );
            });
            return(
                <div>
                {data}
                </div>
            );
};

function genKey(user) {
return `${user.name}_${user.surname}`;
}

export default App;