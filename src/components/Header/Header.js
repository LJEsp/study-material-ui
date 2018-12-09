import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "./Create/Create";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flex: {
    flex: 1
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.flex}>
              Exercise Database
            </Typography>

            <Create />
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
