const Developers = [
  {
    id: 1,
    name: "Marko Markic",
    employmentStatus: EmploymentStatusEnum.EMPLOYED,
    companyName: "Erricsson",
    developerType: DeveloperTypesEnum.BACKEND,
    knownLanguages: [
      {
        id: 1,
        name: "C",
      },
      {
        id: 2,
        name: "C#",
      },
    ],
  },
  {
    id: 2,
    name: "Ivo Ivic",
    employmentStatus: EmploymentStatusEnum.EMPLOYED,
    companyName: "Atos",
    developerType: DeveloperTypesEnum.FULLSTACK,
    knownLanguages: [
      {
        id: 2,
        name: "C#",
      },
      {
        id: 3,
        name: "C++",
      },
      {
        id: 4,
        name: "Java",
      },
    ],
  },
  {
    id: 3,
    name: "Mislav Lesin",
    employmentStatus: EmploymentStatusEnum.EMPLOYED,
    companyName: "Profico",
    developerType: DeveloperTypesEnum.FRONTEND,
    knownLanguages: [
      {
        id: 3,
        name: "C++",
      },
      {
        id: 4,
        name: "Java",
      },
      {
        id: 5,
        name: "Python",
      },
    ],
  },
  {
    id: 4,
    name: "Mirko Mirkic",
    employmentStatus: EmploymentStatusEnum.EMPLOYED,
    companyName: "Profico",
    developerType: DeveloperTypesEnum.FULLSTACK,
    knownLanguages: [
      {
        id: 3,
        name: "C++",
      },
      {
        id: 4,
        name: "Java",
      },
      {
        id: 5,
        name: "Python",
      },
    ],
  },
  {
    id: 5,
    name: "Vinko Vukusic",
    employmentStatus: EmploymentStatusEnum.EMPLOYED,
    developerType: DeveloperTypesEnum.FULLSTACK,
    knownLanguages: [
      {
        id: 1,
        name: "C",
      },
      {
        id: 2,
        name: "C#",
      },
      {
        id: 5,
        name: "Python",
      },
    ],
  },
  {
    id: 6,
    name: "Ana Anic",
    employmentStatus: EmploymentStatusEnum.FREELANCING,
    companyName: undefined,
    developerType: DeveloperTypesEnum.BACKEND,
    knownLanguages: [
      {
        id: 1,
        name: "C",
      },
      {
        id: 2,
        name: "C++",
      },
      {
        id: 5,
        name: "Python",
      },
    ],
  },
  {
    id: 7,
    name: "Maja Majic",
    employmentStatus: EmploymentStatusEnum.UNEMPLOYED,
    companyName: undefined,
    developerType: DeveloperTypesEnum.FULLSTACK,
    knownLanguages: [
      {
        id: 1,
        name: "C",
      },
      {
        id: 2,
        name: "C++",
      },
      {
        id: 5,
        name: "Java",
      },
    ],
  },
  {
    id: 8,
    name: "Lucija Lucic",
    employmentStatus: EmploymentStatusEnum.UNEMPLOYED,
    companyName: undefined,
    developerType: DeveloperTypesEnum.BACKEND,
    knownLanguages: [
      {
        id: 5,
        name: "Python",
      },
    ],
  },
];

const Companies = [
  {
    id: 1,
    name: "Erricsson",
    developers: [
      {
        id: 1,
        name: "Marko Markic",
        employmentStatus: EmploymentStatusEnum.EMPLOYED,
        developerType: DeveloperTypesEnum.BACKEND,
        knownLanguages: [
          {
            id: 1,
            name: "C",
          },
          {
            id: 2,
            name: "C#",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Atos",
    developers: [
      {
        id: 2,
        name: "Ivo Ivic",
        employmentStatus: EmploymentStatusEnum.EMPLOYED,
        developerType: DeveloperTypesEnum.FULLSTACK,
        knownLanguages: [
          {
            id: 2,
            name: "C#",
          },
          {
            id: 3,
            name: "C++",
          },
          {
            id: 4,
            name: "Java",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Profico",
    developers: [
      {
        id: 3,
        name: "Mislav Lesin",
        employmentStatus: EmploymentStatusEnum.EMPLOYED,
        developerType: DeveloperTypesEnum.FRONTEND,
        knownLanguages: [
          {
            id: 3,
            name: "C++",
          },
          {
            id: 4,
            name: "Java",
          },
          {
            id: 5,
            name: "Python",
          },
        ],
      },
      {
        id: 4,
        name: "Mirko Mirkic",
        employmentStatus: EmploymentStatusEnum.EMPLOYED,
        developerType: DeveloperTypesEnum.FULLSTACK,
        knownLanguages: [
          {
            id: 3,
            name: "C++",
          },
          {
            id: 4,
            name: "Java",
          },
          {
            id: 5,
            name: "Python",
          },
        ],
      },
      {
        id: 5,
        name: "Vinko Vukusic",
        employmentStatus: EmploymentStatusEnum.EMPLOYED,
        developerType: DeveloperTypesEnum.FULLSTACK,
        knownLanguages: [
          {
            id: 1,
            name: "C",
          },
          {
            id: 2,
            name: "C#",
          },
          {
            id: 5,
            name: "Python",
          },
        ],
      },
    ],
  },
];

const ProgrammingLanguages = [
  {
    id: 1,
    name: "C",
  },
  {
    id: 2,
    name: "C#",
  },
  {
    id: 3,
    name: "C++",
  },
  {
    id: 4,
    name: "Java",
  },
  {
    id: 5,
    name: "Python",
  },
];

const EmploymentStatusEnum = Object.freeze({
  UNEMPLOYED: "unemplyed",
  FREELANCING: "freelancing",
  EMPLOYED: "employed",
});

const DeveloperTypesEnum = Object.freeze({
  FRONTEND: "frontend",
  BACKEND: "backend",
  FULLSTACK: "fullstack",
});