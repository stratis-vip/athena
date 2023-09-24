import { readData } from "../lib";

const program = `
Position	Guild ID	Guild Title	Points
1	37509	Sax Clan	0
2	48499	The Eyrie	0
3	36637	himatsubushi	0
4	38195	Перун	0
5	37329	Belgique	0
6	43002	Bansh	0
7	37606	athena	0
8	36661	Soul Reapers	0
9	39000	Einfach so	0
10	37604	Fighter	0
11	36862	Kamigrain	0
12	42541	MUKAKIN-MUGON	0
13	36820	тризуб	0
14	40533	Die Hanse	0
15	37058	Call Me Daddy	0
16	37039	Death or Glory	0
17	37194	Talons of Power	0
18	36952	CCCP	0
19	38230	1111	0
20	38471	Silver Wolf	0
21	37413	Gold ship	0
22	39688	Los conquistadores	0
23	98688	Guardian	0
24	39786	alone	0
25	38503	Crab Club	0
26	74976	SUMAIRU	0
27	36745	Pif Paf Pouf	0
28	36571	Фениксы	0
29	42044	SKY LORDS	0
30	131321	The Red Wolfs	0
`;


export const bronze = readData(program, "bronze");
