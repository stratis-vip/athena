import adv11small from "./Adventure11small.jpg";
import adv11 from "./Adventure11.jpg";
import adv10small from "./Adventure10small.jpg";
import adv10 from "./Adventure10.jpg";
import adv12small from "./Adventure12small.jpg";
import adv12 from "./Adventure12.jpg";
import adv13small from "./13small.jpg";
import adv13 from "./13.jpg";
import adv09small from "./adv09small.jpg";
import adv09 from "./adv09.jpg";

const adventures = [
  {
    id: 9,
    name: "Adventure 09 - Valley of the Elements",
    images: {
      thumb: adv09small,
      solution: adv09,
    },
    paths: [
      {
        colour: "blue",
        numbers: "02-06-10-15-20-14-24-29-25-36-39-42-44-Boss(x2)",
      },
      {
        colour: "orange",
        numbers: "03-08-12-11-07-16-21-26-30-31-32-35-37-40-Boss",
      },
      {
        colour: "green",
        numbers: "03-04-13-19-18-23-17-22-38-41-43-46-Boss(x3)",
      },
    ],
  },
  {
    id: 10,
    name: "Adventure 10 - Valley of the Elements",
    images: {
      thumb: adv10small,
      solution: adv10,
    },
    paths: [
      {
        colour: "blue",
        numbers: "03-02-06-11-17-25-30-35-29-34-33-38-43-44-Boss",
      },
      {
        colour: "orange",
        numbers: "04-08-13-18-22-26-31-36-40-46-45-39-33-28-20",
      },
      {
        colour: "green",
        numbers: "05-09-14-19-23-27-32-37-42-48-51-50-49-47-41",
      },
    ],
  },
  {
    id: 11,
    name: "Adventure 11 - Ghirwil City Depths",
    images: {
      thumb: adv11small,
      solution: adv11,
    },
    paths: [
      {
        colour: "blue",
        numbers: "03-02-06-11-17-25-30-35-29-34-33-38-43-44-Boss",
      },
      {
        colour: "orange",
        numbers: "04-08-13-18-22-26-31-36-40-46-45-39-33-28-20",
      },
      {
        colour: "green",
        numbers: "05-09-14-19-23-27-32-37-42-48-51-50-49-47-41",
      },
    ],
  },
  {
    id: 12,
    name: "Adventure 12 - Fall of the Celestial City",
    images: {
      thumb: adv12small,
      solution: adv12,
    },
    paths: [
      {
        colour: "blue",
        numbers: "08-11-17-24-23-32-33-25-34-25-26-18-Boss(x3)",
      },
      {
        colour: "red",
        numbers: "02-04-07-16-23-24-14-12-15-28-20-19-18-boss(x2)",
      },
      {
        colour: "yellow",
        numbers:
          "05-01-09-03-06-10-22-31-36-35-29-[34-29-30-21] or [30-21-13(x2)] ",
      },
    ],
    notes: [
      {
        id: 1,
        description: "Red path, is better suited to mage teams.",
      },
      {
        id: 2,
        description:
          "#24 is red path's responsibility but if it create problem blue path can help",
      },
    ],
  },
  {
    id: 13,
    name: "Adventure 13 on 12 map - Fall of the Celestial City",
    images: {
      thumb: adv12small,
      solution: adv12,
    },
    paths: [
      {
        colour: "blue",
        numbers: "07-11-17-24-23-33-34-25-32-25-26-18-Boss(x3)",
      },
      {
        colour: "red",
        numbers: "02-04-07-06-16-23-24-14-12-15-28-20-19-18-boss(x2)",
      },
      {
        colour: "yellow",
        numbers:
          "08-01-09-03-05-10-22-31-36-35-29-[32-29-30-21] or [30-21-13(x2)] ",
      },
    ],
    notes: [
      {
        id: 1,
        description: "Only map of adventure 12 is recommended!",
      },
      {
        id: 2,
        description: "Red path, is better suited to mage teams.",
      },
      {
        id: 3,
        description:
          "#24 is red path's responsibility but if it create problem blue path can help",
      },
      {
        id: 4,
        description: "Yellow path starts with #8.",
      },
    ],
  },
  {
    id: 14,
    name: "Adventure 13 on 12 map #2- Fall of the Celestial City",
    images: {
      thumb: adv13small,
      solution: adv13,
    },
    paths: [
      {
        colour: "red",
        numbers: "09-03-05-10-22-31-36-35-29-30-21-13(x2)",
      },
      {
        colour: "yellow",
        numbers: "07-02-04-06-16-23-33-34-25-26-18-26-14-24-17",
      },
      {
        colour: "green",
        numbers: "08-12-14-12-15-28-29-32-29-28-20-19-20-boss(x2)",
      },
    ],
    notes: [
      {
        id: 1,
        description: "Only map of adventure 12 is recommended!",
      },
      {
        id: 2,
        description: "Yellow path, is better suited to mage teams.",
      },
      {
        id: 3,
        description: "yellow must not loose a spot for 4 chests",
      },
      {
        id: 4,
        description: "green can lost one spot (if he can win boss on one spot)",
      },
      {
        id: 5,
        description: "red can lost 2 spots (13 is not necessary) ",
      },
      {
        id: 6,
        description:
          "if red member clear 13, yellow or green can lost one more spot ",
      },
    ],
  },
];

//https://static.wikia.nocookie.net/hero-wars/images/2/26/Hericus_-_Adventure_10.jpg

const Adventures = () => {
  console.log(adventures);
  return (
    <>
      <div className="mt-2 text-center text-xl text-red-500">
        Doing adventure lower than level 9{" "}
        <span className="font-bold">is not </span>recommended by new athena.
        Resource are more limited.
      </div>
      {adventures.map((adv) => (
        <div
          className="text-xl p-1 flex flex-col border-spacing-0 border border-black m-4 rounded-xl"
          key={adv.id}
        >
          <div className="text-center  font-bold">
            <a id={adv.id} className="text-primary font-bold">
              {adv.name}
            </a>
          </div>
          <div className="grid grid-cols-solution items-center"></div>
          <div className="grid grid-cols-solution items-center">
            <a href={adv.images.solution} target="_blank">
              <img src={adv.images.thumb} />
            </a>
            <div className="ml-2">
              {adv.paths.map((sol) => (
                <div key={sol.colour}>
                  <div>
                    {sol.colour}: {sol.numbers}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={adv.notes ? "" : "hidden"}>
            <h1 className="text-xl font-bold underline ">Notes</h1>
            <ul>
              {adv.notes &&
                adv.notes.map((note) => (
                  <li className="px-3 mb-1" key={note.id}>
                    {note.description}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Adventures;
