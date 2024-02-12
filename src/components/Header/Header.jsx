
import {Link, useLocation} from 'react-router-dom'
import {Stack, useMediaQuery} from "@mui/material";
import LogoImg from '../../assets/img/logo_inline.png';

const MENU_LIST = [
    {title: 'Accueil', url: '/'},
    {title: 'Catalogue', url: '/catalog'},
    {title: 'Collection', url: '/collection'},
    {title: 'Classement', url: '/ranking'}
];

export default function Header() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const location = useLocation();

    return (
        <Stack
            component={'header'}
            zIndex={1000} position='fixed' top={0} right={0} left={0}
            backgroundColor={'primary.main'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Stack
                flexDirection='row'
                justifyContent={'space-between'}
                alignItems={'center'}
                height={isDesktop ? '90px' : '60px'}
                px={isDesktop ? '70px' : '20px'}
            >
                <Link to={'/'} style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <img src={LogoImg} alt={'Web site logo'} height={'85%'}/>
                </Link>
                <Stack flexDirection='row' gap={4}>
                    {MENU_LIST.map(menu =>
                        <Link
                            key={'Menu ' + menu.title}
                            to={menu.url}
                            style={{
                                textDecoration: 'none',
                                fontSize: '21px',
                                color: location.pathname === menu.url ? '#EDB518' : '#F5F7F7'
                            }}
                        >
                            {menu.title}
                        </Link>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
}