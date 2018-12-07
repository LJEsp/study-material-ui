import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        {/* <AppBar>
          <Toolbar>
            <Typography variant="headline" color="inherit">
              Test
            </Typography>
          </Toolbar>
        </AppBar> */}

        <Paper>
          <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>
      </Fragment>
    );
  }
}
