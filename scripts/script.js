/**
 * Created by vincentdejong on 14-02-17.
 */
var surveyJSON = {
    pages: [
        {
            name: "page1",
            questions: [
                {
                    type: "text",
                    // isRequired: true,
                    name: "Where are you from?",
                    placeHolder: "Country"
                },
                {
                    type: "text",
                    // isRequired: true,
                    inputType: "date",
                    name: "What is your date of birth?"
                },
                {
                    type: "text",
                    // isRequired: true,
                    name: "At which club do you play hockey?",
                    placeHolder: "Hockeyclub"
                },
                {
                    type: "text",
                    // isRequired: true,
                    inputType: "number",
                    name: "How long have you been playing hockey, in years?"
                },
                {
                    type: "text",
                    // isRequired: true,
                    name: "What is your favourite festival, and why?",
                    placeHolder: "My favourite festival is ... , because ..."
                },
                {
                    type: "file",
                    name: "Show us your best party pic!",
                    showPreview: true
                }
            ]
        },
        {
            name: "page2",
            questions: [
                {
                    type: "dropdown",
                    // isRequired: true,
                    choices: [
                        {
                            value: "friends",
                            text: "Friends"
                        },
                        {
                            value: "socialmedia",
                            text: "Social media"
                        },
                        {
                            value: "club",
                            text: "Hockeyclub"
                        },
                        {
                            value: "other",
                            text: "Other"
                        }
                    ],
                    name: "How did you find out about HockeyLoverz?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ],
                    name: "Is this your first time going to a festival?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ],
                    name: "Is this your first time going to a festival?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ],
                    name: "Is this your first time going to a festival?"
                }
            ]
        }
    ]
};

var surveyId = '0a816cb1-8086-4ffb-8d5b-d60231a8de32';

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
    //You should get the Guid for storing survey data in dxSurvey.com
    survey.sendResult(surveyId);
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
