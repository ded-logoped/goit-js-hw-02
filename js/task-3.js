function checkForSpam(message) {
  const exampleOne = "spam";
  const exampleTwo = "sale";
  let userMessage = message.toLowerCase();
  if (userMessage.includes(exampleOne) || userMessage.includes(exampleTwo)) {
    return true;
  } else {
    return false;
  }
}
