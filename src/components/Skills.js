import React, { useEffect, useState } from 'react'
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '4.5rem 0'
    },
    textField: {
        width: '100%',
    }
}));

const Skills = ({ countries, state, setState, handleChange }) => {
    const classes = useStyles();

    const handleDelete = (i) => {
        setState({ ...state, skills: state.skills.filter((skill, index) => index !== i) });
    };

    const handleAddition = (skill) => {
        console.log(state)
        setState({ ...state, skills: [...state.skills, skill] });
    };

    const handleDrag = (skill, currPos, newPos) => {
        const newTags = [...state.skills].slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, skill);

        setState({...state, skills: newTags });
    };

    const handleTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const onClearAll = () => {
        setState({...state, skills: [] });
    };

    const onTagUpdate = (i, newTag) => {
        const updatedTags = state.skills.slice();
        updatedTags.splice(i, 1, newTag);
        console.log(updatedTags)
        setState({...state, skills:updatedTags});
    };
    const suugestByMe = [
        { "id": "1", "text": "Html" },
        { "id": "2", "text": "Css" },
        { "id": "3", "text": "JavaScript" },
        { "id": "4", "text": "React" },
        { "id": "5", "text": "Redux" },
        { "id": "6", "text": "Leadership" },
        { "id": "7", "text": "Programming" },
        { "id": "8", "text": "Linux" },
        { "id": "9", "text": "Java" },
        { "id": "10", "text": "Django" },
    ]
    return (
        <div className="form-header">
            <form noValidate autoComplete="on">
                <h1>Skills</h1>
                <div className={classes.root}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <ReactTags
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                delimiters={delimiters}
                                handleTagClick={handleTagClick}
                                onClearAll={onClearAll}
                                onTagUpdate={onTagUpdate}
                                suggestions={suugestByMe}
                                placeholder="Enter your skills..."
                                minQueryLength={2}
                                maxLength={50}
                                autofocus={false}
                                allowDeleteFromEmptyInput={true}
                                autocomplete={true}
                                readOnly={false}
                                allowUnique={true}
                                allowDragDrop={true}
                                inline={true}
                                allowAdditionFromPaste={true}
                                editable={true}
                                clearAll={true}
                                tags={state.skills}
                            />
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default Skills
