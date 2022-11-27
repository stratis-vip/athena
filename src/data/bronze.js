import { readData } from "../lib";

const program = `
Clan Destino	1	8-The Eyrie	14-CRYSTAL	20-тризуб	26-ppmmOmmqq	2-Sax Clan
Sax Clan	2	25-1111	19-MUKAKIN-MUGON	13-Bansh	7-Belgique	1-Clan Destino
Lily	3	10-Death or Glory	16-SKY LORDS	22-Fighter	28-ЛЕВ	4-First Wave
First Wave	4	27-Pif Paf Pouf	21-Kamigrain	15-Die Hanse	9-HERO 45	3-Lily
Soul Reapers	5	12-Einfach so	18-Перун	24-Team Heronic	30-Welcome to Asteroid	6-himatsubushi
himatsubushi	6	29-The LIONS	23-StormCat	17-Lost Soul	11-CCCP	5-Soul Reapers
Belgique	7	14-CRYSTAL	20-тризуб	26-ppmmOmmqq	2-Sax Clan	8-The Eyrie
The Eyrie	8	1-Clan Destino	25-1111	19-MUKAKIN-MUGON	13-Bansh	7-Belgique
HERO 45	9	16-SKY LORDS	22-Fighter	28-ЛЕВ	4-First Wave	10-Death or Glory
Death or Glory	10	3-Lily	27-Pif Paf Pouf	21-Kamigrain	15-Die Hanse	9-HERO 45
CCCP	11	18-Перун	24-Team Heronic	30-Welcome to Asteroid	6-himatsubushi	12-Einfach so
Einfach so	12	5-Soul Reapers	29-The LIONS	23-StormCat	17-Lost Soul	11-CCCP
Bansh	13	20-тризуб	26-ppmmOmmqq	2-Sax Clan	8-The Eyrie	14-CRYSTAL
CRYSTAL	14	7-Belgique	1-Clan Destino	25-1111	19-MUKAKIN-MUGON	13-Bansh
Die Hanse	15	22-Fighter	28-ЛЕВ	4-First Wave	10-Death or Glory	16-SKY LORDS
SKY LORDS	16	9-HERO 45	3-Lily	27-Pif Paf Pouf	21-Kamigrain	15-Die Hanse
Lost Soul	17	24-Team Heronic	30-Welcome to Asteroid	6-himatsubushi	12-Einfach so	18-Перун
Перун	18	11-CCCP	5-Soul Reapers	29-The LIONS	23-StormCat	17-Lost Soul
MUKAKIN-MUGON	19	26-ppmmOmmqq	2-Sax Clan	8-The Eyrie	14-CRYSTAL	20-тризуб
тризуб	20	13-Bansh	7-Belgique	1-Clan Destino	25-1111	19-MUKAKIN-MUGON
Kamigrain	21	28-ЛЕВ	4-First Wave	10-Death or Glory	16-SKY LORDS	22-Fighter
Fighter	22	15-Die Hanse	9-HERO 45	3-Lily	27-Pif Paf Pouf	21-Kamigrain
StormCat	23	30-Welcome to Asteroid	6-himatsubushi	12-Einfach so	18-Перун	24-Team Heronic
Team Heronic	24	17-Lost Soul	11-CCCP	5-Soul Reapers	29-The LIONS	23-StormCat
1111	25	2-Sax Clan	8-The Eyrie	14-CRYSTAL	20-тризуб	26-ppmmOmmqq
ppmmOmmqq	26	19-MUKAKIN-MUGON	13-Bansh	7-Belgique	1-Clan Destino	25-1111
Pif Paf Pouf	27	4-First Wave	10-Death or Glory	16-SKY LORDS	22-Fighter	28-ЛЕВ
ЛЕВ	28	21-Kamigrain	15-Die Hanse	9-HERO 45	3-Lily	27-Pif Paf Pouf
The LIONS	29	6-himatsubushi	12-Einfach so	18-Перун	24-Team Heronic	30-Welcome to Asteroid
Welcome to Asteroid	30	23-StormCat	17-Lost Soul	11-CCCP	5-Soul Reapers	29-The LIONS
`;

export const bronze = readData(program, "bronze");
