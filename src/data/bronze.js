import { readData } from "../lib";

const program = `
First Wave	1	8-Belgique	14-Death or Glory	20-StormCat	26-1111	2-Soul Reapers
Soul Reapers	2	25-Die Hanse	19-тризуб	13-CRYSTAL	7-himatsubushi	1-First Wave
Sax Clan	3	10-CCCP	16-MUKAKIN-MUGON	22-Team Heronic	28-Lost Soul	4-Clan Destino
Clan Destino	4	27-Pif Paf Pouf	21-Kamigrain	15-Einfach so	9-The Eyrie	3-Sax Clan
HERO 45	5	12-Перун	18-SKY LORDS	24-ЛЕВ	30-UNITED STATES	6-Lily
Lily	6	29-Welcome to Asteroid	23-Fighter	17-The LIONS	11-Bansh	5-HERO 45
himatsubushi	7	14-Death or Glory	20-StormCat	26-1111	2-Soul Reapers	8-Belgique
Belgique	8	1-First Wave	25-Die Hanse	19-тризуб	13-CRYSTAL	7-himatsubushi
The Eyrie	9	16-MUKAKIN-MUGON	22-Team Heronic	28-Lost Soul	4-Clan Destino	10-CCCP
CCCP	10	3-Sax Clan	27-Pif Paf Pouf	21-Kamigrain	15-Einfach so	9-The Eyrie
Bansh	11	18-SKY LORDS	24-ЛЕВ	30-UNITED STATES	6-Lily	12-Перун
Перун	12	5-HERO 45	29-Welcome to Asteroid	23-Fighter	17-The LIONS	11-Bansh
CRYSTAL	13	20-StormCat	26-1111	2-Soul Reapers	8-Belgique	14-Death or Glory
Death or Glory	14	7-himatsubushi	1-First Wave	25-Die Hanse	19-тризуб	13-CRYSTAL
Einfach so	15	22-Team Heronic	28-Lost Soul	4-Clan Destino	10-CCCP	16-MUKAKIN-MUGON
MUKAKIN-MUGON	16	9-The Eyrie	3-Sax Clan	27-Pif Paf Pouf	21-Kamigrain	15-Einfach so
The LIONS	17	24-ЛЕВ	30-UNITED STATES	6-Lily	12-Перун	18-SKY LORDS
SKY LORDS	18	11-Bansh	5-HERO 45	29-Welcome to Asteroid	23-Fighter	17-The LIONS
тризуб	19	26-1111	2-Soul Reapers	8-Belgique	14-Death or Glory	20-StormCat
StormCat	20	13-CRYSTAL	7-himatsubushi	1-First Wave	25-Die Hanse	19-тризуб
Kamigrain	21	28-Lost Soul	4-Clan Destino	10-CCCP	16-MUKAKIN-MUGON	22-Team Heronic
Team Heronic	22	15-Einfach so	9-The Eyrie	3-Sax Clan	27-Pif Paf Pouf	21-Kamigrain
Fighter	23	30-UNITED STATES	6-Lily	12-Перун	18-SKY LORDS	24-ЛЕВ
ЛЕВ	24	17-The LIONS	11-Bansh	5-HERO 45	29-Welcome to Asteroid	23-Fighter
Die Hanse	25	2-Soul Reapers	8-Belgique	14-Death or Glory	20-StormCat	26-1111
1111	26	19-тризуб	13-CRYSTAL	7-himatsubushi	1-First Wave	25-Die Hanse
Pif Paf Pouf	27	4-Clan Destino	10-CCCP	16-MUKAKIN-MUGON	22-Team Heronic	28-Lost Soul
Lost Soul	28	21-Kamigrain	15-Einfach so	9-The Eyrie	3-Sax Clan	27-Pif Paf Pouf
Welcome to Asteroid	29	6-Lily	12-Перун	18-SKY LORDS	24-ЛЕВ	30-UNITED STATES
UNITED STATES	30	23-Fighter	17-The LIONS	11-Bansh	5-HERO 45	29-Welcome to Asteroid
`;

export const bronze = readData(program, "bronze");
