import { getUsers } from "../../actions/getUsers";
import FilteredUsersList from "./FilteredUsersList";

const UsersList = async ({
  query,
  filter,
  currentPage,
  sortBy,
}: {
  query: string;
  filter: string;
  currentPage: number;
  sortBy: string;
}) => {
  const usersList = await getUsers();

  return (
    <div className="">
      <FilteredUsersList
        query={query}
        sortBy={sortBy}
        filter={filter}
        usersList={usersList}
      />
    </div>
  );
};

export default UsersList;
