import React from "react";
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const filter = e.target.value;
    dispatch(setStatusFilter(filter))
    };


  return(
      <div className={styles.filter}>
        <p> Find contacts by name</p>
        <input className={styles.filterInput} type="text" onChange = {onChange} />
      </div>
  )
}
