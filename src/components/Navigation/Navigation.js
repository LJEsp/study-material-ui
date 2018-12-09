import React, { Component } from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import withWidth from "@material-ui/core/withWidth";

class Navigation extends Component {
  render() {
    const { muscles, onSelect, category, width } = this.props;
    const index = category
      ? muscles.findIndex(muscle => muscle === category) + 1
      : 0;

    const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? "" : muscles[index - 1]);
    };

    return (
      <Paper square={true}>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== "xs"}
          scrollable={width === "xs"}
          // scrollButtons="on"
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

export default withWidth()(Navigation);
