import { readData } from "../lib";
const program = `
Сами по себе!	1	4-silelderman	6-new athena	8-Clan Destino	10-Italian Job	2-Paladins of Dominion
Paladins of Dominion	2	9-First Wave	7-54 HERO	5-Mattari	3-Велес	1-Сами по себе!
Велес	3	6-new athena	8-Clan Destino	10-Italian Job	2-Paladins of Dominion	4-silelderman
silelderman	4	1-Сами по себе!	9-First Wave	7-54 HERO	5-Mattari	3-Велес
Mattari	5	8-Clan Destino	10-Italian Job	2-Paladins of Dominion	4-silelderman	6-new athena
new athena	6	3-Велес	1-Сами по себе!	9-First Wave	7-54 HERO	5-Mattari
54 HERO	7	10-Italian Job	2-Paladins of Dominion	4-silelderman	6-new athena	8-Clan Destino
Clan Destino	8	5-Mattari	3-Велес	1-Сами по себе!	9-First Wave	7-54 HERO
First Wave	9	2-Paladins of Dominion	4-silelderman	6-new athena	8-Clan Destino	10-Italian Job
Italian Job	10	7-54 HERO	5-Mattari	3-Велес	1-Сами по себе!	9-First Wave
`;

export const silver = readData(program, "silver");
