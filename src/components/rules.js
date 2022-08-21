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

const orientationMember = [];
const Rules = () => {
  console.log(rules);
  return (
    <>
      <h1 className="mt-5 text-center text-5xl text-orange-400">
        Welcome to New Athena!
      </h1>
      <div className="mx-4">
        <h1 className="mt-2 text-2xl font-bold">
          General rules of our Guild{" "}
          <span className="text-lg italic font-normal">(press at any rule to see a short explanation)</span>.
        </h1>
        {rules.map((rule) => (
          <Explanation rule={rule} />
        ))}
      </div>
      <div className="mx-4">
        <div>
          <h1 className="text-2xl font-bold mt-10">
            Instructions to new Members.
          </h1>
          <div className="text-lg">
            <p>We are sure that you enjoy your stay with us!</p>
            <p>Some rules of thumbs to make your life easier!</p>
            <ol>
              <li className="ml-3 list-inside list-decimal">
                Be active and try to get the weekly activity levels. Activities
                and Titanites help the whole team to develop faster! it's a
                win-win practice!
              </li>
              <li className="ml-3 list-inside list-decimal">
                If you need to be offline for some days, inform a general about
                it!
              </li>

              <ul>
                <li className="ml-6 list-disc list-inside">
                  Do an adventure every day or{" "}
                </li>
                <li className="ml-6 list-disc list-inside">
                  Keep active the last one (with 4 chests) to raid it the next
                  day.
                </li>
                <li className="ml-6 list-disc list-inside">
                  We do adventures from lvl10 to 13!
                </li>
                <li className="ml-6 list-disc list-inside">
                  Adv13 is suggested only on adventure 12 map!
                </li>
                <li className="ml-6 list-disc list-inside">
                  Recommended paths exists at team's website!
                </li>
                <li className="ml-6 list-disc list-inside">
                  if your heroes are over 600K you may be able to get 4 chests
                  with a favor buff!
                </li>
                <li className="ml-6 list-disc list-inside">
                  Ask for people to join or join automatically if adventure is
                  public.
                </li>
              </ul>
              <li>
                <li className="ml-3 list-inside list-decimal">
                  Anything that feels wrong to you, don't hesitate to speak
                  about it ta public chat or with pm at any general! we will be
                  happy to resolve any conflict.
                </li>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-10">
            Instructions to new Champions.
          </h1>
          <div className="text-lg">
            <p>In war, main planners are Stratis and Team 469.</p>
            <ol>
              <li className="ml-3 list-inside list-decimal">
                We expect you to do all your attacks and we will put any effort
                to do your attacks in a time frame suitable for you!
              </li>
              <li className="ml-3 list-inside list-decimal">
                If there is a need to leave early, please ask to assign you
                immidiately.
              </li>

              <li className="ml-3 list-decimal list-inside">
                If you fell that the target assigned is too hard for you or is
                wrong (mistakes happens too :) ) then say so! it may be a part
                of the plan or a mistake!
              </li>
              <li className="ml-3 list-decimal list-inside">
                If in doubt, do not attack! Do tell-ask!
              </li>
              <li className="ml-3 list-decimal list-inside">
                We expect to make your tests, when you are not sure about the
                best line up of your team to the sepcific target.{" "}
                <span className="italic">
                  After a while, we will have a recodrd of your attacks and we
                  can help you too!
                </span>
              </li>
              <li className="ml-3 list-decimal list-inside">
                Be polite and supportive to other champions. No one wants to
                loosing at war, but some times it happens! it's better to
                support our team mates than to blame them! :)
              </li>
              <li className="ml-3 list-decimal list-inside">
                If you think you see an error at the plan, or a better approach
                feel free to tell so
              </li>
            </ol>
          </div>
        </div>
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
