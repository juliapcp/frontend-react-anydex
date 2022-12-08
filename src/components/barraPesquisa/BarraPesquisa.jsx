import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useMemo, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: '153vh',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        minWidth: '153vh',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        minWidth: '145vh',
        [theme.breakpoints.up('md')]: {
            minWidth: '145vh',
        },
    },
}));

const BarraPesquisa = ({ valor, setValor, placeholder }) => {
    const [valorInterno, setValorInterno] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => setValor(valorInterno), 800);
        return () => clearTimeout(timeOutId);
    }, [valorInterno]);
    const icone = useMemo(() => <SearchIconWrapper>
        <SearchIcon />
    </SearchIconWrapper>, []);

    return (
        <Box sx={{ display: "flex" }}>

            <Search>
                {icone}
                <StyledInputBase
                    value={valorInterno}
                    onChange={(e) => setValorInterno(e.target.value)}
                    placeholder={placeholder || "Pesquisar.."}
                    inputProps={{ 'aria-label': 'pesquisar' }}
                />
            </Search>
        </Box>
    );
}

export default BarraPesquisa;