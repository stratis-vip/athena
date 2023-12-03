import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
25, 36571, "Фениксы", 0
1, 36637, "himatsubushi", 0
9, 36661, "Soul Reapers", 0
26, 36745, "Pif Paf Pouf", 0
16, 36820, "тризуб", 0
24, 36862, "Kamigrain", 0
10, 36952, "CCCP", 0
12, 37039, "Death or Glory", 0
22, 37058, "Call Me Daddy", 0
18, 37194, "Talons of Power", 0
8, 37329, "Belgique", 0
3, 37509, "Sax Clan", 0
11, 37604, "Fighter", 0
7, 37606, "athena", 0
5, 38195, "Перун", 0
21, 38230, "1111", 0
17, 38471, "Silver Wolf", 0
19, 38503, "Crab Club", 0
4, 39000, "Einfach so", 0
14, 39688, "Los conquistadores", 0
30, 39731, "HullaBullas", 0
20, 39786, "alone", 0
13, 40533, "Die Hanse", 0
28, 42044, "SKY  LORDS", 0
15, 42541, "MUKAKIN-MUGON", 0
6, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
29, 74323, "Knights of Camelot", 0
23, 98688, "Guardian", 0
27, 229416, "Монстры на каникулах", 0
`;


export const bronze = readData(program, "bronze");
