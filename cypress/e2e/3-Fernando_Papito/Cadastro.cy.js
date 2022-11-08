
import { SignupPage } from '../../pages/SignupPage'

describe('Cadastro', ()=> {
    it('Usuário deve se tornar um entregador', ()=> {
        
        var entregador = {//isso é um método criado para facilitar as chamadas
        nome: 'Thiago Jose',
        cpf: '00000400484',
        email: 'josthiago1@gmail.com.nr',
        whats: '4487458749',
        endereco:{//esse campo é um objeto que vai ser referenciado
            cep: '04534011',
            rua: 'Rua Joaquim Floriano',
            numero: '112',
            complento: 'apt 110',
            bairro: 'Itaim Bibi',
            cidade_uf: 'São Paulo/SP' 
        },
        metodo_entrega: 'Moto',
        cnh:'cnh-digital.jpg'
    }


    

   var signup = new SignupPage();

    signup.go()
    signup.filForms(deliver)
    signup.submit()
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'//Foi adicionado aqui para não ter que colocar o texto no código abaixo
    signup.modalContextShouldbe(expectedMessage)

})
    

it('CPF Incorreto', ()=> {
    cy.viewport(1400, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver > form > h1').should('have.text', 'Cadastre-se para  fazer entregas')

    var entregador = {//isso é um método criado para facilitar as chamadas
    nome: 'Thiago Jose',
    cpf: 'asassasa',//deixei o cpf com letras para apresentar erro
    email: 'josthiago1@gmail.com.nr',
    whats: '4487458749',
    endereco:{//esse campo é um objeto que vai ser referenciado
        cep: '04534011',
        rua: 'Rua Joaquim Floriano',
        numero: '112',
        complento: 'apt 110',
        bairro: 'Itaim Bibi',
        cidade_uf: 'São Paulo/SP' 
    },
    metodo_entrega: 'Moto',
    cnh:'cnh-digital.jpg'
}

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

cy.get('form button[type="submit"]').click()

cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')//valida a mensagem de erro ao colocar um CPF invalido

})
})