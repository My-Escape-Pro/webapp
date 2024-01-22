
import {Button, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {HomeRounded} from "@mui/icons-material";

export default function PageNotFound() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 200px)'} gap={'30px'}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h5' textAlign='center'>
                Nous sommes désoles, cette page n'existe pas ! Mais pas d'inquiétude il suffit de revenir à l'accueil !
            </Typography>
            <Link to={'/'}>
                <Button variant='contained' startIcon={<HomeRounded />} sx={{fontWeight: 'bold'}}>
                    Accueil
                </Button>
            </Link>
        </Stack>
    );
}