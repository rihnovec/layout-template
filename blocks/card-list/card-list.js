export default () => {
  const cards = document.querySelectorAll('.card-list-item')

  cards.forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('card-list-item_flip'))
  })
}