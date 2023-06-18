import { readData } from "../lib";

const program = `
Sax Clan	1	8-Перун	14-Team Heronic	20-The Dragon Way	26-LonesomeRyders	2-The Eyrie
The Eyrie	2	25-Silver Wolf	19-MUKAKIN-MUGON	13-Fighter	7-athena	1-Sax Clan
himatsubushi	3	10-Einfach so	16-1111	22-Korean-House	28-Sakura	4-Soul Reapers
Soul Reapers	4	27-pink pirates	21-тризуб	15-Die Hanse	9-CCCP	3-himatsubushi
Belgique	5	12-Bansh	18-Italian Job	24-The LIONS	30-Call Me Daddy	6-54 HERO
54 HERO	6	29-SKY LORDS	23-Crab Club	17-Death or Glory	11-Kamigrain	5-Belgique
athena	7	14-Team Heronic	20-The Dragon Way	26-LonesomeRyders	2-The Eyrie	8-Перун
Перун	8	1-Sax Clan	25-Silver Wolf	19-MUKAKIN-MUGON	13-Fighter	7-athena
CCCP	9	16-1111	22-Korean-House	28-Sakura	4-Soul Reapers	10-Einfach so
Einfach so	10	3-himatsubushi	27-pink pirates	21-тризуб	15-Die Hanse	9-CCCP
Kamigrain	11	18-Italian Job	24-The LIONS	30-Call Me Daddy	6-54 HERO	12-Bansh
Bansh	12	5-Belgique	29-SKY LORDS	23-Crab Club	17-Death or Glory	11-Kamigrain
Fighter	13	20-The Dragon Way	26-LonesomeRyders	2-The Eyrie	8-Перун	14-Team Heronic
Team Heronic	14	7-athena	1-Sax Clan	25-Silver Wolf	19-MUKAKIN-MUGON	13-Fighter
Die Hanse	15	22-Korean-House	28-Sakura	4-Soul Reapers	10-Einfach so	16-1111
1111	16	9-CCCP	3-himatsubushi	27-pink pirates	21-тризуб	15-Die Hanse
Death or Glory	17	24-The LIONS	30-Call Me Daddy	6-54 HERO	12-Bansh	18-Italian Job
Italian Job	18	11-Kamigrain	5-Belgique	29-SKY LORDS	23-Crab Club	17-Death or Glory
MUKAKIN-MUGON	19	26-LonesomeRyders	2-The Eyrie	8-Перун	14-Team Heronic	20-The Dragon Way
The Dragon Way	20	13-Fighter	7-athena	1-Sax Clan	25-Silver Wolf	19-MUKAKIN-MUGON
тризуб	21	28-Sakura	4-Soul Reapers	10-Einfach so	16-1111	22-Korean-House
Korean-House	22	15-Die Hanse	9-CCCP	3-himatsubushi	27-pink pirates	21-тризуб
Crab Club	23	30-Call Me Daddy	6-54 HERO	12-Bansh	18-Italian Job	24-The LIONS
The LIONS	24	17-Death or Glory	11-Kamigrain	5-Belgique	29-SKY LORDS	23-Crab Club
Silver Wolf	25	2-The Eyrie	8-Перун	14-Team Heronic	20-The Dragon Way	26-LonesomeRyders
LonesomeRyders	26	19-MUKAKIN-MUGON	13-Fighter	7-athena	1-Sax Clan	25-Silver Wolf
pink pirates	27	4-Soul Reapers	10-Einfach so	16-1111	22-Korean-House	28-Sakura
Sakura	28	21-тризуб	15-Die Hanse	9-CCCP	3-himatsubushi	27-pink pirates
SKY LORDS	29	6-54 HERO	12-Bansh	18-Italian Job	24-The LIONS	30-Call Me Daddy
Call Me Daddy	30	23-Crab Club	17-Death or Glory	11-Kamigrain	5-Belgique	29-SKY LORDS
`;

export const bronze = readData(program, "bronze");
