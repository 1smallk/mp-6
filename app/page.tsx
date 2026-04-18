import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <header>
        <h1>MP-6 OAuth</h1>
      </header>

      <div className="page-wrapper">
        <div className="card">
          {session ? (
            <>
              <img
                src={session.user?.image ?? ""}
                alt="avatar"
                width={80}
                height={80}
                className="avatar"
              />
              <h2>Welcome, {session.user?.name}!</h2>
              <p>{session.user?.email}</p>

              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button className="signout-btn" type="submit">
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <>
              <h2>OAuth Demo</h2>
              <p>Sign in with your preferred provider</p>

              <form action={async () => {
                "use server";
                await signIn("github");
              }}>
                <button className="github-btn" type="submit">
                  Sign in with GitHub
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}