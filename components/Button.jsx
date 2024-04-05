"use client"; 

const Button = ({title}) => {
    return (
        <button onClick={()=>{alert("Button clicked")}}>{title}</button>
    )
}