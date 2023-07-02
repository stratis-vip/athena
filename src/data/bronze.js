import { readData } from "../lib";

const program = `
Sax Clan	1	8-Bansh	14-Перун	20-Korean-House	26-The LIONS	2-The Eyrie
The Eyrie	2	25-Gold ship	19-MUKAKIN-MUGON	13-SKY LORDS	7-Soul Reapers	1-Sax Clan
Belgique	3	10-Kamigrain	16-Fighter	22-Crab Club	28-Team Heronic	4-54 HERO
54 HERO	4	27-тризуб	21-Silver Wolf	15-Die Hanse	9-athena	3-Belgique
himatsubushi	5	12-Einfach so	18-1111	24-pink pirates	30-Call Me Daddy	6-CCCP
CCCP	6	29-Sakura	23-LonesomeRyders	17-Death or Glory	11-Italian Job	5-himatsubushi
Soul Reapers	7	14-Перун	20-Korean-House	26-The LIONS	2-The Eyrie	8-Bansh
Bansh	8	1-Sax Clan	25-Gold ship	19-MUKAKIN-MUGON	13-SKY LORDS	7-Soul Reapers
athena	9	16-Fighter	22-Crab Club	28-Team Heronic	4-54 HERO	10-Kamigrain
Kamigrain	10	3-Belgique	27-тризуб	21-Silver Wolf	15-Die Hanse	9-athena
Italian Job	11	18-1111	24-pink pirates	30-Call Me Daddy	6-CCCP	12-Einfach so
Einfach so	12	5-himatsubushi	29-Sakura	23-LonesomeRyders	17-Death or Glory	11-Italian Job
SKY LORDS	13	20-Korean-House	26-The LIONS	2-The Eyrie	8-Bansh	14-Перун
Перун	14	7-Soul Reapers	1-Sax Clan	25-Gold ship	19-MUKAKIN-MUGON	13-SKY LORDS
Die Hanse	15	22-Crab Club	28-Team Heronic	4-54 HERO	10-Kamigrain	16-Fighter
Fighter	16	9-athena	3-Belgique	27-тризуб	21-Silver Wolf	15-Die Hanse
Death or Glory	17	24-pink pirates	30-Call Me Daddy	6-CCCP	12-Einfach so	18-1111
1111	18	11-Italian Job	5-himatsubushi	29-Sakura	23-LonesomeRyders	17-Death or Glory
MUKAKIN-MUGON	19	26-The LIONS	2-The Eyrie	8-Bansh	14-Перун	20-Korean-House
Korean-House	20	13-SKY LORDS	7-Soul Reapers	1-Sax Clan	25-Gold ship	19-MUKAKIN-MUGON
Silver Wolf	21	28-Team Heronic	4-54 HERO	10-Kamigrain	16-Fighter	22-Crab Club
Crab Club	22	15-Die Hanse	9-athena	3-Belgique	27-тризуб	21-Silver Wolf
LonesomeRyders	23	30-Call Me Daddy	6-CCCP	12-Einfach so	18-1111	24-pink pirates
pink pirates	24	17-Death or Glory	11-Italian Job	5-himatsubushi	29-Sakura	23-LonesomeRyders
Gold ship	25	2-The Eyrie	8-Bansh	14-Перун	20-Korean-House	26-The LIONS
The LIONS	26	19-MUKAKIN-MUGON	13-SKY LORDS	7-Soul Reapers	1-Sax Clan	25-Gold ship
тризуб	27	4-54 HERO	10-Kamigrain	16-Fighter	22-Crab Club	28-Team Heronic
Team Heronic	28	21-Silver Wolf	15-Die Hanse	9-athena	3-Belgique	27-тризуб
Sakura	29	6-CCCP	12-Einfach so	18-1111	24-pink pirates	30-Call Me Daddy
Call Me Daddy	30	23-LonesomeRyders	17-Death or Glory	11-Italian Job	5-himatsubushi	29-Sakura
`;

export const bronze = readData(program, "bronze");
