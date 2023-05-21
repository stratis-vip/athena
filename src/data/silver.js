import { readData } from "../lib";
const program = `
Сами по себе!	1	4-tigerclaws	6-Велес	8-Mattari	10-Фениксы	2-silelderman
silelderman	2	9-54 HERO	7-Sakura	5-new athena	3-Toms	1-Сами по себе!
Toms	3	6-Велес	8-Mattari	10-Фениксы	2-silelderman	4-tigerclaws
tigerclaws	4	1-Сами по себе!	9-54 HERO	7-Sakura	5-new athena	3-Toms
new athena	5	8-Mattari	10-Фениксы	2-silelderman	4-tigerclaws	6-Велес
Велес	6	3-Toms	1-Сами по себе!	9-54 HERO	7-Sakura	5-new athena
Sakura	7	10-Фениксы	2-silelderman	4-tigerclaws	6-Велес	8-Mattari
Mattari	8	5-new athena	3-Toms	1-Сами по себе!	9-54 HERO	7-Sakura
54 HERO	9	2-silelderman	4-tigerclaws	6-Велес	8-Mattari	10-Фениксы
Фениксы	10	7-Sakura	5-new athena	3-Toms	1-Сами по себе!	9-54 HERO
`;

export const silver = readData(program, "silver");
