
import {useState} from "react";
import {Document, Page} from 'react-pdf';
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@mui/icons-material";

export default function PDFViewer({pdfFile}) {
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
            <Box width={'595px'}>
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={numPage} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document>
            </Box>
        </Stack>
    );
}
