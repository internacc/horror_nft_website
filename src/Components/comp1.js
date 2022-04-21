
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

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

const Comp1 = () => {
    const classes1 = useStyles();
    return (<div>
        <Box sx={{flexGrow: 1}}>
            <div className={classes1.comp_disp}>
                <div className='part1'>
            <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFA900' }}>
                <strong>DARE TO ENTER</strong>
            </Typography>
            <Button className={`'btn_prop' ${classes1.btn_prop}`}>
                <Typography variant="h5" component="div">
                JOIN OUR DISCORD
                </Typography>
            </Button></div>
            
            </div>
        </Box>
    </div>)
}
 
export default Comp1;