import { readData } from "../lib";

const program = `
The Eyrie	1	8-Einfach so	14-Korean-House	20-Перун	26-NBC	2-Belgique
Belgique	2	25-The Dragon Way	19-pink pirates	13-Silver Wolf	7-CCCP	1-The Eyrie
54 HERO	3	10-Soul Reapers	16-1111	22-Die Hanse	28-тризуб	4-Italian Job
Italian Job	4	27-LonesomeRyders	21-Fighter	15-MUKAKIN-MUGON	9-athena	3-54 HERO
Sax Clan	5	12-Kamigrain	18-Death or Glory	24-Call Me Daddy	30-Pif Paf Pouf	6-Bansh
Bansh	6	29-undefined	23-SKY LORDS	17-The Red Wolfs	11-himatsubushi	5-Sax Clan
CCCP	7	14-Korean-House	20-Перун	26-NBC	2-Belgique	8-Einfach so
Einfach so	8	1-The Eyrie	25-The Dragon Way	19-pink pirates	13-Silver Wolf	7-CCCP
athena	9	16-1111	22-Die Hanse	28-тризуб	4-Italian Job	10-Soul Reapers
Soul Reapers	10	3-54 HERO	27-LonesomeRyders	21-Fighter	15-MUKAKIN-MUGON	9-athena
himatsubushi	11	18-Death or Glory	24-Call Me Daddy	30-Pif Paf Pouf	6-Bansh	12-Kamigrain
Kamigrain	12	5-Sax Clan	29-undefined	23-SKY LORDS	17-The Red Wolfs	11-himatsubushi
Silver Wolf	13	20-Перун	26-NBC	2-Belgique	8-Einfach so	14-Korean-House
Korean-House	14	7-CCCP	1-The Eyrie	25-The Dragon Way	19-pink pirates	13-Silver Wolf
MUKAKIN-MUGON	15	22-Die Hanse	28-тризуб	4-Italian Job	10-Soul Reapers	16-1111
1111	16	9-athena	3-54 HERO	27-LonesomeRyders	21-Fighter	15-MUKAKIN-MUGON
The Red Wolfs	17	24-Call Me Daddy	30-Pif Paf Pouf	6-Bansh	12-Kamigrain	18-Death or Glory
Death or Glory	18	11-himatsubushi	5-Sax Clan	29-undefined	23-SKY LORDS	17-The Red Wolfs
pink pirates	19	26-NBC	2-Belgique	8-Einfach so	14-Korean-House	20-Перун
Перун	20	13-Silver Wolf	7-CCCP	1-The Eyrie	25-The Dragon Way	19-pink pirates
Fighter	21	28-тризуб	4-Italian Job	10-Soul Reapers	16-1111	22-Die Hanse
Die Hanse	22	15-MUKAKIN-MUGON	9-athena	3-54 HERO	27-LonesomeRyders	21-Fighter
SKY LORDS	23	30-Pif Paf Pouf	6-Bansh	12-Kamigrain	18-Death or Glory	24-Call Me Daddy
Call Me Daddy	24	17-The Red Wolfs	11-himatsubushi	5-Sax Clan	29-undefined	23-SKY LORDS
The Dragon Way	25	2-Belgique	8-Einfach so	14-Korean-House	20-Перун	26-NBC
NBC	26	19-pink pirates	13-Silver Wolf	7-CCCP	1-The Eyrie	25-The Dragon Way
LonesomeRyders	27	4-Italian Job	10-Soul Reapers	16-1111	22-Die Hanse	28-тризуб
тризуб	28	21-Fighter	15-MUKAKIN-MUGON	9-athena	3-54 HERO	27-LonesomeRyders
29	6-Bansh	12-Kamigrain	18-Death or Glory	24-Call Me Daddy	30-Pif Paf Pouf
Pif Paf Pouf	30	23-SKY LORDS	17-The Red Wolfs	11-himatsubushi	5-Sax Clan	29-undefined
`;

export const bronze = readData(program, "bronze");
