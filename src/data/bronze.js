import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
29, 36571, "Фениксы", 0
3, 36637, "himatsubushi", 0
7, 36661, "Soul Reapers", 0
26, 36745, "Pif Paf Pouf", 0
16, 36820, "тризуб", 0
25, 36862, "Kamigrain", 0
12, 36952, "CCCP", 0
10, 37039, "Death or Glory", 0
19, 37058, "Call Me Daddy", 0
21, 37194, "Talons of Power", 0
11, 37329, "Belgique", 0
1, 37509, "Sax Clan", 0
15, 37604, "Fighter", 0
5, 37606, "athena", 0
4, 38195, "Перун", 0
14, 38230, "1111", 0
13, 38471, "Silver Wolf", 0
22, 38503, "Crab Club", 0
9, 39000, "Einfach so", 0
23, 39688, "Los conquistadores", 0
30, 39731, "HullaBullas", 0
17, 39786, "alone", 0
8, 40533, "Die Hanse", 0
27, 42044, "SKY  LORDS", 0
18, 42541, "MUKAKIN-MUGON", 0
6, 43002, "Bansh", 0
2, 48499, "The Eyrie", 0
28, 74323, "Knights of Camelot", 0
24, 98688, "Guardian", 0
20, 229416, "Монстры на каникулах", 0
`;


export const bronze = readData(program, "bronze");
