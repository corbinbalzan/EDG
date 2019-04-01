const mongoose = require('mongoose');



const personSchema = mongoose.Schema({
    name: { type: String, required: true },
    dateBirth: { type: Date, required: true },
    age: {type: Number, required: true},
    gender: {type: String, required: true },
    countryOrigin: { type: String, required: true},
    language: {type: String, required: true},
    countryResidence: {type: String, required:true},
    firstContactDate: {type: Date, require: true},
    typeDvHt: {type: Number, require: true}

},{
    timestamps: true
});

module.exports = mongoose.model('Person', personSchema);

/*
export class Person {
    name;
    dateBirth;
    age;
    gender;
    countryOrigin;
    language;
    countryResidence;
    firstContactDate;

    constructor(){
    }

    constructor(name,dateBirth,age,gender,countryOrigin,language,countryResidence,firstContactDate){
        Person.name = name;
        Person.dateBirth = dateBirth;
        Person.age = age;
        Person.gender = gender;
        Person.countryOrigin = countryOrigin;
        Person.language = language;
        Person.countryResidence = countryResidence;
        Person.firstContactDate = firstContactDate;
    }

    set name(name){
        Person.name = name;
    }

    set dateBirth(dateBirth){
        Person.dateBirth = dateBirth;
    }

    set age(age){
        Person.age = age;
    }

    set gender(gender){
        Person.gender = gender;
    }

    set countryOrigin(countryOrigin){
        Person.countryOrigin = countryOrigin;
    }

    set language(language){
        Person.language = language;
    }

    set countryResidence(countryResidence){
        Person.countryResidence = countryResidence;
    }

    set firstContactDate(firstContactDate){
        Person.firstContactDate = firstContactDate;
    }

    get name(){
        return Person.name;
    }

    get dateBirth(){
        return Person.dateBirth;
    }

    get age(){
        return Person.age;
    }

    get gender(){
        return Person.gender;
    }

    get countryOrigin(){
       return Person.countryOrigin;
    }

    get language(){
        return Person.language;
    }

    get countryResidence(){
        return Person.countryResidence;
    }

    get firstContactDate(){
        return Person.firstContactDate;
    }

}
*/

