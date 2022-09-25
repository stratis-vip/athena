import { readData } from "../lib"
const program =`
ohhoo	1	4-Toms	6-Vikings	8-new athena	10-Mattari	2-Фениксы
Фениксы	2	9-First Wave	7-tigerclaws	5-silelderman	3-Knight of Knights	1-ohhoo
Knight of Knights	3	6-Vikings	8-new athena	10-Mattari	2-Фениксы	4-Toms
Toms	4	1-ohhoo	9-First Wave	7-tigerclaws	5-silelderman	3-Knight of Knights
silelderman	5	8-new athena	10-Mattari	2-Фениксы	4-Toms	6-Vikings
Vikings	6	3-Knight of Knights	1-ohhoo	9-First Wave	7-tigerclaws	5-silelderman
tigerclaws	7	10-Mattari	2-Фениксы	4-Toms	6-Vikings	8-new athena
new athena	8	5-silelderman	3-Knight of Knights	1-ohhoo	9-First Wave	7-tigerclaws
First Wave	9	2-Фениксы	4-Toms	6-Vikings	8-new athena	10-Mattari
Mattari	10	7-tigerclaws	5-silelderman	3-Knight of Knights	1-ohhoo	9-First Wave
`

export const silver = readData(program, 'silver')