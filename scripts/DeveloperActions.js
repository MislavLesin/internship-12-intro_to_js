function DeveloperMenu() {
  let userDecision = prompt(
    "input index to select aciton: " +
      "\n" +
      "1 - Create new Developer" +
      "\n" +
      "2 - Read all Developers" +
      "\n" +
      "3 - Delete Developer" +
      "\n" +
      "4 - Update existing Developer" +
      "\n" +
      "0 - Exit",
    "0"
  );
  if (userDecision == null) return false;
  DeveloperDecision(userDecision);
}

function DeveloperDecision(userDecision) {
  switch (userDecision) {
    case "0":
      ExitMessage();
      return false;
    case "1":
      CreateNewDeveloper();
      break;
    case "2":
      PrintDevelopers();
      break;
    case "3":
      DeleteDeveloper();
      break;
    case "4":
      UpdateDeveloper();
      break;
    case null:
      ExitMessage();
      return false;
  }
}

function UpdateDeveloper() {
  alert("Enter Developer Id to Edit: ");
  let index = SelectDeveloperIndex();
  if (index == null) {
    alert("Developer does not exist!");
    return false;
  } else {
    let updatedDeveloper = Developers[index];
    let decision = prompt(`Enter new Name: `, updatedDeveloper?.name);
    if (decision == null) {
      ExitMessage();
      return false;
    } else {
      updatedDeveloper.name = decision;
      let newEmplomentStatus = SelectEmploymentStatus(
        Developers[index].employmentStatus
      );
      let newDeveloperType = SelectDeveloperType(
        Developers[index].developerType
      );
      updatedDeveloper.employmentStatus = newEmplomentStatus;
      updatedDeveloper.developerType = newDeveloperType;
      let updateCompany = prompt(
        `Update company?`,
        updatedDeveloper?.company?.name
      );
      if (updateCompany != null) {
        let bigCompany  = SelectDeveloperCompany();
        if(bigCompany.id != updatedDeveloper.company.id) {
          updatedDeveloper.company = [{
            id: bigCompany.id,
            name: bigCompany.name,
          }];
          RemoveDeveloperFromCompany(Developers[index]);
          AddDeveloperToCompany(updatedDeveloper,updatedDeveloper.company);
        }
      }
      decision = prompt("Update languages?", "yes");
      if (decision == "yes") {
        PrintDeveloperLanguages(index);
        AddLanguageToDeveloper(updatedDeveloper.knownLanguages);
      }
      Developers.splice(index, 1, updatedDeveloper);
      alert(`Successfully updated ${Developers[index].name}`);
      return true;
    }
  }
}
function AddLanguageToDeveloper(knownLanguages) {
  alert("Select existing language to remove it, or new language to add");
  for (let language of ProgrammingLanguages) {
    alert(`Id - ${language.id} \n
      Name - ${language.name} \n \n`);
  }
  let selectedId = prompt("Enter language Id");
  for (let language of ProgrammingLanguages) {
    if (language.id == selectedId) {
      if (knownLanguages.find((lang) => lang.id == language.id)) {
        knownLanguages.pop(language);
        alert("Language removed!");
      } else {
        knownLanguages.push(language);
        alert("Language " + language.name + " added!");
        return knownLanguages;
      }
    }
  }
  alert("No language found");
  return undefined;
}

function PrintDeveloperLanguages(index) {
  let developer = Developers[index];
  if (developer.knownLanguages == null) {
    alert("Knows no language..");
    return undefined;
  }
  alert(
    `Developer ${developer.name} knows ${developer.knownLanguages.length} languages`
  );
  for (let i = 0; i < developer.knownLanguages.length; i++) {
    alert(developer.knownLanguages[i].name);
  }
  return true;
}

function SelectDeveloperIndex() {
  for (let developer of Developers) {
   alert(`Id - ${developer.id} \n
    Name - ${developer.name} \n`);
  }
  let selectedId = prompt("Select developer Id: ", "Id -");
  for (let i = 0; i < Developers.length; i++) {
    if (Developers[i].id == selectedId) {
      return i;
    }
  }
  alert("There is no developer with id " + selectedId);
  return null;
}

function DeleteDeveloper() {
  alert("Enter Developer Id to delete: ");
  let developerId = prompt(PrintDevelopers(), "cancel");
  if (developerId == null) return false;
  else {
    for (let i = 0; i < Developers.length; i++) {
      if (Developers[i].id == developerId) {
        alert(`Removed ${Developers[i].name}`);
        RemoveDeveloperFromCompany(Developers[i]);
        Developers.splice(i, 1);
        return true;
      }
    }
    alert(`Developer with Id - ${developerId} does not exist!`);
    return null;
  }
}

function RemoveDeveloperFromCompany(developer) {
  if(developer.company == undefined) {
   console.log("Undefiend developers company");
    return true;
  }
  else {
    for(let comp of Companies) {
      console.log(comp.developers);
      if(comp.developers.length != 0 || comp.developers != undefined) {
        for(let i = 0; i < comp.developers.length; i++) {
          if(comp.developers[i].id == developer.id) {
            comp.developers.splice(i,1);
            alert(`Developer ${developer.name} is removed from company ${comp.name}`);
          }
        }
      }
    }
  }
}

function CreateNewDeveloper() {
  let name = prompt("Enter new developer's Name :", "Name -");
  if (name == null) {
    alert("Exitting");
    return false;
  }
  let company = undefined;
  let developerType = SelectDeveloperType("1");
  let employmentStatus = SelectEmploymentStatus("1");
  if (employmentStatus == EmploymentStatusEnum.EMPLOYED) {
    let fullCompany = SelectDeveloperCompany();
    company = {
      id: fullCompany.id,
      name: fullCompany.name,
    };
  }
  let decision = prompt(`Would you like to save developer ${name} ?`, "yes");
  if (decision != null) {
    SaveDeveloper(name, employmentStatus, developerType, company);
  }
}

function SelectDeveloperCompany() {
  let decision = prompt("Select from existing database?");
  if (decision != null) {
    for (let company of Companies) {
      alert(`Id - ${company.id} \n
      Name - ${company.name} \n \n`);
    }
  }
  let id = prompt("Enter company Id: ", "Id -");
  for (let company of Companies) {
    if (company.id == id) {
      return company;
    }
  }
  alert("Company not found!");
  return undefined;
}
function SaveDeveloper(_name, _employmentStatus, _developerType, _company) {

    let developer = {
    id: GetDeveloperId(),
    name: _name,
    employmentStatus: _employmentStatus,
    developerType: _developerType,
    company: _company,
  };
  Developers.push(developer);
  SortDevelopers();
  AddDeveloperToCompany(developer, _company);
  alert(`Developer ${_name} saved sucessfully!`);
}

function AddDeveloperToCompany(developer, smallCompany) {
  for (let company of Companies) {
    if(company.id == smallCompany.id) {
      company.developers.push({
        id: developer.id,
        name: developer.name,
        employmentStatus: developer.employmentStatus,
        developerType: developer.developerType,
      });
      alert(`Developer ${developer.name} added to company ${smallCompany.name}`);
      break;
    }
  }
}
function SelectDeveloperType(defaultValue) {
  let index = prompt(
    `Enter developer type index: \n
  1 - ${DeveloperTypesEnum.BACKEND} \n
  2 - ${DeveloperTypesEnum.FRONTEND} \n
  3 - ${DeveloperTypesEnum.FULLSTACK}`,
    defaultValue
  );
  switch (index) {
    case "1":
      return DeveloperTypesEnum.BACKEND;
    case "2":
      return DeveloperTypesEnum.FRONTEND;
    case "3":
      return DeveloperTypesEnum.FULLSTACK;
    default:
      alert("Undefiend");
      return undefined;
  }
}

function SelectEmploymentStatus(defaultValue) {
  let index = prompt(
    `Enter Employment status index: \n
  1 - ${EmploymentStatusEnum.EMPLOYED} \n
  2 - ${EmploymentStatusEnum.FREELANCING} \n
  3 - ${EmploymentStatusEnum.UNEMPLOYED}`,
    defaultValue
  );
  switch (index) {
    case "1":
      return EmploymentStatusEnum.EMPLOYED;
    case "2":
      return EmploymentStatusEnum.FREELANCING;
    case "3":
      return EmploymentStatusEnum.UNEMPLOYED;
    default:
      alert("Undefiend");
      return undefined;
  }
}

function PrintDevelopers() {
  SortDevelopers();
  for (let developer of Developers) {
    let languageList = "";
    alert(`Id - ${developer.id} \n
      Name - ${developer.name} \n 
      Emploment Status : ${developer?.employmentStatus} \n
      Company : ${developer?.company[0]?.name} \n 
      Developer Type : ${developer?.developerType} \n
      Known Languages : \n`);
      console.log(developer?.company[0]);//////////////////
    if (developer.knownLanguages != undefined) {
      for (let language of developer.knownLanguages) {
        languageList += `\t - ${language.name} \n`;
      }
      languageList += `======================= \n \n`;
      alert(languageList);
    } else {
      alert("None");
    }
  }
}

function SortDevelopers() {
  Developers.sort((a, b) => {
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

function GetDeveloperId() {
  let maxId = 1;
  Developers.forEach((developer) => {
    if (developer.id > maxId) {
      maxId = developer.id;
    }
  });
  return maxId + 1;
}
