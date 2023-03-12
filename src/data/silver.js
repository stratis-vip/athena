import { readData } from "../lib";
const program = `
Фениксы	1	4-tigerclaws	6-new athena	8-Велес	10-Mattari	2-ohhoo
ohhoo	2	9-54 HERO	7-Toms	5-Сами по себе!	3-silelderman	1-Фениксы
silelderman	3	6-new athena	8-Велес	10-Mattari	2-ohhoo	4-tigerclaws
tigerclaws	4	1-Фениксы	9-54 HERO	7-Toms	5-Сами по себе!	3-silelderman
Сами по себе!	5	8-Велес	10-Mattari	2-ohhoo	4-tigerclaws	6-new athena
new athena	6	3-silelderman	1-Фениксы	9-54 HERO	7-Toms	5-Сами по себе!
Toms	7	10-Mattari	2-ohhoo	4-tigerclaws	6-new athena	8-Велес
Велес	8	5-Сами по себе!	3-silelderman	1-Фениксы	9-54 HERO	7-Toms
54 HERO	9	2-ohhoo	4-tigerclaws	6-new athena	8-Велес	10-Mattari
Mattari	10	7-Toms	5-Сами по себе!	3-silelderman	1-Фениксы	9-54 HERO
`;

export const silver = readData(program, "silver");
