class SignupPage {//representa a página de cadastro

    go() {//isso é uma função e não precisa colocar o nome function antes. Essa função faz uma verificação inicial
        cy.viewport(1400, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver > form > h1').should('have.text', 'Cadastre-se para  fazer entregas')


    }


    fillForm(entregador) {//função que preenche o formulário

        cy.get('input[name="name"] ').type(entregador.nome)
        cy.get('input[name="cpf"] ').type(entregador.cpf)
        cy.get('input[name="email"] ').type(entregador.email)
        cy.get('input[name="whatsapp"] ').type(entregador.whats)

        cy.get('input[name="postalcode"] ').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click();

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.numero)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()//Com essa função eu não precio de xpath, já que ela vai parar até li, que vai achar três opções, mais lá em cima da minha função (metodo_entrega) eu falei que quero a moto

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)//carrega a imagem automtico


    }

    submit() {//submete o formulário
        cy.get('form button[type="submit"]').click()
    }

    modalContextShouldbe(expectedMessage) {//passa novamente a variável como função
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)// esse cy.get que tem css selector usando ponto é mais uma forma de pegar um elemento, então ao inves de fazer usando uma div, como div[class="swal2-popup swal2-modal swal2-icon-success swal2-show"], podemos usar o ponto para nagevar em cada elemento
    }
}


export default SignupPage;//estou exportando essa página