import { createRef, useContext } from 'react';
import Pdf from "react-to-pdf";
import { Button } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';


const Resume = ({ state }) => {
    const { activeStep, steps, handleNext } = useContext(AppContext)
    const ref = createRef();
    let refreshPage = () => {
        window.location.reload();
    };
    var fullname;
    if (state.firstName !== '' || state.lastName !== '') {
        fullname = state.firstName + ' ' + state.lastName
    }
    console.log(fullname)
    const finishHandler = () => {
        handleNext();
    }

    return (
        <div className="resume-by-me">
            <div ref={ref} className="cv">
                <div className="cv-row">
                    <div className="cv-wrap">
                        <div className="cv-name">{state.firstName} {state.lastName}</div>
                        <div className="cv-subname">Senior Frontend Developer</div>
                        <div className="cv-content">
                            <div className="head-title">Experience</div>
                            <div className="cv-content-item">
                                <div className="title">{state.speciality}</div>
                                <div className="subtitle">{state.company}</div>
                                <div className="time">{state.workStartDate1} - {state.workEndDate1 === '' ? 'Current' : state.workEndDate1}, {state.jobCountry}/{state.address}</div>
                                <div className="exprecince">{state.jobDescription} </div>
                            </div>
                            {/* <div className="cv-content-item">
                                <div className="title">Frontend Developer</div>
                                <div className="subtitle">Enterprise Name</div>
                                <div className="time">Jan 2017 - 3 year, Turkey</div>
                                <div className="exprecince">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
                            </div>
                            <div className="cv-content-item">
                                <div className="title">Frontend Developer</div>
                                <div className="subtitle">Enterprise Name</div>
                                <div className="time">Oct 2015 - 2 year, Turkey</div>
                                <div className="exprecince">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
                            </div>
                            <div className="cv-content-item">
                                <div className="title">Frontend Developer</div>
                                <div className="subtitle">Enterprise Name</div>
                                <div className="time">Nov 2018 - 1 year, USA</div>
                                <div className="exprecince">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
                            </div> */}

                        </div>
                        <div className="cv-content">
                            <div className="head-title">Education</div>
                            <div className="cv-content-item">
                                <div className="title">{state.university}
                                </div>
                                <div className="subtitle">{state.degree}</div>
                                <div className="time">{state.startDate} - {state.endDate === '' ? 'Current' : state.endDate}, {state.countryUni}</div>
                                <div className="exprecince">{state.major}</div>
                            </div>
                            {/* <div className="cv-content-item">
                                <div className="title">Front-end development courses from freeCodeCamp.org Curriculum</div>
                                <div className="subtitle">Enterprise Name</div>
                                <div className="time">Aug 2015 - 1 year, Paris</div>
                                <div className="exprecince">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante pulvinar, consectetur ante et.</div>
                            </div> */}

                        </div>
                    </div>
                    <div className="cv-wrap">
                        <div className="avatar">
                            <img src={state.photo} alt={state.firstName} />
                        </div>
                        {(state.email || state.phone) && <div className="info">
                            <div className="title">Contact</div>
                            <p><a href={`mailto:${state.email}`}>{state.email}</a></p>
                            <p><a href={`tel:${state.phone}`}>{state.phone}</a></p>
                            <p></p>
                        </div>}
                        {state.skills.length > 0 && <div className="cv-skills">
                            <div className="head-title">Primary Skills
                            </div>
                            <div className="cv-skills-item">
                                {state.skills.map(skill => (
                                    <div className="title" key={skill.id}>{skill.text}</div>
                                ))}
                            </div>
                        </div>}
                        <div className="cv-skills">
                            <div className="head-title">Secondary Skills
                            </div>
                            <div className="cv-skills-item">
                                <div className="title">jQuery</div>
                                <div className="title">AJAX</div>
                                <div className="title">Bower</div>
                                <div className="title">NPM</div>
                                <div className="title">Grunt/Gulp</div>
                                <div className="title">Git</div>
                                <div className="title">Bootstrap</div>
                                <div className="title">WordPress</div>
                                <div className="title">SharePoint</div>
                                <div className="title">PowerShell</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={refreshPage}
                >
                    Build new
                </Button>
                <Pdf targetRef={ref} filename={fullname ? fullname : 'resume.pdf'} onComplete={finishHandler} >
                    {({ toPdf }) => (
                        <Button onClick={toPdf} variant="contained" color="primary" >
                            <i class="fas fa-cloud-download-alt"></i>
                            Download Resume
                        </Button>
                    )}
                </Pdf>
            </div>
        </div>

    )
}

export default Resume;
