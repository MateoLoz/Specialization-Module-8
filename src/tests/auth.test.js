import { expect } from "chai";
import { AuthSchema } from '../schemas/auth.schema.js';
import { AuthData } from '../test-data/auth.data.js';
import { validateSchema } from '../utils/validate.js';
import { AuthService } from "../services/auth.service.js";

describe("Auth API Tests", () => {

    it("POST /auth", async () => {
        const response = await AuthService.createAuth(AuthData.username, AuthData.password);
        validateSchema(AuthSchema, response.data)
        expect(response.status).to.equal(200);
        expect(response.data.token).to.be.a("string");
    });

})