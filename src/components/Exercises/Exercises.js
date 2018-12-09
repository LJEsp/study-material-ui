import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import Form from "../Form/Form";

const styles = {
  paper: {
    padding: 20,
    margin: 5,
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
      },
      onDelete,
      onSelectEdit,
      editMode,
      onEdit,
      muscles,
      exercise
    } = this.props;

    return (
      <Grid container spacing={0}>
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

                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>

                          <IconButton onClick={() => onDelete(id)}>
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
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
            {editMode ? (
              <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
            ) : (
              <Fragment>
                <Typography variant="h4">{title}</Typography>

                <Typography variant="body1">{description}</Typography>
              </Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Exercises);
