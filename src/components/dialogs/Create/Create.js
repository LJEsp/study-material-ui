import React, { Component, Fragment } from "react";
import {
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    width: 500
  }
});

class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = () => {
    // TODO: validate
    const { exercise } = this.state;

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
    });

    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;
    const { muscles: categories, classes } = this.props;

    return (
      <Fragment>
        <Fab color="secondary" size="small" onClick={this.handleToggle}>
          <Add />
        </Fab>

        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>

          <DialogContent>
            <DialogContentText>Fill out the form below.</DialogContentText>

            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
                className={classes.formControl}
              />

              <br />

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>

                <Select
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                  // inputProps={}
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <br />

              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                multiline
                rows="4"
                className={classes.formControl}
              />
            </form>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="contained"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Create);
