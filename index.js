const json2csv = require('json2csv');
const fs = require('fs');
const Utils = require('./utils.js');
let countries = [];
let positive = [];
let onePerson = [];
let oneCompany = [];
let negativeData = [];
let languageData = [];
let ladderCompanyData = [];
const personsQty = 1000;

try {
  let utils = new Utils();
  positive = utils.addNPersons(positive, personsQty);
  countries = utils.checkCountries();
  onePerson = utils.addNPersons(onePerson, 1);
  oneCompany = utils.addNCompanies(oneCompany, 1);
  negativeData = utils.negativeTesting(negativeData, 100);
  languageData = utils.addNPersons(languageData, 6);
  ladderCompanyData = utils.addNCompanies(ladderCompanyData, 29);


  let positiveJSON = json2csv({
    data: positive,
    fields: utils.fields
  });

  let countriesJSON = json2csv({
    data: countries,
    fields: utils.fields
  });

  let onePersonJSON = json2csv({
    data: onePerson,
    fields: utils.fields
  });

  let oneCompanyJSON = json2csv({
    data: oneCompany,
    fields: utils.fieldsCompany
  });

  let negativeJSON = json2csv({
    data: negativeData,
    fields: utils.fields
  });

  let languageJSON = json2csv({
    data: languageData,
    fields: utils.fields
  });

  let ladderCompanyJSON = json2csv({
    data: ladderCompanyData,
    fields: utils.fieldsCompany
  });

  // Creates dir if not exists
  let dir = './testFiles';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  // Random users positive test file write
  fs.writeFile('./testFiles/positiveTest.csv', positiveJSON, function(err) {
    if (err) throw err;
    console.log('positiveTest.csv saved');
  });

  // Countries exhaustive test file write
  fs.writeFile('./testFiles/countriesTest.csv', countriesJSON, function(err) {
    if (err) throw err;
    console.log('countriesTest.csv saved');
    console.log(`Total countries: ${countries.length}`);
  });

  // One person CSV file write
  fs.writeFile('./testFiles/onepersonTest.csv', onePersonJSON, function(err) {
    if (err) throw err;
    console.log('onepersonTest.csv saved');
  });

  // One company CSV file write
  fs.writeFile('./testFiles/onecompanyTest.csv', oneCompanyJSON, function(err) {
    if (err) throw err;
    console.log('onecompanyTest.csv saved');
  });

  // One company CSV file write
  fs.writeFile('./testFiles/negativeTest.csv', negativeJSON, function(err) {
    if (err) throw err;
    console.log('negativeTest.csv saved');
  });

  // One company CSV file write
  fs.writeFile('./testFiles/languageTest.csv', languageJSON, function(err) {
    if (err) throw err;
    console.log('languageTest.csv saved');
  });

  fs.writeFile('./testFiles/ladderCompanyTest.csv', ladderCompanyJSON, function(err) {
    if (err) throw err;
    console.log('ladderCompanyTest.csv saved');
  })

} catch(err) {
  console.log('Error!');
  console.log(err);
}
