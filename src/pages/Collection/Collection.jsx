
import {Stack} from "@mui/material";
import WoodenShelf from '../../assets/img/wooden_self.png'

import ScenarioEpsilon from '../../assets/img/scenario/epsilon.png'
import ScenarioFamilleMorrow from '../../assets/img/scenario/famille_morrow.png'
import {Link} from "react-router-dom";

export default function Collection() {

    const SCENARIO_LIST = [
        [
            {name: 'Epsilon', img: ScenarioEpsilon},
        ],
        [
            {},
        ],
        [
            {},
        ]
    ];

    return (
        <section>
            <Stack gap={5} mt={'50px'}>
                {SCENARIO_LIST.map((self, index) =>
                    <Stack key={'self ' + index} alignItems={'center'}>
                        <Stack
                            flexDirection='row'
                            justifyContent={self.length === 4 ? 'space-between' : 'start'}
                            gap={self.length === 4 ? '0' : '158px'}
                            width={'95%'}
                            minHeight={'176.81px'}
                        >
                            {self.map(scenario =>
                                <Link key={'Scenario ' + scenario.name} to={'/presentation'}>
                                    <Stack
                                        sx={{
                                            position: 'relative',
                                            bottom: '-6px',
                                            '&:hover': {
                                                cursor: 'pointer',
                                                img: {
                                                    bottom: '10px!important',
                                                    boxShadow: '0px 5px 50px 5px white'
                                                }
                                            }
                                        }}
                                    >
                                        {scenario.img &&
                                            <img src={scenario.img} alt={'Scenario epsilon'} width={'125px'} style={{position: 'relative'}}/>
                                        }
                                    </Stack>
                                </Link>

                            )}
                        </Stack>
                        <img src={WoodenShelf} alt={'ShelfImg'} style={{width: '100%'}}/>
                    </Stack>
                )}
            </Stack>
        </section>
    );
}
