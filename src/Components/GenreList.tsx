import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre, i) => (
        <li key={i}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
