// This is only for console. (right click -> inspect -> console)

// https://supersimple.dev/projects/amazon/

// Setup: In the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.

// 2f. Calculate the cost of the products (before shipping and taxes).
(18.99+20.95+7.99);

// 2g. Calculate the Total before tax.
((18.99+4.99)+20.95+7.99);

// 2h. Calculate the 10% tax exactly.
Math.round(((18.99+4.99)+20.95+7.99) * 0.1);

// 2i. Calculate Order total at the bottom.
((18.99+4.99)+20.95+7.99) + Math.round(((18.99+4.99)+20.95+7.99) * 0.1);

