
import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import PDFViewer from "../../components/PDFViewer/PDFViewer";

import context from "../../assets/docs/Context_Epsilon.pdf";

export default function Presentation() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 200px)'} gap={'30px'}>
            <PDFViewer pdfFile={context} />
            <Link to={'/game'}>
                <Button variant='contained' color='secondary'>C'est partie !</Button>
            </Link>
        </Stack>
    );
}