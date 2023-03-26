import { readData } from "../lib";
const program = `
Сами по себе!	1	4-silelderman	6-new athena	8-Велес	10-Mattari	2-ohhoo
ohhoo	2	9-54 HERO	7-Toms	5-tigerclaws	3-Фениксы	1-Сами по себе!
Фениксы	3	6-new athena	8-Велес	10-Mattari	2-ohhoo	4-silelderman
silelderman	4	1-Сами по себе!	9-54 HERO	7-Toms	5-tigerclaws	3-Фениксы
tigerclaws	5	8-Велес	10-Mattari	2-ohhoo	4-silelderman	6-new athena
new athena	6	3-Фениксы	1-Сами по себе!	9-54 HERO	7-Toms	5-tigerclaws
Toms	7	10-Mattari	2-ohhoo	4-silelderman	6-new athena	8-Велес
Велес	8	5-tigerclaws	3-Фениксы	1-Сами по себе!	9-54 HERO	7-Toms
54 HERO	9	2-ohhoo	4-silelderman	6-new athena	8-Велес	10-Mattari
Mattari	10	7-Toms	5-tigerclaws	3-Фениксы	1-Сами по себе!	9-54 HERO
`;

export const silver = readData(program, "silver");
