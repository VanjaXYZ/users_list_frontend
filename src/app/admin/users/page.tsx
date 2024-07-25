import CreateUserForm from "@/app/components/(create-user)/CreateUserForm";
import UsersList from "@/app/components/(create-user)/UsersList";
import SearchBar from "@/app/components/(shared)/SearchBar";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    filter?: string;
    page?: string;
    sort?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const filterParam = searchParams?.filter || "name"; // if there is no filter chosen add 'name' value to it as default
  const currentPage = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sort || "";

  return (
    <div className="flex flex-col p-12 gap-8 w-full">
      <CreateUserForm />
      <SearchBar placeholder="Search users..." />
      <Suspense key={query + currentPage} fallback={"Loading"}>
        <UsersList
          query={query}
          filter={filterParam}
          currentPage={currentPage}
          sortBy={sortBy}
        />
      </Suspense>
    </div>
  );
};

export default UsersPage;
