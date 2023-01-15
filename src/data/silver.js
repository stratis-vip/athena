import { readData } from "../lib";
const program = `
HERO 45	1	4-ohhoo	6-tigerclaws	8-new athena	10-Велес	2-Фениксы
Фениксы	2	9-Toms	7-silelderman	5-Vikings	3-Knight of Knights	1-HERO 45
Knight of Knights	3	6-tigerclaws	8-new athena	10-Велес	2-Фениксы	4-ohhoo
ohhoo	4	1-HERO 45	9-Toms	7-silelderman	5-Vikings	3-Knight of Knights
Vikings	5	8-new athena	10-Велес	2-Фениксы	4-ohhoo	6-tigerclaws
tigerclaws	6	3-Knight of Knights	1-HERO 45	9-Toms	7-silelderman	5-Vikings
silelderman	7	10-Велес	2-Фениксы	4-ohhoo	6-tigerclaws	8-new athena
new athena	8	5-Vikings	3-Knight of Knights	1-HERO 45	9-Toms	7-silelderman
Toms	9	2-Фениксы	4-ohhoo	6-tigerclaws	8-new athena	10-Велес
Велес	10	7-silelderman	5-Vikings	3-Knight of Knights	1-HERO 45	9-Toms
`;

export const silver = readData(program, "silver");
