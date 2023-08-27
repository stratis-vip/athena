import { readData } from "../lib";
const program = `
Position, Guild ID, "Guild Title", Points
2, 36766, "silelderman", 5200
4, 37030, "Paladins of Dominion", 5160
10, 37032, "First Wave", 3392
1, 37610, "Сами по себе!", 5506
3, 38247, "Велес", 5165
6, 38806, "Mattari", 4717
7, 39706, "54 HERO", 4358
8, 46347, "Clan  Destino", 3963
5, 183303, "new athena", 4808
9, 205096, "Italian Job", 3755
`;

export const silver = readData(program, "silver");
