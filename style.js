
//<!-- option-4 -->
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;
        function makeBlue (){
            document.body.style.backgroundColor = 'blue';

        };

const makePinkButton = document.getElementById('make-pink');
        makePinkButton.onclick = makePink;
        function makePink (){
            document.body.style.backgroundColor = 'pink';
        };

    const makeGrayButton = document.getElementById('make-gray');
        makeGrayButton.onclick = function(){
            document.body.style.backgroundColor = 'gray';
        };
