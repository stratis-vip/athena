import { readData } from "../lib"

const program = `
Велес	1	8-The LIONS	14-CRYSTAL	20-Kamigrain	26-StormCat	2-The Eyrie
The Eyrie	2	25-SKY LORDS	19-Schriese	13-Lost Soul	7-Lily	1-Велес
Clan Destino	3	10-CCCP	16-Перун	22-1111	28-Die Hanse	4-Belgique
Belgique	4	27-Einfach so	21-MUKAKIN-MUGON	15-Fighter	9-Soul Reapers	3-Clan Destino
Sax Clan	5	12-Death or Glory	18-тризуб	24-Stille Helden	30-Black Bulls	6-Bansh
Bansh	6	29-Silver Wolf	23-Pif Paf Pouf	17-ЛЕВ	11-himatsubushi	5-Sax Clan
Lily	7	14-CRYSTAL	20-Kamigrain	26-StormCat	2-The Eyrie	8-The LIONS
The LIONS	8	1-Велес	25-SKY LORDS	19-Schriese	13-Lost Soul	7-Lily
Soul Reapers	9	16-Перун	22-1111	28-Die Hanse	4-Belgique	10-CCCP
CCCP	10	3-Clan Destino	27-Einfach so	21-MUKAKIN-MUGON	15-Fighter	9-Soul Reapers
himatsubushi	11	18-тризуб	24-Stille Helden	30-Black Bulls	6-Bansh	12-Death or Glory
Death or Glory	12	5-Sax Clan	29-Silver Wolf	23-Pif Paf Pouf	17-ЛЕВ	11-himatsubushi
Lost Soul	13	20-Kamigrain	26-StormCat	2-The Eyrie	8-The LIONS	14-CRYSTAL
CRYSTAL	14	7-Lily	1-Велес	25-SKY LORDS	19-Schriese	13-Lost Soul
Fighter	15	22-1111	28-Die Hanse	4-Belgique	10-CCCP	16-Перун
Перун	16	9-Soul Reapers	3-Clan Destino	27-Einfach so	21-MUKAKIN-MUGON	15-Fighter
ЛЕВ	17	24-Stille Helden	30-Black Bulls	6-Bansh	12-Death or Glory	18-тризуб
тризуб	18	11-himatsubushi	5-Sax Clan	29-Silver Wolf	23-Pif Paf Pouf	17-ЛЕВ
Schriese	19	26-StormCat	2-The Eyrie	8-The LIONS	14-CRYSTAL	20-Kamigrain
Kamigrain	20	13-Lost Soul	7-Lily	1-Велес	25-SKY LORDS	19-Schriese
MUKAKIN-MUGON	21	28-Die Hanse	4-Belgique	10-CCCP	16-Перун	22-1111
1111	22	15-Fighter	9-Soul Reapers	3-Clan Destino	27-Einfach so	21-MUKAKIN-MUGON
Pif Paf Pouf	23	30-Black Bulls	6-Bansh	12-Death or Glory	18-тризуб	24-Stille Helden
Stille Helden	24	17-ЛЕВ	11-himatsubushi	5-Sax Clan	29-Silver Wolf	23-Pif Paf Pouf
SKY LORDS	25	2-The Eyrie	8-The LIONS	14-CRYSTAL	20-Kamigrain	26-StormCat
StormCat	26	19-Schriese	13-Lost Soul	7-Lily	1-Велес	25-SKY LORDS
Einfach so	27	4-Belgique	10-CCCP	16-Перун	22-1111	28-Die Hanse
Die Hanse	28	21-MUKAKIN-MUGON	15-Fighter	9-Soul Reapers	3-Clan Destino	27-Einfach so
Silver Wolf	29	6-Bansh	12-Death or Glory	18-тризуб	24-Stille Helden	30-Black Bulls
Black Bulls	30	23-Pif Paf Pouf	17-ЛЕВ	11-himatsubushi	5-Sax Clan	29-Silver Wolf
`

export const bronze = readData(program, 'bronze')