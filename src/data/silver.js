import { readData } from "../lib";
const program = `
Guardian	1	4-new athena	6-54 HERO	8-silelderman	10-Clan Destino	2-HERO 45
HERO 45	2	9-Mattari	7-Фениксы	5-Велес	3-Toms	1-Guardian
Toms	3	6-54 HERO	8-silelderman	10-Clan Destino	2-HERO 45	4-new athena
new athena	4	1-Guardian	9-Mattari	7-Фениксы	5-Велес	3-Toms
Велес	5	8-silelderman	10-Clan Destino	2-HERO 45	4-new athena	6-54 HERO
54 HERO	6	3-Toms	1-Guardian	9-Mattari	7-Фениксы	5-Велес
Фениксы	7	10-Clan Destino	2-HERO 45	4-new athena	6-54 HERO	8-silelderman
silelderman	8	5-Велес	3-Toms	1-Guardian	9-Mattari	7-Фениксы
Mattari	9	2-HERO 45	4-new athena	6-54 HERO	8-silelderman	10-Clan Destino
Clan Destino	10	7-Фениксы	5-Велес	3-Toms	1-Guardian	9-Mattari
`;

export const silver = readData(program, "silver");
