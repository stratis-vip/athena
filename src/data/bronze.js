import { readData } from "../lib";

const program = `
Clan Destino	1	8-CCCP	14-Einfach so	20-WelcomeToAsteroid II	26-1111	2-First Wave
First Wave	2	25-Silver Wolf	19-NBC	13-Перун	7-himatsubushi	1-Clan Destino
Sax Clan	3	10-Bansh	16-Crab Club	22-SKY LORDS	28-тризуб	4-The Eyrie
The Eyrie	4	27-athena	21-Die Hanse	15-Fighter	9-Lily	3-Sax Clan
Belgique	5	12-Kamigrain	18-MUKAKIN-MUGON	24-ЛЕВ	30-Welcome to Asteroid	6-Soul Reapers
Soul Reapers	6	29-Los conquistadores	23-LonesomeRyders	17-Team Heronic	11-Death or Glory	5-Belgique
himatsubushi	7	14-Einfach so	20-WelcomeToAsteroid II	26-1111	2-First Wave	8-CCCP
CCCP	8	1-Clan Destino	25-Silver Wolf	19-NBC	13-Перун	7-himatsubushi
Lily	9	16-Crab Club	22-SKY LORDS	28-тризуб	4-The Eyrie	10-Bansh
Bansh	10	3-Sax Clan	27-athena	21-Die Hanse	15-Fighter	9-Lily
Death or Glory	11	18-MUKAKIN-MUGON	24-ЛЕВ	30-Welcome to Asteroid	6-Soul Reapers	12-Kamigrain
Kamigrain	12	5-Belgique	29-Los conquistadores	23-LonesomeRyders	17-Team Heronic	11-Death or Glory
Перун	13	20-WelcomeToAsteroid II	26-1111	2-First Wave	8-CCCP	14-Einfach so
Einfach so	14	7-himatsubushi	1-Clan Destino	25-Silver Wolf	19-NBC	13-Перун
Fighter	15	22-SKY LORDS	28-тризуб	4-The Eyrie	10-Bansh	16-Crab Club
Crab Club	16	9-Lily	3-Sax Clan	27-athena	21-Die Hanse	15-Fighter
Team Heronic	17	24-ЛЕВ	30-Welcome to Asteroid	6-Soul Reapers	12-Kamigrain	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Death or Glory	5-Belgique	29-Los conquistadores	23-LonesomeRyders	17-Team Heronic
NBC	19	26-1111	2-First Wave	8-CCCP	14-Einfach so	20-WelcomeToAsteroid II
WelcomeToAsteroid II	20	13-Перун	7-himatsubushi	1-Clan Destino	25-Silver Wolf	19-NBC
Die Hanse	21	28-тризуб	4-The Eyrie	10-Bansh	16-Crab Club	22-SKY LORDS
SKY LORDS	22	15-Fighter	9-Lily	3-Sax Clan	27-athena	21-Die Hanse
LonesomeRyders	23	30-Welcome to Asteroid	6-Soul Reapers	12-Kamigrain	18-MUKAKIN-MUGON	24-ЛЕВ
ЛЕВ	24	17-Team Heronic	11-Death or Glory	5-Belgique	29-Los conquistadores	23-LonesomeRyders
Silver Wolf	25	2-First Wave	8-CCCP	14-Einfach so	20-WelcomeToAsteroid II	26-1111
1111	26	19-NBC	13-Перун	7-himatsubushi	1-Clan Destino	25-Silver Wolf
athena	27	4-The Eyrie	10-Bansh	16-Crab Club	22-SKY LORDS	28-тризуб
тризуб	28	21-Die Hanse	15-Fighter	9-Lily	3-Sax Clan	27-athena
Los conquistadores	29	6-Soul Reapers	12-Kamigrain	18-MUKAKIN-MUGON	24-ЛЕВ	30-Welcome to Asteroid
Welcome to Asteroid	30	23-LonesomeRyders	17-Team Heronic	11-Death or Glory	5-Belgique	29-Los conquistadores
`;

export const bronze = readData(program, "bronze");
