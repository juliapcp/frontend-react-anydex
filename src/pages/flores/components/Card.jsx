import "./styles.css";
import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Card = ({nome, img, cor, altura, id}) => {
    const navigate = useNavigate();
        return (
            <div className="card">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2>{nome}</h2>
                    <p>
                        {nome} {cor} de {altura} cm de altura
                    </p>
                    <Button onClick={() => navigate('/adicionarJardim/' + id)} variant="contained" color="success" sx={{ backgroundColor: "#E8998D"}}>Adicionar ao meu jardim</Button>
                </div>
            </div>
        );
}
export default Card;
