
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './LoginComponent.module.scss';

import { setLoggedIn } from "../../../store/Store.loggedIn";


const LoginComponent = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {
        setVisible(false);
        setIsLoggedIn(true);
    }
    const logout = () => {
        sessionStorage.setItem("tokenAuth", "");
        sessionStorage.setItem("usuarioLogado", "");
        setVisible(true);
        setIsLoggedIn(false);
    }
    const handleClickSubmit = () => {
        if (email && password) {
        } else {
            setMsg("E-mail ou senha inválidos!");
            logout();
        }
    }

    const handleKeyPressed = (event) => {
        
    }
    useEffect(() => {
        setMsg("E-mail ou senha inválidos!");
    }, []);
    useEffect(() => {

        if (isLoggedIn) {
            dispatch(setLoggedIn(true));
            navigate("/conexoes")
        }
    });

    return (
        <Container className={styles.container}>
            <div className={styles.paper}>
                <Typography className={styles.textTitle}>
                    Entrar
                </Typography>
                <form className={styles.form} onKeyPress={(e) => handleKeyPressed(e)} noValidate>
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

