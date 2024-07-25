export const filterUsers = (data: any) => {
  const filteredUsers = data.usersList
    ?.filter((user: any) => {
      if (typeof user?.[data.filter] === "string") {
        return user?.[data.filter]
          ?.toLowerCase()
          .includes(data.query.toLowerCase());
      } else if (typeof user?.[data.filter] === "number") {
        return user?.[data.filter]
          ?.toString()
          .includes(data.query.toLowerCase());
      }
    })
    ?.sort((a: any, b: any) => {
      if (
        typeof a?.[data.filter] === "string" &&
        typeof b?.[data.filter] === "string"
      ) {
        if (data.sortBy === "asc") {
          return a?.[data.filter].localeCompare(b?.[data.filter]);
        } else {
          return b?.[data.filter].localeCompare(a?.[data.filter]);
        }
      } else if (
        typeof a?.[data.filter] === "number" &&
        typeof b?.[data.filter] === "number"
      ) {
        if (data.sortBy === "asc") {
          return a?.[data.filter] - b?.[data.filter];
        } else {
          return b?.[data.filter] - a?.[data.filter];
        }
      }
    });
  return filteredUsers;
};

// Filter data and sort it based on given prompts
