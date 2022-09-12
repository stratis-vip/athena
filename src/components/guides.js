import { tips } from "../data/tips";
import { adventures } from "../data/adventures";
import { useEffect } from "react";

const Guides = () => {
  useEffect(() => {
    console.log("Adventures", adventures);
  });
  return (
    <>
      <Section title={"Adventures"}>
        <div className=" text-center text-xl text-red-500 italic mb-4">
          Doing adventure lower than level 9{" "}
          <span className="font-bold">is not </span>recommended by new athena.
          Resource are more limited.
        </div>
        <div className="flex  flex-col justify-center items-center">
          <ul>
            {adventures.map((adv) => (
              <li className="text-lg mt-1" key={adv.id}>
                <a href={`/adventures/${adv.id}`}>{adv.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section title={"Assorted Tips"}>
        <div className="my-5 flex flex-col text-xl">
          {tips.map((tip) => (
            <div className="mx-20 my-1" key={tip.id}>
              <span className="text-primary">{tip.category}: </span>
              {tip.tip}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Guides;

const Section = ({ children, title }) => {
  return (
    <div className="flex flex-col ">
      <h1 className="mt-10 text-primary text-3xl font-bold mx-4 text-center">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};
