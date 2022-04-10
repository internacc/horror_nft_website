import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React, { useState, useRef } from 'react';
import { TextField, Container, makeStyles } from '@mui/material';
import ".././styles/mainpg.css";
import emailjs from 'emailjs-com';
import DoneIcon from '@mui/icons-material/Done';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Regis = () => {
    const form = useRef();
    const [submitVal,setsubmitVal]=useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name,setName]=useState('');
    const [mail,setMail]=useState('');
    const [nameErr,setNameErr]=useState(false);
    const [mailErr,setMailErr]=useState(false);
    function sendEmail(e){
        e.preventDefault(); //prevents the default behaivour which is reloading of the webpage after submission.
        setNameErr(false);
        setMailErr(false);
        if(name==='')
        {
            setNameErr(true);
        }
        if(mail==='')
        {
            setMailErr(true);
        }
        if(name && mail){
            setsubmitVal(true);
            console.log(name);
            console.log(mail);
            console.log(submitVal);
            // if(submitVal==='Registered Successfully!')
            // {
            //     console.log('here');
            //     setsubmitVal('Submit');
            //     // emailjs.sendForm('service_un9gevp', 'template_3kd5ma2', e.target, 'ADlyTiJjgYKJWz3kO')
            //     // .then((result) => {
            //     //     console.log(result.text);
            //     // }, (error) => {
            //     //     console.log(error.text);
            //     // });
            // }
        }
    };
    return (
        <div className="intro">
            <p>Deep in the Etherium Blockchain lies
                great evil..and it is coming out</p>
            <Button onClick={handleOpen}>Register yourself</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition>
                <Fade in={open}>
                    <Container>
                        <Box sx={style}>
                            <form ref={form} onSubmit={sendEmail} noValidate autoComplete='off'>
                                <TextField label="Enter your name" color="secondary" fullWidth type="from_name" 
                                required onChange={(e)=>setName(e.target.value)} error={nameErr}/>
                                <br/>
                                <br></br>
                                <br></br>
                                <TextField label="Enter your email ID" color="secondary" fullWidth type="email" 
                                name="message" required onChange={(e)=>setMail(e.target.value)}
                                error={mailErr}/>
                                <br></br>
                                <br></br>
                                {submitVal?<Button endIcon={<DoneIcon />} type="submit" variant="contained" color='success' disabled={true}>Registered successfully</Button>:<Button endIcon={<SendIcon />} type="submit" variant="contained" color='error'>Submit</Button>}
                            </form>
                        </Box>
                    </Container>
                </Fade>
            </Modal>
        </div>

    );
}

export default Regis;