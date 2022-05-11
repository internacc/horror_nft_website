import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css'
import Comp1 from './comp1';
import Comp2 from './comp2';

//this cannot be found in docs. It is the syntax to make our own custom css and apply it to the Tags or components we want to apply to
//the website. makeStyles and createStyles are the one that needs to be imported
const useStyles = makeStyles((theme) =>
    createStyles({
        btn_prop:{
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
            justifyContent: 'space-between'
        }
    }),
);

//taken directly from @mui docs
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// const Enter = () => {
//     const classes1 = useStyles();
//     return (<div>
//         <Box sx={{flexGrow: 1}}>
//             <div className={classes1.comp_disp}>
//                 <div className='part1'>
//             <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFA900' }}>
//                 <strong>DARE TO ENTER</strong>
//             </Typography>
//             <Button className={`'btn_prop' ${classes1.btn_prop}`}>
//                 <Typography variant="h5" component="div">
//                 JOIN OUR DISCORD
//                 </Typography>
//             </Button></div>
            
//             </div>
//         </Box>
//     </div>)
// }
// const Follow = () => {
//     const classes2 = useStyles();
//     return (<div>
//         <Box sx={{flexGrow: 1}}>
//             <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFA900' }}>
//                 <strong>FOLLOW US</strong>
//             </Typography>
//             <div className={classes2.btn_disp}>
//             <Button>
//                 <TwitterIcon fontSize='large' className={classes2.icon_prop}/>
//             </Button>
//             <Button>
//                 <LinkedInIcon fontSize='large' className={classes2.icon_prop}/>
//             </Button>
//             <Button>
//                 <InstagramIcon fontSize='large' className={classes2.icon_prop}/>
//             </Button></div>
//         </Box>
//     </div>)
// }
const Footer = () => {
    
    return (<div>
        <Box sx={{ flexGrow: 1 , height: '50vh'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Item sx={{ height: "50vh", display: 'flex', justifyContent: 'start', alignItems: 'start', width: '100%', padding: '5%' }}><Comp1 /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ height: "50vh", display: 'flex', justifyContent: 'end', alignItems: 'start', width: '100%', padding: '5%' }}><Comp2 /></Item>
                </Grid>
            </Grid>
            <div className='part2'>
            <Typography variant="h5" gutterBottom sx={{ color: '#fff', marginBottom: '100%', width: '100%', align: 'start',}}>
                Copyright statement 
            </Typography></div>
        </Box>
    </div>);
}

export default Footer;
