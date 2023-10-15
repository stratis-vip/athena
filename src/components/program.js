import { bronze } from "../data/bronze";
import { silver } from "../data/silver";
import { getOpponents } from "../lib";

export default function Rules() {
  console.log(silver, bronze);
  const days = ['mon', 'tue', 'wed', 'thu', 'fri']
  return (
    <div className="text-primary font-bold sm:mt-10 mt-3 mx-2">
      <div className="flex flex-col sm:items-center sm:mt-10">
        <h3 className="text-xl sm:text-3xl center sm:mb-5 mb-2" > Silver League</h3>
        <div className="">
          <div className="text-black">
            <div className="font-normal text-sm sm:text-xl">
              {silver.map((team) => (
                <div
                  key={team.position}
                  className={`${team.name === "new athena" ? "bg-orange-300" : "bg-none"
                    } grid  sm:grid-cols-6 sm:gap-5 sm:text-2xl mb-5 sm:mb-3`}
                >
                  <div className="font-bold"> {team.name}</div>
                  {getOpponents(Number(team.position), team.league).map((r, idx) => {
                    return (
                      <div key={team.position} className="flex" >
                        <div className="sm:hidden font-semibold">{days[idx]} ➠ </div>
                        {r}-{silver[r - 1].name}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-primary font-bold sm:m-10 mt-3">
        <div className="flex flex-col sm:items-center sm:mt-10">
          <h3 className="text-xl sm:text-3xl center sm:mb-5 mb-2"> Bronze League</h3>
          <div className="">
            <div className="text-black">
              <div className="font-normal sm:text-xl">
                {bronze.map((team) => (
                  <div
                    key={team.position}
                    className={`${team.name === "athena" ? "bg-orange-300" : "bg-none"
                      } grid  sm:grid-cols-6 sm:gap-5 sm:text-2xl mb-5 sm:mb-3`}
                  >
                    <div className="font-bold"> {team.name}</div>
                    {getOpponents(Number(team.position), team.league).map(
                      (r, idx) => (
                        <div className="flex" key={team.name}>
                          <div className="sm:hidden font-semibold">{days[idx]} ➠ </div>
                          {r} -{bronze[r - 1].name}
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
