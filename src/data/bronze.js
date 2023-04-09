import { readData } from "../lib";

const program = `
Clan Destino	1	8-CCCP	14-Перун	20-Crab Club	26-тризуб	2-Sax Clan
Sax Clan	2	25-athena	19-WelcomeToAsteroid II	13-Kamigrain	7-Soul Reapers	1-Clan Destino
The Eyrie	3	10-Death or Glory	16-MUKAKIN-MUGON	22-NBC	28-Los conquistadores	4-First Wave
First Wave	4	27-Silver Wolf	21-SKY LORDS	15-Fighter	9-Bansh	3-The Eyrie
Belgique	5	12-Einfach so	18-LonesomeRyders	24-1111	30-Gold ship	6-himatsubushi
himatsubushi	6	29-Welcome to Asteroid	23-Die Hanse	17-Team Heronic	11-Lily	5-Belgique
Soul Reapers	7	14-Перун	20-Crab Club	26-тризуб	2-Sax Clan	8-CCCP
CCCP	8	1-Clan Destino	25-athena	19-WelcomeToAsteroid II	13-Kamigrain	7-Soul Reapers
Bansh	9	16-MUKAKIN-MUGON	22-NBC	28-Los conquistadores	4-First Wave	10-Death or Glory
Death or Glory	10	3-The Eyrie	27-Silver Wolf	21-SKY LORDS	15-Fighter	9-Bansh
Lily	11	18-LonesomeRyders	24-1111	30-Gold ship	6-himatsubushi	12-Einfach so
Einfach so	12	5-Belgique	29-Welcome to Asteroid	23-Die Hanse	17-Team Heronic	11-Lily
Kamigrain	13	20-Crab Club	26-тризуб	2-Sax Clan	8-CCCP	14-Перун
Перун	14	7-Soul Reapers	1-Clan Destino	25-athena	19-WelcomeToAsteroid II	13-Kamigrain
Fighter	15	22-NBC	28-Los conquistadores	4-First Wave	10-Death or Glory	16-MUKAKIN-MUGON
MUKAKIN-MUGON	16	9-Bansh	3-The Eyrie	27-Silver Wolf	21-SKY LORDS	15-Fighter
Team Heronic	17	24-1111	30-Gold ship	6-himatsubushi	12-Einfach so	18-LonesomeRyders
LonesomeRyders	18	11-Lily	5-Belgique	29-Welcome to Asteroid	23-Die Hanse	17-Team Heronic
WelcomeToAsteroid II	19	26-тризуб	2-Sax Clan	8-CCCP	14-Перун	20-Crab Club
Crab Club	20	13-Kamigrain	7-Soul Reapers	1-Clan Destino	25-athena	19-WelcomeToAsteroid II
SKY LORDS	21	28-Los conquistadores	4-First Wave	10-Death or Glory	16-MUKAKIN-MUGON	22-NBC
NBC	22	15-Fighter	9-Bansh	3-The Eyrie	27-Silver Wolf	21-SKY LORDS
Die Hanse	23	30-Gold ship	6-himatsubushi	12-Einfach so	18-LonesomeRyders	24-1111
1111	24	17-Team Heronic	11-Lily	5-Belgique	29-Welcome to Asteroid	23-Die Hanse
athena	25	2-Sax Clan	8-CCCP	14-Перун	20-Crab Club	26-тризуб
тризуб	26	19-WelcomeToAsteroid II	13-Kamigrain	7-Soul Reapers	1-Clan Destino	25-athena
Silver Wolf	27	4-First Wave	10-Death or Glory	16-MUKAKIN-MUGON	22-NBC	28-Los conquistadores
Los conquistadores	28	21-SKY LORDS	15-Fighter	9-Bansh	3-The Eyrie	27-Silver Wolf
Welcome to Asteroid	29	6-himatsubushi	12-Einfach so	18-LonesomeRyders	24-1111	30-Gold ship
Gold ship	30	23-Die Hanse	17-Team Heronic	11-Lily	5-Belgique	29-Welcome to Asteroid
`;

export const bronze = readData(program, "bronze");
