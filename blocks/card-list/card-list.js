export default() => {

    const cards = document.querySelectorAll('.card-list-item');
    cards.forEach(function(cards) {
        cards.addEventListener('click', function() {
            cards.classList.toggle('flip')
        });
    });

}