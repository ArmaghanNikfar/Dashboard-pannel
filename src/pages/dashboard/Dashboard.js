import React, { useEffect, useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Card,
  FormControlLabel,
  Checkbox,

} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useTheme } from "@material-ui/styles";
import ApexCharts from 'apexcharts';
import cardBackground from './images/card.jpg'
import Dot from "../../components/Sidebar/components/Dot";

import food from "./images/3565302-200.png";

// services logo 
import services from "./images/services.jpg";

// gallary logo
import gallary from "./images/gallary.jpg";

// rules logo
import rules from "./images/download.png";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import { CheckBox } from "@material-ui/icons";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  useEffect(() => {
    const options = {
      colors: ['#2ea2fa', '#00e396', '#239b39', '#239b39'],
      series: [
        {
          name: "Sales",
          type: "column",
          data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
          name: "Product Count",
          type: "column",
          data: [20, 30, 25, 40, 30, 35, 40],
        },
        {
          name: "Average Sales",
          type: "line",
          data: [25, 35, 30, 45, 35, 40, 45],
        },
      ],
      chart: {
        stacked: false,
        zoom: {
          enabled: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityTo: 0.9,
          stops: [0, 60, 100]
        }
      },

      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      },
      grid: {
        row: {
          colors: ['#e1e4e7', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [2],
        style: {
          colors: ["#536dfe", 'rgb(0, 138, 243)', '#239b39']
        }
      },
      xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      yaxis: [
        {
          seriesName: "Sales",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "Sales (Column)",
            style: {
              color: "#536dfe",
            },
          },
        },
        {
          seriesName: "Product Count",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
          title: {
            text: "Product Count (Column)",
            style: {
              color: "#00E396",
            },
          },
        },
        {
          seriesName: "Average Sales",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FEB019",
          },
          labels: {
            style: {
              colors: "#FEB019",
            },
          },
          title: {
            text: "Average Sales (Line)",
            style: {
              color: "#FEB019",
            },
          },
        },
        
      ],
      tooltip: {
        fixed: {
          enabled: false,
        },
        y: {
          formatter: function (val, opts) {
            return opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
          },
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
      stroke: {
        width: [1, 1, 4, 3]
      },
    };


    const chart = new ApexCharts(document.querySelector("#callDetailsChart"), options);
    chart.render();

  }, [])


  return (
    <>

      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Your RestTime"
            disableWidgetMenu
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
            style={{
              boxShadow: "0px 3px 11px 0px #2632d5, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            }}
          >
            <Grid container item alignItems={"center"}>
              <Grid container justify="center">
                <img src={food} width="60px" />
              </Grid>
              <Grid container justify="flex-start">
                <Typography style={{ fontSize: "14px" }} noWrap>
                  12:30 - 13:00
                </Typography>
              </Grid>
              <Button variant="contained" size="medium" color="secondary">
                <Typography weight="medium" noWrap>
                  wanna change it?
                </Typography>
              </Button>
            </Grid>
          </Widget>
        </Grid>

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Rules"
            disableWidgetMenu
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
            style={{
              boxShadow: "0px 3px 11px 0px #2632d5, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            }}
          >
            <Grid container justify="center">
              <img src={rules} width="70px" />
            </Grid>
            <Link to='./rest-time/services' target="_blank" >
              <Button variant="contained" size="medium" color="secondary" href="">
                <Typography weight="medium" noWrap>
                  Rules Page
                </Typography>
              </Button>
            </Link>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="services"
            disableWidgetMenu
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
            style={{
              boxShadow: "0px 3px 11px 0px #2632d5, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            }}
          > <Grid container justify="center">
              <img src={services} width="60" />
            </Grid>
            <Link to='./rest-time/services' target="_blank" >
              <Button variant="contained" size="medium" color="secondary" href="">
                <Typography weight="medium" noWrap>
                  services page
                </Typography>
              </Button>
            </Link>

          </Widget>
        </Grid >
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Galary"
            disableWidgetMenu
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
            style={{
              boxShadow: "0px 3px 11px 0px #2632d5, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            }}
          > <Grid container justify="center">
              <img src={gallary} width="60px" />
            </Grid>
            <Link to='./gallery' target="_blank" >
              <Button variant="contained" size="medium" color="secondary" href="">
                <Typography weight="medium" noWrap>
                  Galary Page
                </Typography>
              </Button>
            </Link>
          </Widget>
        </Grid >


      </Grid>
      <Grid container style={{ marginTop: "10px" }}>
        <div id="callDetailsChart" style={{ width: "700px" }}
        ></div>
        <Grid item>
          <Card style={{
            width: "290px",
            marginLeft: "20px",
            padding:"9px",
            paddingBottom:"5px",
            height: "400px", backgroundImage: `url(${cardBackground})`
          }}>
            <div>
             
              <Typography color="primary">My weekly todo list</Typography>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 1"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 2"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 3"
              />
              </Grid>
              </Grid>

              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 4"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 5"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 6"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 7"
              />
              </Grid>
              </Grid>
              <Grid container >
                <Grid item style={{marginTop:"15px"}}>
              <Dot color="warning"  />
              </Grid>
              <Grid item>
              <FormControlLabel
                control={<Checkbox color="orange" />}
                label="Task 8"
              />
              </Grid>
              </Grid>
            </div>
            <Grid container justify="flex-end" >
              <Button
              style={{marginBottom:"5px"}}
              variant="contained" color="primary">Done</Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

