import { useEffect, useState } from "react";
import { adventures } from "../data/adventures";
import { useParams } from "react-router-dom";


const Adventure = ({ id }) => {
  const params = useParams();
  const { aid } = params;
  const [adv, setAdventure] = useState(null);

  useEffect(() => {
    if (aid) {
      setAdventure(adventures.filter((a) => a.id === Number(aid))[0]);
    }
  }, [aid]);

  useEffect(() => {
    if (id) {
      setAdventure(adventures.filter((a) => a.id === Number(id))[0]);
    }
  }, [id]);
  if (adv === null) return null;

  const { buffs } = adv;
  return (
    <>
      <h1 className="my-5 text-lg sm:text-4xl text-center text-primary">{adv?.name}</h1>

      <Section title={"Buffed Points"} array={buffs}>
        <div className="block">
          <div className="flex justify-evenly">
            {buffs?.map((buf, idx) => {
              return (
                <div key={idx} className="mx-10">
                  <h1 className="font-bold">{buf.type}</h1>
                  {buf.numbers.map((pos, idx) => {
                    return (
                      <p key={`a${idx}`}>
                        #{pos.number}:{pos.percentage}%
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title={"Recommended Solution"} array={adv.paths}>
        <div className="left ml-2 ">
          <a href={adv?.images?.solution} target="_blank" rel="noreferrer">
            <img src={adv.images.thumb} width={150} height={89} alt="adventure" />
          </a>
        </div>
        <div className="right ml-2 sm:ml-10">
          {adv.paths.map((path, idx) => {
            return (
              <p key={idx}>
                {path.colour}: {path.numbers}
              </p>
            );
          })}
        </div>
      </Section>

      <Section title={"Notes"} array={adv.notes}>
        <div className="right ml-2 sm:ml-10">
          {adv.notes?.map((note) => (
            <p className="mb-1" key={note.id}>
              <span className="text-bold">{note.id}.</span> {note.description}
            </p>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Adventure;

const Section = ({ children, title, array }) => {
  return (
    <div className={`${array ? "block" : "hidden"}`}>
      <h1 className="font-bold text-center sm:text-xl mb-2">{title}</h1>

      <div className="flex justify-center sm:text-xl mb-10">{children}</div>
    </div>
  );
};
