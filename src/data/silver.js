import { readData } from "../lib";
const program = `
Сами по себе!	1	4-silelderman	6-Mattari	8-Фениксы	10-First Wave	2-Toms
Toms	2	9-Clan Destino	7-Guardian	5-new athena	3-Велес	1-Сами по себе!
Велес	3	6-Mattari	8-Фениксы	10-First Wave	2-Toms	4-silelderman
silelderman	4	1-Сами по себе!	9-Clan Destino	7-Guardian	5-new athena	3-Велес
new athena	5	8-Фениксы	10-First Wave	2-Toms	4-silelderman	6-Mattari
Mattari	6	3-Велес	1-Сами по себе!	9-Clan Destino	7-Guardian	5-new athena
Guardian	7	10-First Wave	2-Toms	4-silelderman	6-Mattari	8-Фениксы
Фениксы	8	5-new athena	3-Велес	1-Сами по себе!	9-Clan Destino	7-Guardian
Clan Destino	9	2-Toms	4-silelderman	6-Mattari	8-Фениксы	10-First Wave
First Wave	10	7-Guardian	5-new athena	3-Велес	1-Сами по себе!	9-Clan Destino
`;

export const silver = readData(program, "silver");
