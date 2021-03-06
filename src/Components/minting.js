import '../styles/mint.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
// import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Roadmap from './roadmap';
import Team from './team';
import AOS from "aos";
import "aos/dist/aos.css";
import Foot from './foot';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#181818',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.warning,
}));

const useStyles = makeStyles(({theme}) =>
    createStyles({
        nft_mint_disp: {
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        typo_design: {
            color: "#FFA900",
            textAlign: "center",
            height: "10vh",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
        },
        // img_align: {
        //     width: '60%', height: '100vh', margin: 'auto'
        // },
        // card_content: {
        //     height: '60vh', width: '80%',
        //     display: 'flex', flexDirection: 'column'
        // },
        btn_display:{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button_prop:{
            background: '#000000',
            color: '#ffffff',
            border: '2px solid #3F0071',
            width: '100%',
            '&:hover':{
                background: '#3F0071'
            }
        },
        icon_prop:{
            height: '3rem',
            width: '3rem'
        },
        btn_disp:{
            display:'flex',
            alignItems: 'center',
            justifyContent:'space-around'
        },
        comp_disp:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'space-'
        }
    }),
);

//

// const card = (
//     <React.Fragment>
//         <CardContent sx={{
//             display: 'flex', justifyContent: 'space-around', marginTop: '0%', backgroundColor: '#610094',
//             color: '#FFFFFF'
//         }}>
//             <Typography variant="h5" component="div">
//                 Price/NFT
//             </Typography>

//             <Typography variant="h5" component="div">
//                 Minted NFT
//             </Typography>
//         </CardContent>
//         <CardActions sx={{ justifyContent: 'space-between', marginTop: 'auto' }}>
//             <Button size="small" sx={{ flexGrow: 0.5, backgroundColor: '#F78812', color: '#FFFFFF', marginLeft: "0.5rem" }}>Connect Wallet</Button>
//             <Button size="small" sx={{ flexGrow: 0.5, backgroundColor: '#F78812', color: '#FFFFFF', marginRight: "0.5rem" }}>Mint NFT</Button>
//         </CardActions>
//     </React.Fragment>
// );
const itemData = [
    {
        img: 'images/hr_img1.png',
        title: 'img1',
    },
    {
        img: 'images/hr_img2.png',
        title: 'img2',
    },
    {
        img: 'images/hr_img3.png',
        title: 'img3',
    },
    {
        img: 'images/hr_img4.png',
        title: 'img4',
    },
    {
        img: 'images/hr_img5.png',
        title: 'img5',
    },
    {
        img: 'images/hr_img6.png',
        title: 'img6',
    },
];
var id = parseInt(Math.random() * itemData.length);
var prev=0;
const Mint = () => {
    //using the state of the image to re-render it again and again, with new values of image id.
    const [imgId, setImgId] = useState(0);
    //created a separate another state so that the random image can be rendered again and again infinitely.
    const [Togglestate,setTogglestate]=useState(0);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    //all the useEffect are called for the first time, always, irrspective of the state dependencies it is given
    useEffect(() => {
        // function goes here
        id = parseInt(Math.random() * itemData.length);
        setTimeout(() => {
            setTogglestate(prev=!prev);
            setImgId(id);
        }, 4000)
    },[Togglestate])
    //JSX
    function Toggle(props) {
        var id = props.id;
        return (
            <div>
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 0 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[0].img} alt="not available" />
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 1 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[1].img} alt="not available" />
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 2 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[2].img} alt="not available" />
            </div>
        );
    }

    //JSX
    function Toggle1(props) {
        var id = props.id;
        return (
            <div>
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 3 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[3].img} alt="not available" />
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 4 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[4].img} alt="not available" />
                <img style={{display: "flex", flexAlign: "center", alignItems: "center", height: "33vh", width: "100%", opacity: `${id === 5 ? "1" : "0"}`, transition: "all 1000ms ease-in-out" }} src={itemData[5].img} alt="not available" />
            </div>
        );
    }
    const classes = useStyles();
    return (
        <div data-aos="zoom-out" className="mint_section">
            
                <Box sx={{ flexGrow: 1 }} spacing={10}>
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12}>
                            <Item sx={{ height: '100vh' }}>
                                <Box sx={{
                                    width: "auto",
                                    height: "100vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    {/*For toggling the image, of we can say for the animation purpose*/}
                                    <Toggle id={imgId} />
                                </Box>
                            </Item>

                        </Grid>

                        <Grid item xs={12} md={6} sx={{marginTop: '5rem'}}>
                            {/* <Item className={classes.nft_mint_disp}>
                                <Card variant="outlined" className={classes.card_content} sx={{ backgroundColor: '#950101', borderRadius: '10%' }}>{card}</Card>

                            </Item> */}
                            <Typography variant="h2" component="div" className={`'btn_class' ${classes.typo_design}`}>
                                <strong>Capture it before it escapes!</strong>
                            </Typography>
                            <Item className={classes.btn_display}>
                            <Button variant="contained" color="error" sx={{height: '5rem', width: '20rem', margin: '3rem'}}>
                                Opensea<SendIcon sx={{marginLeft: '2rem'}}/></Button>
                                <Button variant="contained" color="error" sx={{height: '5rem', width: '20rem', margin: '3rem'}} >
                                Rariable<SendIcon sx={{marginLeft: '2rem', display: 'block'}}/></Button>
                                </Item>
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <Item sx={{ height: '100vh' }}>
                                <Box sx={{
                                    width: "20vw",
                                    height: "100vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>

                                    <Toggle1 id={imgId} />
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            
            <Roadmap />
            <Team />
            <Foot />
        </div>

    );
}

export default Mint;