import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
28, 36571, "Фениксы", 0
4, 36637, "himatsubushi", 0
6, 36661, "Soul Reapers", 0
26, 36745, "Pif Paf Pouf", 0
15, 36820, "тризуб", 0
25, 36862, "Kamigrain", 0
16, 36952, "CCCP", 0
10, 37039, "Death or Glory", 0
17, 37058, "Call Me Daddy", 0
21, 37194, "Talons of Power", 0
8, 37329, "Belgique", 0
3, 37509, "Sax Clan", 0
14, 37604, "Fighter", 0
12, 37606, "athena", 0
5, 38195, "Перун", 0
18, 38230, "1111", 0
19, 38471, "Silver Wolf", 0
20, 38503, "Crab Club", 0
7, 39000, "Einfach so", 0
22, 39688, "Los conquistadores", 0
29, 39731, "HullaBullas", 0
24, 39786, "alone", 0
11, 40533, "Die Hanse", 0
30, 42044, "SKY  LORDS", 0
13, 42541, "MUKAKIN-MUGON", 0
9, 43002, "Bansh", 0
1, 48499, "The Eyrie", 0
27, 74323, "Knights of Camelot", 0
23, 98688, "Guardian", 0
2, 229416, "Монстры на каникулах", 0
`;


export const bronze = readData(program, "bronze");
