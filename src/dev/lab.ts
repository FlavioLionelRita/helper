import { h3lp } from './../lib'

const source = [
	'!!! Hola mundo !!!',
	'0123456789',
	'abcdefghijklmnopqrstuvwxyz',
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	'?.><":\\\'|";:[{]}=+-_)(*&^%$#@!~` ',
	'Ø ø ᴓ',
	'ɜ ɝ ℨ Ɜ',
	'à á â ã ä å ā ă ą Ƌ ƌ ǎ ȁ ȃ ȧ ɑ ɐ ḁ  ͣ ạ ả ⱥ',
	'ƀ Ɓ Ƃ ƃ ḃ ḇ ℔ ḅ ɓ',
	'ç ć ĉ č ƈ ɔ ɕ ċ  ͨ ↄ ',
	'ď  ȡ ɖ ɗ đ  ͩ ḋ ḍ ḏ ḑ ḓ ⅆ',
	'è é ê ë ē ĕ ė ę ě œ ǝ ȅ ȇ ȩ Ȼ ȼ ɇ ɘ  ͤ ḙ ḛ ẹ ẻ ẽ ℭ ℯ ⅇ ',
	'ƒ ɍ ɫ ɬ ɟ ḟ ẛ ',
	'ĝ ğ ġ ģ ǥ ǧ ǵ ɠ ɡ ḡ ℊ Ɡ',
	'ĥ ħ ȟ ɦ ʮ ʰ  ͪ ḣ ḥ ḩ  ₕ ḫ Ɥ ḧ',
	'ĩ ī ĭ į ǐ ȉ ȋ ì í î ï ɨ ᵢ  ͥ ḭ ᴉ ⁱ ⅈ ị ',
	'ɉ ʝ ʲ ℐ ⅉ',
	'ƙ ǩ ʞ ḱ ḵ ₖ ',
	'ĺ ļ ľ ŀ ł ƚ ȴ ɭ ˡ ₗ ḷ ḽ ℒ ℓ ḻ ',
	'ɯ ɰ ɱ ᴟ  ͫ ḿ ṁ ṃ ₘ ',
	'ñ ń ņ ň ƞ ǹ ɲ ɳ ȵ ṅ ṇ ṉ ṋ ₙ ',
	'ò ó ô õ ö ō ŏ ő ơ ǒ ȍ ȏ ᴏ ᴑ  ͦ ọ ℴ  ȯ ɵ ỏ ',
	'ƥ ᴘ ṕ ṗ ₚ ℘ ',
	'Ɋ ɋ ʠ ',
	'ŕ ŗ ř ȑ ȓ ɹ ɺ ɻ ɼ ɽ ɾ ɿ ᵣ ʳ ʴ  ͬ ṙ ṛ ṟ ',
	'ś ŝ ş š ș ȿ ʂ ˢ ṡ ṣ ₛ ',
	'ţ ť ŧ ƫ ƭ ƭ Ƚ ȶ ʇ ʈ ᴛ  ͭ ṫ ṭ ṯ ṱ ₜ ⱦ',
	'ù ú û ü ũ ū ŭ ů ű ư Ʋ ǔ ȕ ȗ ʋ ᴜ ᴝ ᴞ ᵤ  ͧ ṳ ṵ ṷ ụ ủ',
	'ᴠ ᵥ  ͮ ʌ ṿ',
	'ŵ ʍ ᴡ ʷ ',
	'ˣ  ͯ ẋ  ẍ ✕ ✖ ✗ ✘ x ',
	'ý ÿ ų ŷ ȳ Ƴ ƴ ɏ ɥ ʎ ʏ ʸ ẏ ỳ ỵ ỷ ỹ ',
	'ź ż ž ƶ ȥ ʐ ʑ ɀ ᴢ ẑ ẓ ẕ',
	'À Á Â Ã Ä Å Ā Ă Ą Ǎ Ȁ Ȃ Ȧ Ⱥ Ʉ ʉ ᴀ Ḁ Ạ Ả Ɑ Ɐ ',
	'Ƀ ɞ ʙ ᴃ Ḃ Ḅ Ḇ ℬ',
	'Ç Ć Ĉ Ċ Č Ɔ Ƈ ʗ ᴄ ᴐ ᴒ ℂ Ↄ ',
	'Ď Đ Ɖ Ɗ ᴅ Ḋ Ḍ Ḏ  Ḑ Ḓ ⅅ ',
	'È É Ê Ë Ē Ĕ Ė Ę Ě Œ Ǝ Ɛ Ȅ Ȇ Ȩ Ɇ ɛ ᴇ ᴈ Ḙ Ḛ Ẹ Ẻ Ẽ ℰ ⋿ ',
	'Ƒ Ḟ ℱ Ⅎ ⅎ ',
	'Ĝ Ğ Ġ Ģ Ɠ Ǥ Ǧ Ǵ ɢ ʚ ʛ Ḡ ⅁',
	'Ĥ Ħ Ȟ ʜ Ḣ Ḥ Ḧ Ḩ Ḫ ℋ ℌ ℍ Ɦ',
	'Ĩ Ī Ĭ Į İ Ɨ Ǐ Ȉ Ȋ Ì Í Î Ï ɪ Ḭ Ỉ ỉ Ị',
	'Ĵ ĵ Ɉ ȷ ᴊ ℑ ',
	'Ƙ Ǩ ᴋ Ḱ Ḳ ḳ Ḵ Ʞ ',
	'Ĺ Ļ Ľ Ŀ Ł ʟ ᴌ Ḷ Ḻ Ḽ ⅂ ⅃ Ɫ Ɬ ',
	'ᴍ Ḿ Ṁ Ṃ ℳ Ɱ ',
	'Ñ Ń Ņ Ň Ɲ Ǹ Ƞ ɴ ᴎ Ṅ Ṇ Ṉ Ṋ ℕ',
	'Ò Ó Ô Õ Ö Ō Ŏ Ő Ɵ Ơ Ǒ Ȍ Ȏ Ȯ Ọ Ỏ ',
	'Ƥ Ṕ Ṗ ℙ ',
	'Ǫ ǫ ℚ ℺ ',
	'Ŕ Ŗ Ř Ʀ Ȑ Ȓ ʀ ʁ Ɍ ᴙ ᴚ ʶ Ṙ Ṛ Ṟ ℛ ℜ ℝ Ɽ ',
	'Ś Ŝ Ş Š Ș Ṡ Ṣ Ȿ ',
	'Ţ Ť Ŧ Ƭ Ʈ Ț Ⱦ Ṫ Ṭ Ṯ  Ṱ Ʇ',
	'Ù Ú Û Ü Ũ Ū Ŭ Ů Ű Ư Ǔ Ȕ Ȗ Ṳ Ṵ Ṷ Ụ Ủ',
	'Ṽ ṽ Ṿ ',
	'Ɯ Ŵ Ẁ ẁ Ẃ ẃ Ẅ ẅ Ẇ ẇ Ẉ ẉ ',
	'Ẋ Ẍ',
	'Ý Ų Ŷ Ÿ Ȳ Ɏ Ẏ Ỳ Ỵ Ỷ Ỹ ⅄ ',
	'Ź Ż Ž Ƶ Ȥ Ẑ Ẓ Ẕ ℤ Ɀ'
]

const result:any[] = []
for (const p of source) {
	const target = h3lp.string.normalize(p, { })
	result.push({ s: p, t: target })
}
console.log(result.map(p => `${p.s} => ${p.t} `).join('\n'))
