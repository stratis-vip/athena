export const tips = [
  {
    id: 1,
    category: "Heros",
    tip: "Get items for heros, only with raid (x10). Likewise, it is guaranteed that you get at least one item.",
  },
  {
    id: 2,
    category: "Titans",
    tip: "With the fire titans, vulcan is the most weak. Upgrade all the others first.",
  },
  {
    id: 3,
    category: "General",
    tip: "Do as many daily missions as you can. Hononary guardian Box, may surprise you.",
  },
  {
    id: 4,
    category: "General",
    tip: "At the 28th day,  daily bonus is a Lesser Hero Soul Stone. If you are not developing an hero, keep this chests for special events wants to get hero stones.",
  },
  {
    id: 5,
    category: "General",
    tip: "Avoid upgrading Heros or Titas before attacking. Leave at least an hour for game servers to update your new power.",
  },
  { 
    id: 6, 
    category: "Spooky Festival", 
    tip: "To get easily 250+ minions at Furnace of souls, attack every time with any pet and ONLY one hero. Likewise you will get from 15-50 minions per attack. You can cancel the attack for speed." },
].sort(compare);

function compare(a, b) {
  if (a.category < b.category) {
    return -1;
  }
  if (a.category > b.category) {
    return 1;
  }
  return 0;
}
