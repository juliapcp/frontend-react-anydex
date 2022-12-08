import FloresIcon from "@mui/icons-material/LocalFlorist";
import ColecionadoresIcon from "@mui/icons-material/Groups";
import PerfilIcon from "@mui/icons-material/Person";
import SairIcon from "@mui/icons-material/Logout";
import { Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Lista = () => {
    const navigate = useNavigate();

    const listOptions = [
        {
            content: <Link sx={{ color: "white", textDecoration: 'none' }} children="Flores"></Link>,
            icon: <FloresIcon fontSize="small" />,
            onClick: ()=> navigate("/flores")
        },
        {
            content: <Link sx={{ color: "white", textDecoration: 'none' }}  children="Colecionadores"></Link>,
            icon: <ColecionadoresIcon fontSize="small" />,
            onClick: () => navigate("/colecionadores")
        },
        {
            content: <Link sx={{ color: "white", textDecoration: 'none' }}  children="Meu perfil"></Link>,
            icon: <PerfilIcon fontSize="small" />,
            onClick: () => navigate("/perfil")
        },
    ];

    const logoutOption = [
        {
            content: <Link sx={{ color: "white", textDecoration: 'none' }} children="Sair"></Link>,
            icon: <SairIcon fontSize="small" />,
            onClick: () => {
                localStorage.setItem("token", "");
                navigate("/");
            }
        },
    ]

    return (
        <List sx={{ paddingTop: 3 }}>
            {listOptions.map((item, index) => {
                const { content, icon, onClick } = item;
                return (
                    <ListItemButton onClick={onClick} key={index}>
                        <ListItemIcon sx={{ color: "white", marginLeft: 2, opacity: 0.6 }}>{icon}</ListItemIcon>
                        <ListItemText>{content}</ListItemText>
                    </ListItemButton>
                );
            })}
            {logoutOption.map((item, index) => {
                const { content, icon, onClick } = item;
                return (
                    <ListItemButton onClick={onClick} key={index} sx={{ marginTop: 42 }}>
                        <ListItemIcon sx={{ color: "white", marginLeft: 2, opacity: 0.6 }}>{icon}</ListItemIcon>
                        <ListItemText>{content}</ListItemText>
                    </ListItemButton>
                );
            })}
        </List>   
    );
}

export default Lista;

