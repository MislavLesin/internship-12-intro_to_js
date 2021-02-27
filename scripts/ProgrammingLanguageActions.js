function ProgrammingLanguageMenu() {
  let userDecision = prompt(
    "input index to select aciton: " +
      "\n" +
      "1 - Create new Language" +
      "\n" +
      "2 - Read all Languages" +
      "\n" +
      "3 - Delete Language" +
      "\n" +
      "4 - Update existing Language" +
      "\n" +
      "0 - Exit",
    "0"
  );
  ProgrammingLanguageDecision(userDecision);
}

function ProgrammingLanguageDecision(userDecision) {
  switch (userDecision) {
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
    case "3":
      DeleteProgrammingLanguage();
      break;
    case "4":
      UpdateProgrammingLanguage();
      break;
    case null:
      ExitMessage();
      return false;
      break;
  }
}

function ProgrammingLanguageCreateNew() {
  let languageName = prompt("Enter new Programing Language name: ", "Name");
  let languageId = GetProgrammingLanguageId();
  alert("Pushing " + languageName + " id - " + languageId);
  ProgrammingLanguages.push({
    id: languageId,
    name: FormatName(languageName),
  });
  return true;
}

function GetProgrammingLanguageId() {
  let maxId = 1;
  ProgrammingLanguages.forEach((programmingLanguage) => {
    if (programmingLanguage.id > maxId) {
      maxId = programmingLanguage.id;
    }
  });
  return maxId + 1;
}

function PrintProgrammingLanguages() {
  SortProgrammingLanguages();
  for (let language of ProgrammingLanguages) {
    alert(`Id - ${language.id} \n
    Name - ${language.name} \n \n`);
  }
}

function SelectProgrammingLanguageIndex() {
  let languagesList = "";
  for (let language of ProgrammingLanguages) {
    languagesList += `Id - ${language.id} \n
    Name - ${language.name} \n \n`;
  }

  let selectedId = prompt(languagesList, "Id");
  for (let i = 0; i < ProgrammingLanguages.length; i++) {
    if (ProgrammingLanguages[i].id == selectedId) {
      return i;
    }
  }
  return null;
}

function DeleteProgrammingLanguage() {
  alert("Enter Language Id to delete: ");
  let isRemoved = false;
  let languageId = prompt(PrintProgrammingLanguages(), "cancel");
  if (languageId == null) return false;
  else {
    for (let i = 0; i < ProgrammingLanguages.length; i++) {
      if (ProgrammingLanguages[i].id == languageId) {
        alert(`Removed ${ProgrammingLanguages[i].name}`);
        ProgrammingLanguages.splice(i, 1);
        isRemoved = true;
        break;
      }
    }
    if (isRemoved == true) {
      return true;
    } else {
      alert(`Language with Id - ${languageId} does not exist!`);
      return null;
    }
  }
}

function UpdateProgrammingLanguage() {
  alert("Enter Language Id to Edit: ");
  let languageIndex = SelectProgrammingLanguageIndex();
  if (languageIndex == null) {
    alert("Language Id does not exist!");
    return false;
  } else {
    let updatedLanguage = ProgrammingLanguages[languageIndex];
    let decision = prompt(`Enter new Name: `, updatedLanguage.name);
    if (decision == null) {
      ExitMessage();
      return false;
    } else {
      updatedLanguage.name = decision;
      ProgrammingLanguages.splice(languageIndex, 1, updatedLanguage);
      alert(`Successfully updated ${ProgrammingLanguages[languageIndex].name}`);
      return true;
    }
  }
}
function SortProgrammingLanguages() {
  ProgrammingLanguages.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}
