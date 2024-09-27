import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
    const {genres} = useGenres();

    console.log(genres);
    
  return <></>;
};

export default GenreList;
