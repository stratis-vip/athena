import { readData } from "../lib";
const program = `
Сами по себе!	1	4-silelderman	6-Велес	8-54 HERO	10-Фениксы	2-tigerclaws
tigerclaws	2	9-Mattari	7-Toms	5-new athena	3-Sakura	1-Сами по себе!
Sakura	3	6-Велес	8-54 HERO	10-Фениксы	2-tigerclaws	4-silelderman
silelderman	4	1-Сами по себе!	9-Mattari	7-Toms	5-new athena	3-Sakura
new athena	5	8-54 HERO	10-Фениксы	2-tigerclaws	4-silelderman	6-Велес
Велес	6	3-Sakura	1-Сами по себе!	9-Mattari	7-Toms	5-new athena
Toms	7	10-Фениксы	2-tigerclaws	4-silelderman	6-Велес	8-54 HERO
54 HERO	8	5-new athena	3-Sakura	1-Сами по себе!	9-Mattari	7-Toms
Mattari	9	2-tigerclaws	4-silelderman	6-Велес	8-54 HERO	10-Фениксы
Фениксы	10	7-Toms	5-new athena	3-Sakura	1-Сами по себе!	9-Mattari
`;

export const silver = readData(program, "silver");
