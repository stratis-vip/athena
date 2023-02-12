import { readData } from "../lib";
const program = `
54 HERO	1	4-HERO 45	6-new athena	8-silelderman	10-Велес	2-ohhoo
ohhoo	2	9-Vikings	7-Toms	5-tigerclaws	3-Фениксы	1-54 HERO
Фениксы	3	6-new athena	8-silelderman	10-Велес	2-ohhoo	4-HERO 45
HERO 45	4	1-54 HERO	9-Vikings	7-Toms	5-tigerclaws	3-Фениксы
tigerclaws	5	8-silelderman	10-Велес	2-ohhoo	4-HERO 45	6-new athena
new athena	6	3-Фениксы	1-54 HERO	9-Vikings	7-Toms	5-tigerclaws
Toms	7	10-Велес	2-ohhoo	4-HERO 45	6-new athena	8-silelderman
silelderman	8	5-tigerclaws	3-Фениксы	1-54 HERO	9-Vikings	7-Toms
Vikings	9	2-ohhoo	4-HERO 45	6-new athena	8-silelderman	10-Велес
Велес	10	7-Toms	5-tigerclaws	3-Фениксы	1-54 HERO	9-Vikings
`;

export const silver = readData(program, "silver");
