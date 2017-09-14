'use strict';



class Utils {

  constructor() {

    this.firstNames = require('./resources/first-names.json');
    this.lastNames = require('./resources/last-names.json');
    this.countries = require('./resources/paises.json');
    this.gender = [
      "Hombre",
      "Mujer",
      "No especificado"
    ];

    this.fields = [
      'email',
      'nombre',
      'apellido',
      'genero',
      'pais',
      'rol',
      'empresa'
    ];

    this.fieldsCompany = [
      'nombre',
      'pais',
      'cuit',
      'ciudad',
      'estado',
      'departamento',
      'direccion',
      'numero empleados',
      'email',
      'telefono',
      'website',
      '51percentwoman',
      'womandirected',
      'companysector',
      'paisesrepresentacion',
      'yearfoundation',
      'ingresosanuales',
      'clientesprinc',
      'certificaciones',
      'afiliacionorgapoyo',
      'listarorgs',
      'buscandoinvertir',
      'buscandoinversores',
      'exportas',
      'paisesalosqexporta',
      'importas',
      'paisesdelosqimportas',
      'otrospaisesqtegustaria'
    ];

    this.roles = [
      'Propietario',
      'Presidente',
      'Gerente General',
      'Gerente de Área',
      'Coordinador',
      'Asistente',
      'Otro'
    ];
  }

  splitString(string) {
    return countriesString.split(",").map((x) => {
      let result = `${x}`;
      result = result.trim();
      return result;
    });
  }

  /**
   * Decimal to binary converter
   * @param x
   * @param bitQty
   */
  decToBin(x, bitQty) {
    let elem = Number(x).toString(2);
    while (elem.length < bitQty) {
      elem = '0' + elem;
    }
  }

  /**
   * Generates an array of boolean args
   * @param array
   * @returns {*}
   */
  negativeTesting(array) {
    let n = 128;  // 2^7 (7 fields to test)
    let yShift = 1;
    for (let i = 0; i < n; i++) {
      let elem = this.decToBin(i, 7);  // i number, redix 2, bitPadding 7, (i.e '0000000')

    }

    return array;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  checkCountries() {
    let array = [];
    let n = this.countries.length;
    for (let i = 0; i < n; i++) {
      let nameSelected = this.firstNames[this.getRandomIntInclusive(0, this.firstNames.length - 1)];
      let lastNameSelected = this.lastNames[this.getRandomIntInclusive(0, this.lastNames.length - 1)];
      let genderSelected = this.gender[this.getRandomIntInclusive(0, this.gender.length - 1)];
      let paisSelected = this.countries[i];
      let roleSelected = this.roles[this.getRandomIntInclusive(0, this.roles.length - 1)];
      array.push({
        "email": `${nameSelected}${lastNameSelected}@mailinator.com`.toLowerCase(),
        "nombre": nameSelected,
        "apellido": lastNameSelected,
        "genero": genderSelected,
        "pais": paisSelected,
        "rol": roleSelected,
        "empresa": "Hanni"
      });
    }
    return array;
  }

  addNPersons(array, n) {
    for (let i = 0; i < n; i++) {
      let nameSelected = this.firstNames[this.getRandomIntInclusive(0, this.firstNames.length - 1)];
      let lastNameSelected = this.lastNames[this.getRandomIntInclusive(0, this.lastNames.length - 1)];
      let genderSelected = this.gender[this.getRandomIntInclusive(0, this.gender.length - 1)];
      let paisSelected = this.countries[this.getRandomIntInclusive(0, this.countries.length - 1)];
      let roleSelected = this.roles[this.getRandomIntInclusive(0, this.roles.length - 1)];

      array.push({
        "email": `${nameSelected}${lastNameSelected}@mailinator.com`.toLowerCase().replace(' ', ''),
        "nombre": nameSelected,
        "apellido": lastNameSelected,
        "genero": genderSelected,
        "pais": paisSelected,
        "rol": roleSelected,
        "empresa": ""
      });
    }
    return array;
  }

  addNCompanies(array, n) {
    for (let i = 0; i < n; i++) {
      let nameSelected = this.firstNames[this.getRandomIntInclusive(0, this.firstNames.length - 1)];
      let paisSelected = this.countries[this.getRandomIntInclusive(0, this.countries.length - 1)];

      array.push({
        "nombre": nameSelected,
        "pais": paisSelected,
        "cuit": this.cuitGenerator(),
        "ciudad": "General Roca",
        "estado": "Rio Negro",
        "departamento": "4A",
        "direccion": "Rodhe 717",
        "numero empleados": "10",
        "email": `${nameSelected}@mailinator.com`.toLowerCase(),
        "telefono": "298443578",
        "website": "http://www.prueba.com",
        "51percentwoman": "Si",
        "womandirected": "Si",
        "companysector": "Electronicos",
        "paisesrepresentacion": "Brasil",
        "yearfoundation": "1994",
        "ingresosanuales": "901200",
        "clientesprinc": "Alfa, beta",
        "certificaciones": "ISO 9001",
        "afiliacionorgapoyo": "Si",
        "listarorgs": "Unicef",
        "buscandoinvertir": "Si",
        "buscandoinversores": "Si",
        "exportas": "Si",
        "paisesalosqexporta": "Chile",
        "importas": "Si",
        "paisesdelosqimportas": "Dinamarca",
        "otrospaisesqtegustaria": "Estados Unidos"
      });
    }
    return array;
  }

  cuitGenerator() {
    let fstPart = this.getRandomIntInclusive(10, 30);
    let sndPart = this.getRandomIntInclusive(1000000, 4000000);
    let trdPart = this.getRandomIntInclusive(1, 9);

    return `${fstPart}-${sndPart}-${trdPart}`;
  }

  negativeTesting(array, n) {
    for (let i = 0; i < n; i++) {
      let nameSelected = this.firstNames[this.getRandomIntInclusive(0, this.firstNames.length - 1)] + this.getRandomIntInclusive(0, 10);
      let lastNameSelected = this.lastNames[this.getRandomIntInclusive(0, this.lastNames.length - 1)]+ this.getRandomIntInclusive(0, 10);
      let genderSelected = this.gender[this.getRandomIntInclusive(0, this.gender.length - 1)]+ this.getRandomIntInclusive(0, 10);
      let paisSelected = this.countries[this.getRandomIntInclusive(0, this.countries.length - 1)];
      let roleSelected = this.roles[this.getRandomIntInclusive(0, this.roles.length - 1)] + this.getRandomIntInclusive(0, 10);

      array.push({
        "email": `${nameSelected}${lastNameSelected}@mailinator.com`.toLowerCase(),
        "nombre": nameSelected,
        "apellido": lastNameSelected,
        "genero": genderSelected,
        "pais": paisSelected,
        "rol": roleSelected,
        "empresa": ""
      });
    }
    return array;
  }
}

module.exports = Utils;