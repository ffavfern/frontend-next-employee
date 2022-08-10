import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function post() {
  const router = useRouter();
  const [Employee_id, setEmployee_id] = useState("");
  const [Employee_name, setEmployee_name] = useState("");
  const [Employee_username, setEmployee_username] = useState("");
  const [Employee_password, setEmployee_password] = useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:8080/employees", {
      Employee_id: Employee_id,
      Employee_name: Employee_name,
      Employee_username: Employee_username,
      Employee_password: Employee_password,
    })
      .then(function (response) {
        console.log(response);

        Swal.fire({
          icon: "success",
          title: "<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>",
          showConfirmButton: false,
          timer: 2000,
        }).then(function () {
          router.push("/employee");
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: "<h3>ไม่สามารถบันทึกข้อมูลได้</h3>",
          showConfirmButton: false,
          timer: 2000,
        }).then(function () {
          router.push("/employee");
        });
      });
  };

  return (
   <div>
  <input type="number" className="form-control" placeholder="ชื่อ" onchange="{(e)"  /> {'{'}
  setEmployee_id(e.target.value);
  {'}'}{'}'}
  /&gt;
  <br />
  <input type="text" className="form-control" placeholder="นามสกุล" onchange="{(e)"  /> {'{'}
  setEmployee_name(e.target.value);
  {'}'}{'}'}
  /&gt;
  <br />
  <input type="text" className="form-control" placeholder="ชื่อผู้ใช้" onchange="{(e)"  /> {'{'}
  setEmployee_username(e.target.value);
  {'}'}{'}'}
  /&gt;
  <br />
  <input type="text" className="form-control" placeholder="รหัสผ่าน" onchange="{(e)"  /> {'{'}
  setEmployee_password(e.target.value);
  {'}'}{'}'}
  /&gt;
  <br />
  <button type="button" className="btn btn-success" onclick="{addEmployee}">
    บันทึก
  </button>
</div>

  );
}
