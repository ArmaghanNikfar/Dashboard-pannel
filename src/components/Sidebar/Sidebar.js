import React, { useState, useEffect } from "react";
import { Avatar, Drawer, Grid, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import profile from '../../images/images.jpg'
// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Components",
    icon: <TypographyIcon />,
    children: [
      { label: "Table", link: "/app/rest-time/table" },
      { label: "Rules", link: "/app/rest-time/rules" },
      { label: "Settings", link: "/app/rest-time/dash" },
      { label: "Services", link: "/app/rest-time/services" },
    ],
  },

  // {
  //   id: 4,
  //   label: "UI عناصر",
  //   link: "/app/ui",
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { label: "آیکون ها", link: "/app/ui/icons" },
  //     { label: "نمودارها", link: "/app/ui/charts" },
  //     { label: "مقشه گوگل", link: "/app/ui/maps" },
  //   ],
  // },
  // { id: 5, type: "divider" },
  // { id: 6, type: "title", label: "راهنما" },
  // { id: 7, label: "کتابخانه", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  // { id: 8, label: "پشتیبانی", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  // { id: 9, label: "پرسش و پاسخ", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  // { id: 10, type: "divider" },
  // { id: 11, type: "title", label: "پروژه ها" },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <Grid style={{marginTop:"5px"}} container justify="center">
        <Avatar src={profile} style={{width:"100px" ,
       boxShadow: "0px 3px 11px 0px #2632d5, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        height:"100px"}}/>
      </Grid>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
