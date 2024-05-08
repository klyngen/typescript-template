import "./test.component";
import {assert} from "chai";
import { fixture } from "@open-wc/testing-helpers";
import { html } from "lit";
import { TestWebComponent } from "./test.component";

describe("test-test-component", () => {
  it("is registered", (done) => {
    window.customElements.whenDefined("test-component").then(() => {
      done();
    });
  });

  it("renders text", async () => {
    assert.equal(2, 2);

    const component = await fixture<TestWebComponent>(html`<test-component></test-component>`);
    assert.ok(component.shadowRoot?.querySelector("h1"));

    //expect(4).equal(3);
    //assert.exists(component.shadowRoot?.querySelector('h2'));
  });
});
