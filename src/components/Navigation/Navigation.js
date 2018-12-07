import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default class Navigation extends Component {
  render() {
    const { muscles } = this.props;

    return (
      <Paper>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
          <Tab label="All" />

          {muscles.map((muscle, index) => (
            <Tab key={index} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}
