// ========== MÁSCARA TELEFONE ========== //
const form = document.querySelector('.contact__form');
const telefoneInput = document.getElementById('telefone');

// Máscara para telefone
telefoneInput.addEventListener('input', function () {
    let valor = this.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    this.value = valor;
});

// Validação personalizada
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const campos = form.querySelectorAll('input, textarea');
    const telefonePattern = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    campos.forEach((campo) => {
        const container = campo.parentElement;
        const erroEl = container.querySelector('.error-message');
        erroEl.textContent = ''; // limpa erro anterior

        campo.classList.remove('error');

        if (!campo.value.trim()) {
            erroEl.textContent = 'Este campo é obrigatório.';
            campo.classList.add('error');
            isValid = false;
        }


        if (!campo.value.trim()) {
            erroEl.textContent = 'Este campo é obrigatório.';
            isValid = false;
        } else if (campo.name === 'email' && !emailPattern.test(campo.value)) {
            erroEl.textContent = 'Insira um e-mail válido.';
            isValid = false;
        } else if (campo.name === 'telefone' && !telefonePattern.test(campo.value)) {
            erroEl.textContent = 'Formato esperado: (11) 91234-5678';
            isValid = false;
        }
    });

    if (isValid) {
        form.submit(); // Envia o formulário se tudo estiver válido
    }
});


// ScrollReveal().reveal('.hero__content', {
//     origin: 'left',       // anima da esquerda
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });

// ScrollReveal().reveal('.about__content', {
//     origin: 'left',       // anima da esquerda
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.products__title', {
//     origin: 'left',       // anima da esquerda
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.product1', {
//     origin: 'right',       // anima da direita
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.product2', {
//     origin: 'left',       // anima da esquerda
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.product3', {
//     origin: 'right',       // anima da direita
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.product4', {
//     origin: 'left',       // anima da direita
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.diferencials__title', {
//     origin: 'left',       // anima da direita
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.diferencial1', {
//     origin: 'left',       // anima da direita
//     distance: '1000px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 300,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.diferencial2', {
//     origin: 'left',       // anima da direita
//     distance: '1100px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 400,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.diferencial3', {
//     origin: 'left',       // anima da direita
//     distance: '1200px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 500,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.diferencial4', {
//     origin: 'left',       // anima da direita
//     distance: '1300px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 600,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.companies__headline', {
//     origin: 'left',       // anima da direita
//     distance: '1300px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });

// ScrollReveal().reveal('.companies__box1', {delay: 100, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box2', {delay: 200, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box3', {delay: 300, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box4', {delay: 400, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box5', {delay: 500, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box6', {delay: 600, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box7', {delay: 700, reset: false, duration: 3000});
// ScrollReveal().reveal('.companies__box8', {delay: 800, reset: false, duration: 3000});

// ScrollReveal().reveal('.contact__headline', {
//     origin: 'left',       // anima da direita
//     distance: '1300px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.contact__content', {
//     origin: 'right',       // anima da direita
//     distance: '1300px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 100,           // atraso (ms)
//     reset: false
// });
// ScrollReveal().reveal('.contact__adress', {
//      origin: 'right',       // anima da direita
//     distance: '1300px',     // distância do movimento
//     duration: 3000,       // duração da animação (ms)
//     delay: 200,           // atraso (ms)
//     reset: false
// })