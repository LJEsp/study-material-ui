import React, { Component } from "react";
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  DialogActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";



class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
  };

  render() {
    const { classes, muscles: categories, exercise } = this.props;

    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.formControl}
          fullWidth
        />

        <br />

        <FormControl fullWidth>
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
          fullWidth
        />

        <br />

        <DialogActions>
          <Button
            onClick={this.handleSubmit}
            color="secondary"
            variant="contained"
            disabled={!title || !muscles}
          >
            {exercise ? "Edit" : "Create"}
          </Button>
        </DialogActions>
      </form>
    );
  }
}

export default withStyles({})(Form);
