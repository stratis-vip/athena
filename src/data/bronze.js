import { readData } from "../lib"

const program = `
First Wave	1	8-Soul Reapers	14-CRYSTAL	20-SKY LORDS	26-ppmmOmmqq	2-Belgique
Belgique	2	25-Schriese	19-тризуб	13-Перун	7-himatsubushi	1-First Wave
Clan Destino	3	10-CCCP	16-MUKAKIN-MUGON	22-Fighter	28-Pif Paf Pouf	4-Sax Clan
Sax Clan	4	27-1111	21-Einfach so	15-Kamigrain	9-Death or Glory	3-Clan Destino
The Eyrie	5	12-The LIONS	18-StormCat	24-Die Hanse	30-HERO 45	6-Lily
Lily	6	29-Silver Wolf	23-ЛЕВ	17-Lost Soul	11-Bansh	5-The Eyrie
himatsubushi	7	14-CRYSTAL	20-SKY LORDS	26-ppmmOmmqq	2-Belgique	8-Soul Reapers
Soul Reapers	8	1-First Wave	25-Schriese	19-тризуб	13-Перун	7-himatsubushi
Death or Glory	9	16-MUKAKIN-MUGON	22-Fighter	28-Pif Paf Pouf	4-Sax Clan	10-CCCP
CCCP	10	3-Clan Destino	27-1111	21-Einfach so	15-Kamigrain	9-Death or Glory
Bansh	11	18-StormCat	24-Die Hanse	30-HERO 45	6-Lily	12-The LIONS
The LIONS	12	5-The Eyrie	29-Silver Wolf	23-ЛЕВ	17-Lost Soul	11-Bansh
Перун	13	20-SKY LORDS	26-ppmmOmmqq	2-Belgique	8-Soul Reapers	14-CRYSTAL
CRYSTAL	14	7-himatsubushi	1-First Wave	25-Schriese	19-тризуб	13-Перун
Kamigrain	15	22-Fighter	28-Pif Paf Pouf	4-Sax Clan	10-CCCP	16-MUKAKIN-MUGON
MUKAKIN-MUGON	16	9-Death or Glory	3-Clan Destino	27-1111	21-Einfach so	15-Kamigrain
Lost Soul	17	24-Die Hanse	30-HERO 45	6-Lily	12-The LIONS	18-StormCat
StormCat	18	11-Bansh	5-The Eyrie	29-Silver Wolf	23-ЛЕВ	17-Lost Soul
тризуб	19	26-ppmmOmmqq	2-Belgique	8-Soul Reapers	14-CRYSTAL	20-SKY LORDS
SKY LORDS	20	13-Перун	7-himatsubushi	1-First Wave	25-Schriese	19-тризуб
Einfach so	21	28-Pif Paf Pouf	4-Sax Clan	10-CCCP	16-MUKAKIN-MUGON	22-Fighter
Fighter	22	15-Kamigrain	9-Death or Glory	3-Clan Destino	27-1111	21-Einfach so
ЛЕВ	23	30-HERO 45	6-Lily	12-The LIONS	18-StormCat	24-Die Hanse
Die Hanse	24	17-Lost Soul	11-Bansh	5-The Eyrie	29-Silver Wolf	23-ЛЕВ
Schriese	25	2-Belgique	8-Soul Reapers	14-CRYSTAL	20-SKY LORDS	26-ppmmOmmqq
ppmmOmmqq	26	19-тризуб	13-Перун	7-himatsubushi	1-First Wave	25-Schriese
1111	27	4-Sax Clan	10-CCCP	16-MUKAKIN-MUGON	22-Fighter	28-Pif Paf Pouf
Pif Paf Pouf	28	21-Einfach so	15-Kamigrain	9-Death or Glory	3-Clan Destino	27-1111
Silver Wolf	29	6-Lily	12-The LIONS	18-StormCat	24-Die Hanse	30-HERO 45
HERO 45	30	23-ЛЕВ	17-Lost Soul	11-Bansh	5-The Eyrie	29-Silver Wolf
`

export const bronze = readData(program, 'bronze')