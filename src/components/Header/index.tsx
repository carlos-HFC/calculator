"use client";

import { memo } from "react";

import { Nav } from "../Nav";

export const Header = memo(() => {
  return (
    <header className="bg-zinc-900 w-full text-white">
      <Nav />
    </header>
  );
});