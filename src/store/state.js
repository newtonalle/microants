export default () => ({
    gameState: {
        worldOptions: {

            // NOTE THAT NUMBERS TOO HIGH MIGHT CRASH/SLOW DOWN THE APP

            consumables: {

                // ID "0" is reserved for empty tiles

                foods: {
                    startingNumber: 0,
                    maxNumber: 20,
                    color: '#FFFF00', // RECOMENDED: #964B00 or #FFFF00
                    id: 1
                },

                poisons: {
                    startingNumber: 0,
                    maxNumber: 0,
                    color: '#32CD32', // RECOMENDED: #32CD32
                    id: 2
                },
            },

            ants: {
                blackAnts: {
                    startingNumber: 2, // RECOMENDED 10 - 30
                    color: '#FFFFFF', // RECOMENDED: #000000 or #FFFFFF 
                },

                redAnts: {
                    startingNumber: 2, // RECOMENDED 10 - 30
                    color: '#FF0000', // RECOMENDED: #FF0000
                },
            },

            consumablesPerCycle: 1,
            gridSize: 25, // RECOMENDED: 300 - 500
            foodValue: 10, // RECOMENDED 10+
            pixelProportion: 10, // RECOMENDED: 2 - 5
            poisonFoodChance: 0,  // X in 1000, HIGH VALUES MIGHT KILL OF ALL THE ANTS
            antStartingFoodLevel: 1000, // RECOMENDED: 200+, SETTING THIS VALUE HIGHER THAN THE MATING COST WILL RESULT IN INFINITE ANTS
            babyAntStartingFoodLevel: 200, // RECOMENDED: 50+
            crossoverRate: 1, // x in 100 matings, HIGH VALUES CAUSE THE ANTS TO BE TOO RANDOM
            alleleMutationChance: 100, // X in 10000, HIGH VALUES CAUSE THE ANTS TO BE TOO RANDOM
            backgroundColor: '#000000', // RECOMENDED: #FFFFFF or #000000

            advancedOptions: {
                minimumCombatPointDifference: 100,
                poisonDisappear: false,
                matingCost: 500,
            }
        },

        baseWorldGrid: [],

        redAnts: [],

        blackAnts: [],

        consumablesMap: [],

        antMap: [],

        emptyTiles: [],

        antPairs: [],

        antEaters: [
            { position: [0, 0] }
        ],

        currentHighestAntID: 0,

        currentCycle: 0,

        simulationStarted: false
    },
})
