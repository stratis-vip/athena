import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
1, 36571, "Фениксы", 5205
4, 36637, "himatsubushi", 3818
5, 36661, "Soul Reapers", 3650
25, 36820, "тризуб", 428
16, 36862, "Kamigrain", 1545
14, 36952, "CCCP", 1885
17, 37039, "Death or Glory", 1480
18, 37058, "Call Me Daddy", 833
23, 37121, "NBC", 475
3, 37329, "Belgique", 4028
22, 37413, "Gold ship", 575
2, 37509, "Sax Clan", 4940
10, 37604, "Fighter", 2380
9, 37606, "athena", 2540
11, 38195, "Перун", 2339
19, 38230, "1111", 750
24, 38471, "Silver Wolf", 451
26, 38503, "Crab Club", 426
12, 39000, "Einfach so", 2205
28, 39688, "Los conquistadores", 130
21, 39786, "alone", 600
8, 40533, "Die Hanse", 2755
20, 42044, "SKY  LORDS", 671
13, 42541, "MUKAKIN-MUGON", 2104
6, 43002, "Bansh", 2901
7, 48499, "The Eyrie", 2889
15, 98688, "Guardian", 1880
27, 131321, "The Red Wolfs", 196
29, 149841, "The Dragon Way", 20
30, 243505, "Welcome To Asteroid", 0
`;


export const bronze = readData(program, "bronze");
