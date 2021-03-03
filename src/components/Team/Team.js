import React, { useEffect, useState } from 'react';
import fakeData from'../../fakeData/data.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import './Team.css';
import CartPlayer from '../CartPlayer/CartPlayer';

const Team = () => {
    
    //All Players Info
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(fakeData);
    }, [])

    //Player Summery
    const [cart, setCart] = useState([]);

    const handleAddPlayer = (py) => {
        const newCart = [...cart, py];
        setCart(newCart);
    }

    return (
        <div className="container-fluid team mt-5">
            <div className="row">
                <div className="col-8">
                    <div className="players">
                        <div className="player">
                            {
                                players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Player>)
                            }
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="cart">
                        <Cart cart={cart}></Cart>
                        <CartPlayer cart={cart}></CartPlayer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;