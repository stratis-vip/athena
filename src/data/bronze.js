import { readData } from "../lib";

const program = `
Sax Clan	1	8-Soul Reapers	14-MUKAKIN-MUGON	20-тризуб	26-The LIONS	2-Belgique
Belgique	2	25-Korean-House	19-Перун	13-Fighter	7-Bansh	1-Sax Clan
himatsubushi	3	10-Einfach so	16-Silver Wolf	22-1111	28-Sakura	4-CCCP
CCCP	4	27-Team Heronic	21-SKY LORDS	15-Kamigrain	9-athena	3-himatsubushi
The Eyrie	5	12-Death or Glory	18-pink pirates	24-LonesomeRyders	30-Gold ship	6-54 HERO
54 HERO	6	29-Los conquistadores	23-Crab Club	17-Italian Job	11-Die Hanse	5-The Eyrie
Bansh	7	14-MUKAKIN-MUGON	20-тризуб	26-The LIONS	2-Belgique	8-Soul Reapers
Soul Reapers	8	1-Sax Clan	25-Korean-House	19-Перун	13-Fighter	7-Bansh
athena	9	16-Silver Wolf	22-1111	28-Sakura	4-CCCP	10-Einfach so
Einfach so	10	3-himatsubushi	27-Team Heronic	21-SKY LORDS	15-Kamigrain	9-athena
Die Hanse	11	18-pink pirates	24-LonesomeRyders	30-Gold ship	6-54 HERO	12-Death or Glory
Death or Glory	12	5-The Eyrie	29-Los conquistadores	23-Crab Club	17-Italian Job	11-Die Hanse
Fighter	13	20-тризуб	26-The LIONS	2-Belgique	8-Soul Reapers	14-MUKAKIN-MUGON
MUKAKIN-MUGON	14	7-Bansh	1-Sax Clan	25-Korean-House	19-Перун	13-Fighter
Kamigrain	15	22-1111	28-Sakura	4-CCCP	10-Einfach so	16-Silver Wolf
Silver Wolf	16	9-athena	3-himatsubushi	27-Team Heronic	21-SKY LORDS	15-Kamigrain
Italian Job	17	24-LonesomeRyders	30-Gold ship	6-54 HERO	12-Death or Glory	18-pink pirates
pink pirates	18	11-Die Hanse	5-The Eyrie	29-Los conquistadores	23-Crab Club	17-Italian Job
Перун	19	26-The LIONS	2-Belgique	8-Soul Reapers	14-MUKAKIN-MUGON	20-тризуб
тризуб	20	13-Fighter	7-Bansh	1-Sax Clan	25-Korean-House	19-Перун
SKY LORDS	21	28-Sakura	4-CCCP	10-Einfach so	16-Silver Wolf	22-1111
1111	22	15-Kamigrain	9-athena	3-himatsubushi	27-Team Heronic	21-SKY LORDS
Crab Club	23	30-Gold ship	6-54 HERO	12-Death or Glory	18-pink pirates	24-LonesomeRyders
LonesomeRyders	24	17-Italian Job	11-Die Hanse	5-The Eyrie	29-Los conquistadores	23-Crab Club
Korean-House	25	2-Belgique	8-Soul Reapers	14-MUKAKIN-MUGON	20-тризуб	26-The LIONS
The LIONS	26	19-Перун	13-Fighter	7-Bansh	1-Sax Clan	25-Korean-House
Team Heronic	27	4-CCCP	10-Einfach so	16-Silver Wolf	22-1111	28-Sakura
Sakura	28	21-SKY LORDS	15-Kamigrain	9-athena	3-himatsubushi	27-Team Heronic
Los conquistadores	29	6-54 HERO	12-Death or Glory	18-pink pirates	24-LonesomeRyders	30-Gold ship
Gold ship	30	23-Crab Club	17-Italian Job	11-Die Hanse	5-The Eyrie	29-Los conquistadores
`;

export const bronze = readData(program, "bronze");
