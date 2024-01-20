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

    static async loadFonts() {
        const cssPath = 'modules/custom_dice/style.css';
    
        try {
            const response = await fetch(cssPath);
            const cssText = await response.text();
    
            // Extract font information
            const fontMatches = cssText.match(/@font-face\s*{[^}]*}/g);
    
            if (fontMatches) {
                fontMatches.forEach(fontMatch => {
                    // Parse font information and do something with it
                    const fontFamilyMatch = fontMatch.match(/font-family:\s*['"]([^'"]+)['"]/);
                    if (fontFamilyMatch) {
                        const fontFamily = fontFamilyMatch[1];
                        if (!CONFIG.fontFamilies.includes(fontFamily)) CONFIG.fontFamilies.push(fontFamily);
                        console.log(`Custom_Dice | Found font family: ${fontFamily}`);
                    }
                });
            }
        } catch (error) {
            console.error('Custom_Dice | Error loading CSS file:', error);
        }
    }

	/* Initialize Custom Fonts */
	static async init() {
        /*const font_list = ["Pirate", "Beast", "Gothic", "Arabic", "Aztec", "Horror", "Stone"]
        font_list.forEach(f => {
            if (!CONFIG.fontFamilies.includes(f)) CONFIG.fontFamilies.push(f);
        });*/

        await CustomDice.loadFonts();

		Hooks.on("diceSoNiceReady", dice3d => {
			CustomDice.diceSoNice(dice3d);
		});
	}

    static diceSoNice(dice3d) {
        try {
            // HERE ADD CUSTOM IMAGES

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
            const fonts_with_image = ["Pirate", "Beast", "Fire"] // HERE ADD CUSTOM FONTS NAMES WITH ICONS ON @
            for(let font of fonts_with_image.values()) {
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
	}
}

Hooks.on("init", () => new CustomDice());