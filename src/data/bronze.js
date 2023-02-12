import { readData } from "../lib";

const program = `
Clan Destino	1	8-Lily	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders	2-First Wave
First Wave	2	25-Silver Wolf	19-CCCP	13-CRYSTAL	7-The Eyrie	1-Clan Destino
Sax Clan	3	10-Перун	16-Die Hanse	22-Fighter	28-NBC	4-Mattari
Mattari	4	27-тризуб	21-SKY LORDS	15-1111	9-Soul Reapers	3-Sax Clan
Belgique	5	12-Bansh	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid	6-himatsubushi
himatsubushi	6	29-The LIONS	23-Team Heronic	17-Death or Glory	11-Einfach so	5-Belgique
The Eyrie	7	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders	2-First Wave	8-Lily
Lily	8	1-Clan Destino	25-Silver Wolf	19-CCCP	13-CRYSTAL	7-The Eyrie
Soul Reapers	9	16-Die Hanse	22-Fighter	28-NBC	4-Mattari	10-Перун
Перун	10	3-Sax Clan	27-тризуб	21-SKY LORDS	15-1111	9-Soul Reapers
Einfach so	11	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid	6-himatsubushi	12-Bansh
Bansh	12	5-Belgique	29-The LIONS	23-Team Heronic	17-Death or Glory	11-Einfach so
CRYSTAL	13	20-ЛЕВ	26-LonesomeRyders	2-First Wave	8-Lily	14-Kamigrain
Kamigrain	14	7-The Eyrie	1-Clan Destino	25-Silver Wolf	19-CCCP	13-CRYSTAL
1111	15	22-Fighter	28-NBC	4-Mattari	10-Перун	16-Die Hanse
Die Hanse	16	9-Soul Reapers	3-Sax Clan	27-тризуб	21-SKY LORDS	15-1111
Death or Glory	17	24-athena	30-Welcome to Asteroid	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Einfach so	5-Belgique	29-The LIONS	23-Team Heronic	17-Death or Glory
CCCP	19	26-LonesomeRyders	2-First Wave	8-Lily	14-Kamigrain	20-ЛЕВ
ЛЕВ	20	13-CRYSTAL	7-The Eyrie	1-Clan Destino	25-Silver Wolf	19-CCCP
SKY LORDS	21	28-NBC	4-Mattari	10-Перун	16-Die Hanse	22-Fighter
Fighter	22	15-1111	9-Soul Reapers	3-Sax Clan	27-тризуб	21-SKY LORDS
Team Heronic	23	30-Welcome to Asteroid	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON	24-athena
athena	24	17-Death or Glory	11-Einfach so	5-Belgique	29-The LIONS	23-Team Heronic
Silver Wolf	25	2-First Wave	8-Lily	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders
LonesomeRyders	26	19-CCCP	13-CRYSTAL	7-The Eyrie	1-Clan Destino	25-Silver Wolf
тризуб	27	4-Mattari	10-Перун	16-Die Hanse	22-Fighter	28-NBC
NBC	28	21-SKY LORDS	15-1111	9-Soul Reapers	3-Sax Clan	27-тризуб
The LIONS	29	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid
Welcome to Asteroid	30	23-Team Heronic	17-Death or Glory	11-Einfach so	5-Belgique	29-The LIONSClan Destino	1	8-Lily	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders	2-First Wave
First Wave	2	25-Silver Wolf	19-CCCP	13-CRYSTAL	7-The Eyrie	1-Clan Destino
Sax Clan	3	10-Перун	16-Die Hanse	22-Fighter	28-NBC	4-Mattari
Mattari	4	27-тризуб	21-SKY LORDS	15-1111	9-Soul Reapers	3-Sax Clan
Belgique	5	12-Bansh	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid	6-himatsubushi
himatsubushi	6	29-The LIONS	23-Team Heronic	17-Death or Glory	11-Einfach so	5-Belgique
The Eyrie	7	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders	2-First Wave	8-Lily
Lily	8	1-Clan Destino	25-Silver Wolf	19-CCCP	13-CRYSTAL	7-The Eyrie
Soul Reapers	9	16-Die Hanse	22-Fighter	28-NBC	4-Mattari	10-Перун
Перун	10	3-Sax Clan	27-тризуб	21-SKY LORDS	15-1111	9-Soul Reapers
Einfach so	11	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid	6-himatsubushi	12-Bansh
Bansh	12	5-Belgique	29-The LIONS	23-Team Heronic	17-Death or Glory	11-Einfach so
CRYSTAL	13	20-ЛЕВ	26-LonesomeRyders	2-First Wave	8-Lily	14-Kamigrain
Kamigrain	14	7-The Eyrie	1-Clan Destino	25-Silver Wolf	19-CCCP	13-CRYSTAL
1111	15	22-Fighter	28-NBC	4-Mattari	10-Перун	16-Die Hanse
Die Hanse	16	9-Soul Reapers	3-Sax Clan	27-тризуб	21-SKY LORDS	15-1111
Death or Glory	17	24-athena	30-Welcome to Asteroid	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Einfach so	5-Belgique	29-The LIONS	23-Team Heronic	17-Death or Glory
CCCP	19	26-LonesomeRyders	2-First Wave	8-Lily	14-Kamigrain	20-ЛЕВ
ЛЕВ	20	13-CRYSTAL	7-The Eyrie	1-Clan Destino	25-Silver Wolf	19-CCCP
SKY LORDS	21	28-NBC	4-Mattari	10-Перун	16-Die Hanse	22-Fighter
Fighter	22	15-1111	9-Soul Reapers	3-Sax Clan	27-тризуб	21-SKY LORDS
Team Heronic	23	30-Welcome to Asteroid	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON	24-athena
athena	24	17-Death or Glory	11-Einfach so	5-Belgique	29-The LIONS	23-Team Heronic
Silver Wolf	25	2-First Wave	8-Lily	14-Kamigrain	20-ЛЕВ	26-LonesomeRyders
LonesomeRyders	26	19-CCCP	13-CRYSTAL	7-The Eyrie	1-Clan Destino	25-Silver Wolf
тризуб	27	4-Mattari	10-Перун	16-Die Hanse	22-Fighter	28-NBC
NBC	28	21-SKY LORDS	15-1111	9-Soul Reapers	3-Sax Clan	27-тризуб
The LIONS	29	6-himatsubushi	12-Bansh	18-MUKAKIN-MUGON	24-athena	30-Welcome to Asteroid
Welcome to Asteroid	30	23-Team Heronic	17-Death or Glory	11-Einfach so	5-Belgique	29-The LIONS
`;

export const bronze = readData(program, "bronze");
