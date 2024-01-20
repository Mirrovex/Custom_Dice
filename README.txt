To add custom font to dice so nice you need:
1. Add font (.woff2) to modules/custom_dice/fonts
2. Add @font-face in modules/custom_dice/style.css

To add custom icon on dice max number with font you need:
1. Add font with icon on @ character (like above)
2. Add font name to modules/custom_dice/custom_dice.js "fonts_with_image" (you can ctrl + f)

To add custom dice faces with image you need:
1. Read https://gitlab.com/riccisi/foundryvtt-dice-so-nice/-/wikis/API/Customization
2. Add your folder to modules/custom_dice/dice/
3. Add folders d2, d4, d6, d8, d10, d12, d20, d100, etc
4. Add images to folders
5. Add code in modules/custom_dice/custom_dice.js below "static diceSoNice(dice3d) {"