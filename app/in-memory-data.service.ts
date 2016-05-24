export class InMemoryDataService {
  createDb() {
    let pages = [
     { "id": 1,  "title": "Home"       },
     { "id": 2,  "title": "About"      },
     { "id": 3,  "title": "Programs"   },
     { "id": 4,  "title": "Tours"      },
     { "id": 5,  "title": "Staff"      },
     { "id": 6,  "title": "Calendar"   },
     { "id": 7,  "title": "Employment" },
     { "id": 8,  "title": "Donate"     },
     { "id": 9,  "title": "Contact"    },
     { "id": 10, "title": "Events"     }
    ];
    return {pages};
  }
}
