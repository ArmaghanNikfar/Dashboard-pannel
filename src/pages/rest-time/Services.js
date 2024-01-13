import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Link,
  Grid,
} from "@material-ui/core";
import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  root: { width: 350, maxWidth: 375 },
  media: {
    height: 250,
    transition: " all 0.2s linear;",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "blur(1px)",
    },
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const data = [
  {
    id: "1",
    link: "https://google.com/",
    image: "/images/OrderPortal.jpg",
    title: "order food",
  },
  {
    id: "2",
    link: "https://google.com/",
    image: "images/Offer.png",
    title: "send your offers",
  },
  {
    id: "3",
    link: "https://google.com/",
    image: "images/orderfromsupermarket.jpg",
    title: "buy from supermarket",
  },
  {
    id: "4",
    link: "https://google.com/",
    image: "images/CoffeeShop.jpg",
    title: "reserve from coffee shop",
  },
];

export default function Services() {
  const classes = useStyles();
  return (
    <Widget disableWidgetMenu>
      <Grid container justify="center" alignItems="center" spacing={4}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id}>
              <Link className={classes.link} href={item.link} target={"_blank"}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography>{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Widget>
  );
}
