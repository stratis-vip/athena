import { readData } from "../lib";
const program = `
Toms	1	4-Велес	6-new athena	8-Sakura	10-Mattari	2-Сами по себе!
Сами по себе!	2	9-Фениксы	7-54 HERO	5-silelderman	3-tigerclaws	1-Toms
tigerclaws	3	6-new athena	8-Sakura	10-Mattari	2-Сами по себе!	4-Велес
Велес	4	1-Toms	9-Фениксы	7-54 HERO	5-silelderman	3-tigerclaws
silelderman	5	8-Sakura	10-Mattari	2-Сами по себе!	4-Велес	6-new athena
new athena	6	3-tigerclaws	1-Toms	9-Фениксы	7-54 HERO	5-silelderman
54 HERO	7	10-Mattari	2-Сами по себе!	4-Велес	6-new athena	8-Sakura
Sakura	8	5-silelderman	3-tigerclaws	1-Toms	9-Фениксы	7-54 HERO
Фениксы	9	2-Сами по себе!	4-Велес	6-new athena	8-Sakura	10-Mattari
Mattari	10	7-54 HERO	5-silelderman	3-tigerclaws	1-Toms	9-Фениксы
`;

export const silver = readData(program, "silver");
