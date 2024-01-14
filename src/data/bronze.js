import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
5, 36637, "himatsubushi", 0
7, 36661, "Soul Reapers", 0
22, 36745, "Pif Paf Pouf", 0
19, 36820, "тризуб", 0
26, 36862, "Kamigrain", 0
13, 36952, "CCCP", 0
16, 37039, "Death or Glory", 0
20, 37058, "Call Me Daddy", 0
24, 37194, "Talons of Power", 0
9, 37329, "Belgique", 0
1, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
4, 37606, "athena", 0
2, 38195, "Перун", 0
17, 38230, "1111", 0
14, 38471, "Silver Wolf", 0
21, 38503, "Crab Club", 0
8, 39000, "Einfach so", 0
15, 39688, "Los conquistadores", 0
29, 39731, "HullaBullas", 0
18, 39786, "alone", 0
6, 40533, "Die Hanse", 0
23, 42044, "SKY  LORDS", 0
12, 42541, "MUKAKIN-MUGON", 0
10, 43002, "Bansh", 0
3, 48499, "The Eyrie", 0
28, 74323, "Knights of Camelot", 0
27, 74976, "SUMAIRU", 0
25, 98688, "Guardian", 0
30, 229416, "Монстры на каникулах", 0
`;


export const bronze = readData(program, "bronze");
