import { useState } from "react";
import { Show, Grid, GridItem, HStack } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatfromSelector from "./Components/PlatfromSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


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
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingInline={2} marginBottom={5}>
            <PlatfromSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => { setGameQuery({ ...gameQuery, platform }) }} />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}></SortSelector>
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
