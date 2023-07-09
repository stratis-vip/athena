import { readData } from "../lib";

const program = `
Sax Clan	1	8-Italian Job	14-MUKAKIN-MUGON	20-Death or Glory	26-SKY LORDS	2-Belgique
Belgique	2	25-Crab Club	19-LonesomeRyders	13-Перун	7-himatsubushi	1-Sax Clan
The Eyrie	3	10-Bansh	16-Silver Wolf	22-Korean-House	28-Welcome to Asteroid	4-CCCP
CCCP	4	27-The LIONS	21-pink pirates	15-1111	9-athena	3-The Eyrie
54 HERO	5	12-Die Hanse	18-тризуб	24-Fighter	30-NBC	6-Soul Reapers
Soul Reapers	6	29-The Dragon Way	23-Kamigrain	17-Call Me Daddy	11-Einfach so	5-54 HERO
himatsubushi	7	14-MUKAKIN-MUGON	20-Death or Glory	26-SKY LORDS	2-Belgique	8-Italian Job
Italian Job	8	1-Sax Clan	25-Crab Club	19-LonesomeRyders	13-Перун	7-himatsubushi
athena	9	16-Silver Wolf	22-Korean-House	28-Welcome to Asteroid	4-CCCP	10-Bansh
Bansh	10	3-The Eyrie	27-The LIONS	21-pink pirates	15-1111	9-athena
Einfach so	11	18-тризуб	24-Fighter	30-NBC	6-Soul Reapers	12-Die Hanse
Die Hanse	12	5-54 HERO	29-The Dragon Way	23-Kamigrain	17-Call Me Daddy	11-Einfach so
Перун	13	20-Death or Glory	26-SKY LORDS	2-Belgique	8-Italian Job	14-MUKAKIN-MUGON
MUKAKIN-MUGON	14	7-himatsubushi	1-Sax Clan	25-Crab Club	19-LonesomeRyders	13-Перун
1111	15	22-Korean-House	28-Welcome to Asteroid	4-CCCP	10-Bansh	16-Silver Wolf
Silver Wolf	16	9-athena	3-The Eyrie	27-The LIONS	21-pink pirates	15-1111
Call Me Daddy	17	24-Fighter	30-NBC	6-Soul Reapers	12-Die Hanse	18-тризуб
тризуб	18	11-Einfach so	5-54 HERO	29-The Dragon Way	23-Kamigrain	17-Call Me Daddy
LonesomeRyders	19	26-SKY LORDS	2-Belgique	8-Italian Job	14-MUKAKIN-MUGON	20-Death or Glory
Death or Glory	20	13-Перун	7-himatsubushi	1-Sax Clan	25-Crab Club	19-LonesomeRyders
pink pirates	21	28-Welcome to Asteroid	4-CCCP	10-Bansh	16-Silver Wolf	22-Korean-House
Korean-House	22	15-1111	9-athena	3-The Eyrie	27-The LIONS	21-pink pirates
Kamigrain	23	30-NBC	6-Soul Reapers	12-Die Hanse	18-тризуб	24-Fighter
Fighter	24	17-Call Me Daddy	11-Einfach so	5-54 HERO	29-The Dragon Way	23-Kamigrain
Crab Club	25	2-Belgique	8-Italian Job	14-MUKAKIN-MUGON	20-Death or Glory	26-SKY LORDS
SKY LORDS	26	19-LonesomeRyders	13-Перун	7-himatsubushi	1-Sax Clan	25-Crab Club
The LIONS	27	4-CCCP	10-Bansh	16-Silver Wolf	22-Korean-House	28-Welcome to Asteroid
Welcome to Asteroid	28	21-pink pirates	15-1111	9-athena	3-The Eyrie	27-The LIONS
The Dragon Way	29	6-Soul Reapers	12-Die Hanse	18-тризуб	24-Fighter	30-NBC
NBC	30	23-Kamigrain	17-Call Me Daddy	11-Einfach so	5-54 HERO	29-The Dragon Way
`;

export const bronze = readData(program, "bronze");
