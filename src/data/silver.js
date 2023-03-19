import { readData } from "../lib";
const program = `
ohhoo	1	4-Toms	6-Велес	8-new athena	10-Mattari	2-Сами по себе!
Сами по себе!	2	9-54 HERO	7-silelderman	5-tigerclaws	3-Фениксы	1-ohhoo
Фениксы	3	6-Велес	8-new athena	10-Mattari	2-Сами по себе!	4-Toms
Toms	4	1-ohhoo	9-54 HERO	7-silelderman	5-tigerclaws	3-Фениксы
tigerclaws	5	8-new athena	10-Mattari	2-Сами по себе!	4-Toms	6-Велес
Велес	6	3-Фениксы	1-ohhoo	9-54 HERO	7-silelderman	5-tigerclaws
silelderman	7	10-Mattari	2-Сами по себе!	4-Toms	6-Велес	8-new athena
new athena	8	5-tigerclaws	3-Фениксы	1-ohhoo	9-54 HERO	7-silelderman
54 HERO	9	2-Сами по себе!	4-Toms	6-Велес	8-new athena	10-Mattari
Mattari	10	7-silelderman	5-tigerclaws	3-Фениксы	1-ohhoo	9-54 HERO
`;

export const silver = readData(program, "silver");
