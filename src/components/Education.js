import React, { useEffect, useState } from 'react'
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
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

const Education = ({ countries, state, handleChange }) => {
    const [universties, setUniversties] = useState([])
    const classes = useStyles();



    // console.log("country by edu ", countries.map(data => data.name))
    useEffect(() => {
        getUniversties()
    }, [])

    const getUniversties = async () => {
        try {
            const data = await fetch(`http://universities.hipolabs.com/search?name=${state.university}&country=Azerbaijan`)
            const response = await data.json()
            console.log(response)
            setUniversties(response)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(universties)

    const defaultProps = {
        options: universties,
        getOptionLabel: (option) => option.name || ''
    };

    return (
        <div className="form-header">
            <form noValidate autoComplete="on">
                <h1>Education</h1>
                <div className={classes.root}>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <Autocomplete
                                {...defaultProps}
                                onChange={handleChange}
                                name="university"
                                value={state.university}
                                id="debug"
                                debug
                                renderInput={(params) => <TextField {...params} label="Universty" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.textField}>
                                <InputLabel id="demo-simple-select-label">Degree</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="degree"
                                    value={state.degree}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="primary">Primary School</MenuItem>
                                    <MenuItem value="secondary">Secondary School</MenuItem>
                                    <MenuItem value="high">High School</MenuItem>
                                    <MenuItem value="bachelor">Bachelor degree</MenuItem>
                                    <MenuItem value="master">Master degree</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.textField}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="countryUni"
                                    value={state.countryUni}
                                    onChange={handleChange}
                                >
                                    {countries.map(country => (
                                        <MenuItem value={country.name}>{country.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                type="text"
                                label="Major"
                                name="major"
                                value={state.major}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="Start date"
                                type="date"
                                name="startDate"
                                value={state.startDate}
                                onChange={handleChange}
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="End date"
                                type="date"
                                name="endDate"
                                value={state.endDate}
                                onChange={handleChange}
                                defaultValue="2021-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default Education
