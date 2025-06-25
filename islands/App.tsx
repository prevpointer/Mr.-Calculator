import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";
import { TextAreaInput } from "./TextAreaInput.tsx";
import { Button } from "./Button.tsx";
import {
  valueOfInput1,
  valueOfInput2,
  valueOfPrecision,
  valueOfResult,
} from "../utils/stote.ts";
import { ButtonArray } from "../utils/content.ts";
import OutPutDownloadButtton from "./DownloadBtn.tsx";

export function App() {
  return (
    <>
      <div className="blur-layer">
        <div className={"merge-header-calculator"}>
          <Header />
          {/* <img id="plus" src="/assets/plus-3d.png" alt="" /> */}
          <div id="container">
            <div class="input-section">
              <div className="fill-ip-section">
                <TextAreaInput
                  readOnly={false}
                  value={valueOfInput1.value}
                  typeOfInput="Input1"
                  placeholder="operand1"
                />
                <TextAreaInput
                  readOnly={false}
                  value={valueOfInput2.value}
                  typeOfInput="Input2"
                  placeholder="operand2"
                />
              </div>
              <div className="operation-section">
                <div>
                  <TextAreaInput
                    width="100%"
                    readOnly={false}
                    value={valueOfPrecision.value}
                    typeOfInput="precisionInput"
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
              <TextAreaInput
                width="80%"
                readOnly={true}
                value={valueOfResult.value}
                placeholder="result"
                typeOfInput=""
              />
              <div class={"output-section-btn"}>
                <Button value="clear" label="Clear" />
                {valueOfResult.value.length !== 0 ? (
                  <OutPutDownloadButtton
                    calculateOutput={valueOfResult.value}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
