var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function(req,res){
  let body = req.body;
  let newStory =  getStory(body);
  res.render('story',{
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `There was once a ${formData.adjective1} ${formData.noun1} who was friends with a ${formData.noun2}.
   One day, he challenged the ${formData.noun2} to a race. Seeing how slow the ${formData.noun2} was ${formData.verb1},
    the ${formData.noun1} thought he’ll win this easily. So he took a ${formData.verb2} while the ${formData.noun2} kept on ${formData.verb1}.
     When the ${formData.noun1} woke up, he saw that the ${formData.noun2} was already at the finish line. Much to his chagrin,
      the ${formData.noun2} won the race while he was busy ${formData.verb2}.`
  // The Hare and the Tortoise
}

function generateStory2(formData){
  return `Once there was a hungry ${formData.noun1} who stumbled upon a vineyard. After seeing the ${formData.adjective1}, ${formData.adjective2} ${formData.noun2} hanging in a bunch,
   the ${formData.noun1} drooled. But no matter how high he ${formData.verb1}, he couldn’t reach for it. So he told himself that it was probably ${formData.adjective3}
    and left. That night, he had to sleep on an empty stomach.`
  // The Fox and the Grapes
}

function generateStory3(formData){
  return `Most of us have probably heard of this story as this is one of the most popular fairy tales in the world. The story revolves around
   a ${formData.noun1} who from the moment of his birth has always felt different from his siblings. He was always picked on because he didn’t look like
    the rest of them. One day, he had enough and ${formData.verb1} away from the ${formData.noun2} he grew up in. He wandered near and far looking for a family who would
     accept him. Months passed and seasons changed but everywhere he went, nobody wanted him because he was such an ${formData.adjective1} ${formData.noun1}. Then one day,
      he came upon a family of ${formData.noun2}. Upon looking at them, he realized that during the months he spent looking for a family to call his own,
       he had grown into a ${formData.adjective2} ${formData.noun2}. Now he finally understood why he never looked like the rest of his siblings because he isn’t a ${formData.noun1} but a ${formData.noun2}.`
  // The Ugly Duckling

}

