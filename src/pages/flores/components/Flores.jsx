import "./styles.css";

import Card from './Card';
import { useEffect, useState } from 'react';
import { GetFloresAPI } from '../../../infra/flores/FloresRepository';
import Sidebar from '../../../components/sidebar/viewSidebar';
import BarraPesquisa from "../../../components/barraPesquisa/BarraPesquisa";
const Flores = () => {
    const [flores, setFlores] = useState([]);
    const [textoBusca, setTextoBusca] = useState('');
    const getFlores = async (busca = '') => {
        await GetFloresAPI(1, 10000, 'nome', 'asc', busca).then((res) => { setFlores(res.rows) })
    }
    useEffect(() => {
        getFlores(textoBusca).catch(console.error);;
    }, [textoBusca]);
    return (
    <div style={{ marginTop: 50, marginLeft: 190}}>
            <div style={{ display: "table" }}>
                <BarraPesquisa valor={textoBusca} setValor={setTextoBusca} placeholder={"Pesquisar pelo nome da flor.."} />
            </div>
            <Sidebar title={"Flores"}/>
            <div className='cards'>
                {flores && flores.length > 0 ? flores.map(flor => (
                    <div  key={flor.id}>
                        <Card key={flor.id} id={flor.id} altura={flor.altura} cor={flor.cor} nome={flor.nome} img={flor.imagem} />
                    </div>
                )) : 
                    <div style={{ marginTop: 50}}>
                        Ops, não existem flores aqui!  
                    </div>}
            </div>
        </div>
    );
}

export default Flores;

