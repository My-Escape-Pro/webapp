
import {useState} from "react";
import {Document, Page} from 'react-pdf';
import {Button, Divider, Skeleton, Stack, Typography} from "@mui/material";
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@mui/icons-material";

export default function PDFViewers({url, orientation}) {
    const [totalPage, setTotalPage] = useState(0)
    const [numPage, setNumPage] = useState(0);

    const onDocumentLoadSuccess = ({numPages}) => {
        setTotalPage(numPages);
        setNumPage(1);
    }

    return (
        <Stack alignItems={'center'} gap={1} height={'100%'}>
            {totalPage > 1 &&
                <Stack flexDirection='row' width={'100%'} justifyContent={'space-between'}>
                    <Button
                        variant='contained'
                        startIcon={<ArrowBackIosRounded />}
                        disabled={numPage === 1}
                        onClick={() => setNumPage(numPage - 1)}
                    >
                        Page Précédente
                    </Button>
                    <Stack flexDirection='row' justifyContent={'center'} alignItems={'center'} gap={1} p={1} borderRadius={'10px'} backgroundColor={'primary.main'}>
                        <Typography color={'white'}>
                            {numPage}
                        </Typography>
                        <Divider flexItem orientation={'vertical'} color={'white'} />
                        <Typography color={'white'} fontWeight={'bold'}>
                            {totalPage}
                        </Typography>
                    </Stack>
                    <Button
                        variant='contained'
                        endIcon={<ArrowForwardIosRounded />}
                        disabled={numPage === totalPage}
                        onClick={() => setNumPage(numPage + 1)}
                    >
                        Page Suivante
                    </Button>
                </Stack>
            }
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess} loading={<Skeleton variant="rectangular" width={100} height={100}/>}>
                <Page pageNumber={numPage} orientation={orientation} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </Stack>
    );
}
