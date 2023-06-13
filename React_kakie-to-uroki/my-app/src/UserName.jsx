import React from "react";

const UserName = (props) => {
    return (props.age > 20 ?
        (<p>{props.userName}<button>Изменить имя</button></p>) : (<p> {props.userName} {props.userSurname}</p>)
    );
};

export default UserName;