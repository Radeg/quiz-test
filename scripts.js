$(function () {
    var correct = { answers: ['a', 'b'] };
    var answers = correct.answers;
    var userAnswers = [];

    $('.question').click(function () {
        var answer = $(this).data('key');
        userAnswers.push(answer);
        $(this).parents('.pageContainer').fadeOut(500, function () {
            $(this).next().fadeIn(500).removeClass('hide');
        });
    })

    $('.results').click(function () {
        var results = checkAnswers();
        trueCount = 0;

        for (var i = 0, ii = results.length; i < ii; i++) {
            if (results[i] == true) trueCount++;
        }
        $('.resultText').html("Pocet spravnych odpovedi: " + trueCount);
    })

    function checkAnswers() {
        var resultArr = [],
            flag = false;
        for (i = 0; i < answers.length; i++) {
            if (answers[i] == userAnswers[i]) {
                flag = true;
            }
            else {
                flag = false;
            }
            resultArr.push(flag);
        }
        return resultArr;
    }
})

