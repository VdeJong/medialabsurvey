// json to create survey

var isChrome = !!window.chrome && !!window.chrome.webstore;

if (isChrome == true) {

    var surveyJSON = {
        showQuestionNumbers: "off",
        showProgressBar: "top",
        pages: [
            {
                name: "page1",
                title: "WHO ARE YOU...",
                questions: [
                    {
                        type: "text",
                        isRequired: true,
                        name: "Where are you from?",
                        placeHolder: "Country"
                    },
                    {
                        type: "text",
                        isRequired: true,
                        inputType: "date",
                        name: "What is your date of birth?"
                    },
                    {
                        type: "text",
                        isRequired: true,
                        name: "At which club do you play hockey?",
                        placeHolder: "Hockeyclub"
                    },
                    {
                        type: "text",
                        isRequired: true,
                        inputType: "number",
                        placeHolder: "0",
                        size: "4",
                        name: "How long have you been playing hockey, in years?"
                    },
                    {
                        type: "comment",
                        cols: "40",
                        rows: "3",
                        isRequired: true,
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
                        isRequired: true,
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
                        isRequired: true,
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
                        name: "You and your team are travelling to HockeyLoverz. Is this your first time going to HockeyLoverz"
                    },
                    {
                        type: "radiogroup",
                        isRequired: true,
                        choices: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6"
                        ],
                        name: "It’s the second day of HockeyLoverz, you’re waking up and the sun is shining. Breakfast is already in your tummy.What is the first thing you do?"
                    },
                    {
                        type: "radiogroup",
                        isRequired: true,
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
                        name: "You analyse the program of the day. What are you most excited about?"
                    },
                    {
                        type: "radiogroup",
                        isRequired: true,
                        choices: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6"
                        ],
                        name: "You're heading to the bar, what do you order?"
                    },
                    {
                        type: "radiogroup",
                        isRequired: true,
                        choices: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                        ],
                        name: "The party is going, the DJ is on stage, where can we find you?"
                    }
                ]
            },
            {
                name: "page3",
                title: 'ABOUT YOU RELATED TO THE NETHERLANDS',
                questions: [
                    {
                        type: "text",
                        name: "Describe the Netherlands in one word.",
                        isRequired: true
                    },
                    {
                        type: "comment",
                        cols: "40",
                        rows: "3",
                        isRequired: true,
                        name: "What would you really want to do in the Netherlands?"
                    },
                    {
                        type: "comment",
                        cols: "40",
                        rows: "3",
                        isRequired: true,
                        name: "Do you have any connection to the Netherlands? If so, what?"
                    },
                    {
                        type: "text",
                        inputType: "number",
                        placeHolder: "0",
                        isRequired: true,
                        title: "How long is your team planning to stay in the Netherlands, in days?",
                        name: "question4"
                    },
                    {
                        type: "comment",
                        name: "What are you going to do in the Netherlands when you're not at HockeyLoverz?",
                        visible: false,
                        cols: "40",
                        rows: "3",
                        visibleIf: "{question4}>=3"
                    },
                    {
                        type: "comment",
                        cols: "40",
                        isRequired: true,
                        rows: "3",
                        name: "Is there anything you would like to bring to HockeyLoverz from your country. Even is this isn't possible right now?",
                        placeHolder: 'Your favourite drink, your parents or your piano'
                    },
                    {
                        type: "comment",
                        cols: "40",
                        isRequired: true,
                        rows: "3",
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

        // Hide previous button
        $('.sv_nav input[type="button"][value="Previous"]').hide();

        // Add class to page
        if (firstRow.find('#sq_106').length) {
            page.addClass('timeline');
            setImagesAsRadio($('#sq_108'), 9);
            setImagesAsRadio($('#sq_109'), 10);
            setImagesAsRadio($('#sq_110'), 11);
            setImagesAsRadio($('#sq_111'), 12);
            addElementsToTimeline();
        } else {
            page.removeClass('timeline');
            $('.timelineTitle').remove();
            $('.journeyIntroText').remove();
        }

        if (firstRow.find('#sq_112').length) {
            $('#sq_117').parent().prepend('<p class="subTitle">ENOUGH ABOUT THE NETHERLANDS, WE ARE ALSO CURIOUS ABOUT YOUR COUNTRY..</p>')
        }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            if (!$('#preview').length) {
                var parentInput = $('#sq_105i').parent();
                parentInput.append('<img id="preview" src="#" alt="your image" width="auto" height="250px" />');
            }

            var reader = new FileReader();
            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#sq_105i").change(function () {
        readURL(this);
    });

// $('#sq_105i').parent().append('<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload </label>');

// Function to set the images as radio buttons
    function setImagesAsRadio(div, question) {
        div.addClass('radio-images');
        var buttons = div.find('label');

        $.each(buttons, function (key, value) {
            $(value).find('span').css('background-image', 'url(images/question' + question + '-' + (key + 1) + '.png)');
        });
    }

    function addElementsToTimeline() {
        var timeline = $('.timeline');
        timeline.find('.sv_p_title').append('<p class="journeyIntroText">We would like to know what your ideal HockeyLoverz festivalday looks like..<br/>you’re free to choose whatever you like. If the favourite option isn’t available, fill in the other option.</p>');
        timeline.find('#sq_106').parent().prepend('<p class="timelineTitle">Planning</p>');
        timeline.find('#sq_107').parent().prepend('<p class="timelineTitle">On your way</p>');

        timeline.find('#sq_108').parent().prepend('<p class="timelineTitle">Welcome to the festival!</p>');

        timeline.find('#sq_109').parent().prepend('<p class="timelineTitle">During the day</p>');

        timeline.find('#sq_110').parent().prepend('<p class="timelineTitle">The evening falls..</p>');

        timeline.find('#sq_111').parent().prepend('<p class="timelineTitle">Partytime</p>');
    }

}

else {
    $('.no-chrome').removeClass('hidden');
    $('.col-sm-8').addClass('hidden');
    alert('To complete this survey, please use a Google Chrome Browser.')
}