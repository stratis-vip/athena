import { readData } from "../lib"
const program =`
ohhoo	1	4-Toms	6-Vikings	8-new athena	10-Mattari	2-Knight of Knights
Knight of Knights	2	9-First Wave	7-silelderman	5-tigerclaws	3-Фениксы	1-ohhoo
Фениксы	3	6-Vikings	8-new athena	10-Mattari	2-Knight of Knights	4-Toms
Toms	4	1-ohhoo	9-First Wave	7-silelderman	5-tigerclaws	3-Фениксы
tigerclaws	5	8-new athena	10-Mattari	2-Knight of Knights	4-Toms	6-Vikings
Vikings	6	3-Фениксы	1-ohhoo	9-First Wave	7-silelderman	5-tigerclaws
silelderman	7	10-Mattari	2-Knight of Knights	4-Toms	6-Vikings	8-new athena
new athena	8	5-tigerclaws	3-Фениксы	1-ohhoo	9-First Wave	7-silelderman
First Wave	9	2-Knight of Knights	4-Toms	6-Vikings	8-new athena	10-Mattari
Mattari	10	7-silelderman	5-tigerclaws	3-Фениксы	1-ohhoo	9-First Wave
`

export const silver = readData(program, 'silver')