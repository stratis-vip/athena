import { readData } from "../lib";

const program = `
Position	Guild ID	Guild Title	Points
1	37509	Sax Clan	5350
2	36637	himatsubushi	4894
3	48499	The Eyrie	4705
4	37329	Belgique	4220
5	43002	Bansh	4084
6	38195	Перун	3381
7	37606	athena	2825
8	39000	Einfach so	2643
9	40533	Die Hanse	2486
10	37604	Fighter	2462
11	37039	Death or Glory	2381
12	36661	Soul Reapers	2189
13	36820	тризуб	1971
14	36952	CCCP	1903
15	36862	Kamigrain	1828
16	38230	1111	1417
17	38503	Crab Club	1351
18	42541	MUKAKIN-MUGON	1287
19	37413	Gold ship	1199
20	98688	Guardian	1000
21	37058	Call Me Daddy	956
22	38471	Silver Wolf	723
23	39786	alone	516
24	39688	Los conquistadores	467
25	37194	Talons of Power	389
26	36745	Pif Paf Pouf	282
27	36571	Фениксы	166
28	74976	SUMAIRU	125
29	42044	SKY LORDS	69
30	131321	The Red Wolfs	0
`;


export const bronze = readData(program, "bronze");
