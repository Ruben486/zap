import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersAPI";
//custom hook para traer uuarios
export const useGetUsers = () => {
  return (
    useQuery({
      queryKey: ["usuarios"],
      queryFn: getUsers
  })
  );
};

