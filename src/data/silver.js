import { readData } from "../lib";
const program = `
Position, Guild ID, "Guild Title", Points
4, 36766, "silelderman", 0
1, 37030, "Paladins of Dominion", 0
10, 37032, "First Wave", 0
2, 37610, "Сами по себе!", 0
3, 38247, "Велес", 0
6, 38806, "Mattari", 0
7, 39706, "54 HERO", 0
8, 46347, "Clan  Destino", 0
5, 183303, "new athena", 0
9, 205096, "Italian Job", 0
`;


export const silver = readData(program, "silver");