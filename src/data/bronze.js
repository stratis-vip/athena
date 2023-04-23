import { readData } from "../lib";

const program = `
Clan Destino	1	8-CCCP	14-Crab Club	20-Die Hanse	26-LonesomeRyders	2-First Wave
First Wave	2	25-1111	19-athena	13-Lily	7-Soul Reapers	1-Clan Destino
The Eyrie	3	10-Kamigrain	16-Fighter	22-NBC	28-Монстры на каникулах	4-Sax Clan
Sax Clan	4	27-тризуб	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун	3-The Eyrie
Belgique	5	12-Bansh	18-Death or Glory	24-SKY LORDS	30-Korean-House	6-himatsubushi
himatsubushi	6	29-ЛЕВ	23-Silver Wolf	17-pink pirates	11-Einfach so	5-Belgique
Soul Reapers	7	14-Crab Club	20-Die Hanse	26-LonesomeRyders	2-First Wave	8-CCCP
CCCP	8	1-Clan Destino	25-1111	19-athena	13-Lily	7-Soul Reapers
Перун	9	16-Fighter	22-NBC	28-Монстры на каникулах	4-Sax Clan	10-Kamigrain
Kamigrain	10	3-The Eyrie	27-тризуб	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун
Einfach so	11	18-Death or Glory	24-SKY LORDS	30-Korean-House	6-himatsubushi	12-Bansh
Bansh	12	5-Belgique	29-ЛЕВ	23-Silver Wolf	17-pink pirates	11-Einfach so
Lily	13	20-Die Hanse	26-LonesomeRyders	2-First Wave	8-CCCP	14-Crab Club
Crab Club	14	7-Soul Reapers	1-Clan Destino	25-1111	19-athena	13-Lily
MUKAKIN-MUGON	15	22-NBC	28-Монстры на каникулах	4-Sax Clan	10-Kamigrain	16-Fighter
Fighter	16	9-Перун	3-The Eyrie	27-тризуб	21-Team Heronic	15-MUKAKIN-MUGON
pink pirates	17	24-SKY LORDS	30-Korean-House	6-himatsubushi	12-Bansh	18-Death or Glory
Death or Glory	18	11-Einfach so	5-Belgique	29-ЛЕВ	23-Silver Wolf	17-pink pirates
athena	19	26-LonesomeRyders	2-First Wave	8-CCCP	14-Crab Club	20-Die Hanse
Die Hanse	20	13-Lily	7-Soul Reapers	1-Clan Destino	25-1111	19-athena
Team Heronic	21	28-Монстры на каникулах	4-Sax Clan	10-Kamigrain	16-Fighter	22-NBC
NBC	22	15-MUKAKIN-MUGON	9-Перун	3-The Eyrie	27-тризуб	21-Team Heronic
Silver Wolf	23	30-Korean-House	6-himatsubushi	12-Bansh	18-Death or Glory	24-SKY LORDS
SKY LORDS	24	17-pink pirates	11-Einfach so	5-Belgique	29-ЛЕВ	23-Silver Wolf
1111	25	2-First Wave	8-CCCP	14-Crab Club	20-Die Hanse	26-LonesomeRyders
LonesomeRyders	26	19-athena	13-Lily	7-Soul Reapers	1-Clan Destino	25-1111
тризуб	27	4-Sax Clan	10-Kamigrain	16-Fighter	22-NBC	28-Монстры на каникулах
Монстры на каникулах	28	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун	3-The Eyrie	27-тризуб
ЛЕВ	29	6-himatsubushi	12-Bansh	18-Death or Glory	24-SKY LORDS	30-Korean-House
Korean-House	30	23-Silver Wolf	17-pink pirates	11-Einfach so	5-Belgique	29-ЛЕВ
`;

export const bronze = readData(program, "bronze");
