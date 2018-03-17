import {expect} from "chai";
import "mocha";
import {TemplateProject} from "../src/ts-template-project";

describe("Template Project", () => {

    it("should return its name", async () => {

        const project = new TemplateProject("a name");

        expect(project.toString()).to.eq("a name");
    });

});
