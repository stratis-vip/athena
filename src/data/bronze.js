import { readData } from "../lib";

const program = `
Mattari	1	8-himatsubushi	14-SKY LORDS	20-MUKAKIN-MUGON	26-1111	2-Clan Destino
Clan Destino	2	25-Crab Club	19-Einfach so	13-CCCP	7-Lily	1-Mattari
Sax Clan	3	10-CRYSTAL	16-Fighter	22-alone	28-ЛЕВ	4-First Wave
First Wave	4	27-The LIONS	21-Team Heronic	15-Death or Glory	9-Soul Reapers	3-Sax Clan
The Eyrie	5	12-Перун	18-Silver Wolf	24-тризуб	30-Welcome to Asteroid	6-Belgique
Belgique	6	29-athena	23-Die Hanse	17-Kamigrain	11-Bansh	5-The Eyrie
Lily	7	14-SKY LORDS	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi
himatsubushi	8	1-Mattari	25-Crab Club	19-Einfach so	13-CCCP	7-Lily
Soul Reapers	9	16-Fighter	22-alone	28-ЛЕВ	4-First Wave	10-CRYSTAL
CRYSTAL	10	3-Sax Clan	27-The LIONS	21-Team Heronic	15-Death or Glory	9-Soul Reapers
Bansh	11	18-Silver Wolf	24-тризуб	30-Welcome to Asteroid	6-Belgique	12-Перун
Перун	12	5-The Eyrie	29-athena	23-Die Hanse	17-Kamigrain	11-Bansh
CCCP	13	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi	14-SKY LORDS
SKY LORDS	14	7-Lily	1-Mattari	25-Crab Club	19-Einfach so	13-CCCP
Death or Glory	15	22-alone	28-ЛЕВ	4-First Wave	10-CRYSTAL	16-Fighter
Fighter	16	9-Soul Reapers	3-Sax Clan	27-The LIONS	21-Team Heronic	15-Death or Glory
Kamigrain	17	24-тризуб	30-Welcome to Asteroid	6-Belgique	12-Перун	18-Silver Wolf
Silver Wolf	18	11-Bansh	5-The Eyrie	29-athena	23-Die Hanse	17-Kamigrain
Einfach so	19	26-1111	2-Clan Destino	8-himatsubushi	14-SKY LORDS	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-CCCP	7-Lily	1-Mattari	25-Crab Club	19-Einfach so
Team Heronic	21	28-ЛЕВ	4-First Wave	10-CRYSTAL	16-Fighter	22-alone
alone	22	15-Death or Glory	9-Soul Reapers	3-Sax Clan	27-The LIONS	21-Team Heronic
Die Hanse	23	30-Welcome to Asteroid	6-Belgique	12-Перун	18-Silver Wolf	24-тризуб
тризуб	24	17-Kamigrain	11-Bansh	5-The Eyrie	29-athena	23-Die Hanse
Crab Club	25	2-Clan Destino	8-himatsubushi	14-SKY LORDS	20-MUKAKIN-MUGON	26-1111
1111	26	19-Einfach so	13-CCCP	7-Lily	1-Mattari	25-Crab Club
The LIONS	27	4-First Wave	10-CRYSTAL	16-Fighter	22-alone	28-ЛЕВ
ЛЕВ	28	21-Team Heronic	15-Death or Glory	9-Soul Reapers	3-Sax Clan	27-The LIONS
athena	29	6-Belgique	12-Перун	18-Silver Wolf	24-тризуб	30-Welcome to Asteroid
Welcome to Asteroid	30	23-Die Hanse	17-Kamigrain	11-Bansh	5-The Eyrie	29-athena
`;

export const bronze = readData(program, "bronze");
