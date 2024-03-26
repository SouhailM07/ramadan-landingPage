import "./mycard.css";
// types
import { dishes_t } from "@/types";
export default function MyCard({ img, title }: dishes_t) {
  return (
    <>
      <li
        role="listitem"
        className="cursor-pointer bg-white space-y-[1rem] hover:scale-110 duration-300 transition-all w-[15rem] min-h-[15rem] rounded-lg p-[1.5rem]"
      >
        <img src={img} className=" aspect-square mx-auto rounded-sm" />
        <h1 className="capitalize font-medium text-[1.2rem]">{title}</h1>
      </li>
    </>
  );
}
