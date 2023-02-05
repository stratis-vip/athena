import { readData } from "../lib";

const program = `
Mattari	1	8-himatsubushi	14-CRYSTAL	20-Kamigrain	26-Silver Wolf	2-First Wave
First Wave	2	25-The LIONS	19-Team Heronic	13-Death or Glory	7-The Eyrie	1-Mattari
Clan Destino	3	10-Перун	16-Einfach so	22-Die Hanse	28-athena	4-Belgique
Belgique	4	27-NBC	21-Fighter	15-CCCP	9-Soul Reapers	3-Clan Destino
Sax Clan	5	12-SKY LORDS	18-MUKAKIN-MUGON	24-тризуб	30-LonesomeRyders	6-Bansh
Bansh	6	29-Welcome to Asteroid	23-1111	17-ЛЕВ	11-Lily	5-Sax Clan
The Eyrie	7	14-CRYSTAL	20-Kamigrain	26-Silver Wolf	2-First Wave	8-himatsubushi
himatsubushi	8	1-Mattari	25-The LIONS	19-Team Heronic	13-Death or Glory	7-The Eyrie
Soul Reapers	9	16-Einfach so	22-Die Hanse	28-athena	4-Belgique	10-Перун
Перун	10	3-Clan Destino	27-NBC	21-Fighter	15-CCCP	9-Soul Reapers
Lily	11	18-MUKAKIN-MUGON	24-тризуб	30-LonesomeRyders	6-Bansh	12-SKY LORDS
SKY LORDS	12	5-Sax Clan	29-Welcome to Asteroid	23-1111	17-ЛЕВ	11-Lily
Death or Glory	13	20-Kamigrain	26-Silver Wolf	2-First Wave	8-himatsubushi	14-CRYSTAL
CRYSTAL	14	7-The Eyrie	1-Mattari	25-The LIONS	19-Team Heronic	13-Death or Glory
CCCP	15	22-Die Hanse	28-athena	4-Belgique	10-Перун	16-Einfach so
Einfach so	16	9-Soul Reapers	3-Clan Destino	27-NBC	21-Fighter	15-CCCP
ЛЕВ	17	24-тризуб	30-LonesomeRyders	6-Bansh	12-SKY LORDS	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Lily	5-Sax Clan	29-Welcome to Asteroid	23-1111	17-ЛЕВ
Team Heronic	19	26-Silver Wolf	2-First Wave	8-himatsubushi	14-CRYSTAL	20-Kamigrain
Kamigrain	20	13-Death or Glory	7-The Eyrie	1-Mattari	25-The LIONS	19-Team Heronic
Fighter	21	28-athena	4-Belgique	10-Перун	16-Einfach so	22-Die Hanse
Die Hanse	22	15-CCCP	9-Soul Reapers	3-Clan Destino	27-NBC	21-Fighter
1111	23	30-LonesomeRyders	6-Bansh	12-SKY LORDS	18-MUKAKIN-MUGON	24-тризуб
тризуб	24	17-ЛЕВ	11-Lily	5-Sax Clan	29-Welcome to Asteroid	23-1111
The LIONS	25	2-First Wave	8-himatsubushi	14-CRYSTAL	20-Kamigrain	26-Silver Wolf
Silver Wolf	26	19-Team Heronic	13-Death or Glory	7-The Eyrie	1-Mattari	25-The LIONS
NBC	27	4-Belgique	10-Перун	16-Einfach so	22-Die Hanse	28-athena
athena	28	21-Fighter	15-CCCP	9-Soul Reapers	3-Clan Destino	27-NBC
Welcome to Asteroid	29	6-Bansh	12-SKY LORDS	18-MUKAKIN-MUGON	24-тризуб	30-LonesomeRyders
LonesomeRyders	30	23-1111	17-ЛЕВ	11-Lily	5-Sax Clan	29-Welcome to Asteroid
`;

export const bronze = readData(program, "bronze");
