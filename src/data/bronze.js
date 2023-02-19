import { readData } from "../lib";

const program = `
Mattari	1	8-Soul Reapers	14-Einfach so	20-The LIONS	26-CRYSTAL	2-Clan Destino
Clan Destino	2	25-тризуб	19-Fighter	13-MUKAKIN-MUGON	7-himatsubushi	1-Mattari
Belgique	3	10-Lily	16-Team Heronic	22-Silver Wolf	28-Crab Club	4-First Wave
First Wave	4	27-Welcome to Asteroid	21-Die Hanse	15-Kamigrain	9-Bansh	3-Belgique
The Eyrie	5	12-CCCP	18-Death or Glory	24-LonesomeRyders	30-Korean-House	6-Sax Clan
Sax Clan	6	29-alone	23-athena	17-SKY LORDS	11-Перун	5-The Eyrie
himatsubushi	7	14-Einfach so	20-The LIONS	26-CRYSTAL	2-Clan Destino	8-Soul Reapers
Soul Reapers	8	1-Mattari	25-тризуб	19-Fighter	13-MUKAKIN-MUGON	7-himatsubushi
Bansh	9	16-Team Heronic	22-Silver Wolf	28-Crab Club	4-First Wave	10-Lily
Lily	10	3-Belgique	27-Welcome to Asteroid	21-Die Hanse	15-Kamigrain	9-Bansh
Перун	11	18-Death or Glory	24-LonesomeRyders	30-Korean-House	6-Sax Clan	12-CCCP
CCCP	12	5-The Eyrie	29-alone	23-athena	17-SKY LORDS	11-Перун
MUKAKIN-MUGON	13	20-The LIONS	26-CRYSTAL	2-Clan Destino	8-Soul Reapers	14-Einfach so
Einfach so	14	7-himatsubushi	1-Mattari	25-тризуб	19-Fighter	13-MUKAKIN-MUGON
Kamigrain	15	22-Silver Wolf	28-Crab Club	4-First Wave	10-Lily	16-Team Heronic
Team Heronic	16	9-Bansh	3-Belgique	27-Welcome to Asteroid	21-Die Hanse	15-Kamigrain
SKY LORDS	17	24-LonesomeRyders	30-Korean-House	6-Sax Clan	12-CCCP	18-Death or Glory
Death or Glory	18	11-Перун	5-The Eyrie	29-alone	23-athena	17-SKY LORDS
Fighter	19	26-CRYSTAL	2-Clan Destino	8-Soul Reapers	14-Einfach so	20-The LIONS
The LIONS	20	13-MUKAKIN-MUGON	7-himatsubushi	1-Mattari	25-тризуб	19-Fighter
Die Hanse	21	28-Crab Club	4-First Wave	10-Lily	16-Team Heronic	22-Silver Wolf
Silver Wolf	22	15-Kamigrain	9-Bansh	3-Belgique	27-Welcome to Asteroid	21-Die Hanse
athena	23	30-Korean-House	6-Sax Clan	12-CCCP	18-Death or Glory	24-LonesomeRyders
LonesomeRyders	24	17-SKY LORDS	11-Перун	5-The Eyrie	29-alone	23-athena
тризуб	25	2-Clan Destino	8-Soul Reapers	14-Einfach so	20-The LIONS	26-CRYSTAL
CRYSTAL	26	19-Fighter	13-MUKAKIN-MUGON	7-himatsubushi	1-Mattari	25-тризуб
Welcome to Asteroid	27	4-First Wave	10-Lily	16-Team Heronic	22-Silver Wolf	28-Crab Club
Crab Club	28	21-Die Hanse	15-Kamigrain	9-Bansh	3-Belgique	27-Welcome to Asteroid
alone	29	6-Sax Clan	12-CCCP	18-Death or Glory	24-LonesomeRyders	30-Korean-House
Korean-House	30	23-athena	17-SKY LORDS	11-Перун	5-The Eyrie	29-alone
`;

export const bronze = readData(program, "bronze");
