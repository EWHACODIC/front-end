import React from "react";
import styled from "styled-components";

const Input_box = styled.input`
    border: 2.5px solid #C4C4C4;
    border-radius: 5px;
    box-sizing: border-box;
    font-size:20px;
    line-height: 2vw;
`

const Input = ( {name, width} ) => {
    return (
        <div>
            <Input_box type="text" placeholder={name} style= {{ width: width }}>
            </Input_box>
        </div>
    )
}

export default Input;