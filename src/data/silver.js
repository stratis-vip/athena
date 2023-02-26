import { readData } from "../lib";
const program = `
Sakura	1	4-tigerclaws	6-silelderman	8-54 HERO	10-Mattari	2-HERO 45
HERO 45	2	9-Toms	7-Велес	5-new athena	3-Фениксы	1-Sakura
Фениксы	3	6-silelderman	8-54 HERO	10-Mattari	2-HERO 45	4-tigerclaws
tigerclaws	4	1-Sakura	9-Toms	7-Велес	5-new athena	3-Фениксы
new athena	5	8-54 HERO	10-Mattari	2-HERO 45	4-tigerclaws	6-silelderman
silelderman	6	3-Фениксы	1-Sakura	9-Toms	7-Велес	5-new athena
Велес	7	10-Mattari	2-HERO 45	4-tigerclaws	6-silelderman	8-54 HERO
54 HERO	8	5-new athena	3-Фениксы	1-Sakura	9-Toms	7-Велес
Toms	9	2-HERO 45	4-tigerclaws	6-silelderman	8-54 HERO	10-Mattari
Mattari	10	7-Велес	5-new athena	3-Фениксы	1-Sakura	9-Toms
`;

export const silver = readData(program, "silver");
