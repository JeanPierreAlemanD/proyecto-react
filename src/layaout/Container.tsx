import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <main className="flex-1 max-w-7xl mx-auto">{children}</main>
);

export default Container;
