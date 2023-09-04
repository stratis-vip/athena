import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
10, 36571, "Фениксы", 0
3, 36637, "himatsubushi", 0
8, 36661, "Soul Reapers", 0
17, 36820, "тризуб", 0
15, 36862, "Kamigrain", 0
7, 36952, "CCCP", 0
16, 37039, "Death or Glory", 0
27, 37058, "Call Me Daddy", 0
29, 37121, "NBC", 0
22, 37194, "Talons of Power", 0
5, 37329, "Belgique", 0
25, 37413, "Gold ship", 0
1, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
6, 37606, "athena", 0
12, 38195, "Перун", 0
18, 38230, "1111", 0
14, 38471, "Silver Wolf", 0
21, 38503, "Crab Club", 0
9, 39000, "Einfach so", 0
28, 39688, "Los conquistadores", 0
23, 39786, "alone", 0
13, 40533, "Die Hanse", 0
20, 42044, "SKY  LORDS", 0
19, 42541, "MUKAKIN-MUGON", 0
4, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
26, 98688, "Guardian", 0
24, 131321, "The Red Wolfs", 0
30, 149841, "The Dragon Way", 0
`;


export const bronze = readData(program, "bronze");
