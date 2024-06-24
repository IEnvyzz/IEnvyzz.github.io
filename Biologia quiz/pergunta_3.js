function selectOption(value) {
    document.querySelector(`input[value="${value}"]`).checked = true;
}

function nextQuestion() {
   
    const options = document.getElementsByName('question3');
    let selectedValue;
    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

   
    localStorage.setItem('question3', selectedValue);

    
    window.location.href = 'pergunta_4.html';
}
