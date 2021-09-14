import React, { useState, useEffect } from 'react';
import { TextField, Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

const QuestionInput = ({ label, type,datas, name, options, required, value, setValue, className }) => {

    const handleChange = (e) => {
        e.preventDefault();
        if (setValue) {
            setValue(e.target.value);
        }
    }

    const handleSwitchChange = () => {
        return (setValue ? {
            value: options.find(option => option.label == value),
            onChange: (e) => { setValue(e.value); }
        } : {})
    }
    const handleColorChange = (color, e) => {
        setValue(color.hex);
    }
    switch (type) {
        case 'select':
            return (
                <FormControl className={className.textField}>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={country}
                        // onChange={handleChangeCountry}
                    >
                        {datas.map(data => (
                            <MenuItem value={data.name}>{data.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        case 'date':
            return (
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={className.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            );
        default:
            return (
                <TextField className={className.textField} label={label} />
            );
    }

}

export default QuestionInput;