
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './CadastroComponent.module.scss';

import { CadastroAPI } from "../../../infra/usuario/UsuarioRepository";


const CadastroComponent = () => {
    const [email, setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeNome = (e) => {
        setNome(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClickSubmit = async () => {
        if (email && password) {
            await CadastroAPI(email, nome, password).then((res) => { navigate('/login') }).catch((err) => { setVisible(true) })
        } else {
            setMsg("E-mail já utilizado!");
        }
    }

    useEffect(() => {
        setMsg("E-mail já utilizado!");
    }, []);

    return (
        <Container className={styles.container}>
            <div className={styles.paper}>
                <Typography className={styles.textTitle}>
                    Cadastro
                </Typography>
                <form className={styles.form} noValidate>
                    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                        <TextField
                            id="standard-required"
                            name="email"
                            label="Entre com o seu email"
                            autoComplete="email"
                            variant="standard"
                            margin="normal"
                            value={email}
                            onChange={handleChangeEmail}
                            fullWidth
                        />
                        <TextField
                            id="standard-required"
                            name="nome"
                            label="Entre com o seu nome"
                            variant="standard"
                            margin="normal"
                            value={nome}
                            onChange={handleChangeNome}
                            fullWidth
                        />
                        <TextField
                            id="standard-password-input"
                            name="password"
                            label="Digite sua senha"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            margin="normal"
                            value={password}
                            onChange={handleChangePassword}
                            fullWidth
                        />
                    </div>
                    <div style={{ margin: 6, height: 21, fontSize: 13 }}>
                        <a href="/login">Já tem uma conta? Entrar</a>
                    </div>
                    <div style={{ height: 21 }}>
                        {visible ? (
                            <div className={styles.message}>
                                {msg}
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.divButton}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleClickSubmit}
                            className={styles.submit}
                            size="medium"
                        >
                            Cadastrar
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default CadastroComponent;

