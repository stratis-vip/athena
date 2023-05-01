import { readData } from "../lib";
const program = `
Сами по себе!	1	4-tigerclaws	6-silelderman	8-Mattari	10-Фениксы	2-new athena
new athena	2	9-54 HERO	7-Велес	5-Sakura	3-Toms	1-Сами по себе!
Toms	3	6-silelderman	8-Mattari	10-Фениксы	2-new athena	4-tigerclaws
tigerclaws	4	1-Сами по себе!	9-54 HERO	7-Велес	5-Sakura	3-Toms
Sakura	5	8-Mattari	10-Фениксы	2-new athena	4-tigerclaws	6-silelderman
silelderman	6	3-Toms	1-Сами по себе!	9-54 HERO	7-Велес	5-Sakura
Велес	7	10-Фениксы	2-new athena	4-tigerclaws	6-silelderman	8-Mattari
Mattari	8	5-Sakura	3-Toms	1-Сами по себе!	9-54 HERO	7-Велес
54 HERO	9	2-new athena	4-tigerclaws	6-silelderman	8-Mattari	10-Фениксы
Фениксы	10	7-Велес	5-Sakura	3-Toms	1-Сами по себе!	9-54 HERO
`;

export const silver = readData(program, "silver");
