import { readData } from "../lib";
const program = `
Сами по себе!	1	4-silelderman	6-new athena	8-Toms	10-Mattari	2-ohhoo
ohhoo	2	9-54 HERO	7-Велес	5-Фениксы	3-tigerclaws	1-Сами по себе!
tigerclaws	3	6-new athena	8-Toms	10-Mattari	2-ohhoo	4-silelderman
silelderman	4	1-Сами по себе!	9-54 HERO	7-Велес	5-Фениксы	3-tigerclaws
Фениксы	5	8-Toms	10-Mattari	2-ohhoo	4-silelderman	6-new athena
new athena	6	3-tigerclaws	1-Сами по себе!	9-54 HERO	7-Велес	5-Фениксы
Велес	7	10-Mattari	2-ohhoo	4-silelderman	6-new athena	8-Toms
Toms	8	5-Фениксы	3-tigerclaws	1-Сами по себе!	9-54 HERO	7-Велес
54 HERO	9	2-ohhoo	4-silelderman	6-new athena	8-Toms	10-Mattari
Mattari	10	7-Велес	5-Фениксы	3-tigerclaws	1-Сами по себе!	9-54 HERO
`;

export const silver = readData(program, "silver");
