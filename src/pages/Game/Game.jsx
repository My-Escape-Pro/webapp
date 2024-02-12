
import {useState} from "react";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import PasswordFile from "../../components/PasswordModal/PasswordFile";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import GameStopWatch from "../../components/GameStopWatch/GameStopWatch";

import {Stack, Tab, Tabs, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {LockRounded} from "@mui/icons-material";

import enregistrementJ820Epsilon from "../../assets/docs/1_Enregistrement_J820.mp3"
import noteEpsilon from "../../assets/docs/2_Notes_Epsilon.pdf";
import carnetEquipage from "../../assets/docs/3_Carnets_de_equipage.pdf";
import rapportDeMaintenance from "../../assets/docs/4_Rapports_de_maintenance.pdf";
import enregistrementAudioInfirmerie1 from "../../assets/docs/6_audio_infirmerie_1_V3.mp3";
import enregistrementAudioInfirmerie2 from "../../assets/docs/7_audio_infirmeie_2_V3.mp3";
import emailDeWilliams from "../../assets/docs/8_Email_de_williams.pdf";
import rapportEnquete from "../../assets/docs/Rapport_enquête.pdf";
import regleDuJeu from "../../assets/docs/Regle_du_jeu.pdf";

const ELEMENT_LIST = [
    {title: "Enregistrement J820", type: 'audio', url: enregistrementJ820Epsilon},
    {title: "Note d'Épsilon", type: 'pdf', url: noteEpsilon},
    {title: "Carnet d'équipage", type: 'pdf', password: "SJTWE", url: carnetEquipage},
    {title: "Rapport de maintenance", type: 'pdf', password: "2050100", url: rapportDeMaintenance},
    {title: "Vidéo Elliot boite mère", type: 'video', password: "11GG258J", url: "https://www.youtube-nocookie.com/embed/rttbzHUjE90?si=tQCwyEArLTwllNLV"},
    {title: "Enregistrement audio infirmerie 1", type: 'audio', password: "Williams", url: enregistrementAudioInfirmerie1},
    {title: "Enregistrement audio infirmerie 2", type: 'audio', password: "2D5G4D", url: enregistrementAudioInfirmerie2},
    {title: "Email de williams", type: 'pdf', password: "13-3", url: emailDeWilliams},
    {title: "Vidéo caché de Williams", type: 'video', password: "HELP", url: "https://www.youtube-nocookie.com/embed/HjlC83lJNHA?si=1rHiQcZnLSvJxm4L"},
    {title: "Capsule", type: 'video', password: "547", url: "https://www.youtube-nocookie.com/embed/jE3DtrDsQVo?si=xlIqwf_SMnHX982_"},
];

export default function Game() {
    const [alignment, setAlignment] = useState('start');

    const handleMenuChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <section>
            <Stack gap={4}>
                <Stack width={'100%'} height={'50px'} sx={{backgroundColor: '#FFFFFF'}}>
                    <ToggleButtonGroup
                        fullWidth
                        color="secondary"
                        value={alignment}
                        exclusive
                        onChange={handleMenuChange}
                    >
                        <ToggleButton value="start">Début</ToggleButton>
                        <ToggleButton value="elements">Elements</ToggleButton>
                        <ToggleButton value="report">Rapport</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                {alignment === "start" && <StartFiles/>}
                {alignment === "elements" && <AllFiles/>}
                {alignment === "report" && <InvestigationReport/>}
            </Stack>
            <GameStopWatch />
        </section>
    );
}

function StartFiles() {

    return(
        <>
            <PDFViewer pdfFile={regleDuJeu}/>
            <iframe
                width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/8Zs51OlfU-A?si=ZUYqe2Ca02PkIKQg"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </>
    );
}

function AllFiles() {
    const [displayDocument, setDisplayDocument] = useState(ELEMENT_LIST[0]);
    const [selectedDocument, setSelectedDocument] = useState(ELEMENT_LIST[0]);
    const [passwordModal, setPasswordModal] = useState(false);

    const handleFileChange = (event, newValue) => {
        if(newValue.password) {
            setSelectedDocument(newValue);
            setPasswordModal(true);
        }
        else {
            setSelectedDocument(newValue);
            setDisplayDocument(newValue);
        }
    };

    return (
        <>
            <PasswordFile open={passwordModal} close={() => setPasswordModal(false)} file={selectedDocument} setDisplayDocument={setDisplayDocument}/>
            <Stack width={'100%'}>
                <Tabs
                    value={displayDocument}
                    onChange={handleFileChange}
                    variant="scrollable"
                    allowScrollButtonsMobile
                    scrollButtons="auto"
                    indicatorColor='secondary'
                    textColor={'secondary'}
                    sx={{
                        '& .MuiTabs-scrollButtons': { bgcolor: 'fourth.main' }
                    }}
                >
                    {ELEMENT_LIST.map(element =>
                        <Tab
                            key={'File ' + element.title}
                            label={element.title}
                            value={element}
                            icon={element.password && <LockRounded />}
                            iconPosition={'bottom'}
                            sx={{width: '150px', height: '150px', bgcolor: 'fourth.main', margin: '0 5px'}}
                        />
                    )}
                </Tabs>
            </Stack>

            <Stack>
                {(displayDocument && displayDocument.type === 'pdf') && <PDFViewer pdfFile={displayDocument.url} />}
                {(displayDocument && displayDocument.type === 'audio') && <AudioPlayer audioFile={displayDocument} />}
                {(displayDocument && displayDocument.type === 'video') && <VideoPlayer videoFile={displayDocument} />}
            </Stack>
        </>
    );
}

function InvestigationReport() {

    return(
        <PDFViewer pdfFile={rapportEnquete}/>
    );
}
