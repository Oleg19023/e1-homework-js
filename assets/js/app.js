function checkCardNumber() {
    let cardNumber = document.getElementById('cardNumber').value;
    let result = validateCardNumber(cardNumber);
    document.getElementById('resultContainer').innerText = result;
}

function validateCardNumber(cardNumber) {
    // Игнор пробела
    cardNumber = cardNumber.replace(/\s/g, '');
    // Проверка длины
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return "Номер карты должен содержать от 13 до 19 цифр";
    }
    // Алгоритм Луна
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i]);
        if ((cardNumber.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    if (sum % 10 !== 0) {
        return "Номер карты некорректный";
    }
    // Тип платежной системы
    if (/^4/.test(cardNumber)) {
        return "Visa";
    } else if (/^5[1-5]/.test(cardNumber) || /^2[2][2-9][1-9]|^2[3-6]|^27[0-2]/.test(cardNumber)) {
        return "MasterCard";
    } else if (/^3[47]/.test(cardNumber)) {
        return "American Express (AMEX)";
    } else if (/^6(?:011|5)/.test(cardNumber)) {
        return "Discover";
    } else if (/^(?:2131|1800|35\d{3})/.test(cardNumber)) {
        return "JCB";
    } else if (/^3(?:0[0-5]|[68])/.test(cardNumber)) {
        return "Diners Club - North America";
    } else if (/^30[0-5]/.test(cardNumber)) {
        return "Diners Club - Carte Blanche";
    } else if (/^36/.test(cardNumber)) {
        return "Diners Club - International";
    } else if (/^(?:5[0678]\d\d|6304|6390|67\d\d)/.test(cardNumber)) {
        return "Maestro";
    } else if (/^(?:4026|417500|4508|4844|491(3|7))/.test(cardNumber)) {
        return "Visa Electron";
    } else if (/^63[7-9]/.test(cardNumber)) {
        return "InstaPayment";
    } else {
        return "Другая";
    }
}
