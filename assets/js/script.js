const myForm = document.querySelector('#myForm');

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const q1 = Number(this.q1.value);
    const q2 = Number(this.q2.value);

    const answer= q1 + q2;

    this.answer.value = answer;

});