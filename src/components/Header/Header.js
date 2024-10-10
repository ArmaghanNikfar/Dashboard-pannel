import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  
  Menu,
  MenuItem,
  Fab,

} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowForward as ArrowForwardIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "../Wrappers";
import Notification from "../Notification/Notification";
import UserAvatar from "../UserAvatar/UserAvatar";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

const messages = [
  {
    id: 0,
    variant: "warning",
    name: "سعید محمدیها",
    message: "سلام چطوری",
    time: "9:32",
  },
  {
    id: 1,
    variant: "success",
    name: "سعید محمدی",
    message: "داشبود جدید من رو نگاه کن",
    time: "9:18",
  },
  {
    id: 2,
    variant: "primary",
    name: "علی محمدیها",
    message: "میخوام برنامه ها رو تغییر بدم",
    time: "9:15",
  },
  {
    id: 3,
    variant: "secondary",
    name: "ستاره محدی",
    message: "خبرهای خوب از واحد فروش دارم",
    time: "9:09",
  },
];

const notifications = [
  { id: 0, color: "warning", message: "پیام ها" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "بهترین راه برای به دست آوردن...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "این یک نوتیفیکیشن ساده است",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 سفارش جدید امروز دریافت شد",
  },
];

export default function Header(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <ArrowForwardIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
             Dahboard Pannel
        </Typography>
        <div className={classes.grow} />
        {/* <Button component={Link} href="https://flatlogic.com/templates/react-material-admin-full" variant={"outlined"} color={"secondary"} className={classes.purchaseBtn}>Unlock full version</Button> */}
        {/* <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <InputBase
            placeholder="جست و جو..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div> */}
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          // onClick={e => {
          //   setNotificationsMenu(e.currentTarget);
          //   setIsNotificationsUnread(false);
          // }}
          className={classes.headerMenuButton}
        >
           <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color="warning"
          >
           
          </Badge>
          <NotificationsIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          // onClick={e => {
          //   setMailMenu(e.currentTarget);
          //   setIsMailsUnread(false);
          // }}
          className={classes.headerMenuButton}
        >
           <Badge
            badgeContent={isMailsUnread ? messages.length : null}
            color="secondary"
          >
            
          </Badge> 
          <MailIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="mail-menu"
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              پیام های جدید
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="secondary"
            >
              {messages.length} پیام های جدید
            </Typography>
          </div>
          {messages.map(message => (
            <MenuItem key={message.id} className={classes.messageNotification}>
              <div className={classes.messageNotificationSide}>
                <UserAvatar color={message.variant} name={message.name} />
                <Typography size="sm" color="text" colorBrightness="secondary">
                  {message.time}
                </Typography>
              </div>
              <div
                className={classNames(
                  classes.messageNotificationSide,
                  classes.messageNotificationBodySide,
                )}
              >
                <Typography weight="medium" gutterBottom>
                  {message.name}
                </Typography>
                <Typography color="text" colorBrightness="secondary">
                  {message.message}
                </Typography>
              </div>
            </MenuItem>
          ))}
          <Fab
            variant="extended"
            color="primary"
            aria-label="Add"
            className={classes.sendMessageButton}
          >
            پیام جدید ارسال کن
            <SendIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>
        <Menu
          id="notifications-menu"
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {notifications.map(notification => (
            <MenuItem
              key={notification.id}
              onClick={() => setNotificationsMenu(null)}
              className={classes.headerMenuItem}
            >
              <Notification {...notification} typographyVariant="inherit" />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
             username
            </Typography>
            {/* <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="#"
            >
              Flalogic.com
            </Typography> */}
          </div>
          {/* <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> پروفایل
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> وظایف
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> پیام ها
          </MenuItem> */}
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Exit
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
