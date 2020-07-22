import React, { Component } from "react";
import "../css/Prizes.css";


class Prizes extends Component {
  render() {
    return (
      <div className="top-top">
        <div className="top">
          <div className="titles">
            <p id="pp"><h1>Prizes &</h1></p>
            <p><h1> Incentives</h1></p>
          </div>
          <br />
          <br />
          <br />
          <div className="mid">
            <h6>1 ST PLACE</h6>
            <div className="mo">
              <h1>₹ 25,000</h1>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="bot">
            <table>
              <tr>
                <td><div className="bot-left">
                  <h6>2 ND PLACE</h6>
                  <div className="">
                    <h1>₹ 15,000</h1>
                  </div>
                </div>
                </td>
                <td><hr className="hrvv" />
                </td>
                <td><div className="bot-right">
                  <h6>3 RD PLACE</h6>
                  <div className="">
                    <h1>₹ 10,000</h1>
                  </div>
                </div></td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <a href="#" className="but">CHECK OUR GIUDELINES</a>
        </div>
      </div>
    );
  }
}

export default Prizes;