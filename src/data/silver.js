import { readData } from "../lib";
const program = `
Vikings	1	4-Фениксы	6-Toms	8-tigerclaws	10-Mattari	2-54 HERO
54 HERO	2	9-Велес	7-silelderman	5-new athena	3-ohhoo	1-Vikings
ohhoo	3	6-Toms	8-tigerclaws	10-Mattari	2-54 HERO	4-Фениксы
Фениксы	4	1-Vikings	9-Велес	7-silelderman	5-new athena	3-ohhoo
new athena	5	8-tigerclaws	10-Mattari	2-54 HERO	4-Фениксы	6-Toms
Toms	6	3-ohhoo	1-Vikings	9-Велес	7-silelderman	5-new athena
silelderman	7	10-Mattari	2-54 HERO	4-Фениксы	6-Toms	8-tigerclaws
tigerclaws	8	5-new athena	3-ohhoo	1-Vikings	9-Велес	7-silelderman
Велес	9	2-54 HERO	4-Фениксы	6-Toms	8-tigerclaws	10-Mattari
Mattari	10	7-silelderman	5-new athena	3-ohhoo	1-Vikings	9-Велес
`;

export const silver = readData(program, "silver");
