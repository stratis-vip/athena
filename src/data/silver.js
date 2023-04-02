import { readData } from "../lib";
const program = `
Фениксы	1	4-ohhoo	6-tigerclaws	8-Велес	10-Mattari	2-Сами по себе!
Сами по себе!	2	9-54 HERO	7-new athena	5-silelderman	3-Toms	1-Фениксы
Toms	3	6-tigerclaws	8-Велес	10-Mattari	2-Сами по себе!	4-ohhoo
ohhoo	4	1-Фениксы	9-54 HERO	7-new athena	5-silelderman	3-Toms
silelderman	5	8-Велес	10-Mattari	2-Сами по себе!	4-ohhoo	6-tigerclaws
tigerclaws	6	3-Toms	1-Фениксы	9-54 HERO	7-new athena	5-silelderman
new athena	7	10-Mattari	2-Сами по себе!	4-ohhoo	6-tigerclaws	8-Велес
Велес	8	5-silelderman	3-Toms	1-Фениксы	9-54 HERO	7-new athena
54 HERO	9	2-Сами по себе!	4-ohhoo	6-tigerclaws	8-Велес	10-Mattari
Mattari	10	7-new athena	5-silelderman	3-Toms	1-Фениксы	9-54 HERO
`;

export const silver = readData(program, "silver");
