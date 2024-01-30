function formatMessage(message, maxLength) {
  const userLength = message.length;
  if (userLength <= maxLength) {
    return message;
  } else {
    const newMessage = message.slice(0, maxLength);
    return `${newMessage}...`;
  }
}
