import React from 'react';
import { Link } from 'react-router-dom'

const button = {
    backgroundColor: '#e6e6e8',
    padding: 10,
    color: 'black',
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 10
}

const Button = (props) => {
    return (
        <Link to={props.link}>
            <span style={button}>{props.name}</span>
        </Link>
    )
}

export default Button