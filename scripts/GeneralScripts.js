function ShowMenu() {
  let userDecision = prompt(
    "input index to select aciton: " +
      "\n" +
      "1 - Developers Actions" +
      "\n" +
      "2 - Programming Languages Actions" +
      "\n" +
      "3 - Company Actions" +
      "\n" +
      "0 - Exit",
    "0"
  );
  return userDecision;
}

function ExitMessage() {
  alert("Exitting");
}

function FormatName(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase().trim() + txt.substr(1).toLowerCase().trim();
  });
}
