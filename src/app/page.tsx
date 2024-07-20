import UsersList from "./components/UsersList";
import UsersPage from "./users/page";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UsersPage />
    </main>
  );
}
