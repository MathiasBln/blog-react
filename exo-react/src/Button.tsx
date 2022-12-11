import React, {useState} from 'react';

interface ButtonPropsInterface{
    text: string,
    francis: number
}

// export default function Button({text}:ButtonPropsInterface){
export default function Button(props:ButtonPropsInterface){
    const [counter, setCounter] = useState<number>(props.francis)
    return (
        //<button>{text}</button>
        <button onClick={() =>setCounter(counter + 1)}>{props.text} - {counter}</button>
    )
}