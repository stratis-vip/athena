import { readData } from "../lib";
const program = `
Knight of Knights	1	4-tigerclaws	6-Велес	8-Toms	10-Vikings	2-HERO 45
HERO 45	2	9-silelderman	7-54 HERO	5-new athena	3-Фениксы	1-Knight of Knights
Фениксы	3	6-Велес	8-Toms	10-Vikings	2-HERO 45	4-tigerclaws
tigerclaws	4	1-Knight of Knights	9-silelderman	7-54 HERO	5-new athena	3-Фениксы
new athena	5	8-Toms	10-Vikings	2-HERO 45	4-tigerclaws	6-Велес
Велес	6	3-Фениксы	1-Knight of Knights	9-silelderman	7-54 HERO	5-new athena
54 HERO	7	10-Vikings	2-HERO 45	4-tigerclaws	6-Велес	8-Toms
Toms	8	5-new athena	3-Фениксы	1-Knight of Knights	9-silelderman	7-54 HERO
silelderman	9	2-HERO 45	4-tigerclaws	6-Велес	8-Toms	10-Vikings
Vikings	10	7-54 HERO	5-new athena	3-Фениксы	1-Knight of Knights	9-silelderman
`;

export const silver = readData(program, "silver");
