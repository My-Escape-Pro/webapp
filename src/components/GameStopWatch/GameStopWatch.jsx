
import {TimerRounded} from "@mui/icons-material";
import {Button, Slide, Stack, Tooltip, Typography} from "@mui/material";
import {forwardRef, useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";

export default function GameStopWatch() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        let intervalId;
        if(isActive) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isActive, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    const gameStop = () => {
        setIsActive(false);
        setDisplayModal(true);
    }

    const gamePlay = () => {
        setIsActive(true);
        setDisplayModal(false);
    }

    return (
        <>
            <FullScreenModal open={displayModal} close={gamePlay} hours={hours} minutes={minutes} seconds={seconds} />
            <Tooltip title={"Mettre le scénario en pause"}>
                <Button
                    variant='contained'
                    endIcon={<TimerRounded />}
                    color='secondary'
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    onClick={gameStop}
                >
                    {hours.toString().padStart(2, "0")}
                    :{minutes.toString().padStart(2, "0")}
                    :{seconds.toString().padStart(2, "0")}
                </Button>
            </Tooltip>
        </>

    );
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenModal({ open, close, hours, minutes, seconds}) {

    return(
        <Dialog
            fullScreen
            open={open}
            TransitionComponent={Transition}
        >
            <Stack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'} gap={4}>
                <Typography fontSize={'3rem'}>C'est l'heure de la pause !</Typography>
                <Typography fontSize={'2rem'}>
                    Vous temps =
                    {' ' + hours.toString().padStart(2, "0")}
                    :{minutes.toString().padStart(2, "0")}
                    :{seconds.toString().padStart(2, "0")}
                </Typography>
                <Stack flexDirection='row' width={'100%'} justifyContent={'space-around'}>
                    <Button variant='contained' onClick={close}>
                        Reprendre la partie
                    </Button>
                    <Button color='error'>
                        Sauvegarder & Quitter
                    </Button>
                </Stack>
            </Stack>

        </Dialog>
    );

}