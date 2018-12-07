import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Exercise Database
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
