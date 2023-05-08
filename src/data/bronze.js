import { readData } from "../lib";

const program = `
Sax Clan	1	8-CCCP	14-Перун	20-тризуб	26-Silver Wolf	2-First Wave
First Wave	2	25-Korean-House	19-Team Heronic	13-Fighter	7-Bansh	1-Sax Clan
Clan Destino	3	10-Death or Glory	16-ЛЕВ	22-Die Hanse	28-Los conquistadores	4-The Eyrie
The Eyrie	4	27-Lily	21-NBC	15-MUKAKIN-MUGON	9-Soul Reapers	3-Clan Destino
Belgique	5	12-Kamigrain	18-athena	24-The LIONS	30-1111	6-himatsubushi
himatsubushi	6	29-Italian Job	23-Crab Club	17-LonesomeRyders	11-Einfach so	5-Belgique
Bansh	7	14-Перун	20-тризуб	26-Silver Wolf	2-First Wave	8-CCCP
CCCP	8	1-Sax Clan	25-Korean-House	19-Team Heronic	13-Fighter	7-Bansh
Soul Reapers	9	16-ЛЕВ	22-Die Hanse	28-Los conquistadores	4-The Eyrie	10-Death or Glory
Death or Glory	10	3-Clan Destino	27-Lily	21-NBC	15-MUKAKIN-MUGON	9-Soul Reapers
Einfach so	11	18-athena	24-The LIONS	30-1111	6-himatsubushi	12-Kamigrain
Kamigrain	12	5-Belgique	29-Italian Job	23-Crab Club	17-LonesomeRyders	11-Einfach so
Fighter	13	20-тризуб	26-Silver Wolf	2-First Wave	8-CCCP	14-Перун
Перун	14	7-Bansh	1-Sax Clan	25-Korean-House	19-Team Heronic	13-Fighter
MUKAKIN-MUGON	15	22-Die Hanse	28-Los conquistadores	4-The Eyrie	10-Death or Glory	16-ЛЕВ
ЛЕВ	16	9-Soul Reapers	3-Clan Destino	27-Lily	21-NBC	15-MUKAKIN-MUGON
LonesomeRyders	17	24-The LIONS	30-1111	6-himatsubushi	12-Kamigrain	18-athena
athena	18	11-Einfach so	5-Belgique	29-Italian Job	23-Crab Club	17-LonesomeRyders
Team Heronic	19	26-Silver Wolf	2-First Wave	8-CCCP	14-Перун	20-тризуб
тризуб	20	13-Fighter	7-Bansh	1-Sax Clan	25-Korean-House	19-Team Heronic
NBC	21	28-Los conquistadores	4-The Eyrie	10-Death or Glory	16-ЛЕВ	22-Die Hanse
Die Hanse	22	15-MUKAKIN-MUGON	9-Soul Reapers	3-Clan Destino	27-Lily	21-NBC
Crab Club	23	30-1111	6-himatsubushi	12-Kamigrain	18-athena	24-The LIONS
The LIONS	24	17-LonesomeRyders	11-Einfach so	5-Belgique	29-Italian Job	23-Crab Club
Korean-House	25	2-First Wave	8-CCCP	14-Перун	20-тризуб	26-Silver Wolf
Silver Wolf	26	19-Team Heronic	13-Fighter	7-Bansh	1-Sax Clan	25-Korean-House
Lily	27	4-The Eyrie	10-Death or Glory	16-ЛЕВ	22-Die Hanse	28-Los conquistadores
Los conquistadores	28	21-NBC	15-MUKAKIN-MUGON	9-Soul Reapers	3-Clan Destino	27-Lily
Italian Job	29	6-himatsubushi	12-Kamigrain	18-athena	24-The LIONS	30-1111
1111	30	23-Crab Club	17-LonesomeRyders	11-Einfach so	5-Belgique	29-Italian Job
`;

export const bronze = readData(program, "bronze");
