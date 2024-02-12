
import {useEffect, useState} from "react";

import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    IconButton,
    Slider,
    Stack, Tooltip,
    Typography
} from "@mui/material";
import {
    PauseRounded,
    PlayArrowRounded,
    SubtitlesOffRounded,
    SubtitlesRounded,
    VolumeDownRounded,
    VolumeUpRounded
} from "@mui/icons-material";

export default function AudioPlayer({ audioFile }) {
    const [audio] = useState(new Audio(audioFile.url));
    const [playing, setPlaying] = useState(false);
    const [subtitles, setSubtitles] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (playing) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playing]);

    useEffect(() => {
        audio.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime((audio.currentTime / audio.duration) * 100);
        }, 10);
        return () => clearInterval(intervalId);
    }, [currentTime]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return (
        <Card sx={{display: 'flex', flexDirection: 'column'}}>
            <CardHeader title={audioFile.title} />
            <CardContent sx={{display: 'flex', alignItems:'center'}}>
                <Typography fontSize={'0.85rem'} color="text.secondary" textAlign='center' sx={{width: '50px'}}>
                    {Math.floor((audio.currentTime % 3600) / 60).toString().padStart(1, "0")}
                    :{Math.floor(audio.currentTime % 60).toString().padStart(2, "0")}
                </Typography>
                <Slider
                    value={currentTime ? currentTime : 0}
                    sx={{
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&::before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />
                <Typography fontSize={'0.85rem'} color="text.secondary" textAlign='center' sx={{width: '50px'}}>
                    {audio.duration
                        ? Math.floor((audio.duration % 60) / 60).toString().padStart(1, "0") + ':' + Math.ceil(audio.duration % 60).toString().padStart(2, "0")
                        : '0:00'
                    }
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Stack width={'200px'} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDownRounded />
                    <Slider aria-label="Volume" size='small' value={volume} onChange={(_, newValue) => setVolume(newValue)} />
                    <VolumeUpRounded />
                </Stack>
                <Tooltip title={playing ? "Pause" : "Lecture"}>
                    <IconButton aria-label="play/pause" onClick={() => setPlaying(!playing)}>
                        {playing
                            ? <PauseRounded sx={{ height: 38, width: 38 }} />
                            : <PlayArrowRounded sx={{ height: 38, width: 38 }} />
                        }
                    </IconButton>
                </Tooltip>
                <Tooltip title={(subtitles ? "Cacher" : "Afficher") + " le script"}>
                    <IconButton aria-label="subtitles" onClick={() => setSubtitles(!subtitles)}>
                        {subtitles
                            ? <SubtitlesOffRounded sx={{ height: 38, width: 38 }} />
                            : <SubtitlesRounded sx={{ height: 38, width: 38 }} />
                        }
                    </IconButton>
                </Tooltip>
            </CardActions>
            <Collapse in={subtitles} timeout="auto">
                <Divider variant='middle' />
                <CardContent>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
