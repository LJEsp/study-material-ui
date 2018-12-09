import React, { Component, Fragment } from "react";
import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Form from "../../Form/Form";

class Create extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();

    this.props.onExerciseCreate(exercise);
  };

  render() {
    return (
      <Fragment>
        <Fab color="secondary" size="small" onClick={this.handleToggle}>
          <Add />
        </Fab>

        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle>Create a New Exercise</DialogTitle>

          <DialogContent>
            <DialogContentText>Fill out the form below.</DialogContentText>

            <Form
              muscles={this.props.muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default Create;
