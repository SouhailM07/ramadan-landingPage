import "./mycontainer.css";
// components
import {
  Navbar,
  Home,
  Dishes,
  Serene,
  SelectedCard,
  Footer,
} from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <SelectedCard />
      <main className="space-y-[6rem]">
        <Home />
        <Dishes />
        <Serene />
      </main>
      <Footer />
    </>
  );
}
