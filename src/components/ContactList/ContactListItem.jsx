import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deletePhone } from "redux/phoneSlice";


export const ContactListItem = ({id, name, number}) => {
    const dispatch = useDispatch();
    
    return(
            <li>{name}:{number} <button type="button" value={id} onClick = {() => dispatch(deletePhone(id))}>Delete</button> </li>
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
