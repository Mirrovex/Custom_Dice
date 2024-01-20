/* Jeśli chcesz dodać własne kostki musisz dodać poniżej:

    dice3d.addSystem({id: "twoje_id", name: "wyświetlana_nazwa"});
    dice3d.addDicePreset({
        type: "rodzaj kostki (dc, d2, d4, d6, df, da, d8, d10, d100, d12, d20)",
        labels: [
        "ścieżki do kostek ("modules/custom_dice/dice/folder/dice.png")],
        system: "użyte wcześniej id"
    }, "rodzaj kostki");

*/

export default class CustomDice {
	constructor() {
		CustomDice.init();
	}

	/** Initialize Custom Fonts */
	static async init() {
        const font_list = ["Pirate", "Beast", "Gothic", "Arabic", "Aztec", "Horror", "Stone"]
        font_list.forEach(f => {
            if (!CONFIG.fontFamilies.includes(f)) CONFIG.fontFamilies.push(f);
        });

		Hooks.on("diceSoNiceReady", dice3d => {
			CustomDice.diceSoNice(dice3d);
		});
	}

    static diceSoNice(dice3d) {
        try {
            dice3d.addSystem({id: "destiny", name: "Coin of Fate"});
            dice3d.addDicePreset({
                type: 'd2',
                labels: [
                    "modules/custom_dice/dice/destiny/no_coin.png",
                    "modules/custom_dice/dice/destiny/yes_coin.png"
                ],
                bumpMaps:[
                    "modules/custom_dice/dice/destiny/no_coin_b.png",
                    "modules/custom_dice/dice/destiny/yes_coin_b.png"
                ],
                system: 'destiny'
            }, "d2");
            dice3d.addColorset({
                name: 'Coin of Fate',
                description: 'Coin of Fate',
                category: 'Custom Dice',
                edge: "#dcc160",
                texture: 'metal',
                material: 'pristine'
            });
        } catch (error) {
            console.warn(error);
        }

        try {
            const fonts1 = ["Pirate", "Beast", "Fire"]
            for(let font of fonts1.values()) {
                const system = font.toLowerCase()
                dice3d.addSystem({id: system, name: font});
                dice3d.addDicePreset({
                    type: 'd2',
                    labels: [
                        "1",
                        "2"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd4',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd6',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "@"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd8',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "@"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd10',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "@"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd12',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "@"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd20',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "@"
                    ],
                    system: system,
                    font: font
                });
                dice3d.addDicePreset({
                    type: 'd100',
                    labels: [
                        "10",
                        "20",
                        "30",
                        "40",
                        "50",
                        "60",
                        "70",
                        "80",
                        "90",
                        "@"
                    ],
                    system: system,
                    font: font
                });
            }
        } catch (error) {
            console.warn(error);
        }

            /*dice3d.addSystem({id: "pirate", name: "Pirate"});
            dice3d.addDicePreset({
                type: 'd2',
                labels: [
                    "1",
                    "2"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd4',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd6',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd8',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd10',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd12',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd20',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });
            dice3d.addDicePreset({
                type: 'd100',
                labels: [
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "70",
                    "80",
                    "90",
                    "@"
                ],
                system: 'pirate',
                font: "pirate"
            });

            dice3d.addSystem({id: "beast", name: "Beast"});
            dice3d.addDicePreset({
                type: 'd2',
                labels: [
                    "1",
                    "2"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd4',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd6',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd8',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd10',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd12',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd20',
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });
            dice3d.addDicePreset({
                type: 'd100',
                labels: [
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "70",
                    "80",
                    "90",
                    "@"
                ],
                system: 'beast',
                font: "beast"
            });*/

        
        /*try {
            const fonts2 = ["Gothic", "Arabic", "Aztec", "Horror", "stone"]
            for(let font of fonts2.values()) {
                dice3d.addSystem({id: font.toLowerCase(), name: font});
                dice3d.addDicePreset({
                    type: 'd2',
                    labels: [
                        "1",
                        "2"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd4',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd6',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd8',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd10',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd12',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd20',
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "20"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });
                dice3d.addDicePreset({
                    type: 'd100',
                    labels: [
                        "10",
                        "20",
                        "30",
                        "40",
                        "50",
                        "60",
                        "70",
                        "80",
                        "90",
                        "00"
                    ],
                    system: font.toLowerCase(),
                    font: font.toLowerCase()
                });

            }
            
        } catch (error) {
            console.warn(error);
        }*/

        /*dice3d.addColorset({
            font: 'Gothic',
            visibility: 'hidden'
        });
    
        dice3d.addColorset({
            font: 'Arabic',
            visibility: 'hidden'
        });
        
        dice3d.addColorset({
            font: 'Beast',
            visibility: 'hidden'
        });
        
        dice3d.addColorset({
            font: 'Aztec',
            visibility: 'hidden'
        });
        
        dice3d.addColorset({
            font: 'Horror',
            visibility: 'hidden'
        });
        
        dice3d.addColorset({
            font: 'Stone',
            visibility: 'visible'
        });*/
	}
}

Hooks.on("init", () => new CustomDice());