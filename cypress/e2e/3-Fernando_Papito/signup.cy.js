/// <reference types="cypress" />
import signup from '../../pages/SignupPage'
import signupFactory from '../../factories/SingupFactory'
import SignupPage from '../../pages/SignupPage'


describe('Signup', () => {

    // beforeEach(function()  {//mas para esse caso de fixture tem que usar o function, que é nativo do javascript
    //     cy.fixture('deliver').then((d) => {//"d" é apenas uma abrevição de deliver
    //         this.deliver = d
    //     })
    // })

    it('Uer should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'//Foi adicionado aqui para não ter que colocar o texto no código abaixo
        signup.modalContextShouldbe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'//para não ter que copiar novamente a incorreta eu só chamo ele no código, o que eu quero alterar

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {


        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })


    context('Required fields', function () {//Forma de programação para não criar sete alert, igual o it comentado

        const messages = [
            { fied: 'name', output: 'É necessário informar o nome' },
            { fied: 'cpf', output: 'É necessário informar o CPF' },
            { fied: 'email', output: 'É necessário informar o email' },
            { fied: 'cep', output: 'É necessário informar o CEP' },
            { fied: 'numero', output: 'É necessário informar o número do endereço' },
            { fied: 'metodo_entrega', output: 'Selecione o método de entrega' },
            { fied: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]
        before(function(){
        SignupPage.go()
        SignupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.fied} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Required fields', function () {

    //     SignupPage.go()
    //     SignupPage.submit()

    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o e-mail')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    })
  