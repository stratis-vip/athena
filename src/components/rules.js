import { useState } from "react";

const rules = [
  {
    id: 1,
    title: "Get the weekly activity level (7000Activity / 500 Titanite)",
    explanation:
      "Everybody must get 7000 activity every week. This is about 1000 activity a day. If one day you can't get 1000points, you can get more the next day. Same, applies to Titanite.",
  },
  {
    id: 2,
    title: "Do not attack guild mates at Arena / Grand Arena",
    explanation:
      "There are so many other players to attack! Team mates don't need our competition!",
  },

  {
    id: 3,
    title: "Answer to public chat or message by generals.",
    explanation:
      "Game is a team work! Especially on war, some communication is necessary. Everybody, especially champions, must watch public chat and their messages for instructions. it's preferred not to close your private messages.",
  },
  {
    id: 4,
    title: "Follow the route at adventures",
    explanation:
      "Experienced users knows the path for adventures. When in doubt, the creator of adventure must provide paths to other members. Suggested paths are in our site!",
  },
  {
    id: 5,
    title: "Follow the plan at war and make your attacks",
    explanation:
      "War planners make a lot of research to find the best strategy for the team. If you have any suggestion or doubt, report it at chat or with pm. Attacking elsewhere is not desirable!",
  },
  {
    id: 6,
    title: "Repeated abstinence from GWar lead to a ban for GWar",
    explanation:
      "Every champion must make his attacks under normal circumstances. Exceptional reasons happens to anyone and they are expecte to happened.",
  },
  {
    id: 7,
    title: "Complete your weekly attacks at Asgard and boss attacks",
    explanation:
      "Every win during the week increase team's morale and gives to the player more resources.",
  },
  {
    id: 8,
    title: "Get no more than 12M on Friday attacks to Asgard's boss",
    explanation:
      "This rule is about leave room for all players to get the 10M prize on a weaker boss.",
  },
  
  
];
const Rules = () => {
  console.log(rules);
  return (
    <>
      <div className="mx-4">
        {rules.map((rule) => (
          <Explanation rule={rule} />
        ))}
      </div>
    </>
  );
};

export default Rules;

const Explanation = ({ rule }) => {
  const [hide, setHide] = useState(true);
  return (
    <div key={rule.id} className="text-xl my-2">
      <div
        className="cursor-pointer font-bold "
        onClick={() => setHide((h) => !h)}
      >
        {rule.id}. {rule.title}
      </div>
      <div className={`${hide ? "hidden" : "block"}`}>{rule.explanation}</div>
    </div>
  );
};
