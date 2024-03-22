"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    // Задание 1
    // интерфейс Владелец
    var Document_type;
    (function (Document_type) {
        Document_type["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        Document_type["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
        Document_type["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(Document_type = Transport.Document_type || (Transport.Document_type = {}));
    // класс Владелец
    var OwnerImpl = /** @class */ (function () {
        function OwnerImpl(lastName, firstName, middleName, birthDate, documenTransportype, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documenTransportype = documenTransportype;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        OwnerImpl.prototype.getLastName = function () { return this._lastName; };
        OwnerImpl.prototype.setLastName = function (lastName) { this._lastName = lastName; };
        OwnerImpl.prototype.getFirstName = function () { return this._firstName; };
        OwnerImpl.prototype.setFirstName = function (firstName) { this._firstName = firstName; };
        OwnerImpl.prototype.getMiddleName = function () { return this._middleName; };
        OwnerImpl.prototype.setMiddleName = function (middleName) { this._middleName = middleName; };
        OwnerImpl.prototype.getBirthDate = function () { return this._birthDate; };
        OwnerImpl.prototype.setBirthDate = function (birthDate) { this._birthDate = birthDate; };
        OwnerImpl.prototype.getDocument_type = function () { return this._documenTransportype; };
        OwnerImpl.prototype.setDocument_type = function (documenTransportype) { this._documenTransportype = documenTransportype; };
        OwnerImpl.prototype.getDocumentSeries = function () { return this._documentSeries; };
        OwnerImpl.prototype.setDocumentSeries = function (documentSeries) { this._documentSeries = documentSeries; };
        OwnerImpl.prototype.getDocumentNumber = function () { return this._documentNumber; };
        OwnerImpl.prototype.setDocumentNumber = function (documentNumber) { this._documentNumber = documentNumber; };
        OwnerImpl.prototype.printDetails = function () {
            console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._lastName));
            console.log("\u0418\u043C\u044F: ".concat(this._firstName));
            console.log("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(this._middleName));
            console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this._birthDate.toISOString().split('T')[0]));
            console.log("\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documenTransportype));
            console.log("\u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentSeries));
            console.log("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentNumber));
        };
        return OwnerImpl;
    }());
    Transport.OwnerImpl = OwnerImpl;
    // класс Транспорт
    var VehicleImpl = /** @class */ (function () {
        function VehicleImpl(brand, model, year, vinNumber, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        VehicleImpl.prototype.getBrand = function () { return this._brand; };
        VehicleImpl.prototype.setBrand = function (brand) { this._brand = brand; };
        VehicleImpl.prototype.getModel = function () { return this._model; };
        VehicleImpl.prototype.setModel = function (model) { this._model = model; };
        VehicleImpl.prototype.getYear = function () { return this._year; };
        VehicleImpl.prototype.setYear = function (year) { this._year = year; };
        VehicleImpl.prototype.getVinNumber = function () { return this._vinNumber; };
        VehicleImpl.prototype.setVinNumber = function (vinNumber) { this._vinNumber = vinNumber; };
        VehicleImpl.prototype.getRegistrationNumber = function () { return this._registrationNumber; };
        VehicleImpl.prototype.setRegistrationNumber = function (registrationNumber) { this._registrationNumber = registrationNumber; };
        VehicleImpl.prototype.getOwner = function () { return this._owner; };
        VehicleImpl.prototype.setOwner = function (owner) { this._owner = owner; };
        VehicleImpl.prototype.printVehicleDetailsWithoutOwner = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vinNumber));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        };
        return VehicleImpl;
    }());
    Transport.VehicleImpl = VehicleImpl;
    //тип кузова
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    //класс автомобиля
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Luxury"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // класс Автомобиль
    // наследник VehicleImpl - класса транспорт
    var CarImpl = /** @class */ (function (_super) {
        __extends(CarImpl, _super);
        function CarImpl(brand, model, year, vinNumber, registrationNumber, owner, bodyType, carClass) {
            // super - обращение к родительскому классу
            var _this = _super.call(this, brand, model, year, vinNumber, registrationNumber, owner) || this;
            _this._bodyType = bodyType;
            _this._carClass = carClass;
            return _this;
        }
        CarImpl.prototype.getBodyType = function () { return this._bodyType; };
        CarImpl.prototype.setBodyType = function (bodyType) { this._bodyType = bodyType; };
        CarImpl.prototype.getCarClass = function () { return this._carClass; };
        CarImpl.prototype.setCarClass = function (carClass) { this._carClass = carClass; };
        CarImpl.prototype.printVehicleDetailsWithoutOwner = function () {
            _super.prototype.printVehicleDetailsWithoutOwner.call(this);
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType));
            console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carClass));
        };
        CarImpl.prototype.getBodyTypeAndCarClass = function () {
            var data = {
                bodyType: this._bodyType,
                carClass: this._carClass
            };
            return JSON.stringify(data);
        };
        return CarImpl;
    }(VehicleImpl));
    Transport.CarImpl = CarImpl;
    // Реализация интерфейса Мотоцикл (Motorbike)
    var MotorbikeImpl = /** @class */ (function (_super) {
        __extends(MotorbikeImpl, _super);
        function MotorbikeImpl(brand, model, year, vinNumber, registrationNumber, owner, frameType, forSport) {
            var _this = _super.call(this, brand, model, year, vinNumber, registrationNumber, owner) || this;
            _this._frameType = frameType;
            _this._forSport = forSport;
            return _this;
        }
        MotorbikeImpl.prototype.getFrameType = function () { return this._frameType; };
        MotorbikeImpl.prototype.setFrameType = function (frameType) { this._frameType = frameType; };
        MotorbikeImpl.prototype.isForSport = function () { return this._forSport; };
        MotorbikeImpl.prototype.setForSport = function (forSport) { this._forSport = forSport; };
        MotorbikeImpl.prototype.printVehicleDetailsWithoutOwner = function () {
            _super.prototype.printVehicleDetailsWithoutOwner.call(this);
            console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
            console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this._forSport ? 'Да' : 'Нет'));
        };
        return MotorbikeImpl;
    }(VehicleImpl));
    Transport.MotorbikeImpl = MotorbikeImpl;
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        VehicleStorageImpl.prototype.getAllVehicles = function () { return this.vehicles; };
        // добавление в массив 
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) { this.vehicles.push(vehicle); };
        VehicleStorageImpl.prototype.sortVehiclesByModelDescending = function () {
            this.vehicles.sort(function (a, b) {
                var modelA = a.getModel().toUpperCase();
                var modelB = b.getModel().toUpperCase();
                if (modelA < modelB) {
                    return 1;
                }
                if (modelA > modelB) {
                    return -1;
                }
                return 0;
            });
        };
        VehicleStorageImpl.prototype.getVehiclesByOwnerDocumentSeriesAndNumber = function (documentSeries, documentNumber) {
            var seriesLower = documentSeries.toLowerCase(); // Приведение серии документа к нижнему регистру
            var number = documentNumber.toLowerCase(); // Приведение номера документа к нижнему регистру
            return this.vehicles.filter(function (vehicle) {
                return vehicle.getOwner().getDocumentSeries().toLowerCase() === seriesLower &&
                    vehicle.getOwner().getDocumentNumber().toLowerCase() === number;
            });
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
var owner1 = new Transport.OwnerImpl('Карпачева', 'Полина', 'Олеговна', new Date('2003-04-27'), Transport.Document_type.Passport, '1234', '567890');
var owner2 = new Transport.OwnerImpl('К', 'П', 'О', new Date('2003-01-23'), Transport.Document_type.Passport, '****', '######');
var carStorage = new Transport.VehicleStorageImpl();
var car1 = new Transport.CarImpl('ниссан', 'теана', 2020, '3436473647647236', '545', owner1, Transport.BodyType.Sedan, Transport.CarClass.Business);
var car2 = new Transport.CarImpl('лада', 'гранта', 2021, '576767663447', '534', owner2, Transport.BodyType.Sedan, Transport.CarClass.Economy);
carStorage.addVehicle(car2);
carStorage.addVehicle(car1);
console.log('Список автомобилей:');
console.log(carStorage.getAllVehicles());
// ЗАДАНИЕ 1 
// сортировка по модели от Я до А
// сначала будет - теана, потом - гранта
// Вызываем метод сортировки
carStorage.sortVehiclesByModelDescending();
console.log('\n\nЗАДАНИЕ 1\n');
console.log('Список автомобилей после сортировки:');
console.log(carStorage.getAllVehicles());
// ЗАДАНИЕ 2 
// серия и номер совпадают
// невосприимчив к регистру для серии
// должно вывести только 1 владельца
console.log('\n\nЗАДАНИЕ 2\n');
var matchingVehicles = carStorage.getVehiclesByOwnerDocumentSeriesAndNumber('****', '######');
console.log('Транспортные средства с соответствующими серией и номером документа владельца:', matchingVehicles);
// ЗАДАНИЕ 3 
// только о Типе кузова и Классе автомобиля
console.log('\n\nЗАДАНИЕ 3\n');
var bodyTypeAndCarClass = car1.getBodyTypeAndCarClass();
console.log(bodyTypeAndCarClass);
