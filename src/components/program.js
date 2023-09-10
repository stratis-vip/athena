import { bronze } from "../data/bronze";
import { silver } from "../data/silver";
import { getOpponents } from "../lib";

export default function Rules() {
  console.log(silver, bronze);

  return (
    <div className="text-primary font-bold m-10">
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-3xl center mb-5"> Silver League</h3>
        <div className="">
          <table className="text-black">
            <tbody className="font-normal text-xl">
              {silver.map((team) => (
                <tr
                  key={team.position}
                  className={`${
                    team.name === "new athena" ? "bg-orange-300" : "bg-none"
                  }`}
                >
                  <td className="font-bold"> {team.name}</td>
                  {getOpponents(Number(team.position), team.league).map((r) => {
                    return (
                    <td key={team.position}>
                      {r}-{silver[r - 1].name}
                    </td>
                  )})}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-primary font-bold m-10">
        <div className="flex flex-col items-center mt-10">
          <h3 className="text-3xl center mb-5"> Bronze League</h3>
          <div className="">
            <table className="text-black">
              <tbody className="font-normal text-xl">
                {bronze.map((team) => (
                  <tr
                    key={team.position}
                    className={`${
                      team.name === "athena" ? "bg-orange-300" : "bg-none"
                    } `}
                  >
                    <td className="font-bold px-2 my-10"> {team.name}</td>
                    {getOpponents(Number(team.position), team.league).map(
                      (r) => (
                        <td className="px-2 my-3" key={team.name}>
                          {r} -{bronze[r - 1].name}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
