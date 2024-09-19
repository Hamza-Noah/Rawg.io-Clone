import { Show, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          sm: `"nav main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            aside
          </GridItem>
        </Show>
        <GridItem area="main">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
