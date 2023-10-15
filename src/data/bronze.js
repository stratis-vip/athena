import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
30, 36571, "Фениксы", 0
4, 36637, "himatsubushi", 0
6, 36661, "Soul Reapers", 0
24, 36745, "Pif Paf Pouf", 0
18, 36820, "тризуб", 0
13, 36862, "Kamigrain", 0
9, 36952, "CCCP", 0
14, 37039, "Death or Glory", 0
22, 37058, "Call Me Daddy", 0
17, 37194, "Talons of Power", 0
3, 37329, "Belgique", 0
20, 37413, "Gold ship", 0
15, 37604, "Fighter", 0
12, 37606, "athena", 0
7, 38195, "Перун", 0
16, 38230, "1111", 0
11, 38471, "Silver Wolf", 0
23, 38503, "Crab Club", 0
8, 39000, "Einfach so", 0
26, 39688, "Los conquistadores", 0
28, 39731, "HullaBullas", 0
21, 39786, "alone", 0
10, 40533, "Die Hanse", 0
19, 42541, "MUKAKIN-MUGON", 0
5, 43002, "Bansh", 0
1, 46347, "Clan  Destino", 0
2, 48499, "The Eyrie", 0
27, 74323, "Knights of Camelot", 0
25, 98688, "Guardian", 0
29, 131321, "The Red Wolfs", 0
`;


export const bronze = readData(program, "bronze");
