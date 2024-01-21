import { tips } from "../data/tips";
import { adventures } from "../data/adventures";
import { useEffect } from "react";
import Section from "./section";
import Strongford from "../data/strongfold";
import json from "../../package.json"

import Adventure from './adventures'

const Guides = () => {
  useEffect(() => {
    console.log("Adventures", adventures);
  });
  return (
    <>
      <Section title={"Adventures"}>
        <div className=" text-center sm:text-xl text-red-500 italic mb-4">
          Doing adventure lower than level 9{" "}
          <span className="font-bold">is not </span>recommended by new athena.
          Resource are more limited.
        </div>

        <Adventure id={9} />
        <Adventure id={10} />
        <Adventure id={11} />
        <Adventure id={12} />
        <Adventure id={13} />
        <Adventure id={14} />

        {/* <div className="flex  flex-col justify-center items-center">
          <ul>
            {adventures.map((adv) => (
              <li className="sm:text-lg mt-1 ml-2" key={adv.id}>
                <a href={`/adventures/${adv.id}`}>{adv.name}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </Section>
      <Section title={"Assorted Tips"}>
        <div className="my-2 flex flex-col sm:text-xl">
          {tips.map((tip) => (
            <div className="sm:mx-20 mx-2 my-1 mb-2" key={tip.id}>
              <span className="text-primary">{tip.category}: </span>
              {tip.tip}
            </div>
          ))}
        </div>
      </Section>
      <Section title={"Strongford Quiz"}>
        <div className="text-center">(Version {json.version})</div>
        <Strongford />
      </Section>
    </>
  );
};

export default Guides;


