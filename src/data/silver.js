import { readData } from "../lib"
const program =`
54 HERO	1	4-Toms	6-tigerclaws	8-Mattari	10-First Wave	2-Фениксы
Фениксы	2	9-new athena	7-silelderman	5-Vikings	3-ohhoo	1-54 HERO
ohhoo	3	6-tigerclaws	8-Mattari	10-First Wave	2-Фениксы	4-Toms
Toms	4	1-54 HERO	9-new athena	7-silelderman	5-Vikings	3-ohhoo
Vikings	5	8-Mattari	10-First Wave	2-Фениксы	4-Toms	6-tigerclaws
tigerclaws	6	3-ohhoo	1-54 HERO	9-new athena	7-silelderman	5-Vikings
silelderman	7	10-First Wave	2-Фениксы	4-Toms	6-tigerclaws	8-Mattari
Mattari	8	5-Vikings	3-ohhoo	1-54 HERO	9-new athena	7-silelderman
new athena	9	2-Фениксы	4-Toms	6-tigerclaws	8-Mattari	10-First Wave
First Wave	10	7-silelderman	5-Vikings	3-ohhoo	1-54 HERO	9-new athena
`

export const silver = readData(program, 'silver')