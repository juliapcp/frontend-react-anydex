import "./styles.css";

import Sidebar from '../../../components/sidebar/viewSidebar';
import { Button, TextField } from "@mui/material";
import React from "react";
import { CadastroAPI } from "../../../infra/jardimUsuario/JardimUsuarioRepository";
import { useNavigate, useParams } from "react-router-dom";
const AdicionarJardim = () => {
    const {id} = useParams();
    const [videoEvidencia, setVideoEvidencia] = React.useState("");
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const handleClickSubmit = async () => {
        if (videoEvidencia) {
            await CadastroAPI(videoEvidencia, localStorage.getItem("email"), id).then((res) => { navigate('/') }).catch((err) => { setVisible(true) })
        } else {
            setMsg("Vídeo de evidência é obrigatório!");
            setVisible(true)
        }
    }

    return (
    <div style={{ marginTop: 50, marginLeft: -380}}>
            <Sidebar title={"Adicionar flor ao jardim"}/>
            <div>
                <TextField
                    id="standard-required"
                    name="videoEvidencia"
                    label="Link para o vídeo de evidência"
                    variant="standard"
                    margin="normal"
                    required
                    value={videoEvidencia}
                    onChange={(e) => setVideoEvidencia(e.target.value)}
                    fullWidth
                />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        onClick={handleClickSubmit}
                    >
                        Adicionar flor ao jardim
                    </Button>
                <div style={{ height: 21 }}>
                    {visible ? (
                        <div>
                            {msg}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default AdicionarJardim;

