import { readData } from "../lib"

const program = `
First Wave	1	8-himatsubushi	14-CRYSTAL	20-MUKAKIN-MUGON	26-Die Hanse	2-Sax Clan
Sax Clan	2	25-StormCat	19-Перун	13-Lost Soul	7-Soul Reapers	1-First Wave
Belgique	3	10-Death or Glory	16-Fighter	22-Kamigrain	28-Pif Paf Pouf	4-Clan Destino
Clan Destino	4	27-1111	21-ppmmOmmqq	15-тризуб	9-CCCP	3-Belgique
Lily	5	12-HERO 45	18-Einfach so	24-Crab Club	30-Goodbye	6-The Eyrie
The Eyrie	6	29-The LIONS	23-SKY LORDS	17-ЛЕВ	11-Bansh	5-Lily
Soul Reapers	7	14-CRYSTAL	20-MUKAKIN-MUGON	26-Die Hanse	2-Sax Clan	8-himatsubushi
himatsubushi	8	1-First Wave	25-StormCat	19-Перун	13-Lost Soul	7-Soul Reapers
CCCP	9	16-Fighter	22-Kamigrain	28-Pif Paf Pouf	4-Clan Destino	10-Death or Glory
Death or Glory	10	3-Belgique	27-1111	21-ppmmOmmqq	15-тризуб	9-CCCP
Bansh	11	18-Einfach so	24-Crab Club	30-Goodbye	6-The Eyrie	12-HERO 45
HERO 45	12	5-Lily	29-The LIONS	23-SKY LORDS	17-ЛЕВ	11-Bansh
Lost Soul	13	20-MUKAKIN-MUGON	26-Die Hanse	2-Sax Clan	8-himatsubushi	14-CRYSTAL
CRYSTAL	14	7-Soul Reapers	1-First Wave	25-StormCat	19-Перун	13-Lost Soul
тризуб	15	22-Kamigrain	28-Pif Paf Pouf	4-Clan Destino	10-Death or Glory	16-Fighter
Fighter	16	9-CCCP	3-Belgique	27-1111	21-ppmmOmmqq	15-тризуб
ЛЕВ	17	24-Crab Club	30-Goodbye	6-The Eyrie	12-HERO 45	18-Einfach so
Einfach so	18	11-Bansh	5-Lily	29-The LIONS	23-SKY LORDS	17-ЛЕВ
Перун	19	26-Die Hanse	2-Sax Clan	8-himatsubushi	14-CRYSTAL	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-Lost Soul	7-Soul Reapers	1-First Wave	25-StormCat	19-Перун
ppmmOmmqq	21	28-Pif Paf Pouf	4-Clan Destino	10-Death or Glory	16-Fighter	22-Kamigrain
Kamigrain	22	15-тризуб	9-CCCP	3-Belgique	27-1111	21-ppmmOmmqq
SKY LORDS	23	30-Goodbye	6-The Eyrie	12-HERO 45	18-Einfach so	24-Crab Club
Crab Club	24	17-ЛЕВ	11-Bansh	5-Lily	29-The LIONS	23-SKY LORDS
StormCat	25	2-Sax Clan	8-himatsubushi	14-CRYSTAL	20-MUKAKIN-MUGON	26-Die Hanse
Die Hanse	26	19-Перун	13-Lost Soul	7-Soul Reapers	1-First Wave	25-StormCat
1111	27	4-Clan Destino	10-Death or Glory	16-Fighter	22-Kamigrain	28-Pif Paf Pouf
Pif Paf Pouf	28	21-ppmmOmmqq	15-тризуб	9-CCCP	3-Belgique	27-1111
The LIONS	29	6-The Eyrie	12-HERO 45	18-Einfach so	24-Crab Club	30-Goodbye
Goodbye	30	23-SKY LORDS	17-ЛЕВ	11-Bansh	5-Lily	29-The LIONS
`

export const bronze = readData(program, 'bronze')