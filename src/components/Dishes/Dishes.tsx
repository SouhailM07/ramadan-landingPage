import "./dishes.css";
// components
import { MyCard } from "@/components";
//
import { dishes } from "@/array";
export default function Dishes() {
  return (
    <>
      <article
        id="Dishes"
        className="bg-[url('/dishesBg.jpg')] space-y-[4rem] py-[2rem]"
      >
        <h1 className="title text-white">Dishes</h1>
        <ul className="flex-wrap px-[2rem] max-w-[70rem] flex justify-between gap-[3rem] mx-auto ">
          {dishes.map((e, i) => {
            return <MyCard key={i} {...e} />;
          })}
        </ul>
      </article>
    </>
  );
}
