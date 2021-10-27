import React from "react";
import { Link } from "react-router-dom";

// mui components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";

// custom components
import Logo from "components/Logo/logo";

// redux store
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  profileIcon: {},
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
});

export default function Header() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} to={`/home`}>
          <Logo light />
        </Link>
        <div>
          <Link className={classes.link} to={`/home/profile`}>
            <Avatar
              alt={user.name}
              src={user.profileImage}
              aria-label="account of current user"
              className={classes.profileIcon}
            />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
