import { readData } from "../lib"

const program = `
Sax Clan	1	8-Belgique	14-SKY LORDS	20-Einfach so	26-Die Hanse	2-First Wave
First Wave	2	25-Pif Paf Pouf	19-Lost Soul	13-ЛЕВ	7-himatsubushi	1-Sax Clan
Clan Destino	3	10-HERO 45	16-CRYSTAL	22-тризуб	28-Welcome to Asteroid	4-The Eyrie
The Eyrie	4	27-ppmmOmmqq	21-Перун	15-The LIONS	9-Bansh	3-Clan Destino
Soul Reapers	5	12-CCCP	18-Fighter	24-Crab Club	30-Talons of Power	6-Lily
Lily	6	29-Team Heronic	23-MUKAKIN-MUGON	17-Kamigrain	11-Death or Glory	5-Soul Reapers
himatsubushi	7	14-SKY LORDS	20-Einfach so	26-Die Hanse	2-First Wave	8-Belgique
Belgique	8	1-Sax Clan	25-Pif Paf Pouf	19-Lost Soul	13-ЛЕВ	7-himatsubushi
Bansh	9	16-CRYSTAL	22-тризуб	28-Welcome to Asteroid	4-The Eyrie	10-HERO 45
HERO 45	10	3-Clan Destino	27-ppmmOmmqq	21-Перун	15-The LIONS	9-Bansh
Death or Glory	11	18-Fighter	24-Crab Club	30-Talons of Power	6-Lily	12-CCCP
CCCP	12	5-Soul Reapers	29-Team Heronic	23-MUKAKIN-MUGON	17-Kamigrain	11-Death or Glory
ЛЕВ	13	20-Einfach so	26-Die Hanse	2-First Wave	8-Belgique	14-SKY LORDS
SKY LORDS	14	7-himatsubushi	1-Sax Clan	25-Pif Paf Pouf	19-Lost Soul	13-ЛЕВ
The LIONS	15	22-тризуб	28-Welcome to Asteroid	4-The Eyrie	10-HERO 45	16-CRYSTAL
CRYSTAL	16	9-Bansh	3-Clan Destino	27-ppmmOmmqq	21-Перун	15-The LIONS
Kamigrain	17	24-Crab Club	30-Talons of Power	6-Lily	12-CCCP	18-Fighter
Fighter	18	11-Death or Glory	5-Soul Reapers	29-Team Heronic	23-MUKAKIN-MUGON	17-Kamigrain
Lost Soul	19	26-Die Hanse	2-First Wave	8-Belgique	14-SKY LORDS	20-Einfach so
Einfach so	20	13-ЛЕВ	7-himatsubushi	1-Sax Clan	25-Pif Paf Pouf	19-Lost Soul
Перун	21	28-Welcome to Asteroid	4-The Eyrie	10-HERO 45	16-CRYSTAL	22-тризуб
тризуб	22	15-The LIONS	9-Bansh	3-Clan Destino	27-ppmmOmmqq	21-Перун
MUKAKIN-MUGON	23	30-Talons of Power	6-Lily	12-CCCP	18-Fighter	24-Crab Club
Crab Club	24	17-Kamigrain	11-Death or Glory	5-Soul Reapers	29-Team Heronic	23-MUKAKIN-MUGON
Pif Paf Pouf	25	2-First Wave	8-Belgique	14-SKY LORDS	20-Einfach so	26-Die Hanse
Die Hanse	26	19-Lost Soul	13-ЛЕВ	7-himatsubushi	1-Sax Clan	25-Pif Paf Pouf
ppmmOmmqq	27	4-The Eyrie	10-HERO 45	16-CRYSTAL	22-тризуб	28-Welcome to Asteroid
Welcome to Asteroid	28	21-Перун	15-The LIONS	9-Bansh	3-Clan Destino	27-ppmmOmmqq
Team Heronic	29	6-Lily	12-CCCP	18-Fighter	24-Crab Club	30-Talons of Power
Talons of Power	30	23-MUKAKIN-MUGON	17-Kamigrain	11-Death or Glory	5-Soul Reapers	29-Team Heronic
`

export const bronze = readData(program, 'bronze')