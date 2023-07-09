import { readData } from "../lib";
const program = `
Сами по себе!	1	4-new athena	6-Guardian	8-Фениксы	10-First Wave	2-Toms
Toms	2	9-Clan Destino	7-Mattari	5-silelderman	3-Велес	1-Сами по себе!
Велес	3	6-Guardian	8-Фениксы	10-First Wave	2-Toms	4-new athena
new athena	4	1-Сами по себе!	9-Clan Destino	7-Mattari	5-silelderman	3-Велес
silelderman	5	8-Фениксы	10-First Wave	2-Toms	4-new athena	6-Guardian
Guardian	6	3-Велес	1-Сами по себе!	9-Clan Destino	7-Mattari	5-silelderman
Mattari	7	10-First Wave	2-Toms	4-new athena	6-Guardian	8-Фениксы
Фениксы	8	5-silelderman	3-Велес	1-Сами по себе!	9-Clan Destino	7-Mattari
Clan Destino	9	2-Toms	4-new athena	6-Guardian	8-Фениксы	10-First Wave
First Wave	10	7-Mattari	5-silelderman	3-Велес	1-Сами по себе!	9-Clan Destino
`;

export const silver = readData(program, "silver");
