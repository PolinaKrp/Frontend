"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    // Задание 1
    // интерфейс Владелец
    let Document_type;
    (function (Document_type) {
        Document_type["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        Document_type["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
        Document_type["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(Document_type = Transport.Document_type || (Transport.Document_type = {}));
    // класс Владелец
    class OwnerImpl {
        constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        getLastName() { return this._lastName; }
        setLastName(lastName) { this._lastName = lastName; }
        getFirstName() { return this._firstName; }
        setFirstName(firstName) { this._firstName = firstName; }
        getMiddleName() { return this._middleName; }
        setMiddleName(middleName) { this._middleName = middleName; }
        getBirthDate() { return this._birthDate; }
        setBirthDate(birthDate) { this._birthDate = birthDate; }
        getDocument_type() { return this._documentType; }
        setDocument_type(documentType) { this._documentType = documentType; }
        getDocumentSeries() { return this._documentSeries; }
        setDocumentSeries(documentSeries) { this._documentSeries = documentSeries; }
        getDocumentNumber() { return this._documentNumber; }
        setDocumentNumber(documentNumber) { this._documentNumber = documentNumber; }
        printDetails() {
            console.log(`Фамилия: ${this._lastName}`);
            console.log(`Имя: ${this._firstName}`);
            console.log(`Отчество: ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toISOString().split('T')[0]}`);
            console.log(`Тип документа: ${this._documentType}`);
            console.log(`Серия документа: ${this._documentSeries}`);
            console.log(`Номер документа: ${this._documentNumber}`);
        }
    }
    Transport.OwnerImpl = OwnerImpl;
    // класс Транспорт
    class VehicleImpl {
        constructor(brand, model, year, vinNumber, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        getBrand() { return this._brand; }
        setBrand(brand) { this._brand = brand; }
        getModel() { return this._model; }
        setModel(model) { this._model = model; }
        getYear() { return this._year; }
        setYear(year) { this._year = year; }
        getVinNumber() { return this._vinNumber; }
        setVinNumber(vinNumber) { this._vinNumber = vinNumber; }
        getRegistrationNumber() { return this._registrationNumber; }
        setRegistrationNumber(registrationNumber) { this._registrationNumber = registrationNumber; }
        getOwner() { return this._owner; }
        setOwner(owner) { this._owner = owner; }
        printVehicleDetailsWithoutOwner() {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vinNumber}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
        }
    }
    Transport.VehicleImpl = VehicleImpl;
    //тип кузова
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    //класс автомобиля
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Luxury"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // класс Автомобиль
    // наследник VehicleImpl - класса транспорт
    let CarImpl = class CarImpl extends VehicleImpl {
        constructor(brand, model, year, vinNumber, registrationNumber, owner, bodyType, carClass) {
            // super - обращение к родительскому классу
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        getBodyType() { return this._bodyType; }
        setBodyType(bodyType) { this._bodyType = bodyType; }
        getCarClass() { return this._carClass; }
        setCarClass(carClass) { this._carClass = carClass; }
        printVehicleDetailsWithoutOwner() {
            super.printVehicleDetailsWithoutOwner();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    };
    __decorate([
        uppercaseDetails,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], CarImpl.prototype, "getBodyType", null);
    CarImpl = __decorate([
        sealed,
        __metadata("design:paramtypes", [String, String, Number, String, String, Object, String, String])
    ], CarImpl);
    Transport.CarImpl = CarImpl;
    // Реализация интерфейса Мотоцикл (Motorbike)
    class MotorbikeImpl extends VehicleImpl {
        constructor(brand, model, year, vinNumber, registrationNumber, owner, frameType, forSport) {
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._frameType = frameType;
            this._forSport = forSport;
        }
        getFrameType() { return this._frameType; }
        setFrameType(frameType) { this._frameType = frameType; }
        isForSport() { return this._forSport; }
        setForSport(forSport) { this._forSport = forSport; }
        printVehicleDetailsWithoutOwner() {
            super.printVehicleDetailsWithoutOwner();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._forSport ? 'Да' : 'Нет'}`);
        }
    }
    Transport.MotorbikeImpl = MotorbikeImpl;
    class VehicleStorageImpl {
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        getAllVehicles() { return this.vehicles; }
        // добавление в массив 
        addVehicle(vehicle) { this.vehicles.push(vehicle); }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
// ЗАДАНИЕ 2
//  декоратор к классу автомобиль
// добавляется на 166 строчку
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// ПРОВЕРКА
// Добавление нового свойства
//Object.defineProperty(Transport.CarImpl, 'age', { value: 17}); 
// ВЫЗОВЕТ ОШИБКУ
// ЗАДАНИЕ 3
// на 180 строчку добавляем
function uppercaseDetails(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Вызываем оригинальный метод и получаем его результат
        const result = originalMethod.apply(this, args);
        // Проверяем, является ли результат строкой
        if (typeof result === 'string') {
            // Преобразуем строку к верхнему регистру
            return result.toUpperCase();
        }
        return result;
    };
}
// ПРОВЕРКА
// Создаем экземпляр класса CarImpl
const owner = new Transport.OwnerImpl('Карпачева', 'Полина', 'Олеговна', new Date('2003-01-23'), Transport.Document_type.Passport, '****', '######');
const car = new Transport.CarImpl('ниссан', 'теана', 2020, '3436473647647236', '545', owner, Transport.BodyType.Sedan, Transport.CarClass.Business);
// Вызываем метод и выводим результат
const bodyType = car.getBodyType();
console.log(bodyType);
