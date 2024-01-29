function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const amount = quantity * pricePerDroid;

  if (amount > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${amount} credits!`;
  }
}
