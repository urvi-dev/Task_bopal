import React from "react";
import { Spinner } from "reactstrap";

const TableLoadingSpinner = () => (
  <tr className="table-spinner-row">
    <td className="spinner-cell" colSpan="3">
      <div className="spinner-wrapper">
        <Spinner />
      </div>
    </td>
  </tr>
);

export default TableLoadingSpinner;
