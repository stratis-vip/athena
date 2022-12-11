import { readData } from "../lib";

const program = `
HERO 45	1	8-Belgique	14-CRYSTAL	20-Die Hanse	26-The LIONS	2-The Eyrie
The Eyrie	2	25-1111	19-SKY LORDS	13-Перун	7-Soul Reapers	1-HERO 45
Clan Destino	3	10-Bansh	16-CCCP	22-Team Heronic	28-Welcome to Asteroid	4-Sax Clan
Sax Clan	4	27-Lost Soul	21-MUKAKIN-MUGON	15-Death or Glory	9-himatsubushi	3-Clan Destino
Lily	5	12-Kamigrain	18-Fighter	24-Pif Paf Pouf	30-Silver Wolf	6-First Wave
First Wave	6	29-corn guild	23-ЛЕВ	17-UNITED STATES	11-Einfach so	5-Lily
Soul Reapers	7	14-CRYSTAL	20-Die Hanse	26-The LIONS	2-The Eyrie	8-Belgique
Belgique	8	1-HERO 45	25-1111	19-SKY LORDS	13-Перун	7-Soul Reapers
himatsubushi	9	16-CCCP	22-Team Heronic	28-Welcome to Asteroid	4-Sax Clan	10-Bansh
Bansh	10	3-Clan Destino	27-Lost Soul	21-MUKAKIN-MUGON	15-Death or Glory	9-himatsubushi
Einfach so	11	18-Fighter	24-Pif Paf Pouf	30-Silver Wolf	6-First Wave	12-Kamigrain
Kamigrain	12	5-Lily	29-corn guild	23-ЛЕВ	17-UNITED STATES	11-Einfach so
Перун	13	20-Die Hanse	26-The LIONS	2-The Eyrie	8-Belgique	14-CRYSTAL
CRYSTAL	14	7-Soul Reapers	1-HERO 45	25-1111	19-SKY LORDS	13-Перун
Death or Glory	15	22-Team Heronic	28-Welcome to Asteroid	4-Sax Clan	10-Bansh	16-CCCP
CCCP	16	9-himatsubushi	3-Clan Destino	27-Lost Soul	21-MUKAKIN-MUGON	15-Death or Glory
UNITED STATES	17	24-Pif Paf Pouf	30-Silver Wolf	6-First Wave	12-Kamigrain	18-Fighter
Fighter	18	11-Einfach so	5-Lily	29-corn guild	23-ЛЕВ	17-UNITED STATES
SKY LORDS	19	26-The LIONS	2-The Eyrie	8-Belgique	14-CRYSTAL	20-Die Hanse
Die Hanse	20	13-Перун	7-Soul Reapers	1-HERO 45	25-1111	19-SKY LORDS
MUKAKIN-MUGON	21	28-Welcome to Asteroid	4-Sax Clan	10-Bansh	16-CCCP	22-Team Heronic
Team Heronic	22	15-Death or Glory	9-himatsubushi	3-Clan Destino	27-Lost Soul	21-MUKAKIN-MUGON
ЛЕВ	23	30-Silver Wolf	6-First Wave	12-Kamigrain	18-Fighter	24-Pif Paf Pouf
Pif Paf Pouf	24	17-UNITED STATES	11-Einfach so	5-Lily	29-corn guild	23-ЛЕВ
1111	25	2-The Eyrie	8-Belgique	14-CRYSTAL	20-Die Hanse	26-The LIONS
The LIONS	26	19-SKY LORDS	13-Перун	7-Soul Reapers	1-HERO 45	25-1111
Lost Soul	27	4-Sax Clan	10-Bansh	16-CCCP	22-Team Heronic	28-Welcome to Asteroid
Welcome to Asteroid	28	21-MUKAKIN-MUGON	15-Death or Glory	9-himatsubushi	3-Clan Destino	27-Lost Soul
corn guild	29	6-First Wave	12-Kamigrain	18-Fighter	24-Pif Paf Pouf	30-Silver Wolf
Silver Wolf	30	23-ЛЕВ	17-UNITED STATES	11-Einfach so	5-Lily	29-corn guild
`;

export const bronze = readData(program, "bronze");
