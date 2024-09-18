/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/
console.log("Task: G");

const CHAR = {
    NAME: "Christian,",
    EMPTY: "",
}
const DICTIONARY_ML = {
    no: {
        hello: "Hei",
        howAreYou: "hvordan går det?",
        goodQuestionsLatly: "Fått noen gode spørsmål i det siste?",
    },
    en: {
        hello: "Hi",
        howAreYou: "how are you doing?",
        goodQuestionsLatly: "Gotten any good questions lately?"
    }
};

console.log(CHAR.EMPTY);
console.log(`${DICTIONARY_ML.en.hello} ${CHAR.NAME} ${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLatly}`); //-> Gotten any good questions lately?
console.log(CHAR.EMPTY);
console.log(`${DICTIONARY_ML.no.hello} ${CHAR.NAME} ${DICTIONARY_ML.no.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.no.goodQuestionsLatly}`); //-> Gotten any good questions lately?
console.log(CHAR.EMPTY);