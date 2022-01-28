import React from "react";

const Card =(props) => {
    return <div>
        <img src={props.picture}></img>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {(props.height)/100}m</p>
        <p>Birth: {props.birth.toDateString()}</p>
    </div>
};

export default Card;