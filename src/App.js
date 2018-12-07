import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";

import { Footer, Header } from "./components";
import { Home } from "./pages";

const styles = {
  paper: {
    padding: "20px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        {/* <Grid container sm={12} spacing={16}>
          <Grid item sm>
            <Paper className={classes.paper}>Left</Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.paper}>Right</Paper>
          </Grid>
        </Grid> */}

        <Home />
      </Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(App));
