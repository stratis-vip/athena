import { readData } from "../lib";

const program = `
Clan Destino	1	8-Soul Reapers	14-Перун	20-Pif Paf Pouf	26-ЛЕВ	2-First Wave
First Wave	2	25-Silver Wolf	19-SKY LORDS	13-Bansh	7-Lily	1-Clan Destino
HERO 45	3	10-Kamigrain	16-Einfach so	22-Team Heronic	28-Lost Soul	4-The Eyrie
The Eyrie	4	27-Welcome to Asteroid	21-UNITED STATES	15-MUKAKIN-MUGON	9-himatsubushi	3-HERO 45
Belgique	5	12-Death or Glory	18-CRYSTAL	24-1111	30-тризуб	6-Sax Clan
Sax Clan	6	29-WelcomeToAsteroid II	23-Die Hanse	17-CCCP	11-Fighter	5-Belgique
Lily	7	14-Перун	20-Pif Paf Pouf	26-ЛЕВ	2-First Wave	8-Soul Reapers
Soul Reapers	8	1-Clan Destino	25-Silver Wolf	19-SKY LORDS	13-Bansh	7-Lily
himatsubushi	9	16-Einfach so	22-Team Heronic	28-Lost Soul	4-The Eyrie	10-Kamigrain
Kamigrain	10	3-HERO 45	27-Welcome to Asteroid	21-UNITED STATES	15-MUKAKIN-MUGON	9-himatsubushi
Fighter	11	18-CRYSTAL	24-1111	30-тризуб	6-Sax Clan	12-Death or Glory
Death or Glory	12	5-Belgique	29-WelcomeToAsteroid II	23-Die Hanse	17-CCCP	11-Fighter
Bansh	13	20-Pif Paf Pouf	26-ЛЕВ	2-First Wave	8-Soul Reapers	14-Перун
Перун	14	7-Lily	1-Clan Destino	25-Silver Wolf	19-SKY LORDS	13-Bansh
MUKAKIN-MUGON	15	22-Team Heronic	28-Lost Soul	4-The Eyrie	10-Kamigrain	16-Einfach so
Einfach so	16	9-himatsubushi	3-HERO 45	27-Welcome to Asteroid	21-UNITED STATES	15-MUKAKIN-MUGON
CCCP	17	24-1111	30-тризуб	6-Sax Clan	12-Death or Glory	18-CRYSTAL
CRYSTAL	18	11-Fighter	5-Belgique	29-WelcomeToAsteroid II	23-Die Hanse	17-CCCP
SKY LORDS	19	26-ЛЕВ	2-First Wave	8-Soul Reapers	14-Перун	20-Pif Paf Pouf
Pif Paf Pouf	20	13-Bansh	7-Lily	1-Clan Destino	25-Silver Wolf	19-SKY LORDS
UNITED STATES	21	28-Lost Soul	4-The Eyrie	10-Kamigrain	16-Einfach so	22-Team Heronic
Team Heronic	22	15-MUKAKIN-MUGON	9-himatsubushi	3-HERO 45	27-Welcome to Asteroid	21-UNITED STATES
Die Hanse	23	30-тризуб	6-Sax Clan	12-Death or Glory	18-CRYSTAL	24-1111
1111	24	17-CCCP	11-Fighter	5-Belgique	29-WelcomeToAsteroid II	23-Die Hanse
Silver Wolf	25	2-First Wave	8-Soul Reapers	14-Перун	20-Pif Paf Pouf	26-ЛЕВ
ЛЕВ	26	19-SKY LORDS	13-Bansh	7-Lily	1-Clan Destino	25-Silver Wolf
Welcome to Asteroid	27	4-The Eyrie	10-Kamigrain	16-Einfach so	22-Team Heronic	28-Lost Soul
Lost Soul	28	21-UNITED STATES	15-MUKAKIN-MUGON	9-himatsubushi	3-HERO 45	27-Welcome to Asteroid
WelcomeToAsteroid II	29	6-Sax Clan	12-Death or Glory	18-CRYSTAL	24-1111	30-тризуб
тризуб	30	23-Die Hanse	17-CCCP	11-Fighter	5-Belgique	29-WelcomeToAsteroid II
`;

export const bronze = readData(program, "bronze");
