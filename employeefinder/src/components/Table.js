import React from "react";
import TableBody from "../components/TableBody";
import "../index.css";

function Table({ }) {
    return (
        <div className="datatable mt-5">
            <table className="table table-striped table-hover table-condensed" id="table">
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                < TableBody/>
            </table>
        </div>
    )
}
export default Table;