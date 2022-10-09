import { readData } from "../lib"
const program =`
ohhoo	1	4-Vikings	6-tigerclaws	8-new athena	10-First Wave	2-Knight of Knights
Knight of Knights	2	9-Mattari	7-silelderman	5-Toms	3-Фениксы	1-ohhoo
Фениксы	3	6-tigerclaws	8-new athena	10-First Wave	2-Knight of Knights	4-Vikings
Vikings	4	1-ohhoo	9-Mattari	7-silelderman	5-Toms	3-Фениксы
Toms	5	8-new athena	10-First Wave	2-Knight of Knights	4-Vikings	6-tigerclaws
tigerclaws	6	3-Фениксы	1-ohhoo	9-Mattari	7-silelderman	5-Toms
silelderman	7	10-First Wave	2-Knight of Knights	4-Vikings	6-tigerclaws	8-new athena
new athena	8	5-Toms	3-Фениксы	1-ohhoo	9-Mattari	7-silelderman
Mattari	9	2-Knight of Knights	4-Vikings	6-tigerclaws	8-new athena	10-First Wave
First Wave	10	7-silelderman	5-Toms	3-Фениксы	1-ohhoo	9-Mattari
`

export const silver = readData(program, 'silver')