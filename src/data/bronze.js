import { readData } from "../lib";

const program = `
Vikings	1	8-himatsubushi	14-Kamigrain	20-Die Hanse	26-LonesomeRyders	2-Clan Destino
Clan Destino	2	25-Silver Wolf	19-Team Heronic	13-Lily	7-Soul Reapers	1-Vikings
First Wave	3	10-Bansh	16-CCCP	22-The LIONS	28-WelcomeToAsteroid II	4-Sax Clan
Sax Clan	4	27-Welcome to Asteroid	21-athena	15-Death or Glory	9-Перун	3-First Wave
The Eyrie	5	12-SKY LORDS	18-MUKAKIN-MUGON	24-Korean-House	30-Los conquistadores	6-Belgique
Belgique	6	29-ЛЕВ	23-Crab Club	17-Fighter	11-Einfach so	5-The Eyrie
Soul Reapers	7	14-Kamigrain	20-Die Hanse	26-LonesomeRyders	2-Clan Destino	8-himatsubushi
himatsubushi	8	1-Vikings	25-Silver Wolf	19-Team Heronic	13-Lily	7-Soul Reapers
Перун	9	16-CCCP	22-The LIONS	28-WelcomeToAsteroid II	4-Sax Clan	10-Bansh
Bansh	10	3-First Wave	27-Welcome to Asteroid	21-athena	15-Death or Glory	9-Перун
Einfach so	11	18-MUKAKIN-MUGON	24-Korean-House	30-Los conquistadores	6-Belgique	12-SKY LORDS
SKY LORDS	12	5-The Eyrie	29-ЛЕВ	23-Crab Club	17-Fighter	11-Einfach so
Lily	13	20-Die Hanse	26-LonesomeRyders	2-Clan Destino	8-himatsubushi	14-Kamigrain
Kamigrain	14	7-Soul Reapers	1-Vikings	25-Silver Wolf	19-Team Heronic	13-Lily
Death or Glory	15	22-The LIONS	28-WelcomeToAsteroid II	4-Sax Clan	10-Bansh	16-CCCP
CCCP	16	9-Перун	3-First Wave	27-Welcome to Asteroid	21-athena	15-Death or Glory
Fighter	17	24-Korean-House	30-Los conquistadores	6-Belgique	12-SKY LORDS	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Einfach so	5-The Eyrie	29-ЛЕВ	23-Crab Club	17-Fighter
Team Heronic	19	26-LonesomeRyders	2-Clan Destino	8-himatsubushi	14-Kamigrain	20-Die Hanse
Die Hanse	20	13-Lily	7-Soul Reapers	1-Vikings	25-Silver Wolf	19-Team Heronic
athena	21	28-WelcomeToAsteroid II	4-Sax Clan	10-Bansh	16-CCCP	22-The LIONS
The LIONS	22	15-Death or Glory	9-Перун	3-First Wave	27-Welcome to Asteroid	21-athena
Crab Club	23	30-Los conquistadores	6-Belgique	12-SKY LORDS	18-MUKAKIN-MUGON	24-Korean-House
Korean-House	24	17-Fighter	11-Einfach so	5-The Eyrie	29-ЛЕВ	23-Crab Club
Silver Wolf	25	2-Clan Destino	8-himatsubushi	14-Kamigrain	20-Die Hanse	26-LonesomeRyders
LonesomeRyders	26	19-Team Heronic	13-Lily	7-Soul Reapers	1-Vikings	25-Silver Wolf
Welcome to Asteroid	27	4-Sax Clan	10-Bansh	16-CCCP	22-The LIONS	28-WelcomeToAsteroid II
WelcomeToAsteroid II	28	21-athena	15-Death or Glory	9-Перун	3-First Wave	27-Welcome to Asteroid
ЛЕВ	29	6-Belgique	12-SKY LORDS	18-MUKAKIN-MUGON	24-Korean-House	30-Los conquistadores
Los conquistadores	30	23-Crab Club	17-Fighter	11-Einfach so	5-The Eyrie	29-ЛЕВ
`;

export const bronze = readData(program, "bronze");
