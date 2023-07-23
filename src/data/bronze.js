import { readData } from "../lib";

const program = `
Фениксы	1	8-Soul Reapers	14-athena	20-NBC	26-The Dragon Way	2-Italian Job
Italian Job	2	25-тризуб	19-MUKAKIN-MUGON	13-Kamigrain	7-himatsubushi	1-Фениксы
The Eyrie	3	10-Bansh	16-Die Hanse	22-Silver Wolf	28-alone	4-Belgique
Belgique	4	27-The Red Wolfs	21-Fighter	15-Call Me Daddy	9-Einfach so	3-The Eyrie
54 HERO	5	12-Перун	18-Pif Paf Pouf	24-SKY LORDS	30-Gold ship	6-CCCP
CCCP	6	29-Crab Club	23-LonesomeRyders	17-Korean-House	11-Death or Glory	5-54 HERO
himatsubushi	7	14-athena	20-NBC	26-The Dragon Way	2-Italian Job	8-Soul Reapers
Soul Reapers	8	1-Фениксы	25-тризуб	19-MUKAKIN-MUGON	13-Kamigrain	7-himatsubushi
Einfach so	9	16-Die Hanse	22-Silver Wolf	28-alone	4-Belgique	10-Bansh
Bansh	10	3-The Eyrie	27-The Red Wolfs	21-Fighter	15-Call Me Daddy	9-Einfach so
Death or Glory	11	18-Pif Paf Pouf	24-SKY LORDS	30-Gold ship	6-CCCP	12-Перун
Перун	12	5-54 HERO	29-Crab Club	23-LonesomeRyders	17-Korean-House	11-Death or Glory
Kamigrain	13	20-NBC	26-The Dragon Way	2-Italian Job	8-Soul Reapers	14-athena
athena	14	7-himatsubushi	1-Фениксы	25-тризуб	19-MUKAKIN-MUGON	13-Kamigrain
Call Me Daddy	15	22-Silver Wolf	28-alone	4-Belgique	10-Bansh	16-Die Hanse
Die Hanse	16	9-Einfach so	3-The Eyrie	27-The Red Wolfs	21-Fighter	15-Call Me Daddy
Korean-House	17	24-SKY LORDS	30-Gold ship	6-CCCP	12-Перун	18-Pif Paf Pouf
Pif Paf Pouf	18	11-Death or Glory	5-54 HERO	29-Crab Club	23-LonesomeRyders	17-Korean-House
MUKAKIN-MUGON	19	26-The Dragon Way	2-Italian Job	8-Soul Reapers	14-athena	20-NBC
NBC	20	13-Kamigrain	7-himatsubushi	1-Фениксы	25-тризуб	19-MUKAKIN-MUGON
Fighter	21	28-alone	4-Belgique	10-Bansh	16-Die Hanse	22-Silver Wolf
Silver Wolf	22	15-Call Me Daddy	9-Einfach so	3-The Eyrie	27-The Red Wolfs	21-Fighter
LonesomeRyders	23	30-Gold ship	6-CCCP	12-Перун	18-Pif Paf Pouf	24-SKY LORDS
SKY LORDS	24	17-Korean-House	11-Death or Glory	5-54 HERO	29-Crab Club	23-LonesomeRyders
тризуб	25	2-Italian Job	8-Soul Reapers	14-athena	20-NBC	26-The Dragon Way
The Dragon Way	26	19-MUKAKIN-MUGON	13-Kamigrain	7-himatsubushi	1-Фениксы	25-тризуб
The Red Wolfs	27	4-Belgique	10-Bansh	16-Die Hanse	22-Silver Wolf	28-alone
alone	28	21-Fighter	15-Call Me Daddy	9-Einfach so	3-The Eyrie	27-The Red Wolfs
Crab Club	29	6-CCCP	12-Перун	18-Pif Paf Pouf	24-SKY LORDS	30-Gold ship
Gold ship	30	23-LonesomeRyders	17-Korean-House	11-Death or Glory	5-54 HERO	29-Crab Club
`;


export const bronze = readData(program, "bronze");
