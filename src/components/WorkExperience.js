import React, { useEffect, useState } from 'react'
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, Switch, FormControlLabel, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '1.5rem 0'
    },
    textField: {
        width: '100%',
    }
}));

const WorkExperience = ({ countries, state, handleChange }) => {
    const classes = useStyles();
    const [check, setCheck] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeSwitch = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
    };

    return (
        <div className="form-header">
            <form noValidate autoComplete="on">
                <h1>Work Experience</h1>
                <div className={classes.root}>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.textField}
                                label="Position"
                                name="speciality"
                                value={state.speciality}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.textField}
                                label="Company name"
                                name="company"
                                value={state.company}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.textField}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="jobCountry"
                                    value={state.jobCountry}
                                    onChange={handleChange}
                                >
                                    {countries.map(country => (
                                        <MenuItem value={country.name}>{country.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.textField}
                                label="Address"
                                name="address"
                                value={state.address}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                id="date"
                                label="Start date"
                                type="date"
                                name="workStartDate1"
                                value={state.workStartDate1}
                                onChange={handleChange}
                                defaultValue="2021-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        {!check.checkedA && <Grid item xs={5}>
                            <TextField
                                id="date"
                                label="End date"
                                type="date"
                                name="workStartDate1"
                                value={state.workStartDate1}
                                onChange={handleChange}
                                defaultValue="2021-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>}
                        <Grid item xs={2}>
                            <FormControlLabel
                                control={<Switch checked={check.checkedA} onChange={handleChangeSwitch} name="checkedA" />}
                                label="Ongoing"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                className="textAbout"
                                aria-label="minimum height"
                                minRows={6}
                                value={state.jobDescription}
                                name="jobDescription"
                                onChange={handleChange}
                                placeholder="Write information about yourself what did you do?" />
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default WorkExperience
