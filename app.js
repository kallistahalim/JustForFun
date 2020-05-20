var MatLibs = [
    "I have a [noun] that will [verb] if you run [adjective]",
    "It\'s [adjective] that we don't know what we've got until we [verb] it, but it's also true that we don\'t know what we\'ve been missing until [noun] arrives",
    "The average [noun] would rather have beauty than brains, because the average man can [verb] [adjective] than he can think",
    "USA Today has [verb] out with a new survey: Apparently three out of four people make up 75 percent of the [adjective] [noun]",
    "You have the right to [verb] [adjective]. Anything you say will be misquoted, then used against [noun]"
]


$("#submit").on("click", function () {

    var nounInput = $("#noun-input").val();
    var verbInput = $("#verb-input").val();
    var adjectiveInput = $("#adjective-input").val();

    var pickedStory = Math.floor(Math.random() * MatLibs.length);
    console.log(MatLibs[pickedStory]);

    MatLibs[pickedStory] = MatLibs[pickedStory].replace("[noun]", nounInput);
    MatLibs[pickedStory] = MatLibs[pickedStory].replace("[verb]", verbInput);
    MatLibs[pickedStory] = MatLibs[pickedStory].replace("[adjective]", adjectiveInput);

    $("#story-display").html(MatLibs[pickedStory]);

    return false;
});
