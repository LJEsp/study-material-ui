import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: "auto"
  }
};

class Exercises extends Component {
  render() {
    const { classes, exercises } = this.props;

    console.log(exercises);

    return (
      <Grid container spacing={8}>
        <Grid item sm>
          <Paper className={classes.paper}>
            {exercises.map(([group, exercises], index) => (
              <Fragment key={index}>
                <Typography
                  variant="h5"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>

                <List component="ul">
                  {exercises.map(({ title }, index) => (
                    <ListItem key={index} button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ))}
          </Paper>
        </Grid>

        <Grid item sm>
          <Paper className={classes.paper}>
            <Typography variant="h4">Welcome!</Typography>

            <Typography variant="body1">
              Please select an exercise from the list on the left.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Exercises);
