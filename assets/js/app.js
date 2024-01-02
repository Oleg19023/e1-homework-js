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
    } else if (/^5[1-5]/.test(cardNumber)) {
        return "MasterCard";
    } else {
        return "Другая";
    }
}
