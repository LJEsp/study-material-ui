import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import { muscles, exercises } from "./store.js";

import { Exercises, Navigation, Header } from "./components";
import { Home } from "./pages";

const styles = {};

class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscles();

    const { classes } = this.props;

    return (
      <Fragment>
        <Header />

        <Navigation muscles={muscles} />

        <Exercises exercises={exercises} />
      </Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(App));
