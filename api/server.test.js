const recipes = require("./data/recipes.json");
const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);
describe("testing routes", () => {
  it("returns 'words'", async () => {
    const response = await request.get("/");
    expect(response.body).toEqual("words");
  });
  it("returns recipe object", async () => {
    const response = await request.get("/recipes");
    expect(response.body).toEqual(recipes);
  });
  it("returns recipe object", async () => {
    const response = await request.get("/recipes/1");
    expect(response.body.title).toEqual("pizza");
  });
});
