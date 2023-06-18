import { readData } from "../lib";
const program = `
new athena	1	4-Guardian	6-silelderman	8-First Wave	10-Clan Destino	2-HERO 45
HERO 45	2	9-Фениксы	7-Mattari	5-Toms	3-Велес	1-new athena
Велес	3	6-silelderman	8-First Wave	10-Clan Destino	2-HERO 45	4-Guardian
Guardian	4	1-new athena	9-Фениксы	7-Mattari	5-Toms	3-Велес
Toms	5	8-First Wave	10-Clan Destino	2-HERO 45	4-Guardian	6-silelderman
silelderman	6	3-Велес	1-new athena	9-Фениксы	7-Mattari	5-Toms
Mattari	7	10-Clan Destino	2-HERO 45	4-Guardian	6-silelderman	8-First Wave
First Wave	8	5-Toms	3-Велес	1-new athena	9-Фениксы	7-Mattari
Фениксы	9	2-HERO 45	4-Guardian	6-silelderman	8-First Wave	10-Clan Destino
Clan Destino	10	7-Mattari	5-Toms	3-Велес	1-new athena	9-Фениксы
`;

export const silver = readData(program, "silver");
