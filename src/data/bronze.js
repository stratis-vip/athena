import { readData } from "../lib";

const program = `
Mattari	1	8-Soul Reapers	14-Перун	20-MUKAKIN-MUGON	26-1111	2-First Wave
First Wave	2	25-Die Hanse	19-CCCP	13-Einfach so	7-Belgique	1-Mattari
Clan Destino	3	10-Bansh	16-Crab Club	22-The LIONS	28-Welcome to Asteroid	4-The Eyrie
The Eyrie	4	27-тризуб	21-Fighter	15-ЛЕВ	9-Lily	3-Clan Destino
Sax Clan	5	12-Kamigrain	18-Death or Glory	24-athena	30-Team Heronic	6-himatsubushi
himatsubushi	6	29-alone	23-Silver Wolf	17-SKY LORDS	11-CRYSTAL	5-Sax Clan
Belgique	7	14-Перун	20-MUKAKIN-MUGON	26-1111	2-First Wave	8-Soul Reapers
Soul Reapers	8	1-Mattari	25-Die Hanse	19-CCCP	13-Einfach so	7-Belgique
Lily	9	16-Crab Club	22-The LIONS	28-Welcome to Asteroid	4-The Eyrie	10-Bansh
Bansh	10	3-Clan Destino	27-тризуб	21-Fighter	15-ЛЕВ	9-Lily
CRYSTAL	11	18-Death or Glory	24-athena	30-Team Heronic	6-himatsubushi	12-Kamigrain
Kamigrain	12	5-Sax Clan	29-alone	23-Silver Wolf	17-SKY LORDS	11-CRYSTAL
Einfach so	13	20-MUKAKIN-MUGON	26-1111	2-First Wave	8-Soul Reapers	14-Перун
Перун	14	7-Belgique	1-Mattari	25-Die Hanse	19-CCCP	13-Einfach so
ЛЕВ	15	22-The LIONS	28-Welcome to Asteroid	4-The Eyrie	10-Bansh	16-Crab Club
Crab Club	16	9-Lily	3-Clan Destino	27-тризуб	21-Fighter	15-ЛЕВ
SKY LORDS	17	24-athena	30-Team Heronic	6-himatsubushi	12-Kamigrain	18-Death or Glory
Death or Glory	18	11-CRYSTAL	5-Sax Clan	29-alone	23-Silver Wolf	17-SKY LORDS
CCCP	19	26-1111	2-First Wave	8-Soul Reapers	14-Перун	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-Einfach so	7-Belgique	1-Mattari	25-Die Hanse	19-CCCP
Fighter	21	28-Welcome to Asteroid	4-The Eyrie	10-Bansh	16-Crab Club	22-The LIONS
The LIONS	22	15-ЛЕВ	9-Lily	3-Clan Destino	27-тризуб	21-Fighter
Silver Wolf	23	30-Team Heronic	6-himatsubushi	12-Kamigrain	18-Death or Glory	24-athena
athena	24	17-SKY LORDS	11-CRYSTAL	5-Sax Clan	29-alone	23-Silver Wolf
Die Hanse	25	2-First Wave	8-Soul Reapers	14-Перун	20-MUKAKIN-MUGON	26-1111
1111	26	19-CCCP	13-Einfach so	7-Belgique	1-Mattari	25-Die Hanse
тризуб	27	4-The Eyrie	10-Bansh	16-Crab Club	22-The LIONS	28-Welcome to Asteroid
Welcome to Asteroid	28	21-Fighter	15-ЛЕВ	9-Lily	3-Clan Destino	27-тризуб
alone	29	6-himatsubushi	12-Kamigrain	18-Death or Glory	24-athena	30-Team Heronic
Team Heronic	30	23-Silver Wolf	17-SKY LORDS	11-CRYSTAL	5-Sax Clan	29-alone
`;

export const bronze = readData(program, "bronze");
