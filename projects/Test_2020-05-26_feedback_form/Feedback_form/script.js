function showUsersTable(persons = []) {

    let totalRowCount = table.rows.lenth;;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Total number of records: ' + totalRowCount;
}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function(event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.email = document.querySelector('input[name=email]').value;
    person.feedback = document.querySelector('input[name=textarea]').value;
    person.Date = document.querySelector().value;

    persons.push(person);

    showUsersTable(persons);
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is #zero
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
