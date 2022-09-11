import { readData } from "../lib"
const program =`
54 HERO	1	4-Knight of Knights	6-silelderman	8-new athena	10-Mattari	2-Фениксы
Фениксы	2	9-First Wave	7-Vikings	5-tigerclaws	3-Toms	1-54 HERO
Toms	3	6-silelderman	8-new athena	10-Mattari	2-Фениксы	4-Knight of Knights
Knight of Knights	4	1-54 HERO	9-First Wave	7-Vikings	5-tigerclaws	3-Toms
tigerclaws	5	8-new athena	10-Mattari	2-Фениксы	4-Knight of Knights	6-silelderman
silelderman	6	3-Toms	1-54 HERO	9-First Wave	7-Vikings	5-tigerclaws
Vikings	7	10-Mattari	2-Фениксы	4-Knight of Knights	6-silelderman	8-new athena
new athena	8	5-tigerclaws	3-Toms	1-54 HERO	9-First Wave	7-Vikings
First Wave	9	2-Фениксы	4-Knight of Knights	6-silelderman	8-new athena	10-Mattari
Mattari	10	7-Vikings	5-tigerclaws	3-Toms	1-54 HERO	9-First Wave
`

export const silver = readData(program, 'silver')