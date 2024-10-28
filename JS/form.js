// Fetch input fields via DOM
document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        if (input.value.trim() === '') {
            console.log(`Input field with name: ${input.name} is empty.`);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitBttn');
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const inputFields = document.querySelectorAll('input[required]');
            let emptyFields = [];
            inputFields.forEach(input => {
                if (input.value.trim() === '') {
                    emptyFields.push(input.name);
                }
            });
            if (emptyFields.length > 0) {
                alert(`Vul de volgende velden nog in: ${emptyFields.join(', ')}`);
                document.querySelector(`input[name="${emptyFields[0]}"]`).focus();
            } else {
                inputFields.forEach(input => {
                    input.addEventListener('change', () => {
                        if (input.name === 'voornaam' && !/^[a-zA-Z]+$/.test(input.value)) {
                            alert('Voornaam mag alleen letters bevatten.');
                            alert.focus();
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'tussenvoegsel' && !/^[a-zA-Z]+$/.test(input.value)) {
                            alert('Tussenvoegsel mag alleen letters bevatten.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'achternaam' && !/^[a-zA-Z]+$/.test(input.value)) {
                            alert('Achternaam mag alleen letters bevatten.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'geslacht' && !/^(man|vrouw|anders)$/.test(input.value.toLowerCase())) {
                            alert('Geslacht moet "man", "vrouw" of "anders" zijn.');
                            input.value = '';
                            input.focus();
                        }
                        // Adress
                        if (input.name === 'straatnaam' && !/^[a-zA-Z\s]+$/.test(input.value)) {
                            alert('Straatnaam mag alleen letters en spaties bevatten.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'huisnummer' && !/^[0-9]+$/.test(input.value)) {
                            alert('Huisnummer is niet geldig.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'postcode' && !/^[0-9]{4}[a-zA-Z]{2}$/.test(input.value)) {
                            alert('Postcode is niet geldig.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'woonplaats' && !/^[a-zA-Z\s]+$/.test(input.value)) {
                            alert('Woonplaats mag alleen letters en spaties bevatten.');
                            input.value = '';
                            input.focus();
                        }

                        // Contact
                        if (input.name === 'telefoonnummer' && !/^[0-9]{10}$/.test(input.value)) {
                            alert('Telefoonnummer is niet geldig.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'email' && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(input.value)) {
                            alert('Email is niet geldig. Controlleer de format.');
                            input.value = '';
                            input.focus();
                        }
                        // Benodige gegevens
                        if (input.name === 'volwassenen' && !/^[0-9]{1,2}$/.test(input.value)) {
                            alert('Aantal volwassenen is niet geldig. Voer een getal in van maximaal twee cijfers.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'kinderen' && !/^[0-9]{1,2}$/.test(input.value)) {
                            alert('Aantal kinderen is niet geldig. Voer een getal in van maximaal twee cijfers.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'huisdieren' && !/^[0-9]{1,2}$/.test(input.value)) {
                            alert('Aantal huisdieren is niet geldig. Voer een getal in van maximaal twee cijfers.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'voertuigenAantal' && !/^[0-9]{1,2}$/.test(input.value)) {
                            alert('Aantal voertuigen is niet geldig. Voer een getal in van maximaal twee cijfers.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'kentekens') {
                            const kentekens = input.value.split(',').map(kenteken => kenteken.trim());
                            const invalidKentekens = kentekens.filter(kenteken => !/^[A-Za-z0-9-]{1,6}$/.test(kenteken));
                            if (invalidKentekens.length > 0) {
                                alert(`De volgende kentekens zijn niet geldig: ${invalidKentekens.join(', ')}. Voer kentekens in van maximaal zes alfanumerieke tekens of streepjes, gescheiden door komma's.`);
                                input.value = '';
                                input.focus();
                            }
                        }
                        if (input.name === 'aankomstDatum' && !/^\d{2}-\d{2}-\d{4}$/.test(input.value)) {
                            alert('Aankomstdatum is niet geldig. Gebruik het formaat DD-MM-JJJJ.');
                            input.value = '';
                            input.focus();
                        }
                        if (input.name === 'vertrekDatum') {
                            if (!/^\d{2}-\d{2}-\d{4}$/.test(input.value)) {
                                alert('Vertrekdatum is niet geldig. Gebruik het formaat DD-MM-JJJJ.');
                                input.value = '';
                                input.focus();
                            } else {
                                const aankomstDatumInput = document.querySelector('input[name="aankomstDatum"]');
                                if (aankomstDatumInput && aankomstDatumInput.value) {
                                    const aankomstDatum = aankomstDatumInput.value.split('-').reverse().join('-');
                                    const vertrekDatum = input.value.split('-').reverse().join('-');
                                    if (new Date(vertrekDatum) <= new Date(aankomstDatum)) {
                                        alert('Vertrekdatum moet later zijn dan aankomstdatum.');
                                        input.value = '';
                                        input.focus();
                                    }
                                } else {
                                    alert('Vul eerst een geldige aankomstdatum in.');
                                    input.value = '';
                                    input.focus();
                                }
                            }
                        }

                        // Selector boxes
                        if (input.name === 'kampeerplaatsGrote' && input.value === '') {
                            alert('Selecteer een waarde voor kampeerplaatsGrote.');
                            input.focus();
                        }
                        if (input.name === 'elektriciteit' && input.value === '') {
                            alert('Selecteer een waarde voor Elektriciteitsaansluiting.');
                            input.focus();
                        }
                        if (input.name === 'stromendWater' && input.value === '') {
                            alert('Selecteer een waarde voor stromendwater.');
                            input.focus();
                        }
                    });
                });
                document.querySelector('form').submit();
            }
        });
    } else {
        console.error('Submit button with id "submitBttn" not found.');
    }
});

