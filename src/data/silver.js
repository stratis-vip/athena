import { readData } from "../lib"
const program =`
ohhoo	1	4-Toms	6-tigerclaws	8-new athena	10-Велес	2-Фениксы
Фениксы	2	9-Mattari	7-silelderman	5-Vikings	3-Knight of Knights	1-ohhoo
Knight of Knights	3	6-tigerclaws	8-new athena	10-Велес	2-Фениксы	4-Toms
Toms	4	1-ohhoo	9-Mattari	7-silelderman	5-Vikings	3-Knight of Knights
Vikings	5	8-new athena	10-Велес	2-Фениксы	4-Toms	6-tigerclaws
tigerclaws	6	3-Knight of Knights	1-ohhoo	9-Mattari	7-silelderman	5-Vikings
silelderman	7	10-Велес	2-Фениксы	4-Toms	6-tigerclaws	8-new athena
new athena	8	5-Vikings	3-Knight of Knights	1-ohhoo	9-Mattari	7-silelderman
Mattari	9	2-Фениксы	4-Toms	6-tigerclaws	8-new athena	10-Велес
Велес	10	7-silelderman	5-Vikings	3-Knight of Knights	1-ohhoo	9-Mattari
`

export const silver = readData(program, 'silver')