import axios from 'axios'
export async function LoginAPI(email, senha) {
    let url = 'http://localhost:3001/usuarios/auth';
    return (await axios.post(url, {
        email,
        senha
    })).data;
}
export async function CadastroAPI(email, nome, senha) {
    let url = 'http://localhost:3001/usuarios';
    return (await axios.post(url, {
        email,
        nome,
        senha
    })).data;
}
export async function GetColecionadoresAPI(pagina, registrospagina, colunaordenacao, tipoordenacao, filtrowhere = '') {
    let url = 'http://localhost:3001/usuarios';
    let options = {
        method: 'GET',
        headers: {
            authorization: localStorage.getItem('token'),
        },
        params: {
            pagina: pagina,
            registrospagina: registrospagina,
            colunaordenacao: colunaordenacao,
            tipoordenacao: tipoordenacao,
            filtrowhere: filtrowhere
        }
    };
    return (await axios.get(url, options)).data;
}