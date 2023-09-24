import React from 'react';
import '../pages/w3.css'

export default function SpecialButton(){
    const mybtn = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "10px"
    };
return (
        <button style={mybtn}>SPECIAL</button>
    )
}