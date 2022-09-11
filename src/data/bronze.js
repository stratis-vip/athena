import { readData } from "../lib"

const program = `
Велес	1	8-Belgique	14-Soul Reapers	20-Konoha	26-Pif Paf Pouf	2-Clan Destino
Clan Destino	2	25-1111	19-Перун	13-Death or Glory	7-CCCP	1-Велес
Fighter	3	10-The LIONS	16-ЛЕВ	22-StormCat	28-Black Bulls	4-Lily
Lily	4	27-Einfach so	21-Team Heronic	15-Lost Soul	9-himatsubushi	3-Fighter
Sax Clan	5	12-Bansh	18-MUKAKIN-MUGON	24-Die Hanse	30-тризуб	6-The Eyrie
The Eyrie	6	29-Stille Helden	23-Schriese	17-SKY LORDS	11-CRYSTAL	5-Sax Clan
CCCP	7	14-Soul Reapers	20-Konoha	26-Pif Paf Pouf	2-Clan Destino	8-Belgique
Belgique	8	1-Велес	25-1111	19-Перун	13-Death or Glory	7-CCCP
himatsubushi	9	16-ЛЕВ	22-StormCat	28-Black Bulls	4-Lily	10-The LIONS
The LIONS	10	3-Fighter	27-Einfach so	21-Team Heronic	15-Lost Soul	9-himatsubushi
CRYSTAL	11	18-MUKAKIN-MUGON	24-Die Hanse	30-тризуб	6-The Eyrie	12-Bansh
Bansh	12	5-Sax Clan	29-Stille Helden	23-Schriese	17-SKY LORDS	11-CRYSTAL
Death or Glory	13	20-Konoha	26-Pif Paf Pouf	2-Clan Destino	8-Belgique	14-Soul Reapers
Soul Reapers	14	7-CCCP	1-Велес	25-1111	19-Перун	13-Death or Glory
Lost Soul	15	22-StormCat	28-Black Bulls	4-Lily	10-The LIONS	16-ЛЕВ
ЛЕВ	16	9-himatsubushi	3-Fighter	27-Einfach so	21-Team Heronic	15-Lost Soul
SKY LORDS	17	24-Die Hanse	30-тризуб	6-The Eyrie	12-Bansh	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-CRYSTAL	5-Sax Clan	29-Stille Helden	23-Schriese	17-SKY LORDS
Перун	19	26-Pif Paf Pouf	2-Clan Destino	8-Belgique	14-Soul Reapers	20-Konoha
Konoha	20	13-Death or Glory	7-CCCP	1-Велес	25-1111	19-Перун
Team Heronic	21	28-Black Bulls	4-Lily	10-The LIONS	16-ЛЕВ	22-StormCat
StormCat	22	15-Lost Soul	9-himatsubushi	3-Fighter	27-Einfach so	21-Team Heronic
Schriese	23	30-тризуб	6-The Eyrie	12-Bansh	18-MUKAKIN-MUGON	24-Die Hanse
Die Hanse	24	17-SKY LORDS	11-CRYSTAL	5-Sax Clan	29-Stille Helden	23-Schriese
1111	25	2-Clan Destino	8-Belgique	14-Soul Reapers	20-Konoha	26-Pif Paf Pouf
Pif Paf Pouf	26	19-Перун	13-Death or Glory	7-CCCP	1-Велес	25-1111
Einfach so	27	4-Lily	10-The LIONS	16-ЛЕВ	22-StormCat	28-Black Bulls
Black Bulls	28	21-Team Heronic	15-Lost Soul	9-himatsubushi	3-Fighter	27-Einfach so
Stille Helden	29	6-The Eyrie	12-Bansh	18-MUKAKIN-MUGON	24-Die Hanse	30-тризуб
тризуб	30	23-Schriese	17-SKY LORDS	11-CRYSTAL	5-Sax Clan	29-Stille Helden
`

export const bronze = readData(program, 'bronze')