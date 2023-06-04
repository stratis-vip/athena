import { readData } from "../lib";

const program = `
Sakura	1	8-himatsubushi	14-Bansh	20-Fighter	26-Korean-House	2-Sax Clan
Sax Clan	2	25-SKY LORDS	19-Call Me Daddy	13-Crab Club	7-CCCP	1-Sakura
First Wave	3	10-athena	16-Death or Glory	22-1111	28-NBC	4-The Eyrie
The Eyrie	4	27-LonesomeRyders	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун	3-First Wave
Belgique	5	12-Einfach so	18-Italian Job	24-pink pirates	30-alone	6-Soul Reapers
Soul Reapers	6	29-The LIONS	23-Silver Wolf	17-Die Hanse	11-Kamigrain	5-Belgique
CCCP	7	14-Bansh	20-Fighter	26-Korean-House	2-Sax Clan	8-himatsubushi
himatsubushi	8	1-Sakura	25-SKY LORDS	19-Call Me Daddy	13-Crab Club	7-CCCP
Перун	9	16-Death or Glory	22-1111	28-NBC	4-The Eyrie	10-athena
athena	10	3-First Wave	27-LonesomeRyders	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун
Kamigrain	11	18-Italian Job	24-pink pirates	30-alone	6-Soul Reapers	12-Einfach so
Einfach so	12	5-Belgique	29-The LIONS	23-Silver Wolf	17-Die Hanse	11-Kamigrain
Crab Club	13	20-Fighter	26-Korean-House	2-Sax Clan	8-himatsubushi	14-Bansh
Bansh	14	7-CCCP	1-Sakura	25-SKY LORDS	19-Call Me Daddy	13-Crab Club
MUKAKIN-MUGON	15	22-1111	28-NBC	4-The Eyrie	10-athena	16-Death or Glory
Death or Glory	16	9-Перун	3-First Wave	27-LonesomeRyders	21-Team Heronic	15-MUKAKIN-MUGON
Die Hanse	17	24-pink pirates	30-alone	6-Soul Reapers	12-Einfach so	18-Italian Job
Italian Job	18	11-Kamigrain	5-Belgique	29-The LIONS	23-Silver Wolf	17-Die Hanse
Call Me Daddy	19	26-Korean-House	2-Sax Clan	8-himatsubushi	14-Bansh	20-Fighter
Fighter	20	13-Crab Club	7-CCCP	1-Sakura	25-SKY LORDS	19-Call Me Daddy
Team Heronic	21	28-NBC	4-The Eyrie	10-athena	16-Death or Glory	22-1111
1111	22	15-MUKAKIN-MUGON	9-Перун	3-First Wave	27-LonesomeRyders	21-Team Heronic
Silver Wolf	23	30-alone	6-Soul Reapers	12-Einfach so	18-Italian Job	24-pink pirates
pink pirates	24	17-Die Hanse	11-Kamigrain	5-Belgique	29-The LIONS	23-Silver Wolf
SKY LORDS	25	2-Sax Clan	8-himatsubushi	14-Bansh	20-Fighter	26-Korean-House
Korean-House	26	19-Call Me Daddy	13-Crab Club	7-CCCP	1-Sakura	25-SKY LORDS
LonesomeRyders	27	4-The Eyrie	10-athena	16-Death or Glory	22-1111	28-NBC
NBC	28	21-Team Heronic	15-MUKAKIN-MUGON	9-Перун	3-First Wave	27-LonesomeRyders
The LIONS	29	6-Soul Reapers	12-Einfach so	18-Italian Job	24-pink pirates	30-alone
alone	30	23-Silver Wolf	17-Die Hanse	11-Kamigrain	5-Belgique	29-The LIONS
`;

export const bronze = readData(program, "bronze");
