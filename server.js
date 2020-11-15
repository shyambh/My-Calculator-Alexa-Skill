let express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 4000,
    app = express();

const SKILL_NAME = "My Calculator";

//let alexaVerifier = require('alexa-verifier-middleware');
var alexaRouter = express.Router();
app.use('/', alexaRouter);

//alexaRouter.use(alexaVerifier);
alexaRouter.use(bodyParser.json());

alexaRouter.post('/', function(req, res){
    if(req.body.request.type === 'LaunchRequest')
    {
        res.json(launchSkill());
    }
});

function launchSkill(){
    let speechText = 'Welcome to My Calculator. You can say, add 2 and 5, or multiply 4 and 7';
    let repromptText = 'Sorry, I couldn\'t hear you. Could you say that again?';
    
    //welcome screen message
    let displayText = "Welcome to My Calculator";

    return buildResponseWithRepromt(speechText, false, displayText, repromptText);
}

function buildResponseWithRepromt(speechText, shouldEndSession, cardText, reprompt) {

    const speechOutput = "<speak>" + speechText + "</speak>"
    
    var jsonObj = {
       "version": "1.0",
       "response": {
        "shouldEndSession": shouldEndSession,
         "outputSpeech": {
           "type": "SSML",
           "ssml": speechOutput
         },
       "card": {
         "type": "Simple",
         "title": SKILL_NAME,
         "content": cardText,
         "text": cardText
       },
       "reprompt": {
         "outputSpeech": {
           "type": "PlainText",
           "text": reprompt,
           "ssml": reprompt
         }
       }
     }
   }
    return jsonObj;
  }

function buildResponse(speechText, shouldEndSession, cardText) {

    const speechOutput = "<speak>" + speechText + "</speak>"
    var jsonObj = {
      "version": "1.0",
      "response": {
        "shouldEndSession": shouldEndSession,
        "outputSpeech": {
          "type": "SSML",
          "ssml": speechOutput
        },
        "card": {
          "type": "Simple",
          "title": SKILL_NAME,
          "content": cardText,
          "text": cardText
        }
      }
    }
    return jsonObj
  }

function buildResponse(speechText, shouldEndSession, cardText) {

    const speechOutput = "<speak>" + speechText + "</speak>"
    var jsonObj = {
      "version": "1.0",
      "response": {
        "shouldEndSession": shouldEndSession,
        "outputSpeech": {
          "type": "SSML",
          "ssml": speechOutput
        },
        "card": {
          "type": "Simple",
          "title": SKILL_NAME,
          "content": cardText,
          "text": cardText
        }
      }
    }
    return jsonObj
  }

  app.listen(port);

  console.log('Alexa list RESTful API server started on: ' + port);

