import { readData } from "../lib";
const program = `
Сами по себе!	1	4-Велес	6-Mattari	8-Clan Destino	10-Sax Clan	2-silelderman
silelderman	2	9-First Wave	7-Guardian	5-new athena	3-Toms	1-Сами по себе!
Toms	3	6-Mattari	8-Clan Destino	10-Sax Clan	2-silelderman	4-Велес
Велес	4	1-Сами по себе!	9-First Wave	7-Guardian	5-new athena	3-Toms
new athena	5	8-Clan Destino	10-Sax Clan	2-silelderman	4-Велес	6-Mattari
Mattari	6	3-Toms	1-Сами по себе!	9-First Wave	7-Guardian	5-new athena
Guardian	7	10-Sax Clan	2-silelderman	4-Велес	6-Mattari	8-Clan Destino
Clan Destino	8	5-new athena	3-Toms	1-Сами по себе!	9-First Wave	7-Guardian
First Wave	9	2-silelderman	4-Велес	6-Mattari	8-Clan Destino	10-Sax Clan
Sax Clan	10	7-Guardian	5-new athena	3-Toms	1-Сами по себе!	9-First Wave
`;

export const silver = readData(program, "silver");
