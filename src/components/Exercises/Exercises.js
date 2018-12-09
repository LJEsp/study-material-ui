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

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      margin: 10,
      height: "calc(100% - 20px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  paperLeft: {
    extend: "paper",
    marginRight: "0 !important"
  },
  paperRight: {
    extend: "paper"
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
});

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

    console.log(classes);

    return (
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.item}>
          <Paper className={classes.paperLeft}>
            {exercises.map(([group, exercises]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="h5"
                    style={{ textTransform: "capitalize" }}
                    color="primary"
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
                          <IconButton
                            onClick={() => onSelectEdit(id)}
                            color="secondary"
                          >
                            <Edit />
                          </IconButton>

                          <IconButton
                            onClick={() => onDelete(id)}
                            color="secondary"
                          >
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

        <Grid item xs={12} sm={6} className={classes.item}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom color="primary">
              {title}
            </Typography>

            {editMode ? (
              <Form
                key={id}
                exercise={exercise}
                muscles={muscles}
                onSubmit={onEdit}
              />
            ) : (
              <Fragment>
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
