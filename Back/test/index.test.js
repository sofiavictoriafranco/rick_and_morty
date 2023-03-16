const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('test de RUTAS', () => {


    describe(`GET rickandmorty/{id}`, () => {
        it(`Responde con status: 200`, async() => {

            const response = await session(app).get('/rickandmorty/onSearch/1')
            expect(response.statusCode).toBe(200)
            

        })

        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"`, async() => {
            const response = await session(app).get('/rickandmorty/onSearch/1')
           
                expect(Object.keys(response.body)).toContain('id')
                expect(Object.keys(response.body)).toContain('name')
                expect(Object.keys(response.body)).toContain('species')
                expect(Object.keys(response.body)).toContain('gender')
                expect(Object.keys(response.body)).toContain('image')
            
            
        })

        it(`Si hay un error responde con status: 500`, async() => {
            return session(app).get('/rickandmorty/onSearch/1000000')
            .then((response) => expect(response.statusCode).toBe(500))
        })
    })




})