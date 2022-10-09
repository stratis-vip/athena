import { readData } from "../lib"

const program = `
Велес	1	8-Soul Reapers	14-Pif Paf Pouf	20-Fighter	26-1111	2-Clan Destino
Clan Destino	2	25-Die Hanse	19-SKY LORDS	13-The LIONS	7-Lily	1-Велес
Sax Clan	3	10-CCCP	16-Перун	22-тризуб	28-StormCat	4-The Eyrie
The Eyrie	4	27-Silver Wolf	21-Einfach so	15-MUKAKIN-MUGON	9-Bansh	3-Sax Clan
Belgique	5	12-ЛЕВ	18-Lost Soul	24-Schriese	30-ppmmOmmqq	6-himatsubushi
himatsubushi	6	29-Black Bulls	23-Kamigrain	17-CRYSTAL	11-Death or Glory	5-Belgique
Lily	7	14-Pif Paf Pouf	20-Fighter	26-1111	2-Clan Destino	8-Soul Reapers
Soul Reapers	8	1-Велес	25-Die Hanse	19-SKY LORDS	13-The LIONS	7-Lily
Bansh	9	16-Перун	22-тризуб	28-StormCat	4-The Eyrie	10-CCCP
CCCP	10	3-Sax Clan	27-Silver Wolf	21-Einfach so	15-MUKAKIN-MUGON	9-Bansh
Death or Glory	11	18-Lost Soul	24-Schriese	30-ppmmOmmqq	6-himatsubushi	12-ЛЕВ
ЛЕВ	12	5-Belgique	29-Black Bulls	23-Kamigrain	17-CRYSTAL	11-Death or Glory
The LIONS	13	20-Fighter	26-1111	2-Clan Destino	8-Soul Reapers	14-Pif Paf Pouf
Pif Paf Pouf	14	7-Lily	1-Велес	25-Die Hanse	19-SKY LORDS	13-The LIONS
MUKAKIN-MUGON	15	22-тризуб	28-StormCat	4-The Eyrie	10-CCCP	16-Перун
Перун	16	9-Bansh	3-Sax Clan	27-Silver Wolf	21-Einfach so	15-MUKAKIN-MUGON
CRYSTAL	17	24-Schriese	30-ppmmOmmqq	6-himatsubushi	12-ЛЕВ	18-Lost Soul
Lost Soul	18	11-Death or Glory	5-Belgique	29-Black Bulls	23-Kamigrain	17-CRYSTAL
SKY LORDS	19	26-1111	2-Clan Destino	8-Soul Reapers	14-Pif Paf Pouf	20-Fighter
Fighter	20	13-The LIONS	7-Lily	1-Велес	25-Die Hanse	19-SKY LORDS
Einfach so	21	28-StormCat	4-The Eyrie	10-CCCP	16-Перун	22-тризуб
тризуб	22	15-MUKAKIN-MUGON	9-Bansh	3-Sax Clan	27-Silver Wolf	21-Einfach so
Kamigrain	23	30-ppmmOmmqq	6-himatsubushi	12-ЛЕВ	18-Lost Soul	24-Schriese
Schriese	24	17-CRYSTAL	11-Death or Glory	5-Belgique	29-Black Bulls	23-Kamigrain
Die Hanse	25	2-Clan Destino	8-Soul Reapers	14-Pif Paf Pouf	20-Fighter	26-1111
1111	26	19-SKY LORDS	13-The LIONS	7-Lily	1-Велес	25-Die Hanse
Silver Wolf	27	4-The Eyrie	10-CCCP	16-Перун	22-тризуб	28-StormCat
StormCat	28	21-Einfach so	15-MUKAKIN-MUGON	9-Bansh	3-Sax Clan	27-Silver Wolf
Black Bulls	29	6-himatsubushi	12-ЛЕВ	18-Lost Soul	24-Schriese	30-ppmmOmmqq
ppmmOmmqq	30	23-Kamigrain	17-CRYSTAL	11-Death or Glory	5-Belgique	29-Black Bulls
`

export const bronze = readData(program, 'bronze')