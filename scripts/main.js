alert("Hello there");
let userDecision = -1;
while (userDecision != 0) {
  userDecision = ShowMenu();
  switch (userDecision) {
    case "0":
      ExitMessage();
      break;
    case "1":
      DeveloperMenu();
      break;
    case "2":
      ProgrammingLanguageMenu();
      break;
    case null:
      ExitMessage();
      userDecision = "0";
      break;
    default:
    // code block
  }
}
