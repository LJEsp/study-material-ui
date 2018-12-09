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
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Consumer } from "../../../context";
import { withContext } from "../../../context";

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
    const { fullScreen } = this.props;
    const { muscles } = this.props;

    console.log(fullScreen);

    return (
      <Fragment>
        <Fab color="secondary" size="small" onClick={this.handleToggle}>
          <Add />
        </Fab>

        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleToggle}
          fullWidth
        >
          <DialogTitle>Create a New Exercise</DialogTitle>

          <DialogContent>
            <DialogContentText>Fill out the form below.</DialogContentText>

            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withContext(withMobileDialog()(Create));
