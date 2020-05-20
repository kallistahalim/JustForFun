var inquirer= require("inquirer");

function MatLibs(noun, verb, adjective) {
        this.noun = noun,
        this.verb = verb,
        this.adjective = adjective,
        this.story = [
                "I have a [noun] that will [verb] if you run [adjective]",
                "It\'s [adjective] that we don't know what we've got until we [verb] it, but it's also true that we don\'t know what we\'ve been missing until [noun] arrives",
                "The average [noun] would rather have beauty than brains, because the average man can[verb][adjective] than he can think",
                "USA Today has [verb] out with a new survey: Apparently three out of four people make up 75 percent of the [adjective] [noun]",
                "You have the right to [verb] [adjective]. Anything you say will be misquoted, then used against[noun]"
        ]
        
}

var newInput = new MatLibs("coco","eat", "roughly");

console.log(newInput);