/**
 * Created by vincentdejong on 14-02-17.
 */

// json to create survey
var surveyJSON = {
    pages: [
        {
            name: "page1",
            title: "WHO ARE YOU...",
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
                    type: "comment",
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
            title: "YOUR JOURNEY THROUGH HOCKEYLOVERZ...",
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
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    name: "What is the first thing you do?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    name: "What is the first thing you do?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    name: "What is the first thing you do?"
                },
                {
                    type: "radiogroup",
                    // isRequired: true,
                    choices: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    name: "What is the first thing you do?"
                }
            ]
        },
        {
            name: "page3",
            title: 'ABOUT YOU RELATED TO THE NETHERLANDS',
            questions: [
                {
                    type: "text",
                    name: "Describe the Netherlands in one word."
                },
                {
                    type: "comment",
                    name: "What would you really want to do in the Netherlands?"
                },
                {
                    type: "comment",
                    name: "Do you have any connection to the Netherlands? If so, what?"
                },
                {
                    type: "text",
                    inputType: "number",
                    title: "How long is your team planning to stay in the Netherlands, in days?",
                    name: "question4"
                },
                {
                    type: "comment",
                    name: "What are you going to do in the Netherlands when you're not at HockeyLoverz?",
                    visible: false,
                    visibleIf: "{question4}>=3"
                },
                {
                    type: "comment",
                    name: "Is there anything you would like to bring to HockeyLoverz from your country. Even is this isn't possible right now?",
                    placeHolder: 'Your favourite drink, your parents or your piano'
                },
                {
                    type: "comment",
                    name: "If Dutch people would come to your country, what is something they must have done or seen?"
                }
            ]
        }
    ]
};


var surveyId = '0a816cb1-8086-4ffb-8d5b-d60231a8de32';

// function to create survey based on json
var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

// function to send data to dxsurvey.com
function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
    //You should get the Guid for storing survey data in dxSurvey.com
    survey.sendResult(surveyId);
    $('.survey-container').addClass('hidden');
    $('#welcomeMessage').addClass('hidden');
    $('#endMessage').removeClass('hidden');
}

// function to add flagstrap plugin to input element
$('#sq_100').flagStrap({
    inputName: "country",
    buttonSize: "btn-md",
    buttonType: "btn-default",
    labelMargin: "10px",
    scrollable: true,
    scrollableHeight: "250px"
});

// get and set value of selected country
$('[name="country"]').change(function () {
    var country = $(this).children(":selected").text();
    var inputElement = $("#sq_100i");
    inputElement.focus();
    inputElement.val(country);
});

$('#startSurvey').on('click', function () {
    $('.survey-container').removeClass('hidden');
    $('#welcomeMessage').addClass('hidden');
});

$(document).on('click', '.sv_nav input', function (event) {
    var page = $('#sq_page');
    var firstRow = $('.sv_row').first();

    // Add class to page
    if (firstRow.find('#sq_106').length) {
        page.addClass('timeline');
        setImagesAsRadio($('#sq_108'), 9);
        setImagesAsRadio($('#sq_109'), 10);
        setImagesAsRadio($('#sq_110'), 11);
        setImagesAsRadio($('#sq_111'), 12);
    } else {
        page.removeClass('timeline');
    }
});

function readURL(input) {
    if (input.files && input.files[0]) {

        if (!$('#blah').length) {
            var parentInput = $('#sq_105i').parent();
            parentInput.append('<img id="blah" src="#" alt="your image" width="auto" height="250px" />');
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#sq_105i").change(function(){
    readURL(this);
});

// Function to set the images as radio buttons
function setImagesAsRadio(div, question) {
    div.addClass('radio-images');
    var buttons = div.find('label');

    $.each(buttons, function (key, value) {
        $(value).find('span').css('background-image', 'url(images/question' + question + '-' + (key + 1) + '.png)');
    });
}
