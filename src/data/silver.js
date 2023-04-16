import { readData } from "../lib";
const program = `
silelderman	1	4-Toms	6-tigerclaws	8-54 HERO	10-Mattari	2-Фениксы
Фениксы	2	9-Велес	7-Sakura	5-new athena	3-Сами по себе!	1-silelderman
Сами по себе!	3	6-tigerclaws	8-54 HERO	10-Mattari	2-Фениксы	4-Toms
Toms	4	1-silelderman	9-Велес	7-Sakura	5-new athena	3-Сами по себе!
new athena	5	8-54 HERO	10-Mattari	2-Фениксы	4-Toms	6-tigerclaws
tigerclaws	6	3-Сами по себе!	1-silelderman	9-Велес	7-Sakura	5-new athena
Sakura	7	10-Mattari	2-Фениксы	4-Toms	6-tigerclaws	8-54 HERO
54 HERO	8	5-new athena	3-Сами по себе!	1-silelderman	9-Велес	7-Sakura
Велес	9	2-Фениксы	4-Toms	6-tigerclaws	8-54 HERO	10-Mattari
Mattari	10	7-Sakura	5-new athena	3-Сами по себе!	1-silelderman	9-Велес
`;


export const silver = readData(program, "silver");
