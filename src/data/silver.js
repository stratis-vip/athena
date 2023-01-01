import { readData } from "../lib";
const program = `
Сами по себе!	1	4-ohhoo	6-silelderman	8-Велес	10-HERO 45	2-Vikings
Vikings	2	9-tigerclaws	7-Toms	5-new athena	3-Фениксы	1-Сами по себе!
Фениксы	3	6-silelderman	8-Велес	10-HERO 45	2-Vikings	4-ohhoo
ohhoo	4	1-Сами по себе!	9-tigerclaws	7-Toms	5-new athena	3-Фениксы
new athena	5	8-Велес	10-HERO 45	2-Vikings	4-ohhoo	6-silelderman
silelderman	6	3-Фениксы	1-Сами по себе!	9-tigerclaws	7-Toms	5-new athena
Toms	7	10-HERO 45	2-Vikings	4-ohhoo	6-silelderman	8-Велес
Велес	8	5-new athena	3-Фениксы	1-Сами по себе!	9-tigerclaws	7-Toms
tigerclaws	9	2-Vikings	4-ohhoo	6-silelderman	8-Велес	10-HERO 45
HERO 45	10	7-Toms	5-new athena	3-Фениксы	1-Сами по себе!	9-tigerclaws
`;

export const silver = readData(program, "silver");
