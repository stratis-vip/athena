import { readData } from "../lib";
const program = `
Сами по себе!	1	4-new athena	6-Mattari	8-Clan Destino	10-54 HERO	2-Toms
Toms	2	9-The Eyrie	7-First Wave	5-Велес	3-silelderman	1-Сами по себе!
silelderman	3	6-Mattari	8-Clan Destino	10-54 HERO	2-Toms	4-new athena
new athena	4	1-Сами по себе!	9-The Eyrie	7-First Wave	5-Велес	3-silelderman
Велес	5	8-Clan Destino	10-54 HERO	2-Toms	4-new athena	6-Mattari
Mattari	6	3-silelderman	1-Сами по себе!	9-The Eyrie	7-First Wave	5-Велес
First Wave	7	10-54 HERO	2-Toms	4-new athena	6-Mattari	8-Clan Destino
Clan Destino	8	5-Велес	3-silelderman	1-Сами по себе!	9-The Eyrie	7-First Wave
The Eyrie	9	2-Toms	4-new athena	6-Mattari	8-Clan Destino	10-54 HERO
54 HERO	10	7-First Wave	5-Велес	3-silelderman	1-Сами по себе!	9-The Eyrie
`;

export const silver = readData(program, "silver");
