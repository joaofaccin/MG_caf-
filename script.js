function getZodiacSign(month, day) {
    const signs = [
        { sign: 'Capricórnio', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, element: 'Terra' },
        { sign: 'Aquário', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, element: 'Ar' },
        { sign: 'Peixes', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, element: 'Água' },
        { sign: 'Áries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, element: 'Fogo' },
        { sign: 'Touro', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, element: 'Terra' },
        { sign: 'Gêmeos', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, element: 'Ar' },
        { sign: 'Câncer', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, element: 'Água' },
        { sign: 'Leão', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, element: 'Fogo' },
        { sign: 'Virgem', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, element: 'Terra' },
        { sign: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, element: 'Ar' },
        { sign: 'Escorpião', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, element: 'Água' },
        { sign: 'Sagitário', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, element: 'Fogo' }
    ];

    function isDateInRange(startMonth, startDay, endMonth, endDay, month, day) {
        if (startMonth === endMonth) {
            return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay);
        }
        if (startMonth < endMonth) {
            return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay);
        }
        return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay) || (month > startMonth && month < endMonth);
    }

    for (const signInfo of signs) {
        if (isDateInRange(signInfo.startMonth, signInfo.startDay, signInfo.endMonth, signInfo.endDay, month, day)) {
            return { sign: signInfo.sign, element: signInfo.element };
        }
    }

    return { sign: 'Data fora do intervalo', element: '' };
}

function showZodiac() {
    const month = parseInt(document.getElementById('month').value, 10);
    const day = parseInt(document.getElementById('day').value, 10);
    const resultElement = document.getElementById('result');
    const signInfoElement = document.getElementById('signInfo');
    const elementImageElement = document.getElementById('elementImage');

    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        signInfoElement.textContent = 'Por favor, insira uma data válida.';
        elementImageElement.src = '';
        return;
    }

    const { element } = getZodiacSign(month, day);
    signInfoElement.textContent = `Seu elemento é ${element}.`;

    // Atualiza a imagem com base no elemento
    const elementImages = {
        'Ar': 'images/Ar.jpg',
        'Água': 'images/Agua.jpg',
        'Fogo': 'images/Fogo.jpg',
        'Terra': 'images/Terra.jpg'
    };
    elementImageElement.src = elementImages[element] || '';
}
