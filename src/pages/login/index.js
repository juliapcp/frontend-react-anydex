import LoginComponent from "./components/Login";

import styles from './Login.module.scss';

const Login = () => {

    return (
        <div className={styles.background}>
            <div className={styles.formulario}>
                <LoginComponent />
            </div>
        </div >
    );
}

export default Login;