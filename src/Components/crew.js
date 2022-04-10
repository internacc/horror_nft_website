import * as React from 'react';
import "../styles/crew.css";
import datas from "../jsondata/crew_data.json";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import AOS from "aos";
import "aos/dist/aos.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.warning,
}));
const useStyles = makeStyles((theme) =>
  createStyles({
    item_disp:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    grid_disp:{
      margin: '2%'
    },
    card_cont:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#3F0071'
    }
  }),
);

const Crew = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const classes = useStyles();
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <CardActions >
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardContent>
      
    </React.Fragment>
  );
  // const Cards = ({info})=>{
  //   info.map((data)=>{
  //     <React.Fragment>
  //       <CardContent className={classes.card_cont}>
  //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //         Hello
  //       </Typography>
  //       {/* <img src={require(data.img)}></img>
  //       <img src={data.insta} alt="not available" />
  //       <img src={data.linkedin} alt="not available" />
  //       <img src={data.fb} alt="not available" /> */}
  //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //         {data.insta}
  //         {data.img}
  //         {data.linkedin}
  //         {data.fb}
  //       </Typography>
  //       <CardActions>
  //         <Button size="small">{data.linkedin}</Button>
  //         <Button size="small">{data.insta}</Button>
  //         <Button size="small">{data.fb}</Button>
  //     </CardActions>
  //     <Typography variant="h5" component="div">
  //         {data.name}
  //       </Typography>
  //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //         {data.title}
  //       </Typography>
  //     </CardContent>
  //   </React.Fragment>
  //   })
  // }
  return (
    <div className='cards' data-aos="zoom-in-up" data-aos-easing="linear">
      <Box sx={{ flexGrow: 0.7 }} className={classes.grid_disp}>
      <Grid container spacing={10}>
        
        <Grid item xs={12} md={3}>
          <Item sx={{height: '50vh'}} className={classes.item_disp}><Card variant="outlined" sx={{height: '100%', width: '100%'}} className={classes.item_disp}>{card}</Card ></Item>
        </Grid>
        
        
        <Grid item xs={12} md={3}>
          <Item sx={{height: '50vh'}} className={classes.item_disp}><Card variant="outlined" sx={{height: '100%', width: '100%'}} className={classes.item_disp}>{card}</Card ></Item>
        </Grid>
        
        
        <Grid item xs={12} md={3}>
          <Item sx={{height: '50vh'}} className={classes.item_disp}><Card variant="outlined" sx={{height: '100%', width: '100%'}} className={classes.item_disp}>{card}</Card ></Item>
        </Grid>
        
        
        <Grid item xs={12} md={3}>
          <Item sx={{height: '50vh'}} className={classes.item_disp}><Card variant="outlined" sx={{height: '100%', width: '100%'}} className={classes.item_disp}>{card}</Card ></Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
    // datas.map((data) => (
    //     <div className="container" key={data.id}>
    //         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    //             <Grid container spacing={2}>
    //                 <Grid item xs={12} md={6}>
    //                     <Item><div className="picture">
    //                         <h2>Picture</h2>
    //                     </div>
    //                     <div className="links">
    //                         <h1>{data.linkedin}</h1>
    //                         <h1>{data.insta}</h1>
    //                         <h1>{data.fb}</h1>
    //                     </div>
    //                     <div className="team_content">
    //                         <h1>{data.name}</h1>
    //                         <h3>{data.title}</h3>
    //                     </div></Item>
    //                 </Grid>
    //             </Grid>
    //         </Box>
    //     </div>
    // ))

  );
}

export default Crew;