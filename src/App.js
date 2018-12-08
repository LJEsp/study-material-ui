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
    exercises,
    category: "",
    exercise: {}
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

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(exercise => exercise.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;

    const { classes } = this.props;

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Navigation
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />

        <Exercises
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          exercise={exercise}
        />
      </Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(App));
