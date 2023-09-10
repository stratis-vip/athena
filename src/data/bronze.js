import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
10, 36571, "Фениксы", 0
3, 36637, "himatsubushi", 0
6, 36661, "Soul Reapers", 0
30, 36745, "Pif Paf Pouf", 0
14, 36820, "тризуб", 0
13, 36862, "Kamigrain", 0
16, 36952, "CCCP", 0
18, 37039, "Death or Glory", 0
22, 37058, "Call Me Daddy", 0
23, 37194, "Talons of Power", 0
4, 37329, "Belgique", 0
26, 37413, "Gold ship", 0
1, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
9, 37606, "athena", 0
7, 38195, "Перун", 0
24, 38230, "1111", 0
19, 38471, "Silver Wolf", 0
25, 38503, "Crab Club", 0
8, 39000, "Einfach so", 0
27, 39688, "Los conquistadores", 0
15, 39786, "alone", 0
12, 40533, "Die Hanse", 0
29, 41916, "VBL", 0
21, 42044, "SKY  LORDS", 0
20, 42541, "MUKAKIN-MUGON", 0
5, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
17, 98688, "Guardian", 0
28, 131321, "The Red Wolfs", 0
`;


export const bronze = readData(program, "bronze");
