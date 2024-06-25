import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import PropTypes from 'prop-types';
const FilterCheckBox = ({tag, setChecked, addTagList,checked}) => {





    const handleChange = (event,tag) => {
        setChecked(event.target.checked);
        addTagList(tag);

    };

    return null;





}


export default FilterCheckBox;