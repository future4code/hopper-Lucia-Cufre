import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    border: 1px solid black;
    padding: 1vh 2vw;
    margin-bottom: 10px;
    height: 10vh;
img{
    width: 45px;
    border-radius: 50%;
}
h4{
    margin-right: 5px;
}
div{
    display: flex;
    justify-items: flex-start;
}

    `

function CardPequena(props) {
    return (
        <div>
            <Card>
                <img src={props.imagem} />
                <div>
                    <h4>{props.dado}</h4>
                    <p> {props.informacao} </p>
                </div>
            </Card>
        </div>


    )
}

export default CardPequena