import { readData } from "../lib";

const program = `
Велес	1	8-Lily	14-Die Hanse	20-Fighter	26-1111	2-Sax Clan
Sax Clan	2	25-Silver Wolf	19-Death or Glory	13-Перун	7-Belgique	1-Велес
Clan Destino	3	10-Bansh	16-Einfach so	22-SKY LORDS	28-Welcome to Asteroid	4-First Wave
First Wave	4	27-The LIONS	21-тризуб	15-athena	9-Soul Reapers	3-Clan Destino
The Eyrie	5	12-Kamigrain	18-CRYSTAL	24-ЛЕВ	30-Crab Club	6-himatsubushi
himatsubushi	6	29-alone	23-MUKAKIN-MUGON	17-REX	11-CCCP	5-The Eyrie
Belgique	7	14-Die Hanse	20-Fighter	26-1111	2-Sax Clan	8-Lily
Lily	8	1-Велес	25-Silver Wolf	19-Death or Glory	13-Перун	7-Belgique
Soul Reapers	9	16-Einfach so	22-SKY LORDS	28-Welcome to Asteroid	4-First Wave	10-Bansh
Bansh	10	3-Clan Destino	27-The LIONS	21-тризуб	15-athena	9-Soul Reapers
CCCP	11	18-CRYSTAL	24-ЛЕВ	30-Crab Club	6-himatsubushi	12-Kamigrain
Kamigrain	12	5-The Eyrie	29-alone	23-MUKAKIN-MUGON	17-REX	11-CCCP
Перун	13	20-Fighter	26-1111	2-Sax Clan	8-Lily	14-Die Hanse
Die Hanse	14	7-Belgique	1-Велес	25-Silver Wolf	19-Death or Glory	13-Перун
athena	15	22-SKY LORDS	28-Welcome to Asteroid	4-First Wave	10-Bansh	16-Einfach so
Einfach so	16	9-Soul Reapers	3-Clan Destino	27-The LIONS	21-тризуб	15-athena
REX	17	24-ЛЕВ	30-Crab Club	6-himatsubushi	12-Kamigrain	18-CRYSTAL
CRYSTAL	18	11-CCCP	5-The Eyrie	29-alone	23-MUKAKIN-MUGON	17-REX
Death or Glory	19	26-1111	2-Sax Clan	8-Lily	14-Die Hanse	20-Fighter
Fighter	20	13-Перун	7-Belgique	1-Велес	25-Silver Wolf	19-Death or Glory
тризуб	21	28-Welcome to Asteroid	4-First Wave	10-Bansh	16-Einfach so	22-SKY LORDS
SKY LORDS	22	15-athena	9-Soul Reapers	3-Clan Destino	27-The LIONS	21-тризуб
MUKAKIN-MUGON	23	30-Crab Club	6-himatsubushi	12-Kamigrain	18-CRYSTAL	24-ЛЕВ
ЛЕВ	24	17-REX	11-CCCP	5-The Eyrie	29-alone	23-MUKAKIN-MUGON
Silver Wolf	25	2-Sax Clan	8-Lily	14-Die Hanse	20-Fighter	26-1111
1111	26	19-Death or Glory	13-Перун	7-Belgique	1-Велес	25-Silver Wolf
The LIONS	27	4-First Wave	10-Bansh	16-Einfach so	22-SKY LORDS	28-Welcome to Asteroid
Welcome to Asteroid	28	21-тризуб	15-athena	9-Soul Reapers	3-Clan Destino	27-The LIONS
alone	29	6-himatsubushi	12-Kamigrain	18-CRYSTAL	24-ЛЕВ	30-Crab Club
Crab Club	30	23-MUKAKIN-MUGON	17-REX	11-CCCP	5-The Eyrie	29-alone
`;

export const bronze = readData(program, "bronze");
