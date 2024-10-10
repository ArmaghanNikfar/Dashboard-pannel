import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Modal,
  Grid,
  Box,
} from "@material-ui/core";
import { useState } from "react";
import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  root: { width: 325, maxWidth: 350 },
  media: {
    height: 250,
    transition: " all 0.2s linear;",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  imageContainer: {
    height: "80vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  img: { width: "100%", borderRadius: "10px" },
}));

        
           
const data = [
  {id: "1",image: 'images/img-1.jpg',title: 'image 1',},
  {id: "2",image: 'images/img-2.jpg',title: 'image 2',},
  {id: "3",image: 'images/img-3.jpg',title: 'image 3',},
  {id: "4",image: 'images/img-4.jpg',title: 'image 4',},
  {id: "5",image: 'images/img-5.jpg',title: 'image 5'},
  {id: "6",image: 'images/img-6.jpg',title: 'image 6'},
  {id: "7",image: 'images/img-7.jpg',title: 'image 7'},
  {id: "8",image: 'images/img-8.jpg',title: 'image 8'},
  {id: "9",image: 'images/img-9.jpg',title: 'image 9'},
];

export default function ImgGallery() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [srcImage, setSrcImage] = useState();

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Widget disableWidgetMenu>
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Modal open={open} onClose={handleClose} aria-labelledby={`Modal`}>
          <Box sx={style}>
            <div className={classes.imageContainer}>
              <img className={classes.img} id={`Modal`} src={srcImage} alt="" />
            </div>
          </Box>
        </Modal>
        {data?.map((item) => {
          return (
            <>
              <Grid item key={item.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                      onClick={() => {
                        setSrcImage(item.image);
                        setOpen(true);
                      }}
                    />
                    <CardContent>
                      <Typography>{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Widget>
  );
}
