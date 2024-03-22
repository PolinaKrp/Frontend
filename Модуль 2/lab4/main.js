"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transport_1 = require("./transport");
var owner = new transport_1.Transport.OwnerImpl('Иванов', 'Иван', 'Иванович', new Date('1990-01-01'), transport_1.Transport.IDocumentType.Passport, '1234', '567890');
var car = new transport_1.Transport.CarImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner, transport_1.Transport.BodyType.Sedan, transport_1.Transport.CarClass.Standard);
owner.displayOwnerInfo();
car.displayVehicleInfoWithoutOwner();
