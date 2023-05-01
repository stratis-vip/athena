import { readData } from "../lib";

const program = `
First Wave	1	8-CCCP	14-Fighter	20-pink pirates	26-Silver Wolf	2-Clan Destino
Clan Destino	2	25-Korean-House	19-NBC	13-Перун	7-himatsubushi	1-First Wave
Belgique	3	10-Soul Reapers	16-Die Hanse	22-Team Heronic	28-Lily	4-The Eyrie
The Eyrie	4	27-ЛЕВ	21-LonesomeRyders	15-Death or Glory	9-Bansh	3-Belgique
Sax Clan	5	12-Einfach so	18-Crab Club	24-SKY LORDS	30-The LIONS	6-Монстры на каникулах
Монстры на каникулах	6	29-тризуб	23-athena	17-MUKAKIN-MUGON	11-Kamigrain	5-Sax Clan
himatsubushi	7	14-Fighter	20-pink pirates	26-Silver Wolf	2-Clan Destino	8-CCCP
CCCP	8	1-First Wave	25-Korean-House	19-NBC	13-Перун	7-himatsubushi
Bansh	9	16-Die Hanse	22-Team Heronic	28-Lily	4-The Eyrie	10-Soul Reapers
Soul Reapers	10	3-Belgique	27-ЛЕВ	21-LonesomeRyders	15-Death or Glory	9-Bansh
Kamigrain	11	18-Crab Club	24-SKY LORDS	30-The LIONS	6-Монстры на каникулах	12-Einfach so
Einfach so	12	5-Sax Clan	29-тризуб	23-athena	17-MUKAKIN-MUGON	11-Kamigrain
Перун	13	20-pink pirates	26-Silver Wolf	2-Clan Destino	8-CCCP	14-Fighter
Fighter	14	7-himatsubushi	1-First Wave	25-Korean-House	19-NBC	13-Перун
Death or Glory	15	22-Team Heronic	28-Lily	4-The Eyrie	10-Soul Reapers	16-Die Hanse
Die Hanse	16	9-Bansh	3-Belgique	27-ЛЕВ	21-LonesomeRyders	15-Death or Glory
MUKAKIN-MUGON	17	24-SKY LORDS	30-The LIONS	6-Монстры на каникулах	12-Einfach so	18-Crab Club
Crab Club	18	11-Kamigrain	5-Sax Clan	29-тризуб	23-athena	17-MUKAKIN-MUGON
NBC	19	26-Silver Wolf	2-Clan Destino	8-CCCP	14-Fighter	20-pink pirates
pink pirates	20	13-Перун	7-himatsubushi	1-First Wave	25-Korean-House	19-NBC
LonesomeRyders	21	28-Lily	4-The Eyrie	10-Soul Reapers	16-Die Hanse	22-Team Heronic
Team Heronic	22	15-Death or Glory	9-Bansh	3-Belgique	27-ЛЕВ	21-LonesomeRyders
athena	23	30-The LIONS	6-Монстры на каникулах	12-Einfach so	18-Crab Club	24-SKY LORDS
SKY LORDS	24	17-MUKAKIN-MUGON	11-Kamigrain	5-Sax Clan	29-тризуб	23-athena
Korean-House	25	2-Clan Destino	8-CCCP	14-Fighter	20-pink pirates	26-Silver Wolf
Silver Wolf	26	19-NBC	13-Перун	7-himatsubushi	1-First Wave	25-Korean-House
ЛЕВ	27	4-The Eyrie	10-Soul Reapers	16-Die Hanse	22-Team Heronic	28-Lily
Lily	28	21-LonesomeRyders	15-Death or Glory	9-Bansh	3-Belgique	27-ЛЕВ
тризуб	29	6-Монстры на каникулах	12-Einfach so	18-Crab Club	24-SKY LORDS	30-The LIONS
The LIONS	30	23-athena	17-MUKAKIN-MUGON	11-Kamigrain	5-Sax Clan	29-тризуб
`;

export const bronze = readData(program, "bronze");
