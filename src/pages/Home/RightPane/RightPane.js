import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    padding: "20px"
  }
};

class RightPane extends Component {
  render() {
    const { classes } = this.props;

    return <Paper className={classes.root}>Right Pane</Paper>;
  }
}

export default withStyles(styles)(RightPane);
