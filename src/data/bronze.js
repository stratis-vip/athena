import { readData } from "../lib";

const program = `
Sax Clan	1	8-himatsubushi	14-MUKAKIN-MUGON	20-Silver Wolf	26-The Dragon Way	2-Guardian
Guardian	2	25-NBC	19-Fighter	13-athena	7-Bansh	1-Sax Clan
Фениксы	3	10-Einfach so	16-Die Hanse	22-SKY LORDS	28-тризуб	4-Italian Job
Italian Job	4	27-The Red Wolfs	21-Gold ship	15-Kamigrain	9-Перун	3-Фениксы
Belgique	5	12-Death or Glory	18-LonesomeRyders	24-Call Me Daddy	30-1111	6-CCCP
CCCP	6	29-Pif Paf Pouf	23-Crab Club	17-alone	11-Soul Reapers	5-Belgique
Bansh	7	14-MUKAKIN-MUGON	20-Silver Wolf	26-The Dragon Way	2-Guardian	8-himatsubushi
himatsubushi	8	1-Sax Clan	25-NBC	19-Fighter	13-athena	7-Bansh
Перун	9	16-Die Hanse	22-SKY LORDS	28-тризуб	4-Italian Job	10-Einfach so
Einfach so	10	3-Фениксы	27-The Red Wolfs	21-Gold ship	15-Kamigrain	9-Перун
Soul Reapers	11	18-LonesomeRyders	24-Call Me Daddy	30-1111	6-CCCP	12-Death or Glory
Death or Glory	12	5-Belgique	29-Pif Paf Pouf	23-Crab Club	17-alone	11-Soul Reapers
athena	13	20-Silver Wolf	26-The Dragon Way	2-Guardian	8-himatsubushi	14-MUKAKIN-MUGON
MUKAKIN-MUGON	14	7-Bansh	1-Sax Clan	25-NBC	19-Fighter	13-athena
Kamigrain	15	22-SKY LORDS	28-тризуб	4-Italian Job	10-Einfach so	16-Die Hanse
Die Hanse	16	9-Перун	3-Фениксы	27-The Red Wolfs	21-Gold ship	15-Kamigrain
alone	17	24-Call Me Daddy	30-1111	6-CCCP	12-Death or Glory	18-LonesomeRyders
LonesomeRyders	18	11-Soul Reapers	5-Belgique	29-Pif Paf Pouf	23-Crab Club	17-alone
Fighter	19	26-The Dragon Way	2-Guardian	8-himatsubushi	14-MUKAKIN-MUGON	20-Silver Wolf
Silver Wolf	20	13-athena	7-Bansh	1-Sax Clan	25-NBC	19-Fighter
Gold ship	21	28-тризуб	4-Italian Job	10-Einfach so	16-Die Hanse	22-SKY LORDS
SKY LORDS	22	15-Kamigrain	9-Перун	3-Фениксы	27-The Red Wolfs	21-Gold ship
Crab Club	23	30-1111	6-CCCP	12-Death or Glory	18-LonesomeRyders	24-Call Me Daddy
Call Me Daddy	24	17-alone	11-Soul Reapers	5-Belgique	29-Pif Paf Pouf	23-Crab Club
NBC	25	2-Guardian	8-himatsubushi	14-MUKAKIN-MUGON	20-Silver Wolf	26-The Dragon Way
The Dragon Way	26	19-Fighter	13-athena	7-Bansh	1-Sax Clan	25-NBC
The Red Wolfs	27	4-Italian Job	10-Einfach so	16-Die Hanse	22-SKY LORDS	28-тризуб
тризуб	28	21-Gold ship	15-Kamigrain	9-Перун	3-Фениксы	27-The Red Wolfs
Pif Paf Pouf	29	6-CCCP	12-Death or Glory	18-LonesomeRyders	24-Call Me Daddy	30-1111
1111	30	23-Crab Club	17-alone	11-Soul Reapers	5-Belgique	29-Pif Paf Pouf
`;


export const bronze = readData(program, "bronze");
