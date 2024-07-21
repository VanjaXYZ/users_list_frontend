import WelcomeScreen from "./components/(welcome-screen)/WelcomeScreen";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WelcomeScreen />
    </main>
  );
}
