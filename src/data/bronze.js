import { readData } from "../lib";

const program = `
The Eyrie	1	8-Einfach so	14-Guardian	20-1111	26-Silver Wolf	2-Sax Clan
Sax Clan	2	25-alone	19-Gold ship	13-athena	7-CCCP	1-The Eyrie
Фениксы	3	10-Die Hanse	16-Kamigrain	22-Call Me Daddy	28-The Dragon Way	4-Belgique
Belgique	4	27-The Red Wolfs	21-Crab Club	15-Death or Glory	9-Bansh	3-Фениксы
Soul Reapers	5	12-MUKAKIN-MUGON	18-Fighter	24-тризуб	30-Los conquistadores	6-himatsubushi
himatsubushi	6	29-Welcome To Asteroid	23-NBC	17-SKY LORDS	11-Перун	5-Soul Reapers
CCCP	7	14-Guardian	20-1111	26-Silver Wolf	2-Sax Clan	8-Einfach so
Einfach so	8	1-The Eyrie	25-alone	19-Gold ship	13-athena	7-CCCP
Bansh	9	16-Kamigrain	22-Call Me Daddy	28-The Dragon Way	4-Belgique	10-Die Hanse
Die Hanse	10	3-Фениксы	27-The Red Wolfs	21-Crab Club	15-Death or Glory	9-Bansh
Перун	11	18-Fighter	24-тризуб	30-Los conquistadores	6-himatsubushi	12-MUKAKIN-MUGON
MUKAKIN-MUGON	12	5-Soul Reapers	29-Welcome To Asteroid	23-NBC	17-SKY LORDS	11-Перун
athena	13	20-1111	26-Silver Wolf	2-Sax Clan	8-Einfach so	14-Guardian
Guardian	14	7-CCCP	1-The Eyrie	25-alone	19-Gold ship	13-athena
Death or Glory	15	22-Call Me Daddy	28-The Dragon Way	4-Belgique	10-Die Hanse	16-Kamigrain
Kamigrain	16	9-Bansh	3-Фениксы	27-The Red Wolfs	21-Crab Club	15-Death or Glory
SKY LORDS	17	24-тризуб	30-Los conquistadores	6-himatsubushi	12-MUKAKIN-MUGON	18-Fighter
Fighter	18	11-Перун	5-Soul Reapers	29-Welcome To Asteroid	23-NBC	17-SKY LORDS
Gold ship	19	26-Silver Wolf	2-Sax Clan	8-Einfach so	14-Guardian	20-1111
1111	20	13-athena	7-CCCP	1-The Eyrie	25-alone	19-Gold ship
Crab Club	21	28-The Dragon Way	4-Belgique	10-Die Hanse	16-Kamigrain	22-Call Me Daddy
Call Me Daddy	22	15-Death or Glory	9-Bansh	3-Фениксы	27-The Red Wolfs	21-Crab Club
NBC	23	30-Los conquistadores	6-himatsubushi	12-MUKAKIN-MUGON	18-Fighter	24-тризуб
тризуб	24	17-SKY LORDS	11-Перун	5-Soul Reapers	29-Welcome To Asteroid	23-NBC
alone	25	2-Sax Clan	8-Einfach so	14-Guardian	20-1111	26-Silver Wolf
Silver Wolf	26	19-Gold ship	13-athena	7-CCCP	1-The Eyrie	25-alone
The Red Wolfs	27	4-Belgique	10-Die Hanse	16-Kamigrain	22-Call Me Daddy	28-The Dragon Way
The Dragon Way	28	21-Crab Club	15-Death or Glory	9-Bansh	3-Фениксы	27-The Red Wolfs
Welcome To Asteroid	29	6-himatsubushi	12-MUKAKIN-MUGON	18-Fighter	24-тризуб	30-Los conquistadores
Los conquistadores	30	23-NBC	17-SKY LORDS	11-Перун	5-Soul Reapers	29-Welcome To Asteroid
`;


export const bronze = readData(program, "bronze");
