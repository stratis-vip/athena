import { readData } from "../lib";
const program = `
Sakura	1	4-tigerclaws	6-Фениксы	8-Велес	10-Mattari	2-Toms
Toms	2	9-54 HERO	7-silelderman	5-new athena	3-Сами по себе!	1-Sakura
Сами по себе!	3	6-Фениксы	8-Велес	10-Mattari	2-Toms	4-tigerclaws
tigerclaws	4	1-Sakura	9-54 HERO	7-silelderman	5-new athena	3-Сами по себе!
new athena	5	8-Велес	10-Mattari	2-Toms	4-tigerclaws	6-Фениксы
Фениксы	6	3-Сами по себе!	1-Sakura	9-54 HERO	7-silelderman	5-new athena
silelderman	7	10-Mattari	2-Toms	4-tigerclaws	6-Фениксы	8-Велес
Велес	8	5-new athena	3-Сами по себе!	1-Sakura	9-54 HERO	7-silelderman
54 HERO	9	2-Toms	4-tigerclaws	6-Фениксы	8-Велес	10-Mattari
Mattari	10	7-silelderman	5-new athena	3-Сами по себе!	1-Sakura	9-54 HERO
`;


export const silver = readData(program, "silver");
