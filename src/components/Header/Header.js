import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
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

            <Create muscles={muscles} onExerciseCreate={onExerciseCreate} />
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
