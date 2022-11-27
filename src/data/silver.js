import { readData } from "../lib";
const program = `
54 HERO	1	4-ohhoo	6-tigerclaws	8-new athena	10-Mattari	2-Фениксы
Фениксы	2	9-Велес	7-silelderman	5-Toms	3-Vikings	1-54 HERO
Vikings	3	6-tigerclaws	8-new athena	10-Mattari	2-Фениксы	4-ohhoo
ohhoo	4	1-54 HERO	9-Велес	7-silelderman	5-Toms	3-Vikings
Toms	5	8-new athena	10-Mattari	2-Фениксы	4-ohhoo	6-tigerclaws
tigerclaws	6	3-Vikings	1-54 HERO	9-Велес	7-silelderman	5-Toms
silelderman	7	10-Mattari	2-Фениксы	4-ohhoo	6-tigerclaws	8-new athena
new athena	8	5-Toms	3-Vikings	1-54 HERO	9-Велес	7-silelderman
Велес	9	2-Фениксы	4-ohhoo	6-tigerclaws	8-new athena	10-Mattari
Mattari	10	7-silelderman	5-Toms	3-Vikings	1-54 HERO	9-Велес
`;

export const silver = readData(program, "silver");
