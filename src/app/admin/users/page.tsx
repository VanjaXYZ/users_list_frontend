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
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";

  return (
    <div className="flex flex-col items-center p-12 gap-8 w-full">
      <CreateUserForm />
      <SearchBar placeholder="Search users..." />
      <Suspense key={query} fallback={"Loading"}>
        <UsersList query={query} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
