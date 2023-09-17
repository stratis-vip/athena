import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
28, 36571, "Фениксы", 0
3, 36637, "himatsubushi", 0
7, 36661, "Soul Reapers", 0
27, 36745, "Pif Paf Pouf", 0
18, 36820, "тризуб", 0
12, 36862, "Kamigrain", 0
14, 36952, "CCCP", 0
13, 37039, "Death or Glory", 0
23, 37058, "Call Me Daddy", 0
21, 37194, "Talons of Power", 0
6, 37329, "Belgique", 0
22, 37413, "Gold ship", 0
1, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
5, 37606, "athena", 0
9, 38195, "Перун", 0
15, 38230, "1111", 0
19, 38471, "Silver Wolf", 0
20, 38503, "Crab Club", 0
10, 39000, "Einfach so", 0
24, 39688, "Los conquistadores", 0
16, 39786, "alone", 0
8, 40533, "Die Hanse", 0
26, 42044, "SKY  LORDS", 0
17, 42541, "MUKAKIN-MUGON", 0
4, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
30, 74976, "SUMAIRU", 0
25, 98688, "Guardian", 0
29, 131321, "The Red Wolfs", 0
`;


export const bronze = readData(program, "bronze");
