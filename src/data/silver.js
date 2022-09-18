import { readData } from "../lib"
const program =`
ohhoo	1	4-Фениксы	6-tigerclaws	8-new athena	10-Mattari	2-Vikings
Vikings	2	9-First Wave	7-silelderman	5-Toms	3-Knight of Knights	1-ohhoo
Knight of Knights	3	6-tigerclaws	8-new athena	10-Mattari	2-Vikings	4-Фениксы
Фениксы	4	1-ohhoo	9-First Wave	7-silelderman	5-Toms	3-Knight of Knights
Toms	5	8-new athena	10-Mattari	2-Vikings	4-Фениксы	6-tigerclaws
tigerclaws	6	3-Knight of Knights	1-ohhoo	9-First Wave	7-silelderman	5-Toms
silelderman	7	10-Mattari	2-Vikings	4-Фениксы	6-tigerclaws	8-new athena
new athena	8	5-Toms	3-Knight of Knights	1-ohhoo	9-First Wave	7-silelderman
First Wave	9	2-Vikings	4-Фениксы	6-tigerclaws	8-new athena	10-Mattari
Mattari	10	7-silelderman	5-Toms	3-Knight of Knights	1-ohhoo	9-First Wave
`

export const silver = readData(program, 'silver')