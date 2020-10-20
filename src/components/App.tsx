import React, { Component, ReactNode } from "react";
import { Button } from "@material-ui/core";

export default class App extends Component<unknown, unknown> {
  render(): ReactNode {
    return (
      <div>
        <Button color="primary">Hello World</Button>
      </div>
    );
  }
}
