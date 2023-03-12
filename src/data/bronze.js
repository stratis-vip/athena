import { readData } from "../lib";

const program = `
Clan Destino	1	8-Bansh	14-CCCP	20-Kamigrain	26-1111	2-First Wave
First Wave	2	25-ЛЕВ	19-WelcomeToAsteroid II	13-Team Heronic	7-himatsubushi	1-Clan Destino
The Eyrie	3	10-MUKAKIN-MUGON	16-Death or Glory	22-Crab Club	28-Welcome to Asteroid	4-Sax Clan
Sax Clan	4	27-Los conquistadores	21-Die Hanse	15-SKY LORDS	9-Lily	3-The Eyrie
Belgique	5	12-Перун	18-Silver Wolf	24-тризуб	30-athena	6-Soul Reapers
Soul Reapers	6	29-The Dragon Way	23-LonesomeRyders	17-Fighter	11-Einfach so	5-Belgique
himatsubushi	7	14-CCCP	20-Kamigrain	26-1111	2-First Wave	8-Bansh
Bansh	8	1-Clan Destino	25-ЛЕВ	19-WelcomeToAsteroid II	13-Team Heronic	7-himatsubushi
Lily	9	16-Death or Glory	22-Crab Club	28-Welcome to Asteroid	4-Sax Clan	10-MUKAKIN-MUGON
MUKAKIN-MUGON	10	3-The Eyrie	27-Los conquistadores	21-Die Hanse	15-SKY LORDS	9-Lily
Einfach so	11	18-Silver Wolf	24-тризуб	30-athena	6-Soul Reapers	12-Перун
Перун	12	5-Belgique	29-The Dragon Way	23-LonesomeRyders	17-Fighter	11-Einfach so
Team Heronic	13	20-Kamigrain	26-1111	2-First Wave	8-Bansh	14-CCCP
CCCP	14	7-himatsubushi	1-Clan Destino	25-ЛЕВ	19-WelcomeToAsteroid II	13-Team Heronic
SKY LORDS	15	22-Crab Club	28-Welcome to Asteroid	4-Sax Clan	10-MUKAKIN-MUGON	16-Death or Glory
Death or Glory	16	9-Lily	3-The Eyrie	27-Los conquistadores	21-Die Hanse	15-SKY LORDS
Fighter	17	24-тризуб	30-athena	6-Soul Reapers	12-Перун	18-Silver Wolf
Silver Wolf	18	11-Einfach so	5-Belgique	29-The Dragon Way	23-LonesomeRyders	17-Fighter
WelcomeToAsteroid II	19	26-1111	2-First Wave	8-Bansh	14-CCCP	20-Kamigrain
Kamigrain	20	13-Team Heronic	7-himatsubushi	1-Clan Destino	25-ЛЕВ	19-WelcomeToAsteroid II
Die Hanse	21	28-Welcome to Asteroid	4-Sax Clan	10-MUKAKIN-MUGON	16-Death or Glory	22-Crab Club
Crab Club	22	15-SKY LORDS	9-Lily	3-The Eyrie	27-Los conquistadores	21-Die Hanse
LonesomeRyders	23	30-athena	6-Soul Reapers	12-Перун	18-Silver Wolf	24-тризуб
тризуб	24	17-Fighter	11-Einfach so	5-Belgique	29-The Dragon Way	23-LonesomeRyders
ЛЕВ	25	2-First Wave	8-Bansh	14-CCCP	20-Kamigrain	26-1111
1111	26	19-WelcomeToAsteroid II	13-Team Heronic	7-himatsubushi	1-Clan Destino	25-ЛЕВ
Los conquistadores	27	4-Sax Clan	10-MUKAKIN-MUGON	16-Death or Glory	22-Crab Club	28-Welcome to Asteroid
Welcome to Asteroid	28	21-Die Hanse	15-SKY LORDS	9-Lily	3-The Eyrie	27-Los conquistadores
The Dragon Way	29	6-Soul Reapers	12-Перун	18-Silver Wolf	24-тризуб	30-athena
athena	30	23-LonesomeRyders	17-Fighter	11-Einfach so	5-Belgique	29-The Dragon Way
`;

export const bronze = readData(program, "bronze");
