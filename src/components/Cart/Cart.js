import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './Cart.css';
const Cart = (props) => {

    const cart = props.cart;
    
    //Player Salary
    const total = cart.reduce((total, player)  => total + player.salary, 0).toFixed(2);

    return (
        <div className="player-summery">
            <h3 className="mb-5 font-weight-bold text-center">Player Summery</h3>
            <h6>Total Players: <span>{cart.length}</span></h6>
            <h6>Total Budget: <span>${total}</span></h6>
        </div>
    );
};

export default Cart;