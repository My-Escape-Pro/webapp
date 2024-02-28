
import {useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@mui/icons-material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({url, orientation}) {
    const [totalPage, setTotalPage] = useState(0)
    const [numPage, setNumPage] = useState(0);

    const onDocumentLoadSuccess = ({numPages}) => {
        setTotalPage(numPages);
        setNumPage(1);
    }

    return (
        <Stack alignItems={'center'} gap={1}>
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
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={numPage} orientation={orientation} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </Stack>
    );
}
