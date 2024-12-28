import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "./Customers.module.css"; 
import { useSelector, useDispatch } from "react-redux";
import { customersActions } from "../../../store/Admin/customersSlice";

function Customers() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleDeleteCustomer = (id) => { 
    dispatch(customersActions.removeCustomer(id));
  }

  return (
    <div className={styles.customersContainer}>
      <h2>Customers</h2>
      <div className={styles.customersTableContainer}>
        <table className={styles.customersTable}>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              {/* <th>Role</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <div className={styles.customerImgContainer}>
                    <img
                      className={styles.customerImg}
                      src={customer.profile}
                      alt="customer profile"
                    />
                  </div>
                </td>
                <td>{customer.name}</td>
                <td>{customer.gender}</td>
                <td>{customer.email}</td>
                {/* <td>{customer.role}</td> */}
                <td onClick={() => handleDeleteCustomer(customer.id)} >
                  <MdDelete  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
