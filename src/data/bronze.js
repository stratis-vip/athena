import { readData } from "../lib"

const program = `
Велес	1	8-CCCP	14-The LIONS	20-SKY LORDS	26-Stille Helden	2-The Eyrie
The Eyrie	2	25-Schriese	19-Lost Soul	13-ЛЕВ	7-Bansh	1-Велес
Lily	3	10-Belgique	16-Soul Reapers	22-Einfach so	28-Silver Wolf	4-Clan Destino
Clan Destino	4	27-Konoha	21-Перун	15-тризуб	9-himatsubushi	3-Lily
Sax Clan	5	12-CRYSTAL	18-MUKAKIN-MUGON	24-Pif Paf Pouf	30-I FURIANI	6-Fighter
Fighter	6	29-Kamigrain	23-StormCat	17-Die Hanse	11-Death or Glory	5-Sax Clan
Bansh	7	14-The LIONS	20-SKY LORDS	26-Stille Helden	2-The Eyrie	8-CCCP
CCCP	8	1-Велес	25-Schriese	19-Lost Soul	13-ЛЕВ	7-Bansh
himatsubushi	9	16-Soul Reapers	22-Einfach so	28-Silver Wolf	4-Clan Destino	10-Belgique
Belgique	10	3-Lily	27-Konoha	21-Перун	15-тризуб	9-himatsubushi
Death or Glory	11	18-MUKAKIN-MUGON	24-Pif Paf Pouf	30-I FURIANI	6-Fighter	12-CRYSTAL
CRYSTAL	12	5-Sax Clan	29-Kamigrain	23-StormCat	17-Die Hanse	11-Death or Glory
ЛЕВ	13	20-SKY LORDS	26-Stille Helden	2-The Eyrie	8-CCCP	14-The LIONS
The LIONS	14	7-Bansh	1-Велес	25-Schriese	19-Lost Soul	13-ЛЕВ
тризуб	15	22-Einfach so	28-Silver Wolf	4-Clan Destino	10-Belgique	16-Soul Reapers
Soul Reapers	16	9-himatsubushi	3-Lily	27-Konoha	21-Перун	15-тризуб
Die Hanse	17	24-Pif Paf Pouf	30-I FURIANI	6-Fighter	12-CRYSTAL	18-MUKAKIN-MUGON
MUKAKIN-MUGON	18	11-Death or Glory	5-Sax Clan	29-Kamigrain	23-StormCat	17-Die Hanse
Lost Soul	19	26-Stille Helden	2-The Eyrie	8-CCCP	14-The LIONS	20-SKY LORDS
SKY LORDS	20	13-ЛЕВ	7-Bansh	1-Велес	25-Schriese	19-Lost Soul
Перун	21	28-Silver Wolf	4-Clan Destino	10-Belgique	16-Soul Reapers	22-Einfach so
Einfach so	22	15-тризуб	9-himatsubushi	3-Lily	27-Konoha	21-Перун
StormCat	23	30-I FURIANI	6-Fighter	12-CRYSTAL	18-MUKAKIN-MUGON	24-Pif Paf Pouf
Pif Paf Pouf	24	17-Die Hanse	11-Death or Glory	5-Sax Clan	29-Kamigrain	23-StormCat
Schriese	25	2-The Eyrie	8-CCCP	14-The LIONS	20-SKY LORDS	26-Stille Helden
Stille Helden	26	19-Lost Soul	13-ЛЕВ	7-Bansh	1-Велес	25-Schriese
Konoha	27	4-Clan Destino	10-Belgique	16-Soul Reapers	22-Einfach so	28-Silver Wolf
Silver Wolf	28	21-Перун	15-тризуб	9-himatsubushi	3-Lily	27-Konoha
Kamigrain	29	6-Fighter	12-CRYSTAL	18-MUKAKIN-MUGON	24-Pif Paf Pouf	30-I FURIANI
I FURIANI	30	23-StormCat	17-Die Hanse	11-Death or Glory	5-Sax Clan	29-Kamigrain
`

export const bronze = readData(program, 'bronze')