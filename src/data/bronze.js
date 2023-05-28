import { readData } from "../lib";

const program = `
Clan Destino	1	8-Bansh	14-MUKAKIN-MUGON	20-Die Hanse	26-ЛЕВ	2-First Wave
First Wave	2	25-LonesomeRyders	19-Team Heronic	13-Einfach so	7-himatsubushi	1-Clan Destino
Belgique	3	10-Перун	16-CCCP	22-Crab Club	28-pink pirates	4-Sax Clan
Sax Clan	4	27-NBC	21-Korean-House	15-SKY LORDS	9-Fighter	3-Belgique
The Eyrie	5	12-Kamigrain	18-athena	24-Silver Wolf	30-1111	6-Soul Reapers
Soul Reapers	6	29-Los conquistadores	23-Gold ship	17-Italian Job	11-Death or Glory	5-The Eyrie
himatsubushi	7	14-MUKAKIN-MUGON	20-Die Hanse	26-ЛЕВ	2-First Wave	8-Bansh
Bansh	8	1-Clan Destino	25-LonesomeRyders	19-Team Heronic	13-Einfach so	7-himatsubushi
Fighter	9	16-CCCP	22-Crab Club	28-pink pirates	4-Sax Clan	10-Перун
Перун	10	3-Belgique	27-NBC	21-Korean-House	15-SKY LORDS	9-Fighter
Death or Glory	11	18-athena	24-Silver Wolf	30-1111	6-Soul Reapers	12-Kamigrain
Kamigrain	12	5-The Eyrie	29-Los conquistadores	23-Gold ship	17-Italian Job	11-Death or Glory
Einfach so	13	20-Die Hanse	26-ЛЕВ	2-First Wave	8-Bansh	14-MUKAKIN-MUGON
MUKAKIN-MUGON	14	7-himatsubushi	1-Clan Destino	25-LonesomeRyders	19-Team Heronic	13-Einfach so
SKY LORDS	15	22-Crab Club	28-pink pirates	4-Sax Clan	10-Перун	16-CCCP
CCCP	16	9-Fighter	3-Belgique	27-NBC	21-Korean-House	15-SKY LORDS
Italian Job	17	24-Silver Wolf	30-1111	6-Soul Reapers	12-Kamigrain	18-athena
athena	18	11-Death or Glory	5-The Eyrie	29-Los conquistadores	23-Gold ship	17-Italian Job
Team Heronic	19	26-ЛЕВ	2-First Wave	8-Bansh	14-MUKAKIN-MUGON	20-Die Hanse
Die Hanse	20	13-Einfach so	7-himatsubushi	1-Clan Destino	25-LonesomeRyders	19-Team Heronic
Korean-House	21	28-pink pirates	4-Sax Clan	10-Перун	16-CCCP	22-Crab Club
Crab Club	22	15-SKY LORDS	9-Fighter	3-Belgique	27-NBC	21-Korean-House
Gold ship	23	30-1111	6-Soul Reapers	12-Kamigrain	18-athena	24-Silver Wolf
Silver Wolf	24	17-Italian Job	11-Death or Glory	5-The Eyrie	29-Los conquistadores	23-Gold ship
LonesomeRyders	25	2-First Wave	8-Bansh	14-MUKAKIN-MUGON	20-Die Hanse	26-ЛЕВ
ЛЕВ	26	19-Team Heronic	13-Einfach so	7-himatsubushi	1-Clan Destino	25-LonesomeRyders
NBC	27	4-Sax Clan	10-Перун	16-CCCP	22-Crab Club	28-pink pirates
pink pirates	28	21-Korean-House	15-SKY LORDS	9-Fighter	3-Belgique	27-NBC
Los conquistadores	29	6-Soul Reapers	12-Kamigrain	18-athena	24-Silver Wolf	30-1111
1111	30	23-Gold ship	17-Italian Job	11-Death or Glory	5-The Eyrie	29-Los conquistadores
`;

export const bronze = readData(program, "bronze");
