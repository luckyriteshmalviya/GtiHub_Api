import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";

function EmployeeData() {
  const [employeeData, setEmployeeData] = useState([]);
  const [calculateSalary, setCalculateSalary] = useState("");
  useEffect(() => {
    fetch("http://34.198.81.140/attendance.json")
      .then((response) => response.json())
      .then((data) => setEmployeeData(data));
  }, []);

  /**
   *
   * For Supervisers
   * per hr slry = (per day slry)/8.25
   * if total hr < 8.25 = half day
   * if total hr < 3.45 = absent
   * if sunday, then (per day slry)*2 + 6 day slry
   *
   * For Female
   * if total female slry < total male slry
   * add 3.0% + total slry
   *
   * For Male
   * if total male slry < total female slry
   * add 3.0% + total slry
   */

  // function for calculating salary

  /**
   * For Workers
   * per hr slry = (per day slry)/8.25
   * if total hr < 8.25 = half day
   * if total hr > 8.25 = per hr slry*2* total extra hr
   * if total hr < 3.45 = absent
   * */

  function handleCalculateSalary() {
    employeeData.map((dat) => {
      if (dat.designation === "Worker") {
        if (dat.total_hours < 8.25 && dat.total_hours > 3.45) {
          dat.per_day_salary = dat.per_day_salary / 2;
          // console.log(dat.per_day_salary);
        } else if (dat.total_hours < 3.45) {
          return;
        } else if (dat.total_hours > 8.25) {
          let totalPerDay;
          let extraHour = dat.total_hours - 8.25;
          let perHourSalary = dat.per_day_salary / 8.25;
          totalPerDay = perHourSalary * 2 * extraHour;
          // console.log(totalPerDay);
        }
        setCalculateSalary(dat.per_day_salary + totalPerDay);
      }
      return;
    });
  }

  return (
    <>
      {employeeData.map((elem, index) => {
        /** For Employee
         * per hr slry = (per day slry)/8.25
         * if total hr < 8.25 = half day
         * if total hr < 3.45 = absent
         */

        return (
          <>
            <div key={index}>
              <Table>
                <thead>
                  <tr>
                    <th>Emp ID</th>
                    <th>Total_hours</th>
                    <th>Weekday</th>
                    <th onClick={handleCalculateSalary}>Calculate</th>
                    <th>Per_day_salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{elem.emp_id}</td>
                    <td>{elem.total_hours}</td>
                    <td>{elem.weekday}</td>
                    <td>{calculateSalary}</td>
                    <td>{elem.per_day_salary}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        );
      })}
    </>
  );
}
export default EmployeeData;
