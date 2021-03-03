import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {

    const {name, team_name, salary, image} = props.player;

    return (
        <div className="borders">
            <div className="d-inline">
                <img src={image} alt="" className="img-fluid"/>
            </div>

            <div className="player-info ml-3">
                <p>Full Name: <small>{name}</small></p>
                <p>Current Club: <small>{team_name}</small></p>
                <p>Salary: <small>${salary}</small></p>
                <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-outline-custom px-3 mt-3 fw-bold">
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span className="ml-1">Select Player</span>
                </button>
            </div>
        </div>
    );
};

export default Player;