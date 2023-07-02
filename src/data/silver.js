import { readData } from "../lib";
const program = `
Toms	1	4-Guardian	6-Mattari	8-Clan Destino	10-First Wave	2-HERO 45
HERO 45	2	9-Фениксы	7-silelderman	5-new athena	3-Велес	1-Toms
Велес	3	6-Mattari	8-Clan Destino	10-First Wave	2-HERO 45	4-Guardian
Guardian	4	1-Toms	9-Фениксы	7-silelderman	5-new athena	3-Велес
new athena	5	8-Clan Destino	10-First Wave	2-HERO 45	4-Guardian	6-Mattari
Mattari	6	3-Велес	1-Toms	9-Фениксы	7-silelderman	5-new athena
silelderman	7	10-First Wave	2-HERO 45	4-Guardian	6-Mattari	8-Clan Destino
Clan Destino	8	5-new athena	3-Велес	1-Toms	9-Фениксы	7-silelderman
Фениксы	9	2-HERO 45	4-Guardian	6-Mattari	8-Clan Destino	10-First Wave
First Wave	10	7-silelderman	5-new athena	3-Велес	1-Toms	9-Фениксы
`;

export const silver = readData(program, "silver");
