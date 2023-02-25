import { signIn, signOut, useSession } from "next-auth/react";
import Img from "next/image";

export const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name
          ? `Notes for ${sessionData?.user?.name}`
          : `Notes`}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <div className="flex">
              <div className="flex-1 pl-5">
                <Img
                  width={50}
                  height={50}
                  className="w-10 rounded-full"
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.image ?? ""}
                />
              </div>
              <div
                tabIndex={0}
                className="btn-ghost rounded-btn btn text-primary-content"
                onClick={() => void signOut()}
              >
                Sign Out
              </div>
            </div>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
