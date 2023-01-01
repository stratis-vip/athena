import { readData } from "../lib";

const program = `
Mattari	1	8-Lily	14-SKY LORDS	20-MUKAKIN-MUGON	26-Welcome to Asteroid	2-Clan Destino
Clan Destino	2	25-Silver Wolf	19-ЛЕВ	13-Перун	7-Belgique	1-Mattari
The Eyrie	3	10-Bansh	16-Einfach so	22-The LIONS	28-REX	4-First Wave
First Wave	4	27-WelcomeToAsteroid II	21-Fighter	15-тризуб	9-himatsubushi	3-The Eyrie
Soul Reapers	5	12-Kamigrain	18-CCCP	24-Die Hanse	30-athena	6-Sax Clan
Sax Clan	6	29-LonesomeRyders	23-1111	17-Death or Glory	11-CRYSTAL	5-Soul Reapers
Belgique	7	14-SKY LORDS	20-MUKAKIN-MUGON	26-Welcome to Asteroid	2-Clan Destino	8-Lily
Lily	8	1-Mattari	25-Silver Wolf	19-ЛЕВ	13-Перун	7-Belgique
himatsubushi	9	16-Einfach so	22-The LIONS	28-REX	4-First Wave	10-Bansh
Bansh	10	3-The Eyrie	27-WelcomeToAsteroid II	21-Fighter	15-тризуб	9-himatsubushi
CRYSTAL	11	18-CCCP	24-Die Hanse	30-athena	6-Sax Clan	12-Kamigrain
Kamigrain	12	5-Soul Reapers	29-LonesomeRyders	23-1111	17-Death or Glory	11-CRYSTAL
Перун	13	20-MUKAKIN-MUGON	26-Welcome to Asteroid	2-Clan Destino	8-Lily	14-SKY LORDS
SKY LORDS	14	7-Belgique	1-Mattari	25-Silver Wolf	19-ЛЕВ	13-Перун
тризуб	15	22-The LIONS	28-REX	4-First Wave	10-Bansh	16-Einfach so
Einfach so	16	9-himatsubushi	3-The Eyrie	27-WelcomeToAsteroid II	21-Fighter	15-тризуб
Death or Glory	17	24-Die Hanse	30-athena	6-Sax Clan	12-Kamigrain	18-CCCP
CCCP	18	11-CRYSTAL	5-Soul Reapers	29-LonesomeRyders	23-1111	17-Death or Glory
ЛЕВ	19	26-Welcome to Asteroid	2-Clan Destino	8-Lily	14-SKY LORDS	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-Перун	7-Belgique	1-Mattari	25-Silver Wolf	19-ЛЕВ
Fighter	21	28-REX	4-First Wave	10-Bansh	16-Einfach so	22-The LIONS
The LIONS	22	15-тризуб	9-himatsubushi	3-The Eyrie	27-WelcomeToAsteroid II	21-Fighter
1111	23	30-athena	6-Sax Clan	12-Kamigrain	18-CCCP	24-Die Hanse
Die Hanse	24	17-Death or Glory	11-CRYSTAL	5-Soul Reapers	29-LonesomeRyders	23-1111
Silver Wolf	25	2-Clan Destino	8-Lily	14-SKY LORDS	20-MUKAKIN-MUGON	26-Welcome to Asteroid
Welcome to Asteroid	26	19-ЛЕВ	13-Перун	7-Belgique	1-Mattari	25-Silver Wolf
WelcomeToAsteroid II	27	4-First Wave	10-Bansh	16-Einfach so	22-The LIONS	28-REX
REX	28	21-Fighter	15-тризуб	9-himatsubushi	3-The Eyrie	27-WelcomeToAsteroid II
LonesomeRyders	29	6-Sax Clan	12-Kamigrain	18-CCCP	24-Die Hanse	30-athena
athena	30	23-1111	17-Death or Glory	11-CRYSTAL	5-Soul Reapers	29-LonesomeRyders
`;

export const bronze = readData(program, "bronze");
