function CompanyMenu() {
  let userDecision = prompt(
    "input index to select aciton: " +
      "\n" +
      "1 - Create new Company" +
      "\n" +
      "2 - Read all Companies" +
      "\n" +
      "3 - Delete Company" +
      "\n" +
      "4 - Update existing Company" +
      "\n" +
      "0 - Exit",
    "0"
  );
  if (userDecision == null) return false;
  CompanyDecision(userDecision);
}

function CompanyDecision(userDecision) {
  switch (userDecision) {
    case "0":
      ExitMessage();
      return false;
    case "1":
      CreateNewCompany(); 
      break;
    case "2":
      PrintCompanies();
      break;
    case "3":
      DeleteCompany();
      break;
    case "4":
      UpdateCompany();
      break;
    case null:
      ExitMessage();
      return false;
  }
}

function UpdateCompany() {
  alert("Select Company Id to Edit: ");
  let index = SelectCompanyIndex();
  if (index == null) {
    return false;
  } else {
    let updatedCompany = Companies[index];
    let decision = prompt(`Enter new Name: `, updatedCompany?.name);
    if (decision == null) {
      ExitMessage();
      return false;
    } else {
      updatedCompany.name = decision;
      let newCompanyDevelopers = UpdateDevelopers(Companies[index]);
      updatedCompany = newCompanyDevelopers;
      Companies.splice(index,1,updatedCompany);
      alert(`Company ${updatedCompany.name} updated!`);
  }
}
}

function UpdateDevelopers(company) {
  PrintCompanyDevelopers(company);
  let decision = undefined;
    decision = prompt("Add developers?","cancel to skip");
    console.log(decision);
    if(decision != null) {
      console.log("updatedevelopers()");
      company = AddDevelopersToCompany(company);
    }
  decision = " ";
  while(decision != null) {
    decision = prompt("Remove developers?","cancel to skip");
    if(decision != null) {
      RemoveDeveloperFromCompany(company);
    }
  } 
  return company;
}

function RemoveDeveloperFromCompany(company) {
  if(company.developers.length == 0) {
    alert("No developers to remove!");
    return false;
  }
  PrintCompanyDevelopers(company);
  let devId = prompt("Enter developer id to remove: ");
  if(devId == null) {return false;}
  for(let i = 0; i < company.developers.length; i++) {
    if(company.developers[i].id == devId) {
      alert(`Removed ${company.developers[i].name} from ${company.name}`);
      SetDeveloperToUnemplyed(company.developers[i].id);
      company.developers.splice(i,1);
    }
  }
}
function SetDeveloperToUnemplyed(developerId) {
  for(let i = 0; i < Developers.length; i++) {
    if(Developers[i].id = developerId) {
      Developers[i].employmentStatus = EmploymentStatusEnum.UNEMPLOYED;
      Developers[i].company = [{}];
      alert(`${Developers[i].name} --- ${Developers[i].employmentStatus}`);
      return true;
    }
  }
}
function AddDevelopersToCompany(company) {
  let decision = " ";
  while(decision != null) {
    alert("Enter Id to add: ");
    PrintAllDevelopers();
    decision = prompt("Enter developer id to add, or cancel to exit","enter Id :");
    if(decision == null) {return company;}
    for (let i = 0; i < Developers.length; i++) {
      if (Developers[i].id == decision) {
        alert("pushing " + Developers[i].name);
        company.developers.push({
          id: Developers[i].id,
          name: Developers[i].name,
          employmentStatus: Developers[i].employmentStatus,
          developerType: Developers[i].developerType,
        });
        Developers[i].employmentStatus = EmploymentStatusEnum.EMPLOYED;
        Developers[i].company = [{
          id: company.id,
          name: company.name,
        }];
        alert("Added developer!");
        break;
      }
    }
  }
  return company;
}
function PrintAllDevelopers() {
  for (let developer of Developers) {
    alert(`Id - ${developer.id} \n
     Name - ${developer.name} \n`);
   }
}

function PrintCompanyDevelopers(company) {
  if(company.developers.length == 0) {
    alert("There are no developers in this company");
  }
  else {
    alert(`There are ${company.developers.length} developers in ${company.name}`);
    for(let dev of company.developers) {
      alert(`Id - ${dev.id} \n
      Name - ${dev.name}`);
    }
  }
}
function SelectCompanyIndex() {
  for (let company of Companies) {
    alert(`Id - ${company.id} \n
     Name - ${company.name} \n`);
   }
   let selectedId = prompt("Select company Id: ", "Id -");
   for (let i = 0; i < Companies.length; i++) {
     if (Companies[i].id == selectedId) {
       return i;
     }
   }
   alert("There is no company with id " + selectedId);
   return null;
}

function DeleteCompany() {
  alert("Enter Company Id to delete: ");
  let companyId = prompt(PrintCompanies(), "cancel");
  if (companyId == null) return false;
  else {
    for (let i = 0; i < Companies.length; i++) {
      if (Companies[i].id == companyId) {
        alert(`Removed ${Companies[i].name}`);
        RemoveCompanyFromDeveloper(Companies[i]);
        Companies.splice(i, 1);
        return true;
      }
    }
    alert(`Developer with Id - ${companyId} does not exist!`);
    return null;
  }
}
function RemoveCompanyFromDeveloper(developersCompany) {
  for(let i = 0; i < Developers.length; i++) {
    if(Developers[i].company[0] != undefined) {
      if(Developers[i].company[0].id == developersCompany.id) {
        Developers[i].company = [undefined];
        console.log(Developers[i].company);
      }
    }
  }
}

function CreateNewCompany() {
  let _name = prompt("Enter new conpany's Name :", "Name -");
  if (_name == null) {
    alert("Exitting");
    return false;
  }
  Companies.push({
    id: GetCompanyId(),
    name: _name,
    developers: undefined,
  });
  SortCompanies();
  alert(`Company ${_name} saved!`);
}

function PrintCompanies() {
  SortCompanies();
  for (let company of Companies) {
    let developersList = "";
    alert(`Id - ${company.id} \n
        Name - ${company.name} \n 
        Developers : \n`);
    if (company.developers != undefined) {
      for (let developer of company.developers) {
        developersList += `\t - ${developer.name} \n
            \t - ${developer.employmentStatus} \n
            \t - ${developer.developerType} \n \n`;
      }
      alert(developersList);
    } else {
      alert("None");
    }
  }
}

function SortCompanies() {
  Companies.sort((a, b) => {
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

function GetCompanyId() {
  let maxId = 1;
  Companies.forEach((company) => {
    if (company.id > maxId) {
      maxId = company.id;
    }
  });
  return maxId + 1;
}
