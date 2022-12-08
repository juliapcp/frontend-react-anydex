import axios from 'axios'

export async function GetFloresAPI(pagina, registrospagina, colunaordenacao, tipoordenacao, filtrowhere) {
    let url = 'http://localhost:3001/flores';
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
