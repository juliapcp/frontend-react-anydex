
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LoginComponent.module.scss';

import { LoginAPI } from "../../../infra/usuario/UsuarioRepository";


const LoginComponent = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClickSubmit = async () => {
        if (email && password) {
            await LoginAPI(email, password).then((res) => { console.log(res.token); localStorage.setItem('token', res.token); localStorage.setItem('email', email); navigate('/flores') }).catch((err)=> {setVisible(true)})
        } else {
            setMsg("E-mail ou senha inválidos!");
        }
    }

    useEffect(() => {
        setMsg("E-mail ou senha inválidos!");
    }, []);

    return (
        <Container className={styles.container}>
            <div className={styles.paper}>
                <Typography className={styles.textTitle}>
                    Entrar
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
                        <a href="/cadastro">Não tem uma conta? Cadastre-se</a>
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
                            Entrar
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default LoginComponent;

