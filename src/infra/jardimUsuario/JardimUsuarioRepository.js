import axios from 'axios'

export async function CadastroAPI(video,
    usuarioEmail,
    florId) {
    const headers = {
        'authorization': localStorage.getItem('token'),
    };
    const obj = {
        video,
        usuarioEmail,
        florId
    };
    return await axios.post('http://localhost:3001/jardimusuario/', obj, { headers })
}