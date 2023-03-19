import { readData } from "../lib";

const program = `
First Wave	1	8-himatsubushi	14-Kamigrain	20-MUKAKIN-MUGON	26-1111	2-Clan Destino
Clan Destino	2	25-ЛЕВ	19-тризуб	13-athena	7-Перун	1-First Wave
Sax Clan	3	10-Lily	16-Fighter	22-Crab Club	28-WelcomeToAsteroid II	4-Soul Reapers
Soul Reapers	4	27-Los conquistadores	21-Team Heronic	15-Silver Wolf	9-Bansh	3-Sax Clan
Belgique	5	12-Einfach so	18-SKY LORDS	24-LonesomeRyders	30-NBC	6-The Eyrie
The Eyrie	6	29-Welcome to Asteroid	23-Die Hanse	17-Death or Glory	11-CCCP	5-Belgique
Перун	7	14-Kamigrain	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi
himatsubushi	8	1-First Wave	25-ЛЕВ	19-тризуб	13-athena	7-Перун
Bansh	9	16-Fighter	22-Crab Club	28-WelcomeToAsteroid II	4-Soul Reapers	10-Lily
Lily	10	3-Sax Clan	27-Los conquistadores	21-Team Heronic	15-Silver Wolf	9-Bansh
CCCP	11	18-SKY LORDS	24-LonesomeRyders	30-NBC	6-The Eyrie	12-Einfach so
Einfach so	12	5-Belgique	29-Welcome to Asteroid	23-Die Hanse	17-Death or Glory	11-CCCP
athena	13	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi	14-Kamigrain
Kamigrain	14	7-Перун	1-First Wave	25-ЛЕВ	19-тризуб	13-athena
Silver Wolf	15	22-Crab Club	28-WelcomeToAsteroid II	4-Soul Reapers	10-Lily	16-Fighter
Fighter	16	9-Bansh	3-Sax Clan	27-Los conquistadores	21-Team Heronic	15-Silver Wolf
Death or Glory	17	24-LonesomeRyders	30-NBC	6-The Eyrie	12-Einfach so	18-SKY LORDS
SKY LORDS	18	11-CCCP	5-Belgique	29-Welcome to Asteroid	23-Die Hanse	17-Death or Glory
тризуб	19	26-1111	2-Clan Destino	8-himatsubushi	14-Kamigrain	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-athena	7-Перун	1-First Wave	25-ЛЕВ	19-тризуб
Team Heronic	21	28-WelcomeToAsteroid II	4-Soul Reapers	10-Lily	16-Fighter	22-Crab Club
Crab Club	22	15-Silver Wolf	9-Bansh	3-Sax Clan	27-Los conquistadores	21-Team Heronic
Die Hanse	23	30-NBC	6-The Eyrie	12-Einfach so	18-SKY LORDS	24-LonesomeRyders
LonesomeRyders	24	17-Death or Glory	11-CCCP	5-Belgique	29-Welcome to Asteroid	23-Die Hanse
ЛЕВ	25	2-Clan Destino	8-himatsubushi	14-Kamigrain	20-MUKAKIN-MUGON	26-1111
1111	26	19-тризуб	13-athena	7-Перун	1-First Wave	25-ЛЕВ
Los conquistadores	27	4-Soul Reapers	10-Lily	16-Fighter	22-Crab Club	28-WelcomeToAsteroid II
WelcomeToAsteroid II	28	21-Team Heronic	15-Silver Wolf	9-Bansh	3-Sax Clan	27-Los conquistadores
Welcome to Asteroid	29	6-The Eyrie	12-Einfach so	18-SKY LORDS	24-LonesomeRyders	30-NBC
NBC	30	23-Die Hanse	17-Death or Glory	11-CCCP	5-Belgique	29-Welcome to Asteroid
`;

export const bronze = readData(program, "bronze");
