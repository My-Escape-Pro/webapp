
import {Stack} from "@mui/material";
import WoodenShelf from '../../assets/img/wooden_self.png'

import ScenarioEpsilon from '../../assets/img/scenario/epsilon.png'
import ScenarioFamilleMorrow from '../../assets/img/scenario/famille_morrow.png'

export default function Catalog() {

    const SCENARIO_LIST = [
        [
            {name: 'Epsilon', img: ScenarioEpsilon},
            {name: 'Famille Morrow', img: ScenarioFamilleMorrow},
            {name: 'Epsilon', img: ScenarioEpsilon},
            {name: 'Famille Morrow', img: ScenarioFamilleMorrow},
        ],
        [
            {name: 'Epsilon', img: ScenarioEpsilon},
            {name: 'Famille Morrow', img: ScenarioFamilleMorrow},
        ],
        [
            {},
        ]
    ];

    return (
        <section>
            <Stack gap={5} mt={'50px'}>
                {SCENARIO_LIST.map(self =>
                    <Stack alignItems={'center'}>
                        <Stack
                            flexDirection='row'
                            justifyContent={self.length === 4 ? 'space-between' : 'start'}
                            gap={self.length === 4 ? '0' : '158px'}
                            width={'95%'}
                            minHeight={'176.81px'}
                        >
                            {self.map(scenario =>
                                <Stack
                                    sx={{
                                        position: 'relative',
                                        bottom: '-6px',
                                        '&:hover > img': {bottom: '10px!important', boxShadow: '0px 5px 50px 5px white'}
                                    }}
                                >
                                    {scenario.img &&
                                        <img src={scenario.img} alt={'Scenario epsilon'} width={'125px'} style={{position: 'relative'}}/>
                                    }
                                </Stack>
                            )}
                        </Stack>
                        <img src={WoodenShelf} alt={'ShelfImg'} style={{width: '100%'}}/>
                    </Stack>
                )}
            </Stack>
        </section>
    );
}
