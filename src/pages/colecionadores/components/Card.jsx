import "./styles.css";
import React from "react";

const Card = ({nome, img, created_at}) => {
        return (
            <div className="cardColecionador">
                <div className="card-body">
                    <h2>{nome}</h2>
                    <p>
                        Entrou em {new Date(created_at).toLocaleDateString()}
                    </p>
                </div>
            </div>
        );
}
export default Card;
