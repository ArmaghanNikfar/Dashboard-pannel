import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
  } from "@material-ui/core";
  import Dot from "../../components/Sidebar/components/Dot";
  
  const useStyles = makeStyles((theme) => ({
  link: {
  marginRight: "3px",
  marginLeft: "3px",
  "&:hover": {
  cursor: "pointer",
  },
  },
  image: {
  marginBottom: '15px',
  borderRadius: '20px',
  width:"280px"
  },
  centerContent: {
  textAlign: 'center',
  },
  }));
  
  const RestTimeRules = () => {
  var classes = useStyles();
  return (
  <>
  <Grid container direction="column" alignItems="center">
  <Grid item className={classes.centerContent}>
  <Typography variant="h3" gutterBottom paragraph>
  Rest Time Rules
  </Typography>
  </Grid>
  <Grid item className={classes.centerContent}>
  <img className={classes.image} src="images/intro.jpg" alt="Rules Image" />
  </Grid>
  <Grid item container direction="column" alignItems="center" className={classes.centerContent}>
  <Typography variant="h5" paragraph gutterBottom>
  Rest time is standardized by the software based on the shift entry time and responsibility, as indicated in the specified chart.
  </Typography>
  <Typography variant="h5" paragraph gutterBottom>
  Please ensure that the rest time does not exceed 30 minutes.
  </Typography>
  <Typography variant="h5" paragraph gutterBottom>
  Due to the high number of individuals present during the shift, rest time is highly compressed. Please log off/log in only during your designated time.
  </Typography>
  </Grid>
  <Grid item className={classes.centerContent}>
  <List>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  If you need to swap rest time, coordinate with individuals who have similar responsibilities and be sure to inform one of the shift supervisors.
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  Before starting the rest time, pay attention to your group and log off exactly during that time (for 30 minutes).
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  After seeing your name, activate your group on the software's
  <Link
  color={"primary"}
  href={"https://"}
  target={"_blank"}
  className={classes.link}
  >
  Alarm Clock
  </Link>
  .
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  Maintaining silence and order during rest time helps colleagues in logging in.
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  Please postpone all follow-ups, issue reports, and other matters to after dinner during rest time.
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemIcon>
  <Dot color="warning" />
  </ListItemIcon>
  <ListItemText>
  If you have any suggestions or criticisms, please discuss them with Manager.
  </ListItemText>
  </ListItem>
  </List>
  </Grid>
  </Grid>
  </>
  );
  };
  
  export default RestTimeRules;