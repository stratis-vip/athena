import { readData } from "../lib";
const program = `
HERO 45	1	4-Mattari	6-Велес	8-Фениксы	10-Sax Clan	2-Toms
Toms	2	9-First Wave	7-silelderman	5-Guardian	3-new athena	1-HERO 45
new athena	3	6-Велес	8-Фениксы	10-Sax Clan	2-Toms	4-Mattari
Mattari	4	1-HERO 45	9-First Wave	7-silelderman	5-Guardian	3-new athena
Guardian	5	8-Фениксы	10-Sax Clan	2-Toms	4-Mattari	6-Велес
Велес	6	3-new athena	1-HERO 45	9-First Wave	7-silelderman	5-Guardian
silelderman	7	10-Sax Clan	2-Toms	4-Mattari	6-Велес	8-Фениксы
Фениксы	8	5-Guardian	3-new athena	1-HERO 45	9-First Wave	7-silelderman
First Wave	9	2-Toms	4-Mattari	6-Велес	8-Фениксы	10-Sax Clan
Sax Clan	10	7-silelderman	5-Guardian	3-new athena	1-HERO 45	9-First Wave
`;

export const silver = readData(program, "silver");
