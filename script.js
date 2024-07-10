document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    // Aqui você pode adicionar o código para enviar o formulário via AJAX, por exemplo.

    document.getElementById('contactForm').reset();
});
