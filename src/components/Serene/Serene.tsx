import "./serene.css";
import bg from "/serene.jpg";
export default function Serene() {
  return (
    <>
      <article className="flex bg-violet-700 flex-wrap gap-[2rem] text-white justify-between py-[2rem] max-md:px-[1rem] px-[4rem] layoutSize">
        <section>
          <img
            src={bg}
            alt="logo"
            className="rounded-md h-[10rem] aspect-video"
          />
        </section>
        <section className="max-w-[40rem]">
          <h1 className="title text-start">Serene</h1>
          <p className="">
            During Ramadan, serene iftar gatherings blend tradition with
            exceptional cuisine. Amidst fragrant dishes and warm hospitality,
            bonds are forged and souls nourished. As night falls, lantern-lit
            ambience sets a magical scene, fostering gratitude and connection.
            In these cherished moments, Ramadan's true essence shines—unity,
            gratitude, and culinary delight.
          </p>
        </section>
      </article>
    </>
  );
}
