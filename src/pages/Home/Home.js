import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import LeftPane from "./LeftPane/LeftPane";
import RightPane from "./RightPane/RightPane";

class Home extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm>
          <LeftPane />
        </Grid>

        <Grid item sm>
          <RightPane />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles({})(Home);
