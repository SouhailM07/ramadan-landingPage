import "./mycontainer.css";
// components
import { Navbar, Home, Dishes } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="space-y-[6rem]">
        <Home />
        <Dishes />
      </main>
    </>
  );
}
