import { useState } from "react";
import { Show, Grid, GridItem, HStack, Box } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatfromSelector from "./Components/PlatfromSelector";
import SortSelector from "./Components/SortSelector";
import "./App.css";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingInline={2}>
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5} marginBottom={5}>
              <PlatfromSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => {
                  setGameQuery({ ...gameQuery, platform });
                }}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
