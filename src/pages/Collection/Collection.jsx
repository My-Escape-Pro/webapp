
import {Link} from "react-router-dom";
import {IconButton, Stack, Typography} from "@mui/material";
import ScenarioEpsilon from '../../assets/img/scenario/epsilon.png'
import ScenarioFamilleMorrow from '../../assets/img/scenario/famille_morrow.png'
import {InfoRounded, PlayArrowRounded, StarRounded, TimerOutlined} from "@mui/icons-material";

export default function Collection() {

    const SCENARIO_LIST = [
        {name: 'Epsilon', img: ScenarioEpsilon},
        {name: 'La Famille Morrow', img: ScenarioFamilleMorrow}
    ];

    return (
        <Stack component={'section'} justifyContent={'center'} width={'100%'} minHeight={'calc(100vh - 156px)'}>
            <Stack flexDirection='row' justifyContent={'center'} alignItems={'center'} width={'100%'} flexWrap='wrap' gap={7}>
                {SCENARIO_LIST.map(scenario =>
                    <Stack key={'Collection scenario : ' + scenario.name} position='relative' gap={1} sx={{'&:hover > div': {display: 'flex'}}}>
                        {scenario.img && <img src={scenario.img} alt={'Scenario epsilon'} width={'200px'}/>}
                        <Stack
                            position='absolute' top={0} bottom={0} right={0} left={0}
                            display={'none'}
                            padding={1}
                            backgroundColor={'rgba(20,21,25,0.9)'}
                            justifyContent={'space-between'}
                        >
                            <Stack gap={2}>
                                <Typography color={'fourth.main'} fontWeight={'bold'}>{scenario.name}</Typography>
                                <Stack width={'100%'}>
                                    <Stack flexDirection='row' gap={1} alignItems={'center'}>
                                        <TimerOutlined sx={{color: 'fourth.grey'}}/>
                                        <Typography color={'fourth.grey'} fontWeight={'bold'} fontSize={'0.9rem'}>
                                            1h (environ)
                                        </Typography>
                                    </Stack>
                                    <Stack flexDirection='row' gap={1} alignItems={'center'}>
                                        <StarRounded sx={{color: 'fourth.grey'}}/>
                                        <Typography color={'fourth.grey'} fontWeight={'bold'} fontSize={'0.9rem'}>
                                            5/5 (40 avis)
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography textAlign='justify' color={'fourth.main'} fontSize={'0.8rem'}>
                                    ASTRATECH SOLUTION est un groupe privé qui réalise des enquêtes et intervient dans
                                    le cadre de la disparition inexpliquée de vaisseaux dans tous les systèmes connus...
                                </Typography>
                            </Stack>
                            <Stack flexDirection='row' justifyContent={'space-between'}>
                                <Link to={'/game'}>
                                    <IconButton color='action' size='small'>
                                        <PlayArrowRounded />
                                    </IconButton>
                                </Link>
                                <Link to={'/presentation'}>
                                    <IconButton color='action' size='small'>
                                        <InfoRounded />
                                    </IconButton>
                                </Link>
                            </Stack>
                        </Stack>
                        <Typography textAlign='center' color='fourth.main'>{scenario.name}</Typography>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
}