import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

    let navigate = useNavigate();

    const initialValues = {
        name: "",
        address: "",
        phone: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(25).required("Name is a required field"),
        address: Yup.string().min(3).max(50).required("Address is a required field"),
        phone: Yup.string().min(14).max(14).required("Phone is a required field"),
    })

    

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/Employee", data).then((response) => {
            navigate("/");
        });
    };

    

  return (
    <div className = "AddEmployeePage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>   
            <Form className="formContainer">
                <label>Employee Name:  </label>
                <ErrorMessage name="name" component="span"/>
                <Field 
                    autocomplete="off"
                    id="inputAddEmployee" 
                    name="name" 
                    placeholder="Name"
                />
                <label>Employee Address:  </label>
                <ErrorMessage name="address" component="span"/>
                <Field 
                    autocomplete="off"
                    id="inputAddEmployee" 
                    name="address" 
                    placeholder="Address"
                />
                <label>Employee Phone Number:  </label>
                <ErrorMessage name="phone" component="span"/>
                <Field
                    autocomplete="off" 
                    id="inputAddEmployee" 
                    name="phone" 
                    placeholder="Phone: +XX-3XXXXXXXXX"
                />
                <button type="submit"> Add Employee</button>
            </Form>
        </Formik>
    </div>
  );
}

export default AddEmployee
