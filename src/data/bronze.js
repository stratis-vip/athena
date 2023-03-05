import { readData } from "../lib";

const program = `
First Wave	1	8-himatsubushi	14-Team Heronic	20-Silver Wolf	26-Los conquistadores	2-Sax Clan
Sax Clan	2	25-LonesomeRyders	19-WelcomeToAsteroid II	13-Bansh	7-Soul Reapers	1-First Wave
Belgique	3	10-Lily	16-Death or Glory	22-Crab Club	28-1111	4-The Eyrie
The Eyrie	4	27-Welcome to Asteroid	21-ЛЕВ	15-Kamigrain	9-Перун	3-Belgique
Vikings	5	12-CCCP	18-MUKAKIN-MUGON	24-SKY LORDS	30-тризуб	6-Clan Destino
Clan Destino	6	29-NBC	23-Die Hanse	17-Fighter	11-Einfach so	5-Vikings
Soul Reapers	7	14-Team Heronic	20-Silver Wolf	26-Los conquistadores	2-Sax Clan	8-himatsubushi
himatsubushi	8	1-First Wave	25-LonesomeRyders	19-WelcomeToAsteroid II	13-Bansh	7-Soul Reapers
Перун	9	16-Death or Glory	22-Crab Club	28-1111	4-The Eyrie	10-Lily
Lily	10	3-Belgique	27-Welcome to Asteroid	21-ЛЕВ	15-Kamigrain	9-Перун
Einfach so	11	18-MUKAKIN-MUGON	24-SKY LORDS	30-тризуб	6-Clan Destino	12-CCCP
CCCP	12	5-Vikings	29-NBC	23-Die Hanse	17-Fighter	11-Einfach so
Bansh	13	20-Silver Wolf	26-Los conquistadores	2-Sax Clan	8-himatsubushi	14-Team Heronic
Team Heronic	14	7-Soul Reapers	1-First Wave	25-LonesomeRyders	19-WelcomeToAsteroid II	13-Bansh
Kamigrain	15	22-Crab Club	28-1111	4-The Eyrie	10-Lily	16-Death or Glory
Death or Glory	16	9-Перун	3-Belgique	27-Welcome to Asteroid	21-ЛЕВ	15-Kamigrain
Fighter	17	24-SKY LORDS	30-тризуб	6-Clan Destino	12-CCCP	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Einfach so	5-Vikings	29-NBC	23-Die Hanse	17-Fighter
WelcomeToAsteroid II	19	26-Los conquistadores	2-Sax Clan	8-himatsubushi	14-Team Heronic	20-Silver Wolf
Silver Wolf	20	13-Bansh	7-Soul Reapers	1-First Wave	25-LonesomeRyders	19-WelcomeToAsteroid II
ЛЕВ	21	28-1111	4-The Eyrie	10-Lily	16-Death or Glory	22-Crab Club
Crab Club	22	15-Kamigrain	9-Перун	3-Belgique	27-Welcome to Asteroid	21-ЛЕВ
Die Hanse	23	30-тризуб	6-Clan Destino	12-CCCP	18-MUKAKIN-MUGON	24-SKY LORDS
SKY LORDS	24	17-Fighter	11-Einfach so	5-Vikings	29-NBC	23-Die Hanse
LonesomeRyders	25	2-Sax Clan	8-himatsubushi	14-Team Heronic	20-Silver Wolf	26-Los conquistadores
Los conquistadores	26	19-WelcomeToAsteroid II	13-Bansh	7-Soul Reapers	1-First Wave	25-LonesomeRyders
Welcome to Asteroid	27	4-The Eyrie	10-Lily	16-Death or Glory	22-Crab Club	28-1111
1111	28	21-ЛЕВ	15-Kamigrain	9-Перун	3-Belgique	27-Welcome to Asteroid
NBC	29	6-Clan Destino	12-CCCP	18-MUKAKIN-MUGON	24-SKY LORDS	30-тризуб
тризуб	30	23-Die Hanse	17-Fighter	11-Einfach so	5-Vikings	29-NBC
`;

export const bronze = readData(program, "bronze");
