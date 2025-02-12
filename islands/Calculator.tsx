import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";
import { Form } from "../islands/Forms.tsx";
import { Button } from "../islands/Button.tsx";
import { resultArea, textArea1, textArea2, precision } from "./AllMethods.ts";

const ButtonArray = [
  {
    opType: "+",
    oplevel: "x+y",
  },
  {
    opType: "-",
    oplevel: "x-y",
  },
  {
    opType: "*",
    oplevel: "x*y",
  },
  {
    opType: "/",
    oplevel: "x/y",
  },
  {
    opType: "%",
    oplevel: "x%y",
  },
  {
    opType: "^",
    oplevel: "x^y",
  },
];

export function Calculator() {
  return (
    <>
      <div className="blur-layer">
        <div className={"merge-header-calculator"}>
          <Header />
          {/* <img id="plus" src="/assets/plus-3d.png" alt="" /> */}
          <div id="container">
            <div class="input-section">
              <div className="fill-ip-section">
                <Form
                  readOnly={false}
                  value={textArea1.value}
                  type="t1"
                  placeholder="operand1"
                />
                <Form
                  readOnly={false}
                  value={textArea2.value}
                  type="t2"
                  placeholder="operand2"
                />
              </div>
              <div className="operation-section">
                <div>
                  <Form
                    width="100%"
                    readOnly={false}
                    value={precision.value}
                    type="t3"
                    placeholder="precision"
                  />
                </div>
                <div className="ops">
                  {ButtonArray.map((value, index) => (
                    <Button
                      key={index}
                      value={value.opType}
                      label={value.oplevel}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="output-section">
              <Form
                width="80%"
                readOnly={true}
                value={resultArea.value}
                type=""
                placeholder="result"
              />
              <Button value="clear" label="Clear" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
