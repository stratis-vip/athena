import { readData } from "../lib";
const program = `
Vikings	1	4-new athena	6-silelderman	8-tigerclaws	10-Велес	2-ohhoo
ohhoo	2	9-Mattari	7-Toms	5-Sakura	3-Фениксы	1-Vikings
Фениксы	3	6-silelderman	8-tigerclaws	10-Велес	2-ohhoo	4-new athena
new athena	4	1-Vikings	9-Mattari	7-Toms	5-Sakura	3-Фениксы
Sakura	5	8-tigerclaws	10-Велес	2-ohhoo	4-new athena	6-silelderman
silelderman	6	3-Фениксы	1-Vikings	9-Mattari	7-Toms	5-Sakura
Toms	7	10-Велес	2-ohhoo	4-new athena	6-silelderman	8-tigerclaws
tigerclaws	8	5-Sakura	3-Фениксы	1-Vikings	9-Mattari	7-Toms
Mattari	9	2-ohhoo	4-new athena	6-silelderman	8-tigerclaws	10-Велес
Велес	10	7-Toms	5-Sakura	3-Фениксы	1-Vikings	9-Mattari
`;

export const silver = readData(program, "silver");
