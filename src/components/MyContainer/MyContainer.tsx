import "./mycontainer.css";
// components
import { Navbar, Home, Dishes, Serene } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="space-y-[6rem]">
        <Home />
        <Dishes />
        <Serene />
      </main>
    </>
  );
}
