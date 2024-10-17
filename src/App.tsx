import { Show, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {

  
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  console.log(selectedGenre);

  return (
    <>
      <Grid
        templateAreas={{
          sm: `"nav main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={
          {
            base: "1fr",
            lg: "200px 1fr"
          }
        }
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
