import useData from "./useData";


export interface Genre {
  id: number;
  name: string;
  background_image: string;
}


const useGames = () => useData<Genre>("/genres")

export default useGames;
