import { readData } from "../lib";

const program = `
HERO 45	1	8-Lily	14-CCCP	20-Lost Soul	26-Silver Wolf	2-First Wave
First Wave	2	25-тризуб	19-SKY LORDS	13-Bansh	7-Sax Clan	1-HERO 45
Clan Destino	3	10-MUKAKIN-MUGON	16-Team Heronic	22-Fighter	28-The LIONS	4-Belgique
Belgique	4	27-ЛЕВ	21-Welcome to Asteroid	15-Kamigrain	9-Soul Reapers	3-Clan Destino
The Eyrie	5	12-Einfach so	18-Перун	24-Die Hanse	30-The Dragon Way	6-himatsubushi
himatsubushi	6	29-alone	23-1111	17-Death or Glory	11-CRYSTAL	5-The Eyrie
Sax Clan	7	14-CCCP	20-Lost Soul	26-Silver Wolf	2-First Wave	8-Lily
Lily	8	1-HERO 45	25-тризуб	19-SKY LORDS	13-Bansh	7-Sax Clan
Soul Reapers	9	16-Team Heronic	22-Fighter	28-The LIONS	4-Belgique	10-MUKAKIN-MUGON
MUKAKIN-MUGON	10	3-Clan Destino	27-ЛЕВ	21-Welcome to Asteroid	15-Kamigrain	9-Soul Reapers
CRYSTAL	11	18-Перун	24-Die Hanse	30-The Dragon Way	6-himatsubushi	12-Einfach so
Einfach so	12	5-The Eyrie	29-alone	23-1111	17-Death or Glory	11-CRYSTAL
Bansh	13	20-Lost Soul	26-Silver Wolf	2-First Wave	8-Lily	14-CCCP
CCCP	14	7-Sax Clan	1-HERO 45	25-тризуб	19-SKY LORDS	13-Bansh
Kamigrain	15	22-Fighter	28-The LIONS	4-Belgique	10-MUKAKIN-MUGON	16-Team Heronic
Team Heronic	16	9-Soul Reapers	3-Clan Destino	27-ЛЕВ	21-Welcome to Asteroid	15-Kamigrain
Death or Glory	17	24-Die Hanse	30-The Dragon Way	6-himatsubushi	12-Einfach so	18-Перун
Перун	18	11-CRYSTAL	5-The Eyrie	29-alone	23-1111	17-Death or Glory
SKY LORDS	19	26-Silver Wolf	2-First Wave	8-Lily	14-CCCP	20-Lost Soul
Lost Soul	20	13-Bansh	7-Sax Clan	1-HERO 45	25-тризуб	19-SKY LORDS
Welcome to Asteroid	21	28-The LIONS	4-Belgique	10-MUKAKIN-MUGON	16-Team Heronic	22-Fighter
Fighter	22	15-Kamigrain	9-Soul Reapers	3-Clan Destino	27-ЛЕВ	21-Welcome to Asteroid
1111	23	30-The Dragon Way	6-himatsubushi	12-Einfach so	18-Перун	24-Die Hanse
Die Hanse	24	17-Death or Glory	11-CRYSTAL	5-The Eyrie	29-alone	23-1111
тризуб	25	2-First Wave	8-Lily	14-CCCP	20-Lost Soul	26-Silver Wolf
Silver Wolf	26	19-SKY LORDS	13-Bansh	7-Sax Clan	1-HERO 45	25-тризуб
ЛЕВ	27	4-Belgique	10-MUKAKIN-MUGON	16-Team Heronic	22-Fighter	28-The LIONS
The LIONS	28	21-Welcome to Asteroid	15-Kamigrain	9-Soul Reapers	3-Clan Destino	27-ЛЕВ
alone	29	6-himatsubushi	12-Einfach so	18-Перун	24-Die Hanse	30-The Dragon Way
The Dragon Way	30	23-1111	17-Death or Glory	11-CRYSTAL	5-The Eyrie	29-alone
`;

export const bronze = readData(program, "bronze");
