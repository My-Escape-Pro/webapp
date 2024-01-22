
import {Link} from 'react-router-dom'
import {Stack, useMediaQuery} from "@mui/material";
import LogoImg from '../../assets/img/logo_inline.png';

export default function Header() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack
            zIndex={1000} position='fixed' top={0} right={0} left={0}
            backgroundColor={'#000000'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Stack
                flexDirection='row'
                justifyContent={'space-between'}
                alignItems={'center'}
                height={isDesktop ? '90px' : '60px'}
                px={isDesktop ? '70px' : '20px'}
            >
                <Link to={'/'} style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <img src={LogoImg} height={'85%'}/>
                </Link>
                <Stack flexDirection='row' gap={4}>
                    <Link
                        to={'/'}
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            lineHeight: 1.7,
                            color: '#FFFFFF'
                        }}
                    >
                        Accueil
                    </Link>
                    <Link
                        to={'/catalog'}
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            lineHeight: 1.7,
                            color: '#FFFFFF'
                        }}
                    >
                        Catalogue
                    </Link>
                    <Link
                        to={'/'}
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            lineHeight: 1.7,
                            color: '#FFFFFF'
                        }}
                    >
                        Connexion
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
}