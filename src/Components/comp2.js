
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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

const Comp2 = () => {
    const classes2 = useStyles();
    return (<div>
        <Box sx={{flexGrow: 1}}>
            <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFA900' }}>
                <strong>FOLLOW US</strong>
            </Typography>
            <div className={classes2.btn_disp}>
            <Button>
                <TwitterIcon fontSize='large' className={classes2.icon_prop}/>
            </Button>
            <Button>
                <LinkedInIcon fontSize='large' className={classes2.icon_prop}/>
            </Button>
            <Button>
                <InstagramIcon fontSize='large' className={classes2.icon_prop}/>
            </Button></div>
        </Box>
    </div>)
}
 
export default Comp2;