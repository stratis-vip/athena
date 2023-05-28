import { readData } from "../lib";
const program = `
HERO 45	1	4-new athena	6-silelderman	8-Mattari	10-Sakura	2-Велес
Велес	2	9-Фениксы	7-54 HERO	5-Toms	3-tigerclaws	1-HERO 45
tigerclaws	3	6-silelderman	8-Mattari	10-Sakura	2-Велес	4-new athena
new athena	4	1-HERO 45	9-Фениксы	7-54 HERO	5-Toms	3-tigerclaws
Toms	5	8-Mattari	10-Sakura	2-Велес	4-new athena	6-silelderman
silelderman	6	3-tigerclaws	1-HERO 45	9-Фениксы	7-54 HERO	5-Toms
54 HERO	7	10-Sakura	2-Велес	4-new athena	6-silelderman	8-Mattari
Mattari	8	5-Toms	3-tigerclaws	1-HERO 45	9-Фениксы	7-54 HERO
Фениксы	9	2-Велес	4-new athena	6-silelderman	8-Mattari	10-Sakura
Sakura	10	7-54 HERO	5-Toms	3-tigerclaws	1-HERO 45	9-Фениксы
`;

export const silver = readData(program, "silver");
