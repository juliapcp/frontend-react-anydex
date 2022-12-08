import "./styles.css";

import Card from './Card';
import { useEffect, useState } from 'react';
import { GetColecionadoresAPI } from '../../../infra/usuario/UsuarioRepository';
import Sidebar from '../../../components/sidebar/viewSidebar';
import BarraPesquisa from "../../../components/barraPesquisa/BarraPesquisa";
const Colecionadores = () => {
    const [colecionadores, setColecionadores] = useState([]);
    const [textoBusca, setTextoBusca] = useState('');
    const getColecionadores = async (busca = '') => {
        await GetColecionadoresAPI(1, 10000, 'nome', 'asc', busca).then((res) => { setColecionadores(res.rows) })
    }
    useEffect(() => {
        getColecionadores(textoBusca).catch(console.error);;
    }, [textoBusca]);
    return (
    <div style={{ marginTop: 50, marginLeft: 190}}>
            <div style={{ display: "table" }}>
                <BarraPesquisa valor={textoBusca} setValor={setTextoBusca} placeholder={"Pesquisar pelo nome da colecionador.."} />
            </div>
            <Sidebar title={"Colecionadores"}/>
            <div className='cards'>
                {colecionadores && colecionadores.length > 0 ? colecionadores.map(colecionador => (
                    <div  key={colecionador.id}>
                        <Card key={colecionador.id} nome={colecionador.nome} img={colecionador.imagem} created_at={colecionador.createdAt} />
                    </div>
                )) : 
                    <div style={{ marginTop: 50}}>
                        Ops, não existem colecionadores aqui!  
                    </div>}
            </div>
        </div>
    );
}

export default Colecionadores;

