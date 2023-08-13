import { readData } from "../lib";
const program = `
Position, Guild ID, "Guild Title", Points
4, 36766, "silelderman", 5131
1, 37030, "Paladins of Dominion", 5580
10, 37032, "First Wave", 2314
3, 37610, "Сами по себе!", 5192
2, 38247, "Велес", 5260
6, 38806, "Mattari", 4575
8, 39706, "54 HERO", 4166
9, 46347, "Clan  Destino", 3339
5, 183303, "new athena", 4890
7, 205096, "Italian Job", 4402
`;

export const silver = readData(program, "silver");
