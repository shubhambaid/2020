import React, { Component } from 'react';
import "../Sponsors.css";

class Sponsors extends Component {
    render() {
        return (
            <div className="top">

                <div>
                    <div className="top">Sponsors</div>
                    <div className="top1">Title</div>
                    <br></br>

                    <button id="but" className="devfolio-btn">
                        <svg
                            class="logo"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            viewBox="0 0 115.46 123.46"
                            style={{ height: "24px", width: "24px", marginRight: "20px" }}
                        >
                            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
                            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
                        </svg>
 Devfolio
      </button>
                    <div className="silver">Silver</div>
                    <br></br>
                </div>










                <div className="mid">
                    <table className="table1">
                        <tbody>
                            <tr>
                                <td className="t1">
                                    <div className="A1">

                                        <a href="https://devfolio.co/" className="Lorem1">Lorem</a>
                                    </div>


                                </td>

                                <td>
                                    <div className="A2">
                                        <a href="https://devfolio.co/" className="Lorem2">Epsom</a>

                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>





                <div className="Gold">Gold</div>


                <div className="mid-left">
                    <table className="table2">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="A3">

                                        <a href="https://devfolio.co/" className="Epsom1">Fold</a>
                                    </div>


                                </td>

                                <td>
                                    <div className="A4">
                                        <a href="https://devfolio.co/" className="Epsom2">Matic</a>

                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>





            </div>
        );
    }
}

export default Sponsors;