import { readData } from "../lib"
const program =`
Sakura	1	4-ohhoo	6-Toms	8-silelderman	10-Велес	2-Vikings
Vikings	2	9-new athena	7-Mattari	5-tigerclaws	3-Фениксы	1-Sakura
Фениксы	3	6-Toms	8-silelderman	10-Велес	2-Vikings	4-ohhoo
ohhoo	4	1-Sakura	9-new athena	7-Mattari	5-tigerclaws	3-Фениксы
tigerclaws	5	8-silelderman	10-Велес	2-Vikings	4-ohhoo	6-Toms
Toms	6	3-Фениксы	1-Sakura	9-new athena	7-Mattari	5-tigerclaws
Mattari	7	10-Велес	2-Vikings	4-ohhoo	6-Toms	8-silelderman
silelderman	8	5-tigerclaws	3-Фениксы	1-Sakura	9-new athena	7-Mattari
new athena	9	2-Vikings	4-ohhoo	6-Toms	8-silelderman	10-Велес
Велес	10	7-Mattari	5-tigerclaws	3-Фениксы	1-Sakura	9-new athena
`

export const silver = readData(program, 'silver')