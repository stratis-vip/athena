import { readData } from "../lib"

const program = `
Велес	1	8-himatsubushi	14-Kamigrain	20-StormCat	26-Pif Paf Pouf	2-The Eyrie
The Eyrie	2	25-Die Hanse	19-Перун	13-Death or Glory	7-Soul Reapers	1-Велес
Clan Destino	3	10-The LIONS	16-SKY LORDS	22-MUKAKIN-MUGON	28-1111	4-Lily
Lily	4	27-Einfach so	21-Fighter	15-CRYSTAL	9-HERO 45	3-Clan Destino
Belgique	5	12-Bansh	18-ЛЕВ	24-Goodbye	30-Crab Club	6-Sax Clan
Sax Clan	6	29-ppmmOmmqq	23-тризуб	17-Lost Soul	11-CCCP	5-Belgique
Soul Reapers	7	14-Kamigrain	20-StormCat	26-Pif Paf Pouf	2-The Eyrie	8-himatsubushi
himatsubushi	8	1-Велес	25-Die Hanse	19-Перун	13-Death or Glory	7-Soul Reapers
HERO 45	9	16-SKY LORDS	22-MUKAKIN-MUGON	28-1111	4-Lily	10-The LIONS
The LIONS	10	3-Clan Destino	27-Einfach so	21-Fighter	15-CRYSTAL	9-HERO 45
CCCP	11	18-ЛЕВ	24-Goodbye	30-Crab Club	6-Sax Clan	12-Bansh
Bansh	12	5-Belgique	29-ppmmOmmqq	23-тризуб	17-Lost Soul	11-CCCP
Death or Glory	13	20-StormCat	26-Pif Paf Pouf	2-The Eyrie	8-himatsubushi	14-Kamigrain
Kamigrain	14	7-Soul Reapers	1-Велес	25-Die Hanse	19-Перун	13-Death or Glory
CRYSTAL	15	22-MUKAKIN-MUGON	28-1111	4-Lily	10-The LIONS	16-SKY LORDS
SKY LORDS	16	9-HERO 45	3-Clan Destino	27-Einfach so	21-Fighter	15-CRYSTAL
Lost Soul	17	24-Goodbye	30-Crab Club	6-Sax Clan	12-Bansh	18-ЛЕВ
ЛЕВ	18	11-CCCP	5-Belgique	29-ppmmOmmqq	23-тризуб	17-Lost Soul
Перун	19	26-Pif Paf Pouf	2-The Eyrie	8-himatsubushi	14-Kamigrain	20-StormCat
StormCat	20	13-Death or Glory	7-Soul Reapers	1-Велес	25-Die Hanse	19-Перун
Fighter	21	28-1111	4-Lily	10-The LIONS	16-SKY LORDS	22-MUKAKIN-MUGON
MUKAKIN-MUGON	22	15-CRYSTAL	9-HERO 45	3-Clan Destino	27-Einfach so	21-Fighter
тризуб	23	30-Crab Club	6-Sax Clan	12-Bansh	18-ЛЕВ	24-Goodbye
Goodbye	24	17-Lost Soul	11-CCCP	5-Belgique	29-ppmmOmmqq	23-тризуб
Die Hanse	25	2-The Eyrie	8-himatsubushi	14-Kamigrain	20-StormCat	26-Pif Paf Pouf
Pif Paf Pouf	26	19-Перун	13-Death or Glory	7-Soul Reapers	1-Велес	25-Die Hanse
Einfach so	27	4-Lily	10-The LIONS	16-SKY LORDS	22-MUKAKIN-MUGON	28-1111
1111	28	21-Fighter	15-CRYSTAL	9-HERO 45	3-Clan Destino	27-Einfach so
ppmmOmmqq	29	6-Sax Clan	12-Bansh	18-ЛЕВ	24-Goodbye	30-Crab Club
Crab Club	30	23-тризуб	17-Lost Soul	11-CCCP	5-Belgique	29-ppmmOmmqq
`

export const bronze = readData(program, 'bronze')