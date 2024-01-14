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
        Hooks.on('init', () => {
        loadCSS('path-to-your-module/styles/styles.css'); // Adjust the path as needed
        });
		Hooks.on("diceSoNiceReady", dice3d => {
			CustomDice.diceSoNice(dice3d);
		});
	}

    static async diceSoNice(dice3d) {
        try {
            dice3d.addSystem({id: "pirate", name: "Pirate"});
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

            dice3d.addColorset({
                font: "pirate",
                visibility: "hidden",
            });
            
        } catch (error) {
            console.warn(error);
        }
	}

    static diceSoNice_fonts(dice3d) {
		CustomFonts.list.forEach(async f => {
			try {
				await document.fonts.load(`1em "${f}"`);

				dice3d.addColorset({
					font: f,
					visibility: "hidden",
				});
			} catch (error) {
				const message = `${CustomFonts.ID} | ${game.i18n.format(
					"custom-fonts.notifications.dsnFailedToRegister",
					{ font: f, error }
				)}`;
				//ui.notifications.warn(message);
				console.warn(message);
			}
		});
	}
}

Hooks.on("init", () => new CustomDice());