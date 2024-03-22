// 1. Реализация класса, реализация интерфейса
// перечисления для типа документа
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IDocumentType;
(function (IDocumentType) {
    IDocumentType["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    IDocumentType["SNILS"] = "\u0421\u043D\u0438\u043B\u0441";
    IDocumentType["DRIVERLICENCE"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    IDocumentType["OTHER"] = "\u0414\u0440\u0443\u0433\u043E\u0439";
})(IDocumentType || (IDocumentType = {}));
// классы, реализующие эти интерфейсы 
var OwnerImpl = /** @class */ (function () {
    function OwnerImpl(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerImpl.prototype, "surname", {
        get: function () { return this._surname; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "patronymic", {
        get: function () { return this._patronymic; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "documentType", {
        get: function () { return this._documentType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerImpl.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        enumerable: false,
        configurable: true
    });
    OwnerImpl.prototype.displayOwnerInfo = function () {
        console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._surname, "\n          \u0418\u043C\u044F: ").concat(this._name, "\n          \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this._patronymic, "\n          \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._birthDate.toISOString().slice(0, 10), "\n          \u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentType, "\n          \u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentSeries, "\n          \u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentNumber, " "));
    };
    return OwnerImpl;
}());
var VehicleImpl = /** @class */ (function () {
    function VehicleImpl(brand, model, year, vin, registrationNumber, ownerInfo) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._ownerInfo = ownerInfo;
    }
    Object.defineProperty(VehicleImpl.prototype, "brand", {
        get: function () { return this._brand; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "model", {
        get: function () { return this._model; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "year", {
        get: function () { return this._year; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "vin", {
        get: function () { return this._vin; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleImpl.prototype, "ownerInfo", {
        get: function () { return this._ownerInfo; },
        enumerable: false,
        configurable: true
    });
    VehicleImpl.prototype.displayVehicleInfoWithoutOwner = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand, "\n        \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this._model, "\n        \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this._year, "\n        VIN-\u043D\u043E\u043C\u0435\u0440: ").concat(this._vin, "\n        \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this._registrationNumber));
    };
    return VehicleImpl;
}());
// использование классов
var owner = new OwnerImpl('Иванов', 'Иван', 'Иванович', new Date('1990-01-01'), IDocumentType.PASSPORT, '1234', '567890');
var vehicle = new VehicleImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner);
owner.displayOwnerInfo();
vehicle.displayVehicleInfoWithoutOwner();
// 2. Работа с наследованием в классах и интерфейсах
// перечисления BodyType и CarClass
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
var CarImpl = /** @class */ (function (_super) {
    __extends(CarImpl, _super);
    function CarImpl(brand, model, year, vin, registrationNumber, ownerInfo, bodyType, carClass) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, ownerInfo) || this;
        _this._bodyType = bodyType;
        _this._carClass = carClass;
        return _this;
    }
    Object.defineProperty(CarImpl.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarImpl.prototype, "carClass", {
        get: function () { return this._carClass; },
        enumerable: false,
        configurable: true
    });
    CarImpl.prototype.displayVehicleInfoWithoutOwner = function () { _super.prototype.displayVehicleInfoWithoutOwner.call(this); console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType, "\n\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this._carClass)); };
    return CarImpl;
}(VehicleImpl));
// модифицирование класса VehicleImpl по созданию класса MotorbikeImpl
var MotorbikeImpl = /** @class */ (function (_super) {
    __extends(MotorbikeImpl, _super);
    function MotorbikeImpl(brand, model, year, vin, registrationNumber, ownerInfo, frameType, forSport) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, ownerInfo) || this;
        _this._frameType = frameType;
        _this._forSport = forSport;
        return _this;
    }
    Object.defineProperty(MotorbikeImpl.prototype, "frameType", {
        get: function () { return this._frameType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeImpl.prototype, "forSport", {
        get: function () { return this._forSport; },
        enumerable: false,
        configurable: true
    });
    MotorbikeImpl.prototype.displayVehicleInfoWithoutOwner = function () { _super.prototype.displayVehicleInfoWithoutOwner.call(this); console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType, "\n\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ").concat(this._forSport ? 'Да' : 'Нет')); };
    return MotorbikeImpl;
}(VehicleImpl));
// использование классов
// Создаем экземпляр автомобиля
var car = new CarImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner, BodyType.Sedan, CarClass.Standard);
// Создаем экземпляр мотоцикла
var motorbike = new MotorbikeImpl('Harley-Davidson', 'Sportster', 2021, 'XYZ789', 'X789YZ', owner, 'Cruiser', true);
console.log('\nИнформация об автомобиле:');
car.displayVehicleInfoWithoutOwner();
console.log('\nИнформация о мотоцикле:');
motorbike.displayVehicleInfoWithoutOwner();
// класс реализующий этот интерфейс
var VehicleStorageImpl = /** @class */ (function () {
    function VehicleStorageImpl(creationDate, vehicles) {
        this.creationDate = creationDate;
        this.vehicles = vehicles;
    }
    VehicleStorageImpl.prototype.getAllVehicles = function () { return this.vehicles; };
    return VehicleStorageImpl;
}());
// использование класса
// экземпляр хранилища для автомобилей
var carStorage = new VehicleStorageImpl(new Date(), [
    new CarImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner, BodyType.Sedan, CarClass.Standard),
    new CarImpl('Honda', 'Civic', 2021, 'XYZ789', 'X789YZ', owner, BodyType.Hatchback, CarClass.Economy),
]);
// экземпляр хранилища для мотоциклов
var motorbikeStorage = new VehicleStorageImpl(new Date(), [
    new MotorbikeImpl('Harley-Davidson', 'Sportster', 2021, 'DEF456', 'D456EF', owner, 'Cruiser', true),
    new MotorbikeImpl('Honda', 'CBR600RR', 2020, 'GHI789', 'G789HI', owner, 'Sport', true),
]);
// все транспортные средства из хранилищ
console.log('Автомобили в хранилище:');
carStorage.getAllVehicles().forEach(function (car) { return car.displayVehicleInfoWithoutOwner(); });
console.log('\nМотоциклы в хранилище:');
motorbikeStorage.getAllVehicles().forEach(function (motorbike) { return motorbike.displayVehicleInfoWithoutOwner(); });
