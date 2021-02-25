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
    if(userDecision == null)
    return false;
    DeveloperDecision(userDecision);
  }
  
  function DeveloperDecision(userDecision) {
    switch (userDecision) {
      case "0":
        ExitMessage();
        return false;
        break;
      case "1":
       // ProgrammingLanguageCreateNew();
        break;
      case "2":
        PrintDevelopers();
        break;
      case "3":
     //   DeleteProgrammingLanguage();
        break;
      case "4":
     //   UpdateProgrammingLanguage();
        break;
      case null:
        ExitMessage();
        return false;
        break;
    }
  }

  function PrintDevelopers() {
    SortDevelopers();
    let developersList = "";
    for (let developer of Developers) {
        developersList += `Id - ${developer.id} \n
      Name - ${developer.name} \n 
      Emploment Status : ${developer.employmentStatus} \n
      Company Name : ${developer.companyName} \n 
      Developer Type : ${developer.developerType} \n
      Known Languages : \n`;
      for(let language of developer.knownLanguages){
        developersList += `\t - ${language.name} \n`
      }
      developersList += `======================= \n \n`;
    }
  
    alert(developersList);
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