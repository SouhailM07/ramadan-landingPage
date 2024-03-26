import "./navbar.css";
// shadcn-ui
import { Button } from "../ui/button";
// assets
import logo from "/logo.svg";

export default function Navbar() {
  const navLinks: string[] = ["Home", "Dishes", "Serene"];
  return (
    <>
      <header className="z-[99] py-[0.4rem] bg-[#f7f7f7] sticky top-0 max-w-[80rem] mx-auto">
        <nav className="flex justify-between items-center px-[2rem]">
          <img src={logo} alt="logo" className="h-[3rem] w-[3rem]" />
          <ul role="list" className="flex max-md:hidden space-x-[1.5rem]">
            {navLinks.map((e, i) => {
              return (
                <li role="listitem" key={i} className="cursor-pointer ">
                  <a href={`#${e}`}>{e}</a>
                </li>
              );
            })}
          </ul>
          <a href="#footer">
            <Button className="bg-violet-700 hover:bg-violet-600">
              Share the Spirit
            </Button>
          </a>
        </nav>
      </header>
    </>
  );
}
