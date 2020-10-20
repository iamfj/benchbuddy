import React, { Component, ReactNode } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface AppState {
  value: number;
}

export default class App extends Component<unknown, AppState> {
  public constructor(props: unknown) {
    super(props);

    this.setState({
      value: 0,
    });
  }

  public render(): ReactNode {
    return (
      <Box height="100%">
        <BottomNavigation
          value={0}
          onChange={(event, newValue: number) => {
            this.setState({ value: newValue });
          }}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    );
  }
}
