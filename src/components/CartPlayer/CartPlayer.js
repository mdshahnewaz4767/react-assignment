import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './CartPlayer.css';

//Single Player
const CartPlayer = (props) => {
    const cartPlayer = props.cart;

    return (
        <div>
            <h5 className="mt-5 mb-3 font-weight-bold">Selected Player List</h5>
            {
                cartPlayer.map(player => (
                    <div className="mb-3 cartPlayer" key={player.id}>
                        <h3>Full Name: <span>{player.name}</span></h3>
                        <p>Salary: <span>${player.salary}</span></p>
                    </div>
                ))
            }
        </div>
    );
};

export default CartPlayer;