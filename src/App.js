import React from "react";
import DayList from "./components/DayList";
import AddDay from "./components/AddDay";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = ({ days }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div style={styleApp}>
        <AddDay />
        <DayList days={days} />
      </div>
    </MuiThemeProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#ffc107" }
  },
  typography: {
    useNextVariants: true
  }
});

const styleApp = {
  padding: "5rem",
  height: "100%",
  width: "100wh",
  background: "rgb(50, 209, 175)"
};

const mapStateToProps = state => {
  return {
    days: state.list.days
  };
};

export default connect(mapStateToProps)(App);
