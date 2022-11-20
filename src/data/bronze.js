import { readData } from "../lib"

const program = `
The Eyrie	1	8-HERO 45	14-Kamigrain	20-Fighter	26-ЛЕВ	2-First Wave
First Wave	2	25-Pif Paf Pouf	19-SKY LORDS	13-CCCP	7-Belgique	1-The Eyrie
Clan Destino	3	10-Bansh	16-Перун	22-The LIONS	28-Welcome to Asteroid	4-Sax Clan
Sax Clan	4	27-ppmmOmmqq	21-тризуб	15-Lost Soul	9-himatsubushi	3-Clan Destino
Soul Reapers	5	12-Death or Glory	18-Einfach so	24-Die Hanse	30-1111	6-Lily
Lily	6	29-StormCat	23-Team Heronic	17-MUKAKIN-MUGON	11-CRYSTAL	5-Soul Reapers
Belgique	7	14-Kamigrain	20-Fighter	26-ЛЕВ	2-First Wave	8-HERO 45
HERO 45	8	1-The Eyrie	25-Pif Paf Pouf	19-SKY LORDS	13-CCCP	7-Belgique
himatsubushi	9	16-Перун	22-The LIONS	28-Welcome to Asteroid	4-Sax Clan	10-Bansh
Bansh	10	3-Clan Destino	27-ppmmOmmqq	21-тризуб	15-Lost Soul	9-himatsubushi
CRYSTAL	11	18-Einfach so	24-Die Hanse	30-1111	6-Lily	12-Death or Glory
Death or Glory	12	5-Soul Reapers	29-StormCat	23-Team Heronic	17-MUKAKIN-MUGON	11-CRYSTAL
CCCP	13	20-Fighter	26-ЛЕВ	2-First Wave	8-HERO 45	14-Kamigrain
Kamigrain	14	7-Belgique	1-The Eyrie	25-Pif Paf Pouf	19-SKY LORDS	13-CCCP
Lost Soul	15	22-The LIONS	28-Welcome to Asteroid	4-Sax Clan	10-Bansh	16-Перун
Перун	16	9-himatsubushi	3-Clan Destino	27-ppmmOmmqq	21-тризуб	15-Lost Soul
MUKAKIN-MUGON	17	24-Die Hanse	30-1111	6-Lily	12-Death or Glory	18-Einfach so
Einfach so	18	11-CRYSTAL	5-Soul Reapers	29-StormCat	23-Team Heronic	17-MUKAKIN-MUGON
SKY LORDS	19	26-ЛЕВ	2-First Wave	8-HERO 45	14-Kamigrain	20-Fighter
Fighter	20	13-CCCP	7-Belgique	1-The Eyrie	25-Pif Paf Pouf	19-SKY LORDS
тризуб	21	28-Welcome to Asteroid	4-Sax Clan	10-Bansh	16-Перун	22-The LIONS
The LIONS	22	15-Lost Soul	9-himatsubushi	3-Clan Destino	27-ppmmOmmqq	21-тризуб
Team Heronic	23	30-1111	6-Lily	12-Death or Glory	18-Einfach so	24-Die Hanse
Die Hanse	24	17-MUKAKIN-MUGON	11-CRYSTAL	5-Soul Reapers	29-StormCat	23-Team Heronic
Pif Paf Pouf	25	2-First Wave	8-HERO 45	14-Kamigrain	20-Fighter	26-ЛЕВ
ЛЕВ	26	19-SKY LORDS	13-CCCP	7-Belgique	1-The Eyrie	25-Pif Paf Pouf
ppmmOmmqq	27	4-Sax Clan	10-Bansh	16-Перун	22-The LIONS	28-Welcome to Asteroid
Welcome to Asteroid	28	21-тризуб	15-Lost Soul	9-himatsubushi	3-Clan Destino	27-ppmmOmmqq
StormCat	29	6-Lily	12-Death or Glory	18-Einfach so	24-Die Hanse	30-1111
1111	30	23-Team Heronic	17-MUKAKIN-MUGON	11-CRYSTAL	5-Soul Reapers	29-StormCat
`

export const bronze = readData(program, 'bronze')