// `This is only for console. (right click -> inspect -> console)`
// https://supersimple.dev/projects/amazon/

// 3a. Create the text 'My name is: ' as a string.
'My name is: '

// 3b. Create your name as a string (for example: 'Simon').
'Ashraful'

// 3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: ___' (replace ___ with your name).
'My name is: ' + 'Ashraful'

// 3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $___' (replace ___ with the total you calculated).
'Total Cost: $' + (5+3);

// 3e. Do the same thing as 3d, but use a template string and interpolation.
`Total cost: $${5+3}`

// 3f. Display the text from 3e in a popup using alert(...);.
alert(`Total cost: $${5+3}`);

// 3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $___' (hint: calculate in cents to avoid inaccuracies).
'Total cost: $' + (599+295) / 100;

// 3h. Do the same thing as 3g, but use a template string and interpolation.
`Total cost: $${(599+295) / 100}`

// 3i. Display the text from 3h in a popup.
alert(`Total cost: $${(599+295) / 100}`)

// 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.
alert(`Total cost: $${(599+295) / 100} \n Thank you, come again!`);