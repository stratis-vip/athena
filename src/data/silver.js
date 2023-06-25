import { readData } from "../lib";
const program = `
ohhoo	1	4-Велес	6-silelderman	8-Фениксы	10-First Wave	2-new athena
new athena	2	9-Clan Destino	7-Guardian	5-Mattari	3-HERO 45	1-ohhoo
HERO 45	3	6-silelderman	8-Фениксы	10-First Wave	2-new athena	4-Велес
Велес	4	1-ohhoo	9-Clan Destino	7-Guardian	5-Mattari	3-HERO 45
Mattari	5	8-Фениксы	10-First Wave	2-new athena	4-Велес	6-silelderman
silelderman	6	3-HERO 45	1-ohhoo	9-Clan Destino	7-Guardian	5-Mattari
Guardian	7	10-First Wave	2-new athena	4-Велес	6-silelderman	8-Фениксы
Фениксы	8	5-Mattari	3-HERO 45	1-ohhoo	9-Clan Destino	7-Guardian
Clan Destino	9	2-new athena	4-Велес	6-silelderman	8-Фениксы	10-First Wave
First Wave	10	7-Guardian	5-Mattari	3-HERO 45	1-ohhoo	9-Clan Destino
`;

export const silver = readData(program, "silver");
