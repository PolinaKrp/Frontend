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
    var IDocumentType;
    (function (IDocumentType) {
        IDocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        IDocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        IDocumentType["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0439";
    })(IDocumentType = Transport.IDocumentType || (Transport.IDocumentType = {}));
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    var OwnerImpl = /** @class */ (function () {
        function OwnerImpl(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
            this.surname = surname;
            this.name = name;
            this.patronymic = patronymic;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        OwnerImpl.prototype.displayOwnerInfo = function () {
            console.log("\n          \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this.surname, "\n          \u0418\u043C\u044F: ").concat(this.name, "\n          \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this.patronymic, "\n          \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this.birthDate.toISOString().slice(0, 10), "\n          \u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this.documentType, "\n          \u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this.documentSeries, "\n          \u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this.documentNumber, "\n        "));
        };
        return OwnerImpl;
    }());
    Transport.OwnerImpl = OwnerImpl;
    var VehicleImpl = /** @class */ (function () {
        function VehicleImpl(brand, model, year, vin, registrationNumber, ownerInfo) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.ownerInfo = ownerInfo;
        }
        VehicleImpl.prototype.displayVehicleInfoWithoutOwner = function () {
            console.log("\n          \u041C\u0430\u0440\u043A\u0430: ".concat(this.brand, "\n          \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, "\n          \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this.year, "\n          VIN-\u043D\u043E\u043C\u0435\u0440: ").concat(this.vin, "\n          \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this.registrationNumber, "\n        "));
        };
        return VehicleImpl;
    }());
    Transport.VehicleImpl = VehicleImpl;
    var CarImpl = /** @class */ (function (_super) {
        __extends(CarImpl, _super);
        function CarImpl(brand, model, year, vin, registrationNumber, ownerInfo, bodyType, carClass) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, ownerInfo) || this;
            _this.bodyType = bodyType;
            _this.carClass = carClass;
            return _this;
        }
        CarImpl.prototype.displayVehicleInfoWithoutOwner = function () {
            _super.prototype.displayVehicleInfoWithoutOwner.call(this);
            console.log("\n          \u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.bodyType, "\n          \u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.carClass, "\n        "));
        };
        return CarImpl;
    }(VehicleImpl));
    Transport.CarImpl = CarImpl;
    var MotorbikeImpl = /** @class */ (function (_super) {
        __extends(MotorbikeImpl, _super);
        function MotorbikeImpl(brand, model, year, vin, registrationNumber, ownerInfo, frameType, forSport) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, ownerInfo) || this;
            _this.frameType = frameType;
            _this.forSport = forSport;
            return _this;
        }
        MotorbikeImpl.prototype.displayVehicleInfoWithoutOwner = function () {
            _super.prototype.displayVehicleInfoWithoutOwner.call(this);
            console.log("\n          \u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this.frameType, "\n          \u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ").concat(this.forSport ? 'Да' : 'Нет', "\n        "));
        };
        return MotorbikeImpl;
    }(VehicleImpl));
    Transport.MotorbikeImpl = MotorbikeImpl;
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl(creationDate, vehicles) {
            this.creationDate = creationDate;
            this.vehicles = vehicles;
        }
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
