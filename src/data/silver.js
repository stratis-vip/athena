import { readData } from "../lib";
const program = `
HERO 45	1	4-ohhoo	6-new athena	8-Toms	10-Vikings	2-Knight of Knights
Knight of Knights	2	9-Велес	7-silelderman	5-tigerclaws	3-Фениксы	1-HERO 45
Фениксы	3	6-new athena	8-Toms	10-Vikings	2-Knight of Knights	4-ohhoo
ohhoo	4	1-HERO 45	9-Велес	7-silelderman	5-tigerclaws	3-Фениксы
tigerclaws	5	8-Toms	10-Vikings	2-Knight of Knights	4-ohhoo	6-new athena
new athena	6	3-Фениксы	1-HERO 45	9-Велес	7-silelderman	5-tigerclaws
silelderman	7	10-Vikings	2-Knight of Knights	4-ohhoo	6-new athena	8-Toms
Toms	8	5-tigerclaws	3-Фениксы	1-HERO 45	9-Велес	7-silelderman
Велес	9	2-Knight of Knights	4-ohhoo	6-new athena	8-Toms	10-Vikings
Vikings	10	7-silelderman	5-tigerclaws	3-Фениксы	1-HERO 45	9-Велес
`;

export const silver = readData(program, "silver");
