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
        break;
      case "1":
       // CreateNewDeveloper();
        break;
      case "2":
        PrintCompanies();
        break;
      case "3":
     //   DeleteDeveloper();
        break;
      case "4":
     //   UpdateDeveloper();
        break;
      case null:
        ExitMessage();
        return false;
    }
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
            developersList += 
            `\t - ${developer.name} \n
            \t - ${developer.employmentStatus} \n
            \t - ${developer.developerType} \n`;
        }
        developersList += `======================= \n \n`;
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