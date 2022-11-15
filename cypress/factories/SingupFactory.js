var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()


        var data = {
            nome: `${firstName} ${lastName}`,//conctena os dois nomes
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),//cria um email com bse no primeiro nome
            whats: '4487458749',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '112',
                complento: 'apt 110',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'

        }
return data
    }
}