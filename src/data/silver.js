import { readData } from "../lib";
const program = `
Vikings	1	4-new athena	6-silelderman	8-tigerclaws	10-Велес	2-Sakura
Sakura	2	9-Mattari	7-Toms	5-Фениксы	3-ohhoo	1-Vikings
ohhoo	3	6-silelderman	8-tigerclaws	10-Велес	2-Sakura	4-new athena
new athena	4	1-Vikings	9-Mattari	7-Toms	5-Фениксы	3-ohhoo
Фениксы	5	8-tigerclaws	10-Велес	2-Sakura	4-new athena	6-silelderman
silelderman	6	3-ohhoo	1-Vikings	9-Mattari	7-Toms	5-Фениксы
Toms	7	10-Велес	2-Sakura	4-new athena	6-silelderman	8-tigerclaws
tigerclaws	8	5-Фениксы	3-ohhoo	1-Vikings	9-Mattari	7-Toms
Mattari	9	2-Sakura	4-new athena	6-silelderman	8-tigerclaws	10-Велес
Велес	10	7-Toms	5-Фениксы	3-ohhoo	1-Vikings	9-Mattari
`;

export const silver = readData(program, "silver");
