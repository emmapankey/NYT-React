import React from "react";
import { Col, Row } from "../../components/Grid";

export const Input = props =>
    <Row>
        <Col>
            <Row>
                <div className="input-field col s12">
                    <input className="validate" {...props} />
                </div>
            </Row>
            {/* <Row>
                <div className="input-field col s12">
                    <input id="searchStartDate" type="text" className="validate" />
                        <label for="searchStartDate">Start Date</label>
                </div>
            </Row> */}
        </Col>
    </Row>
      
export default Input;