alert("Hello there");
let userDecision = ShowMenu();
switch (userDecision) {
  case "0":
    ExitMessage();
    break;
  case "2":
    userDecision2 = ProgrammingLanguageMenu();
    ProgrammingLanguageDecision(userDecision2);
    break;
  default:
  // code block
}

function ProgrammingLanguageDecision(decisionIndex) {
  switch (decisionIndex) {
    case "0":
      ExitMessage();
      return false;
      break;
    case "1":
      ProgrammingLanguageCreateNew();
      break;
    case "2":
      PrintProgrammingLanguages();
      break;
  }
}

function ExitMessage() {
  alert("Exitting");
}
