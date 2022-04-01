import React from "react";
import image from "./image.jpg";
import PropTypes from "prop-types"

export default function Profile({fullName="Mamadou Camara", bio= "Je suis étudiant à GoMyCODE depuis le 18 janvier", profession="Developpeur full-stack"}) {
    function handleName (e) {
        e.preventDefault();
        alert("Camoulejeun3")
      };
    const clickStyle = {textAlign: 'center',padding:'100px', color:'green'};
    return (
        <div>
            <h1>Profil</h1>
            <p>My name is {fullName}</p>
            <p> Biographie : {bio} </p>
            <p> Profession : {profession} </p>
            <img src={image} alt="imagetech" width={500} />
            <div style={{clickStyle}}>
            <a href="/" onClick={handleName}>
            Click me
          </a>
            </div>
        </div>
    );
}

Profile.propTypes = {
optionalUnion: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf,
    PropTypes.func
])
}