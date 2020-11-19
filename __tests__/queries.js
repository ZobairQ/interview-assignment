import app from "../src/server/server.js";
import supertest from "supertest";
 
const request = supertest(app);
 
test("fetch users", async (done) => {
 
  request
    .post("/graphql")
    .send({
      query: "{ users{ id, firstName} }",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      done();
    });
});