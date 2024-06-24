function selectOption(value) {
    document.querySelector(`input[value="${value}"]`).checked = true;
}

function nextQuestion() {
    
    const options = document.getElementsByName('question2');
    let selectedValue;
    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    
    localStorage.setItem('question2', selectedValue);

   
    window.location.href = 'pergunta_3.html';
}
