import CadastroComponent from "./components/Cadastro";

import styles from './Cadastro.module.scss';

const Cadastro = () => {

    return (
        <div className={styles.background}>
            <div className={styles.formulario}>
                <CadastroComponent />
            </div>
        </div >
    );
}

export default Cadastro;