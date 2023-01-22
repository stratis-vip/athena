import { readData } from "../lib";
const program = `
HERO 45	1	4-Knight of Knights	6-tigerclaws	8-Toms	10-Велес	2-Фениксы
Фениксы	2	9-silelderman	7-new athena	5-Vikings	3-ohhoo	1-HERO 45
ohhoo	3	6-tigerclaws	8-Toms	10-Велес	2-Фениксы	4-Knight of Knights
Knight of Knights	4	1-HERO 45	9-silelderman	7-new athena	5-Vikings	3-ohhoo
Vikings	5	8-Toms	10-Велес	2-Фениксы	4-Knight of Knights	6-tigerclaws
tigerclaws	6	3-ohhoo	1-HERO 45	9-silelderman	7-new athena	5-Vikings
new athena	7	10-Велес	2-Фениксы	4-Knight of Knights	6-tigerclaws	8-Toms
Toms	8	5-Vikings	3-ohhoo	1-HERO 45	9-silelderman	7-new athena
silelderman	9	2-Фениксы	4-Knight of Knights	6-tigerclaws	8-Toms	10-Велес
Велес	10	7-new athena	5-Vikings	3-ohhoo	1-HERO 45	9-silelderman
`;

export const silver = readData(program, "silver");
