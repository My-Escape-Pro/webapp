
import {Button, Stack, Typography} from "@mui/material";

import poster from "../../assets/img/scenario/epsilon.png"
import {PlayArrowRounded, StarRounded, TimerOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Presentation() {

    return (
        <Stack component={'section'} alignItems={'center'} justifyContent={'center'}  height={'calc(100vh - 156px)'}>
            <Stack width={'100%'} flexDirection='row' gap={6}>
                <Stack width={'40%'}>
                    <img src={poster} alt={'Affiche du scénario'} />
                </Stack>
                <Stack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography color={'action.main'} fontSize={'36px'} fontWeight={'bold'}>Mission EPSILON</Typography>
                    <Stack flexDirection='row' justifyContent={'space-between'} width={'100%'}>
                        <Stack flexDirection='row' gap={1}>
                            <TimerOutlined sx={{color: 'fourth.grey'}}/>
                            <Typography color={'fourth.grey'} fontWeight={'bold'}>1h (environ)</Typography>
                        </Stack>
                        <Stack flexDirection='row' gap={1}>
                            <StarRounded sx={{color: 'fourth.grey'}}/>
                            <Typography color={'fourth.grey'} fontWeight={'bold'}>5/5 (40 avis)</Typography>
                        </Stack>
                    </Stack>
                    <Typography textAlign='justify' color={'fourth.main'}>
                        ASTRATECH SOLUTION est un groupe privé qui réalise des enquêtes et intervient dans le cadre de
                        la disparition inexpliquée de vaisseaux dans tous les systèmes connus.
                        <br/><br/>
                        Vous êtes missionnés par ASTRATECH SOLUTION pour aller enquêter sur la disparition du vaisseau
                        EPSILON dans le secteur 21B.
                        <br/><br/>
                        Quand vous serez prêt à mener l'enquête. Cliquer sur JOUER.
                    </Typography>
                    <Stack width={'100%'} alignItems={'end'}>
                        <Link to={'/game'}>
                            <Button
                                variant='contained'
                                size='large'
                                startIcon={<PlayArrowRounded />}
                                sx={{bgcolor: 'action.main', fontWeight: 'bold'}}
                            >
                                Jouer
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}