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
    const {
      classes,
      exercises,
      category,
      onSelect,
      exercise: {
        id,
        title = "Welcome!",
        description = "Please select an exercise from the list on the left."
      }
    } = this.props;

    return (
      <Grid container spacing={8}>
        <Grid item sm>
          <Paper className={classes.paper}>
            {exercises.map(([group, exercises]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="h5"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>

                  <List component="ul">
                    {exercises.map(({ title, id }) => (
                      <ListItem key={id} button>
                        <ListItemText
                          primary={title}
                          onClick={() => onSelect(id)}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
            )}
          </Paper>
        </Grid>

        <Grid item sm>
          <Paper className={classes.paper}>
            <Typography variant="h4">{title}</Typography>

            <Typography variant="body1">{description}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Exercises);
