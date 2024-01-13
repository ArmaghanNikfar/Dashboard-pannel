import React, { Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link, Card } from "@material-ui/core";
import Icon from "@mdi/react";

//icons
import {
  mdiInstagram as InstagramIcon,
  mdiTwitter as TwitterIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
// context
import { useLayoutState } from "../../context/LayoutContext";
import CircularProgress from "@material-ui/core/CircularProgress";

// pages

const Dashboard = React.lazy(() => import("../../pages/dashboard"));
const RestTime = React.lazy(() => import("../../pages/rest-time/RestTime"));
const RestTimeDashboard = React.lazy(() =>
  import("../../pages/rest-time/RestTimeDashboard"),
);
const RestTimeRules = React.lazy(() =>
  import("../../pages/rest-time/RestTimeRules"),
);
const AboutUs = React.lazy(() => import("../../pages/about-us/AboutUs"));
const Services = React.lazy(() => import("../../pages/rest-time/Services"));
const ImgGallery = React.lazy(() => import("../../pages/imgGallery/ImgGallery"));

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress size={70} />
                </div>
              }
            >
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/rest-time/table" component={RestTime} />
              <Route path="/app/rest-time/dash" component={RestTimeDashboard} />
              <Route path="/app/rest-time/rules" component={RestTimeRules} />
              <Route path="/app/rest-time/services" component={Services} />
              <Route path="/app/gallery" component={ImgGallery} />
              <Route path="/app/about-us" component={AboutUs} />
            </Suspense>
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
          
              <Link
                color={"primary"}
                onClick={() => {
                  props.history.push("/app/about-us");
                }}
                className={classes.link}
              >
                About me
              </Link>
              <Link
                style={{marginLeft:"16px"}}
                color={"primary"}
                onClick={() => {
                  props.history.push("/app/gallery");
                }}
                className={classes.link}
              >
                galary
              </Link>
            </div>
            <div>
              <Link href={"https://www.instagram.com"} target={"_blank"}>
                <IconButton aria-label="instagram">
                  <Icon path={InstagramIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://twitter.com"} target={"_blank"}>
                <IconButton aria-label="twitter">
                  <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              {/* <Link href={""} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link> */}
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
