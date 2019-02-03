import React from 'react'

const Button = ({color, children, onClick }) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className="Button">
            {children}
        </button>
    )
}

export default Button