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
  return userDecision;
}

function ProgrammingLanguageCreateNew() {
  let languageName = prompt("Enter new Programing Language name: ", "Name ");
  let languageId = GetProgrammingLanguageId();
  ProgrammingLanguages.push([
      {
          id: languageId,
          name: languageName,
      }
  ]);
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

function PrintProgrammingLanguages(){
    for(let i = 0; i < ProgrammingLanguages.length(); i++) {
       
        PrintProgrammingLanguage(ProgrammingLanguages[i]);
    }

   
}
function PrintProgrammingLanguage(programmingLanguage){
    alert("Id - " + programmingLanguage.id + "\n" +
    "Name - " + programmingLanguage.name + "\n");
}

function FormatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
