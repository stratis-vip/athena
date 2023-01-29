import { readData } from "../lib";
const program = `
HERO 45	1	4-Фениксы	6-tigerclaws	8-Vikings	10-Велес	2-ohhoo
ohhoo	2	9-silelderman	7-Toms	5-new athena	3-Knight of Knights	1-HERO 45
Knight of Knights	3	6-tigerclaws	8-Vikings	10-Велес	2-ohhoo	4-Фениксы
Фениксы	4	1-HERO 45	9-silelderman	7-Toms	5-new athena	3-Knight of Knights
new athena	5	8-Vikings	10-Велес	2-ohhoo	4-Фениксы	6-tigerclaws
tigerclaws	6	3-Knight of Knights	1-HERO 45	9-silelderman	7-Toms	5-new athena
Toms	7	10-Велес	2-ohhoo	4-Фениксы	6-tigerclaws	8-Vikings
Vikings	8	5-new athena	3-Knight of Knights	1-HERO 45	9-silelderman	7-Toms
silelderman	9	2-ohhoo	4-Фениксы	6-tigerclaws	8-Vikings	10-Велес
Велес	10	7-Toms	5-new athena	3-Knight of Knights	1-HERO 45	9-silelderman
`;

export const silver = readData(program, "silver");
