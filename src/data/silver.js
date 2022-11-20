import { readData } from "../lib"
const program =`
Knight of Knights	1	4-ohhoo	6-new athena	8-tigerclaws	10-Велес	2-Vikings
Vikings	2	9-Mattari	7-silelderman	5-Toms	3-Фениксы	1-Knight of Knights
Фениксы	3	6-new athena	8-tigerclaws	10-Велес	2-Vikings	4-ohhoo
ohhoo	4	1-Knight of Knights	9-Mattari	7-silelderman	5-Toms	3-Фениксы
Toms	5	8-tigerclaws	10-Велес	2-Vikings	4-ohhoo	6-new athena
new athena	6	3-Фениксы	1-Knight of Knights	9-Mattari	7-silelderman	5-Toms
silelderman	7	10-Велес	2-Vikings	4-ohhoo	6-new athena	8-tigerclaws
tigerclaws	8	5-Toms	3-Фениксы	1-Knight of Knights	9-Mattari	7-silelderman
Mattari	9	2-Vikings	4-ohhoo	6-new athena	8-tigerclaws	10-Велес
Велес	10	7-silelderman	5-Toms	3-Фениксы	1-Knight of Knights	9-Mattari
`

export const silver = readData(program, 'silver')