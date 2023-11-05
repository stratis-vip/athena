import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
1, 36637, "himatsubushi", 0
6, 36661, "Soul Reapers", 0
25, 36745, "Pif Paf Pouf", 0
21, 36820, "тризуб", 0
24, 36862, "Kamigrain", 0
16, 36952, "CCCP", 0
12, 37039, "Death or Glory", 0
19, 37058, "Call Me Daddy", 0
13, 37194, "Talons of Power", 0
5, 37329, "Belgique", 0
3, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
4, 37606, "athena", 0
9, 38195, "Перун", 0
14, 38230, "1111", 0
15, 38471, "Silver Wolf", 0
23, 38503, "Crab Club", 0
10, 39000, "Einfach so", 0
22, 39688, "Los conquistadores", 0
29, 39731, "HullaBullas", 0
18, 39786, "alone", 0
7, 40533, "Die Hanse", 0
17, 42541, "MUKAKIN-MUGON", 0
8, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
26, 74323, "Knights of Camelot", 0
27, 74976, "SUMAIRU", 0
20, 98688, "Guardian", 0
28, 131321, "The Red Wolfs", 0
30, 229416, "Монстры на каникулах", 0
`;


export const bronze = readData(program, "bronze");
