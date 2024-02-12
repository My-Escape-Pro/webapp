
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PasswordFile( {open, close, file, setDisplayDocument} ) {

    return (
        <Dialog
            open={open}
            onClose={close}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const password = formJson.password;
                    if(password !== file.password) {
                        return null;
                    }
                    else {
                        setDisplayDocument(file);
                        close();
                    }
                },
            }}
        >
            <DialogTitle>Débloquage du dossier "{file.title}"</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Veuillez entrer le mot de passe :
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="password"
                    name="password"
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Annuler</Button>
                <Button type="submit" variant='contained' color="secondary">Débloquer</Button>
            </DialogActions>
        </Dialog>
    );
}