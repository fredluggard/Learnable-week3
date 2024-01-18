// Welcome message
console.log(
  "Welcome to De Fred's Place, We deal in all kinds of home groceries."
);

// List of available items for sell and their prices
let storeItems = {
  item1: "Bread - #1000",
  item2: "Milk - #2400",
  item3: "Chocolate - #1670",
  item4: "Sugar - #200",
  item5: "Honey - #600",
};

// To read from and write to the terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mail;

// To get the user email and list available items for sell
readline.question("Please input your email: ", (email) => {
  mail = email;
  console.log("What will you like to buy today?");
  console.log(`1. ${storeItems.item1}`);
  console.log(`2. ${storeItems.item2}`);
  console.log(`3. ${storeItems.item3}`);
  console.log(`4. ${storeItems.item4}`);
  console.log(`5. ${storeItems.item5}`);

  // Prompts the users for input
  readline.question(
    "Enter a number that corresponds to the item you want to buy (e.g., 1 to buy bread): ",
    (number) => {
      handleSelection(number);
    }
  );
});

// Perform operations based on user input
function handleSelection(selection) {
  switch (selection) {
    case "1":
      readline.question(
        "How many breads do you want to buy: ",
        (num_of_bread) => {
          let price_of_bread = num_of_bread * 1000;
          console.log(
            `You are about to pay #${price_of_bread} for ${num_of_bread} loaf(s) of bread.`
          );
          handlePayment();
        }
      );
      break;

    case "2":
      readline.question(
        "How many tins of Milk do you want to buy: ",
        (num_of_milk) => {
          let price_of_milk = num_of_milk * 2400;
          console.log(
            `You are about to pay #${price_of_milk} for ${num_of_milk} tin(s) of milk`
          );
          handlePayment();
        }
      );
      break;

    case "3":
      readline.question(
        "How many tins of Chocolate do you want to buy: ",
        (num_of_chocolate) => {
          let price_of_Chocolate = num_of_chocolate * 1670;
          console.log(
            `You are about to pay #${price_of_Chocolate} for ${num_of_chocolate} tin(s) of chocolate`
          );
          handlePayment();
        }
      );
      break;

    case "4":
      readline.question(
        "How many packets of Sugar do you want to buy: ",
        (num_of_sugar) => {
          let price_of_sugar = num_of_sugar * 200;
          console.log(
            `You are about to pay #${price_of_sugar} for ${num_of_sugar} packet(s) of sugar`
          );
          handlePayment();
        }
      );
      break;

    case "5":
      readline.question(
        "How many bottles of Honey do you want to buy: ",
        (num_of_honey) => {
          let price_of_honey = num_of_honey * 600;
          console.log(
            `You are about to pay #${price_of_honey} for ${num_of_honey} bottle(s) of honey`
          );
          handlePayment();
        }
      );
      break;

    default:
      console.log("Please choose from the available options. Thanks");
      readline.close();
      break;
  }
}

// This function handles payment
function handlePayment() {
  readline.question("Input {Yes} to pay and {No} to cancel: ", (pay) => {
    pay = pay.toLowerCase();
    switch (pay) {
      case "yes":
        console.log(
          `Your order has being placed, check your email ( ${mail} ) for confirmation. Thanks for choosing us.`
        );
        readline.close();
        break;

      case "no":
        console.log(`You can check our other products, Thanks for choosing us`);
        readline.close();
        break;

      default:
        console.log("Invalid response.");
        readline.close();
        break;
    }
  });
}
