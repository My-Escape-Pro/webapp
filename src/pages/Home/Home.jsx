
import {Button, Skeleton, Stack} from "@mui/material";
import ConceptBackground from '../../assets/img/concept.jpg';
import CatalogBackground from '../../assets/img/catalog.jpg';
import ClassementBackground from '../../assets/img/classement.jpg';
import AvisBackground from '../../assets/img/avis.jpg';

export default function Home() {

    const boxStyle = {
        width: '100%',
        height: '300px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&:hover': {
            img: {
                transition: 'transform .3s',
                transform: 'scale(0.9)',
            }
        },
    };

    return (
        <section>
            <Stack alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 200px)'} mt={'50px'}>
                <Stack alignItems={'center'} flexDirection='row' gap={4} width={'100%'}>

                    <Stack sx={boxStyle}>
                        <img src={ConceptBackground} width={'115%'} loading="lazy"/>
                        {/*<Skeleton variant="rectangular" width={'100%'} height={'300px'} />*/}
                        {/*<Button>Concept</Button>*/}
                    </Stack>
                    <Stack sx={boxStyle}>
                        <img src={CatalogBackground} width={'115%'}/>
                        {/*<Button>Catalogue</Button>*/}
                    </Stack>
                    <Stack sx={boxStyle}>
                        <img src={ClassementBackground} width={'115%'}/>
                        {/*<Button>Classement</Button>*/}
                    </Stack>
                    <Stack sx={boxStyle}>
                        <img src={AvisBackground} width={'115%'}/>
                        {/*<Button>Avis</Button>*/}
                    </Stack>
                </Stack>
            </Stack>
        </section>
    );
}
