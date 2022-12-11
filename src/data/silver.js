import { readData } from "../lib";
const program = `
Sakura	1	4-ohhoo	6-silelderman	8-Toms	10-Mattari	2-Vikings
Vikings	2	9-Велес	7-tigerclaws	5-new athena	3-Фениксы	1-Sakura
Фениксы	3	6-silelderman	8-Toms	10-Mattari	2-Vikings	4-ohhoo
ohhoo	4	1-Sakura	9-Велес	7-tigerclaws	5-new athena	3-Фениксы
new athena	5	8-Toms	10-Mattari	2-Vikings	4-ohhoo	6-silelderman
silelderman	6	3-Фениксы	1-Sakura	9-Велес	7-tigerclaws	5-new athena
tigerclaws	7	10-Mattari	2-Vikings	4-ohhoo	6-silelderman	8-Toms
Toms	8	5-new athena	3-Фениксы	1-Sakura	9-Велес	7-tigerclaws
Велес	9	2-Vikings	4-ohhoo	6-silelderman	8-Toms	10-Mattari
Mattari	10	7-tigerclaws	5-new athena	3-Фениксы	1-Sakura	9-Велес
`;

export const silver = readData(program, "silver");
