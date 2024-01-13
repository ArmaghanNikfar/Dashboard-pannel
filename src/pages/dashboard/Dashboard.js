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
// import {
//   ResponsiveContainer,
//   ComposedChart,
//   AreaChart,
//   LineChart,
//   Line,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
//   YAxis,
//   XAxis,
// } from "recharts";
//food logo
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
// import mock from "./mock";
import { CheckBox } from "@material-ui/icons";
// import Table from "./components/Table/Table";
// import BigStat from "./components/BigStat/BigStat";

// const mainChartData = getMainChartData();
// const PieChartData = [
//   { name: "گروه A", value: 400, color: "primary" },
//   { name: "گروه B", value: 300, color: "secondary" },
//   { name: "گروه C", value: 300, color: "warning" },
//   { name: "گروه D", value: 200, color: "success" },
// ];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  //var [mainChartState, setMainChartState] = useState("monthly");
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



        {/* <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="تقسیم درآمد" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart>
                    <Pie
                      data={PieChartData}
                      innerRadius={30}
                      outerRadius={40}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap", fontSize: 12 }} >
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  نمودار روزانه  
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      تبلت
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      موبایل
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="secondary" />
                    <Typography className={classes.mainChartLegentElement}>
                      دسکتاب
                    </Typography>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">روزانه</MenuItem>
                  <MenuItem value="weekly">هفتگی</MenuItem>
                  <MenuItem value="monthly">ماهانه</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid> */}
        {/* {mock.bigStat.map(stat => (
          <Grid item md={4} sm={6} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))} */}
        {/* <Grid item xs={12}>
          <Widget
            title="پشتیبانی درخواست ها"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
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

// #######################################################################
// function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
//   var array = new Array(length).fill();
//   let lastValue;

//   return array.map((item, index) => {
//     let randomValue = Math.floor(Math.random() * multiplier + 1);

//     while (
//       randomValue <= min ||
//       randomValue >= max ||
//       (lastValue && randomValue - lastValue > maxDiff)
//     ) {
//       randomValue = Math.floor(Math.random() * multiplier + 1);
//     }

//     lastValue = randomValue;

//     return { value: randomValue };
//   });
// }

// function getMainChartData() {
//   var resultArray = [];
//   var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
//   var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
//   var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

//   for (let i = 0; i < tablet.length; i++) {
//     resultArray.push({
//       tablet: tablet[i].value,
//       desktop: desktop[i].value,
//       mobile: mobile[i].value,
//     });
//   }

//   return resultArray;
// }
