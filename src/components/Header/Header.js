import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Create from "./Create/Create";

export default class Header extends Component {
  render() {
    const { muscles, onExerciseCreate } = this.props;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
              Exercise Database
            </Typography>

            <Create muscles={muscles} onCreate={onExerciseCreate} />
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
