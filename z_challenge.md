# Challenge

Calculate the total cost of the items in the cart and display it on the Cart page

1. Usually the item in the database will have it's own cost saved, but we're assuming every item we sell costs $5.99, so you can just hard code that cost in
2. To very easily display the total cost in US dollars (or whatever currency you want), use the following:

`<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
