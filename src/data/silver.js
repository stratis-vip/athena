import { readData } from "../lib";
const program = `
Toms	1	4-Сами по себе!	6-silelderman	8-54 HERO	10-Фениксы	2-tigerclaws
tigerclaws	2	9-Mattari	7-Sakura	5-new athena	3-Велес	1-Toms
Велес	3	6-silelderman	8-54 HERO	10-Фениксы	2-tigerclaws	4-Сами по себе!
Сами по себе!	4	1-Toms	9-Mattari	7-Sakura	5-new athena	3-Велес
new athena	5	8-54 HERO	10-Фениксы	2-tigerclaws	4-Сами по себе!	6-silelderman
silelderman	6	3-Велес	1-Toms	9-Mattari	7-Sakura	5-new athena
Sakura	7	10-Фениксы	2-tigerclaws	4-Сами по себе!	6-silelderman	8-54 HERO
54 HERO	8	5-new athena	3-Велес	1-Toms	9-Mattari	7-Sakura
Mattari	9	2-tigerclaws	4-Сами по себе!	6-silelderman	8-54 HERO	10-Фениксы
Фениксы	10	7-Sakura	5-new athena	3-Велес	1-Toms	9-Mattari
`;

export const silver = readData(program, "silver");
