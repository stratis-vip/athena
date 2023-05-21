import { readData } from "../lib";

const program = `
Clan Destino	1	8-Bansh	14-Gold ship	20-Death or Glory	26-pink pirates	2-Sax Clan
Sax Clan	2	25-Korean-House	19-Fighter	13-NBC	7-himatsubushi	1-Clan Destino
Belgique	3	10-CCCP	16-Team Heronic	22-Crab Club	28-The LIONS	4-First Wave
First Wave	4	27-SKY LORDS	21-MUKAKIN-MUGON	15-Kamigrain	9-Перун	3-Belgique
The Eyrie	5	12-Einfach so	18-Silver Wolf	24-athena	30-Los conquistadores	6-Soul Reapers
Soul Reapers	6	29-ЛЕВ	23-LonesomeRyders	17-Italian Job	11-Die Hanse	5-The Eyrie
himatsubushi	7	14-Gold ship	20-Death or Glory	26-pink pirates	2-Sax Clan	8-Bansh
Bansh	8	1-Clan Destino	25-Korean-House	19-Fighter	13-NBC	7-himatsubushi
Перун	9	16-Team Heronic	22-Crab Club	28-The LIONS	4-First Wave	10-CCCP
CCCP	10	3-Belgique	27-SKY LORDS	21-MUKAKIN-MUGON	15-Kamigrain	9-Перун
Die Hanse	11	18-Silver Wolf	24-athena	30-Los conquistadores	6-Soul Reapers	12-Einfach so
Einfach so	12	5-The Eyrie	29-ЛЕВ	23-LonesomeRyders	17-Italian Job	11-Die Hanse
NBC	13	20-Death or Glory	26-pink pirates	2-Sax Clan	8-Bansh	14-Gold ship
Gold ship	14	7-himatsubushi	1-Clan Destino	25-Korean-House	19-Fighter	13-NBC
Kamigrain	15	22-Crab Club	28-The LIONS	4-First Wave	10-CCCP	16-Team Heronic
Team Heronic	16	9-Перун	3-Belgique	27-SKY LORDS	21-MUKAKIN-MUGON	15-Kamigrain
Italian Job	17	24-athena	30-Los conquistadores	6-Soul Reapers	12-Einfach so	18-Silver Wolf
Silver Wolf	18	11-Die Hanse	5-The Eyrie	29-ЛЕВ	23-LonesomeRyders	17-Italian Job
Fighter	19	26-pink pirates	2-Sax Clan	8-Bansh	14-Gold ship	20-Death or Glory
Death or Glory	20	13-NBC	7-himatsubushi	1-Clan Destino	25-Korean-House	19-Fighter
MUKAKIN-MUGON	21	28-The LIONS	4-First Wave	10-CCCP	16-Team Heronic	22-Crab Club
Crab Club	22	15-Kamigrain	9-Перун	3-Belgique	27-SKY LORDS	21-MUKAKIN-MUGON
LonesomeRyders	23	30-Los conquistadores	6-Soul Reapers	12-Einfach so	18-Silver Wolf	24-athena
athena	24	17-Italian Job	11-Die Hanse	5-The Eyrie	29-ЛЕВ	23-LonesomeRyders
Korean-House	25	2-Sax Clan	8-Bansh	14-Gold ship	20-Death or Glory	26-pink pirates
pink pirates	26	19-Fighter	13-NBC	7-himatsubushi	1-Clan Destino	25-Korean-House
SKY LORDS	27	4-First Wave	10-CCCP	16-Team Heronic	22-Crab Club	28-The LIONS
The LIONS	28	21-MUKAKIN-MUGON	15-Kamigrain	9-Перун	3-Belgique	27-SKY LORDS
ЛЕВ	29	6-Soul Reapers	12-Einfach so	18-Silver Wolf	24-athena	30-Los conquistadores
Los conquistadores	30	23-LonesomeRyders	17-Italian Job	11-Die Hanse	5-The Eyrie	29-ЛЕВ
`;

export const bronze = readData(program, "bronze");
