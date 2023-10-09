import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
2, 36637, "himatsubushi", 0
4, 36661, "Soul Reapers", 0
29, 36745, "Pif Paf Pouf", 0
19, 36820, "тризуб", 0
17, 36862, "Kamigrain", 0
10, 36952, "CCCP", 0
13, 37039, "Death or Glory", 0
25, 37058, "Call Me Daddy", 0
21, 37194, "Talons of Power", 0
5, 37329, "Belgique", 0
22, 37413, "Gold ship", 0
1, 37509, "Sax Clan", 0
12, 37604, "Fighter", 0
8, 37606, "athena", 0
6, 38195, "Перун", 0
16, 38230, "1111", 0
15, 38471, "Silver Wolf", 0
20, 38503, "Crab Club", 0
7, 39000, "Einfach so", 0
26, 39688, "Los conquistadores", 0
30, 39731, "HullaBullas", 0
18, 39786, "alone", 0
11, 40533, "Die Hanse", 0
23, 42044, "SKY  LORDS", 0
14, 42541, "MUKAKIN-MUGON", 0
9, 43002, "Bansh", 0
3, 48499, "The Eyrie", 0
27, 74323, "Knights of Camelot", 0
24, 98688, "Guardian", 0
28, 131321, "The Red Wolfs", 0
`;


export const bronze = readData(program, "bronze");
