import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
7, 36571, "Фениксы", 0
2, 36637, "himatsubushi", 0
5, 36661, "Soul Reapers", 0
29, 36820, "тризуб", 0
16, 36862, "Kamigrain", 0
15, 36952, "CCCP", 0
13, 37039, "Death or Glory", 0
19, 37058, "Call Me Daddy", 0
21, 37121, "NBC", 0
8, 37329, "Belgique", 0
26, 37413, "Gold ship", 0
1, 37509, "Sax Clan", 0
12, 37604, "Fighter", 0
9, 37606, "athena", 0
10, 38195, "Перун", 0
23, 38230, "1111", 0
17, 38471, "Silver Wolf", 0
24, 38503, "Crab Club", 0
6, 39000, "Einfach so", 0
27, 39688, "Los conquistadores", 0
22, 39786, "alone", 0
11, 40533, "Die Hanse", 0
20, 42044, "SKY  LORDS", 0
18, 42541, "MUKAKIN-MUGON", 0
3, 43002, "Bansh", 0
25, 48120, "Lost In Space", 0
4, 48499, "The Eyrie", 0
14, 98688, "Guardian", 0
28, 131321, "The Red Wolfs", 0
30, 149841, "The Dragon Way", 0

`;


export const bronze = readData(program, "bronze");
