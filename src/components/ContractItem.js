import React from 'react';

const ContractItem = ({contract}) => {
    return (
        <div className="contractitem-div" onClick={()=>{
            window.location = 'mailto:'+contract.email
        }}>
            <h1>{contract.name}</h1>
            <h2>{contract.land} Acres</h2>
            <h2>{contract.price}$</h2>
            <h2>{contract.email}</h2>
        </div>
    )
}

export default ContractItem