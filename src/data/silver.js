import { readData } from "../lib";
const program = `
Position	Guild ID	Guild Title	Points
1	37610	Сами по себе!	5680
2	38247	Велес	5612
3	183303	new athena	5349
4	37030	Paladins of Dominion	5229
5	36766	silelderman	4898
6	39706	54 HERO	4697
7	38806	Mattari	4420
8	205096	Italian Job	4064
9	46347	Clan Destino	3769
10	37032	First Wave	3494
`;

export const silver = readData(program, "silver");