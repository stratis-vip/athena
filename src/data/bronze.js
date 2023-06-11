import { readData } from "../lib";

const program = `
Clan Destino	1	8-Bansh	14-Death or Glory	20-Crab Club	26-Silver Wolf	2-54 HERO
54 HERO	2	25-LonesomeRyders	19-alone	13-MUKAKIN-MUGON	7-CCCP	1-Clan Destino
Belgique	3	10-athena	16-Kamigrain	22-Die Hanse	28-The Dragon Way	4-The Eyrie
The Eyrie	4	27-Sakura	21-pink pirates	15-Italian Job	9-Einfach so	3-Belgique
himatsubushi	5	12-Fighter	18-1111	24-The LIONS	30-тризуб	6-Soul Reapers
Soul Reapers	6	29-Los conquistadores	23-Team Heronic	17-Korean-House	11-Перун	5-himatsubushi
CCCP	7	14-Death or Glory	20-Crab Club	26-Silver Wolf	2-54 HERO	8-Bansh
Bansh	8	1-Clan Destino	25-LonesomeRyders	19-alone	13-MUKAKIN-MUGON	7-CCCP
Einfach so	9	16-Kamigrain	22-Die Hanse	28-The Dragon Way	4-The Eyrie	10-athena
athena	10	3-Belgique	27-Sakura	21-pink pirates	15-Italian Job	9-Einfach so
Перун	11	18-1111	24-The LIONS	30-тризуб	6-Soul Reapers	12-Fighter
Fighter	12	5-himatsubushi	29-Los conquistadores	23-Team Heronic	17-Korean-House	11-Перун
MUKAKIN-MUGON	13	20-Crab Club	26-Silver Wolf	2-54 HERO	8-Bansh	14-Death or Glory
Death or Glory	14	7-CCCP	1-Clan Destino	25-LonesomeRyders	19-alone	13-MUKAKIN-MUGON
Italian Job	15	22-Die Hanse	28-The Dragon Way	4-The Eyrie	10-athena	16-Kamigrain
Kamigrain	16	9-Einfach so	3-Belgique	27-Sakura	21-pink pirates	15-Italian Job
Korean-House	17	24-The LIONS	30-тризуб	6-Soul Reapers	12-Fighter	18-1111
1111	18	11-Перун	5-himatsubushi	29-Los conquistadores	23-Team Heronic	17-Korean-House
alone	19	26-Silver Wolf	2-54 HERO	8-Bansh	14-Death or Glory	20-Crab Club
Crab Club	20	13-MUKAKIN-MUGON	7-CCCP	1-Clan Destino	25-LonesomeRyders	19-alone
pink pirates	21	28-The Dragon Way	4-The Eyrie	10-athena	16-Kamigrain	22-Die Hanse
Die Hanse	22	15-Italian Job	9-Einfach so	3-Belgique	27-Sakura	21-pink pirates
Team Heronic	23	30-тризуб	6-Soul Reapers	12-Fighter	18-1111	24-The LIONS
The LIONS	24	17-Korean-House	11-Перун	5-himatsubushi	29-Los conquistadores	23-Team Heronic
LonesomeRyders	25	2-54 HERO	8-Bansh	14-Death or Glory	20-Crab Club	26-Silver Wolf
Silver Wolf	26	19-alone	13-MUKAKIN-MUGON	7-CCCP	1-Clan Destino	25-LonesomeRyders
Sakura	27	4-The Eyrie	10-athena	16-Kamigrain	22-Die Hanse	28-The Dragon Way
The Dragon Way	28	21-pink pirates	15-Italian Job	9-Einfach so	3-Belgique	27-Sakura
Los conquistadores	29	6-Soul Reapers	12-Fighter	18-1111	24-The LIONS	30-тризуб
тризуб	30	23-Team Heronic	17-Korean-House	11-Перун	5-himatsubushi	29-Los conquistadores
`;

export const bronze = readData(program, "bronze");
