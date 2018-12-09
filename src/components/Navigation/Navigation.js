import React, { Component } from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default class Navigation extends Component {
  render() {
    const { muscles, onSelect, category } = this.props;
    const index = category
      ? muscles.findIndex(muscle => muscle === category) + 1
      : 0;

    const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? "" : muscles[index - 1]);
    };

    return (
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />

          {muscles.map(muscle => (
            <Tab key={muscle} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}
