import React from "react";
import {
Avatar,
Typography,
List,
ListItem,
ListItemText,
Grid,
} from "@material-ui/core";
import me from './MYXJ_20221105191554723_save.jpg'
import Dot from "../../components/Sidebar/components/Dot";
const AboutUs = () => {
return (
<div>
<Avatar
alt="Armaghan Nikfar"
src={me}
style={{ margin: "auto", marginBottom: "10px" , width:"140px",height:"140px"}}
/>
<Typography align="center" variant="h6" gutterBottom>
Armaghan Nikfar
</Typography>
<Typography align="center" variant="body1">
About Me
</Typography>
<Typography align="center" variant="body2" paragraph>
Professional Experience
</Typography>
<Typography align="left" variant="body2" paragraph>
I'm Armaghan Nikfar, a Frontend developer experienced in developing usable,
useful & well-constructed websites and applications with React, Redux,
JavaScript, JQuery & NextJs.
</Typography>
<Typography align="left" variant="h3" paragraph>
Skills
</Typography>
<Grid container>
<List>
<ListItem>
<ListItemText primary="Command over HTML, CSS & their allied tools" />
</ListItem>
<ListItem>
<ListItemText primary="Expertise in JavaScript, React Js, Python, React Native, Next Js & JQuery" />
</ListItem>
<ListItem>
<ListItemText primary="Extensive knowledge of Redux" />
</ListItem>
<ListItem>
<ListItemText primary="Working knowledge of Restful API, UI/UX design and development" />
</ListItem>
<ListItem>
<ListItemText primary="Team working, Git repository, Time managing" />
</ListItem>
</List>
</Grid>
<Typography align="left" variant="h3" paragraph>
Education Background
</Typography>
<List>
<ListItem>
<ListItemText primary="Islamic Azad University of Karaj" secondary="Master degree of AI & Robotics science (still a student)" />
</ListItem>
<ListItem>
<ListItemText primary="Islamic Azad University of Karaj" secondary="Bachelor degree of Software engineering (completed in 2020)" />
</ListItem>
</List>
<Typography align="left" variant="h3" paragraph>
Contact Information
</Typography>
<List>
<ListItem>
<ListItemText primary="Email: armaghannikfar@gmail.com" />
</ListItem>
<ListItem>
<ListItemText primary="Location: Iran, Karaj" />
</ListItem>
<ListItem>
<ListItemText primary="Phone: +989981511296" />
</ListItem>
<ListItem>
<ListItemText primary="Website: armaghannikfar.ir" />
</ListItem>
</List>
<Typography align="left" variant="h3" paragraph>
Professional Experience
</Typography>
<List>
<ListItem>
<ListItemText
primary="4 years experience in handling customer requirements in technical solutions at Shatel Co"
/>
</ListItem>
<ListItem>
<ListItemText
primary="4 years experience of coding & developing websites and applications in React Js, Redux, JavaScript, Chrome Extensions & NodeJs environment at Shatel Co"
/>
</ListItem>
<ListItem>
<ListItemText
primary="Over 4 years experienced in working with JavaScript technology-based solutions"
/>
</ListItem>
<ListItem>
<ListItemText
primary="3 years experienced in designing responsive interfaces for complex web solutions"
/>
</ListItem>
<ListItem>
<ListItemText
primary="4 years experienced in developing, deploying, testing, and debugging websites and applications"
/>
</ListItem>
<ListItem>
<ListItemText
primary="4 years experienced in customer technical support at Shatel Co"
/>
</ListItem>
</List>
<Typography align="left" variant="h3" paragraph>
Certificates
</Typography>
<List>
<ListItem>
<ListItemText
primary="Network+ course certificate from Shatel company"
/>
</ListItem>
</List>
</div>
);
};

export default AboutUs;