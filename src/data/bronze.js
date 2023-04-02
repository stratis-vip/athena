import { readData } from "../lib";

const program = `
First Wave	1	8-himatsubushi	14-Death or Glory	20-Silver Wolf	26-тризуб	2-Sax Clan
Sax Clan	2	25-athena	19-NBC	13-Перун	7-CCCP	1-First Wave
The Eyrie	3	10-Lily	16-Crab Club	22-Die Hanse	28-Los conquistadores	4-Belgique
Belgique	4	27-1111	21-ЛЕВ	15-Einfach so	9-Bansh	3-The Eyrie
Clan Destino	5	12-MUKAKIN-MUGON	18-Team Heronic	24-SKY LORDS	30-Welcome to Asteroid	6-Soul Reapers
Soul Reapers	6	29-WelcomeToAsteroid II	23-LonesomeRyders	17-Fighter	11-Kamigrain	5-Clan Destino
CCCP	7	14-Death or Glory	20-Silver Wolf	26-тризуб	2-Sax Clan	8-himatsubushi
himatsubushi	8	1-First Wave	25-athena	19-NBC	13-Перун	7-CCCP
Bansh	9	16-Crab Club	22-Die Hanse	28-Los conquistadores	4-Belgique	10-Lily
Lily	10	3-The Eyrie	27-1111	21-ЛЕВ	15-Einfach so	9-Bansh
Kamigrain	11	18-Team Heronic	24-SKY LORDS	30-Welcome to Asteroid	6-Soul Reapers	12-MUKAKIN-MUGON
MUKAKIN-MUGON	12	5-Clan Destino	29-WelcomeToAsteroid II	23-LonesomeRyders	17-Fighter	11-Kamigrain
Перун	13	20-Silver Wolf	26-тризуб	2-Sax Clan	8-himatsubushi	14-Death or Glory
Death or Glory	14	7-CCCP	1-First Wave	25-athena	19-NBC	13-Перун
Einfach so	15	22-Die Hanse	28-Los conquistadores	4-Belgique	10-Lily	16-Crab Club
Crab Club	16	9-Bansh	3-The Eyrie	27-1111	21-ЛЕВ	15-Einfach so
Fighter	17	24-SKY LORDS	30-Welcome to Asteroid	6-Soul Reapers	12-MUKAKIN-MUGON	18-Team Heronic
Team Heronic	18	11-Kamigrain	5-Clan Destino	29-WelcomeToAsteroid II	23-LonesomeRyders	17-Fighter
NBC	19	26-тризуб	2-Sax Clan	8-himatsubushi	14-Death or Glory	20-Silver Wolf
Silver Wolf	20	13-Перун	7-CCCP	1-First Wave	25-athena	19-NBC
ЛЕВ	21	28-Los conquistadores	4-Belgique	10-Lily	16-Crab Club	22-Die Hanse
Die Hanse	22	15-Einfach so	9-Bansh	3-The Eyrie	27-1111	21-ЛЕВ
LonesomeRyders	23	30-Welcome to Asteroid	6-Soul Reapers	12-MUKAKIN-MUGON	18-Team Heronic	24-SKY LORDS
SKY LORDS	24	17-Fighter	11-Kamigrain	5-Clan Destino	29-WelcomeToAsteroid II	23-LonesomeRyders
athena	25	2-Sax Clan	8-himatsubushi	14-Death or Glory	20-Silver Wolf	26-тризуб
тризуб	26	19-NBC	13-Перун	7-CCCP	1-First Wave	25-athena
1111	27	4-Belgique	10-Lily	16-Crab Club	22-Die Hanse	28-Los conquistadores
Los conquistadores	28	21-ЛЕВ	15-Einfach so	9-Bansh	3-The Eyrie	27-1111
WelcomeToAsteroid II	29	6-Soul Reapers	12-MUKAKIN-MUGON	18-Team Heronic	24-SKY LORDS	30-Welcome to Asteroid
Welcome to Asteroid	30	23-LonesomeRyders	17-Fighter	11-Kamigrain	5-Clan Destino	29-WelcomeToAsteroid II
`;

export const bronze = readData(program, "bronze");
