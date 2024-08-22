const quantidadeInput = document.getElementById('quantidade');
const totalElement = document.getElementById('total');
const precoPorIngresso = <%= evento.preco %>; // Preço obtido do servidor

quantidadeInput.addEventListener('input', () => {
    const quantidade = parseInt(quantidadeInput.value);
    const total = quantidade * precoPorIngresso;
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
});