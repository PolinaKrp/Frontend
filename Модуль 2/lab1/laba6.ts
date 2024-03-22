
export namespace Transport {
    // Задание 1
    // интерфейс Владелец
    export enum Document_type {     // Определение типа перечисления для типа документа
        Passport = 'Паспорт',
        IDCard = 'Удостоверение личности',
        DriverLicense = 'Водительское удостоверение',
    }

    export interface Owner {
        // сеттеры и геттеры 
        getLastName(): string;
        setLastName(lastName: string): void;
        getFirstName(): string;
        setFirstName(firstName: string): void;
        getMiddleName(): string;
        setMiddleName(middleName: string): void;
        getBirthDate(): Date;
        setBirthDate(birthDate: Date): void;
        getDocument_type(): Document_type;
        setDocument_type(documentType: Document_type): void;
        getDocumentSeries(): string;
        setDocumentSeries(documentSeries: string): void;
        getDocumentNumber(): string;
        setDocumentNumber(documentNumber: string): void;
    
        printDetails(): void;
    }

    // интерфейс Транспорт
    export interface Vehicle {
        // сеттеры и геттеры
        getBrand(): string;
        setBrand(brand: string): void;
        getModel(): string;
        setModel(model: string): void;
        getYear(): number;
        setYear(year: number): void;
        getVinNumber(): string;
        setVinNumber(vinNumber: string): void;
        getRegistrationNumber(): string;
        setRegistrationNumber(registrationNumber: string): void;
        // на основе класса Владелец 
        getOwner(): Owner; 
        setOwner(owner: Owner): void;
    
        printVehicleDetailsWithoutOwner(): void;
    }

    // класс Владелец
    export class OwnerImpl implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _documentType: Document_type;
        private _documentSeries: string;
        private _documentNumber: string;
    
        constructor (lastName: string, firstName: string, middleName: string, birthDate: Date, 
            documentType: Document_type, documentSeries: string, documentNumber: string) 
        {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }

        getLastName(): string { return this._lastName; }
        setLastName(lastName: string): void { this._lastName = lastName; }
        getFirstName(): string { return this._firstName; }
        setFirstName(firstName: string): void { this._firstName = firstName; }
        getMiddleName(): string { return this._middleName; }
        setMiddleName(middleName: string): void { this._middleName = middleName; }
        getBirthDate(): Date { return this._birthDate; }
        setBirthDate(birthDate: Date): void { this._birthDate = birthDate; }
        getDocument_type(): Document_type { return this._documentType; }
        setDocument_type(documentType: Document_type): void { this._documentType = documentType; }
        getDocumentSeries(): string { return this._documentSeries; }
        setDocumentSeries(documentSeries: string): void { this._documentSeries = documentSeries; }
        getDocumentNumber(): string { return this._documentNumber; }
        setDocumentNumber(documentNumber: string): void { this._documentNumber = documentNumber; }
    
        printDetails(): void {
            console.log(`Фамилия: ${this._lastName}`);
            console.log(`Имя: ${this._firstName}`);
            console.log(`Отчество: ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toISOString().split('T')[0]}`);
            console.log(`Тип документа: ${this._documentType}`);
            console.log(`Серия документа: ${this._documentSeries}`);
            console.log(`Номер документа: ${this._documentNumber}`);
        }
    }

    // класс Транспорт
    export class VehicleImpl implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vinNumber: string;
        private _registrationNumber: string;
        private _owner: Owner;
    
        constructor(brand: string, model: string, year: number, vinNumber: string, registrationNumber: string,owner: Owner) 
        {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
    
        getBrand(): string {return this._brand;}
        setBrand(brand: string): void {this._brand = brand;}
        getModel(): string {return this._model;}
        setModel(model: string): void {this._model = model;}
        getYear(): number {return this._year;}
        setYear(year: number): void {this._year = year;}
        getVinNumber(): string {return this._vinNumber;}
        setVinNumber(vinNumber: string): void {this._vinNumber = vinNumber;}
        getRegistrationNumber(): string {return this._registrationNumber;}
        setRegistrationNumber(registrationNumber: string): void {this._registrationNumber = registrationNumber;}
        getOwner(): Owner {return this._owner;}
        setOwner(owner: Owner): void {this._owner = owner;}
    
        printVehicleDetailsWithoutOwner(): void {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vinNumber}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
        }
    }

    // Задание 2
    // интерфейс Автомобиль
    // наследует интерфейс Транспорт
    export interface Car extends Vehicle {
        getBodyType(): BodyType;
        setBodyType(bodyType: BodyType): void;
        getCarClass(): CarClass;
        setCarClass(carClass: CarClass): void;
    }
    
    //тип кузова
    export enum BodyType {
        Sedan = 'Седан',
        Coupe = 'Купе',
        SUV = 'Внедорожник',
    }
    
    //класс автомобиля
    export enum CarClass {
        Economy = 'Эконом',
        Business = 'Бизнес',
        Luxury = 'Премиум',
    }

    // класс Автомобиль
    // наследник VehicleImpl - класса транспорт
    @sealed
    export class CarImpl extends VehicleImpl implements Car {
        private _bodyType: BodyType;
        private _carClass: CarClass;
    
        constructor(brand: string, model: string, year: number, vinNumber: string, 
            registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass) 
        {
            // super - обращение к родительскому классу
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }

        @uppercaseDetails
        getBodyType(): BodyType { return this._bodyType; }
        setBodyType(bodyType: BodyType): void { this._bodyType = bodyType; }
        getCarClass(): CarClass { return this._carClass; }
        setCarClass(carClass: CarClass): void { this._carClass = carClass; }
    
        
        printVehicleDetailsWithoutOwner(): void {
            super.printVehicleDetailsWithoutOwner();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    }

    // класс Мотоцикл
    // Интерфейс Мотоцикл 
    export interface Motorbike extends Vehicle {
        getFrameType(): string;
        setFrameType(frameType: string): void;
        isForSport(): boolean;
        setForSport(forSport: boolean): void;
    }
    
    // Реализация интерфейса Мотоцикл (Motorbike)
    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private _frameType: string;
        private _forSport: boolean;
    
        constructor(brand: string, model: string, year: number, vinNumber: string, registrationNumber: string,
            owner: Owner, frameType: string, forSport: boolean) 
        {
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._frameType = frameType;
            this._forSport = forSport;
        }
    
        getFrameType(): string {return this._frameType;}
        setFrameType(frameType: string): void {this._frameType = frameType;}
        isForSport(): boolean {return this._forSport;}
        setForSport(forSport: boolean): void {this._forSport = forSport;}
    
        printVehicleDetailsWithoutOwner(): void {
            super.printVehicleDetailsWithoutOwner();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._forSport ? 'Да' : 'Нет'}`);
        }
    }

    // ЗАДАНИЕ 3
    // Хранилище
    // обобщение типа Т, ограниченное типом Транспорт
    export interface VehicleStorage <T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];      //   массив

        getAllVehicles(): T[]; 

        addVehicle(vehicle: T): void;  // добавление в массив
    }

    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicles: T[];
    
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
    
        getAllVehicles(): T[] { return this.vehicles; }

        // добавление в массив 
        addVehicle(vehicle: T): void { this.vehicles.push(vehicle); }
    }
}

// ЗАДАНИЕ 2

    //  декоратор к классу автомобиль
    // добавляется на 166 строчку
function sealed(constructor: Function) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

    // ПРОВЕРКА
    // Добавление нового свойства
// Object.defineProperty(Transport.CarImpl, 'age', { value: 17}); 
    // ВЫЗОВЕТ ОШИБКУ


// ЗАДАНИЕ 3
    // на 180 строчку добавляем
function uppercaseDetails(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
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
const owner = new Transport.OwnerImpl( 'Сахарова', 'Дарья', 'Владимировна', new Date('2003-04-27'), Transport.Document_type.Passport, '1234', '567890');

const car = new Transport.CarImpl('ниссан', 'теана', 2020, '3436473647647236', '545', owner, Transport.BodyType.Sedan, Transport.CarClass.Business);


// Вызываем метод и выводим результат
const bodyType = car.getBodyType();
console.log(bodyType);
