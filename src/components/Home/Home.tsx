import "./home.css";
import bg from "/home.jpg";
export default function Home() {
  return (
    <>
      <article className="layoutSize">
        <img src={bg} alt="img" className="w-full aspect-video" />
      </article>
    </>
  );
}
