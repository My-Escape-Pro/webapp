
import {Link} from "react-router-dom";

import ScenarioEpsilon from '../../assets/img/scenario/epsilon.png'
import ScenarioFamilleMorrow from '../../assets/img/scenario/famille_morrow.png'
import {ShoppingCartOutlined, VisibilityRounded} from "@mui/icons-material";
import {Button, IconButton, Stack, Typography} from "@mui/material";

export default function Catalog() {

    const SCENARIO_LIST = [
        {name: 'Epsilon', img: ScenarioEpsilon},
        {name: 'Famille Morrow', img: ScenarioFamilleMorrow},
        {name: 'Epsilon2', img: ScenarioEpsilon},
        {name: 'Famille Morrow2', img: ScenarioFamilleMorrow},
    ];

    return (
        <section>
            <Stack gap={8} alignItems={'center'}>
                {SCENARIO_LIST.map((scenario, index) =>
                    <Stack
                        key={'Catalog scenario : ' + scenario.name}
                        flexDirection={index%2 === 0 ? 'row' : 'row-reverse'}
                        gap={4}
                        maxWidth={'800px'}
                    >
                        {scenario.img && <img src={scenario.img} alt={'Scenario epsilon'} width={'200px'}/>}
                        <Stack
                            justifyContent={'space-between'}
                        >
                            <Typography textAlign='center' color={'fourth.main'} fontWeight={'bold'} fontSize={'1.5rem'}>
                                {scenario.name}
                            </Typography>
                            <Typography textAlign='justify' color={'fourth.main'} fontSize={'1rem'}>
                                ASTRATECH SOLUTION est un groupe privé qui réalise des enquêtes et intervient dans
                                le cadre de la disparition inexpliquée de vaisseaux dans tous les systèmes connus.
                                <br/><br/>
                                Vous êtes missionnés par ASTRATECH SOLUTION pour aller enquêter sur la disparition du vaisseau
                                EPSILON dans le secteur 21B...
                            </Typography>
                            <Stack flexDirection='row' justifyContent={'space-between'}>
                                <Link to={'/game'}>
                                    <Button
                                        variant='contained'
                                        startIcon={<ShoppingCartOutlined color='fourth' />}
                                        sx={{bgcolor: 'action.main', fontWeight: 'bold'}}
                                    >
                                        19.99 €
                                    </Button>
                                </Link>
                                <Link to={'/presentation'}>
                                    <IconButton color='action'>
                                        <VisibilityRounded />
                                    </IconButton>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </section>
    );
}
