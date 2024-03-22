
export  namespace Transport {
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
        setDocument_type(documenTransportype: Document_type): void;
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
        private _documenTransportype: Document_type;
        private _documentSeries: string;
        private _documentNumber: string;
    
        constructor (lastName: string, firstName: string, middleName: string, birthDate: Date, 
            documenTransportype: Document_type, documentSeries: string, documentNumber: string) 
        {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documenTransportype = documenTransportype;
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
        getDocument_type(): Document_type { return this._documenTransportype; }
        setDocument_type(documenTransportype: Document_type): void { this._documenTransportype = documenTransportype; }
        getDocumentSeries(): string { return this._documentSeries; }
        setDocumentSeries(documentSeries: string): void { this._documentSeries = documentSeries; }
        getDocumentNumber(): string { return this._documentNumber; }
        setDocumentNumber(documentNumber: string): void { this._documentNumber = documentNumber; }
    
        printDetails(): void {
            console.log(`Фамилия: ${this._lastName}`);
            console.log(`Имя: ${this._firstName}`);
            console.log(`Отчество: ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toISOString().split('T')[0]}`);
            console.log(`Тип документа: ${this._documenTransportype}`);
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
    
        getBodyType(): BodyType { return this._bodyType; }
        setBodyType(bodyType: BodyType): void { this._bodyType = bodyType; }
        getCarClass(): CarClass { return this._carClass; }
        setCarClass(carClass: CarClass): void { this._carClass = carClass; }
    
        printVehicleDetailsWithoutOwner(): void {
            super.printVehicleDetailsWithoutOwner();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }

        getBodyTypeAndCarClass(): string {
            const data = {
                bodyType: this._bodyType,
                carClass: this._carClass
            };
            return JSON.stringify(data);
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

        sortVehiclesByModelDescending(): void;

        getVehiclesByOwnerDocumentSeriesAndNumber(documentSeries: string, documentNumber: string): T[];
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
    
        sortVehiclesByModelDescending(): void {
            this.vehicles.sort((a, b) => {
                const modelA = a.getModel().toUpperCase();
                const modelB = b.getModel().toUpperCase();
    
                if (modelA < modelB) {
                    return 1;
                }
                if (modelA > modelB) {
                    return -1;
                }
                return 0;
            });
        }

        getVehiclesByOwnerDocumentSeriesAndNumber(documentSeries: string, documentNumber: string): T[] {
            const seriesLower = documentSeries.toLowerCase(); // Приведение серии документа к нижнему регистру
            const number = documentNumber.toLowerCase(); // Приведение номера документа к нижнему регистру
            return this.vehicles.filter(vehicle =>
                vehicle.getOwner().getDocumentSeries().toLowerCase() === seriesLower &&
                vehicle.getOwner().getDocumentNumber().toLowerCase() === number
            );
        }
    }
}






const owner1: Transport.Owner = new Transport.OwnerImpl( 'Сахарова', 'Дарья', 'Владимировна', new Date('2003-04-27'), Transport.Document_type.Passport, '1234', '567890');
const owner2: Transport.Owner = new Transport.OwnerImpl( 'С', 'Д', 'В', new Date('2003-04-27'), Transport.Document_type.Passport, '4321', '098765');
// owner.printDetails();

const carStorage: Transport.VehicleStorage<Transport.Car> = new Transport.VehicleStorageImpl<Transport.Car>();

const car1 = new Transport.CarImpl('ниссан', 'теана', 2020, '3436473647647236', '545', owner1, Transport.BodyType.Sedan, Transport.CarClass.Business);
const car2 = new Transport.CarImpl('лада', 'гранта', 2021, '576767663447', '534', owner2, Transport.BodyType.Sedan, Transport.CarClass.Economy);

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
const matchingVehicles = carStorage.getVehiclesByOwnerDocumentSeriesAndNumber('1234', '567890');
console.log('Транспортные средства с соответствующими серией и номером документа владельца:', matchingVehicles);


            // ЗАДАНИЕ 3 
// только о Типе кузова и Классе автомобиля
console.log('\n\nЗАДАНИЕ 3\n');
const bodyTypeAndCarClass = car1.getBodyTypeAndCarClass();
console.log(bodyTypeAndCarClass);