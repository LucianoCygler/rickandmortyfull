const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  afterAll(() => {
    server.close();
  });
  describe("GET rickandmorty/{id}", () => {
    it("Responde con status: 200", () => {
      agent.get("/rickandmorty/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
      return agent.get("/rickandmorty/1").then((response) => {
        const expectedProperties = ["id", "name", "species", "gender", "image"];
        expect(Object.keys(response.body)).toContain(...expectedProperties);
      });
    });
    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/IDqueNoExiste").expect(500);
    });
  });
});
