"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pages = [
            { "id": 1, "title": "Home" },
            { "id": 2, "title": "About" },
            { "id": 3, "title": "Programs" },
            { "id": 4, "title": "Tours" },
            { "id": 5, "title": "Staff" },
            { "id": 6, "title": "Calendar" },
            { "id": 7, "title": "Employment" },
            { "id": 8, "title": "Donate" },
            { "id": 9, "title": "Contact" },
            { "id": 10, "title": "Events" }
        ];
        return { pages: pages };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map