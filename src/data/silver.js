import { readData } from "../lib";
const program = `
Knight of Knights	1	4-Vikings	6-new athena	8-Toms	10-Mattari	2-HERO 45
HERO 45	2	9-tigerclaws	7-silelderman	5-ohhoo	3-Фениксы	1-Knight of Knights
Фениксы	3	6-new athena	8-Toms	10-Mattari	2-HERO 45	4-Vikings
Vikings	4	1-Knight of Knights	9-tigerclaws	7-silelderman	5-ohhoo	3-Фениксы
ohhoo	5	8-Toms	10-Mattari	2-HERO 45	4-Vikings	6-new athena
new athena	6	3-Фениксы	1-Knight of Knights	9-tigerclaws	7-silelderman	5-ohhoo
silelderman	7	10-Mattari	2-HERO 45	4-Vikings	6-new athena	8-Toms
Toms	8	5-ohhoo	3-Фениксы	1-Knight of Knights	9-tigerclaws	7-silelderman
tigerclaws	9	2-HERO 45	4-Vikings	6-new athena	8-Toms	10-Mattari
Mattari	10	7-silelderman	5-ohhoo	3-Фениксы	1-Knight of Knights	9-tigerclaws
`;

export const silver = readData(program, "silver");
