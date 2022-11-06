import { readData } from "../lib"
const program =`
54 HERO	1	4-Фениксы	6-new athena	8-silelderman	10-Велес	2-ohhoo
ohhoo	2	9-Mattari	7-Toms	5-tigerclaws	3-Vikings	1-54 HERO
Vikings	3	6-new athena	8-silelderman	10-Велес	2-ohhoo	4-Фениксы
Фениксы	4	1-54 HERO	9-Mattari	7-Toms	5-tigerclaws	3-Vikings
tigerclaws	5	8-silelderman	10-Велес	2-ohhoo	4-Фениксы	6-new athena
new athena	6	3-Vikings	1-54 HERO	9-Mattari	7-Toms	5-tigerclaws
Toms	7	10-Велес	2-ohhoo	4-Фениксы	6-new athena	8-silelderman
silelderman	8	5-tigerclaws	3-Vikings	1-54 HERO	9-Mattari	7-Toms
Mattari	9	2-ohhoo	4-Фениксы	6-new athena	8-silelderman	10-Велес
Велес	10	7-Toms	5-tigerclaws	3-Vikings	1-54 HERO	9-Mattari
`

export const silver = readData(program, 'silver')