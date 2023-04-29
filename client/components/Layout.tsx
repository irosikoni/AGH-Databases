import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Sigmar_One } from 'next/font/google'
import Menu from "./Menu";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="container mx-auto">
      <header className="mt-4 py-4 w-full flex justify-between items-center border-spacing-2 border-cyan-900 border-b-2">

        <h1 className="text-4xl font-logo">Podróżnicy</h1>

        {user ? (
          <div>
            <span className="flex items-center space-x-2">
              Hello {user.name}
            </span>
            <span>{user.email}</span>
            <Link
              className="rounded-sm p-1 bg-red-600 text-red-50"
              href="/api/auth/logout"
            >
              Logout
            </Link>
          </div>
        ) : (
          <Link
            className="rounded-sm bg-green-600 text-green-50"
            href="/api/auth/login"
          >
            Login
          </Link>
        )}
      </header>
      <Menu />
      <main>{children}</main>
    </div>
  );
};
