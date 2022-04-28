const app = require('../app/app')
const request = require("supertest");

describe("Unit test for Express", () => {
    test("GET /", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .expect((res) => {
            expect(res.text).toBe('Hello World')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

    test("GET /launchX", (done) => {
        request(app)
          .get("/launchX")
          .expect(200)
          .expect((res) => {
              console.log(res.text)
              expect(res.text).toBe('Bienvenidos a launchX')
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

      test("GET /exploreInNode", (done) => {
        request(app)
          .get("/exploreInNode")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.status).toBe(200)
              expect(res.body.name).toBe('Explorer')
              expect(res.body.msg).toBe('Hello')
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })
      test("GET /explorers/:explorerName", (done) => {
        request(app)
          .get("/explorers/Juan")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.status).toBe(200)
              expect(res.body.explorerName).toBe('Juan')
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })
  })