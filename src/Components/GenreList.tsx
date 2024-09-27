import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre, i) => (
        <li key={i}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
