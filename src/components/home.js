import { news } from "../data/news";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-5 sm:mt-10 text-xl">
      <div className={`
      mx-4
      sm:w-1/2`}>
        {/* <div className="text-3xl text-center col-start-2">News</div> */}
        {news.map((neo, index) => (
          <div key={index} className="mb-3 text-lg sm:text-xl">
            <span className="font-extrabold text-primary">{neo.date}:</span>{" "}
            {neo.text}
            {neo.place && <span> ({neo.place}th place</span>}
            {neo.place && neo.points ? ` with ${neo.points} points)` : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
