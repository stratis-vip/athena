import { readData } from "../lib";
const program = `
Position, Guild ID, "Guild Title", Points
3, 36766, "silelderman", 0
10, 37032, "First Wave", 0
8, 37149, "Knight of Knights", 0
4, 37610, "Сами по себе!", 0
2, 38247, "Велес", 0
6, 38806, "Mattari", 0
1, 39706, "54 HERO", 0
9, 46347, "Clan  Destino", 0
5, 183303, "new athena", 0
7, 205096, "Italian Job", 0
`


export const silver = readData(program, "silver");