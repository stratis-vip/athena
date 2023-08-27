import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
3, 36571, "Фениксы", 4295
4, 36637, "himatsubushi", 4109
8, 36661, "Soul Reapers", 3370
27, 36820, "тризуб", 163
15, 36862, "Kamigrain", 1738
12, 36952, "CCCP", 2313
14, 37039, "Death or Glory", 1908
25, 37058, "Call Me Daddy", 272
17, 37121, "NBC", 907
6, 37329, "Belgique", 3706
26, 37413, "Gold ship", 253
1, 37509, "Sax Clan", 5277
13, 37604, "Fighter", 2080
11, 37606, "athena", 2394
9, 38195, "Перун", 2904
18, 38230, "1111", 883
19, 38471, "Silver Wolf", 837
22, 38503, "Crab Club", 702
7, 39000, "Einfach so", 3678
28, 39688, "Los conquistadores", 136
20, 39786, "alone", 770
10, 40533, "Die Hanse", 2786
23, 42044, "SKY  LORDS", 643
16, 42541, "MUKAKIN-MUGON", 1286
5, 43002, "Bansh", 3732
29, 48120, "Lost In Space", 120
2, 48499, "The Eyrie", 5011
21, 98688, "Guardian", 734
24, 131321, "The Red Wolfs", 494
30, 149841, "The Dragon Way", 95
`;


export const bronze = readData(program, "bronze");
