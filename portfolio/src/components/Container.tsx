import { ReactNode } from "react";

 const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full max-w-6xl h-screen mx-auto px-10">
      {children}
    </main>
  )
 }
export default Container;