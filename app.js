let x = prompt("1) Burger\n2) Chicken Roll\n3) BBQ\n4) Pizza Fries\nPlease enter your choice (1-4):");

if (x === "1") {
    alert("You chose Burger. Enjoy your meal! \n your bill is Rs 450");
} else if (x === "2") {
    alert("You chose Chicken Roll. It's a tasty choice!\n your bill is RS  270");
} else if (x === "3") {
    alert("You chose BBQ. Great for BBQ lovers! \n your bill is Rs 320");
} else if (x === "4") {
    alert("You chose Pizza Fries. Yum!\n your bill is Rs 280 ");
} else {
    alert("Invalid choice! Please enter a number between 1 and 4.");
}
