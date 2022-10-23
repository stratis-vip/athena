import { readData } from "../lib"

const program = `
Велес	1	8-himatsubushi	14-Перун	20-MUKAKIN-MUGON	26-1111	2-Clan Destino
Clan Destino	2	25-Schriese	19-Fighter	13-The LIONS	7-Soul Reapers	1-Велес
Lily	3	10-Death or Glory	16-Lost Soul	22-тризуб	28-Pif Paf Pouf	4-Belgique
Belgique	4	27-ЛЕВ	21-Einfach so	15-CRYSTAL	9-HERO 45	3-Lily
The Eyrie	5	12-Bansh	18-Kamigrain	24-Die Hanse	30-Team Heronic	6-Sax Clan
Sax Clan	6	29-ppmmOmmqq	23-StormCat	17-SKY LORDS	11-CCCP	5-The Eyrie
Soul Reapers	7	14-Перун	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi
himatsubushi	8	1-Велес	25-Schriese	19-Fighter	13-The LIONS	7-Soul Reapers
HERO 45	9	16-Lost Soul	22-тризуб	28-Pif Paf Pouf	4-Belgique	10-Death or Glory
Death or Glory	10	3-Lily	27-ЛЕВ	21-Einfach so	15-CRYSTAL	9-HERO 45
CCCP	11	18-Kamigrain	24-Die Hanse	30-Team Heronic	6-Sax Clan	12-Bansh
Bansh	12	5-The Eyrie	29-ppmmOmmqq	23-StormCat	17-SKY LORDS	11-CCCP
The LIONS	13	20-MUKAKIN-MUGON	26-1111	2-Clan Destino	8-himatsubushi	14-Перун
Перун	14	7-Soul Reapers	1-Велес	25-Schriese	19-Fighter	13-The LIONS
CRYSTAL	15	22-тризуб	28-Pif Paf Pouf	4-Belgique	10-Death or Glory	16-Lost Soul
Lost Soul	16	9-HERO 45	3-Lily	27-ЛЕВ	21-Einfach so	15-CRYSTAL
SKY LORDS	17	24-Die Hanse	30-Team Heronic	6-Sax Clan	12-Bansh	18-Kamigrain
Kamigrain	18	11-CCCP	5-The Eyrie	29-ppmmOmmqq	23-StormCat	17-SKY LORDS
Fighter	19	26-1111	2-Clan Destino	8-himatsubushi	14-Перун	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-The LIONS	7-Soul Reapers	1-Велес	25-Schriese	19-Fighter
Einfach so	21	28-Pif Paf Pouf	4-Belgique	10-Death or Glory	16-Lost Soul	22-тризуб
тризуб	22	15-CRYSTAL	9-HERO 45	3-Lily	27-ЛЕВ	21-Einfach so
StormCat	23	30-Team Heronic	6-Sax Clan	12-Bansh	18-Kamigrain	24-Die Hanse
Die Hanse	24	17-SKY LORDS	11-CCCP	5-The Eyrie	29-ppmmOmmqq	23-StormCat
Schriese	25	2-Clan Destino	8-himatsubushi	14-Перун	20-MUKAKIN-MUGON	26-1111
1111	26	19-Fighter	13-The LIONS	7-Soul Reapers	1-Велес	25-Schriese
ЛЕВ	27	4-Belgique	10-Death or Glory	16-Lost Soul	22-тризуб	28-Pif Paf Pouf
Pif Paf Pouf	28	21-Einfach so	15-CRYSTAL	9-HERO 45	3-Lily	27-ЛЕВ
ppmmOmmqq	29	6-Sax Clan	12-Bansh	18-Kamigrain	24-Die Hanse	30-Team Heronic
Team Heronic	30	23-StormCat	17-SKY LORDS	11-CCCP	5-The Eyrie	29-ppmmOmmqq
`

export const bronze = readData(program, 'bronze')