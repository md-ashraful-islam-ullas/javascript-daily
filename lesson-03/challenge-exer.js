// `This is only for console. (right click -> inspect -> console)`
// https://supersimple.dev/projects/amazon/

// Setup: In the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).
alert(`Items ${2+2}: $${((2095+799)*2)/100}`);

// 3l. Create second line of text: 'Shipping & handling: $9.98' (use math).
alert(`Items ${2+2}: $${((2095+799)*2)/100} \n Shipping & handling: $${(499+499)/100}`);

// 3m. Create third line: 'Total before tax: $67.86' (use math).
alert(`Items ${2+2}: $${((2095+799)*2)/100}\nShipping & handling: $${(499+499)/100}\nTotal before tax: $${(((2095+799)*2)/100) + ((499+499)/100)}`);

// 3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round(...); to calculate the exact number).
alert(`Items ${2+2}: $${((2095+799)*2)/100}\nShipping & handling: $${(499+499)/100}\nTotal before tax: $${(((2095+799)*2)/100) + ((499+499)/100)}\nEstimated tax (10%): $${(((((2095+799)*2)/100) + ((499+499)/100)) * 0.1).toFixed(2)}`)

