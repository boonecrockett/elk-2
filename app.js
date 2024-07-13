const { useState } = React;

const Alert = ({ children, className }) => (
    <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 ${className}`} role="alert">
        {children}
    </div>
);

const AlertTitle = ({ children }) => (
    <h3 className="font-bold">{children}</h3>
);

const AlertDescription = ({ children }) => (
    <p>{children}</p>
);

const questions = [
    {
        question: "When measuring the main beam length on American elk, where does the measurement start?",
        choices: [
            "At the burr",
            "At the center line of the antler along the outer side where it intersects the burr",
            "At the first tine",
            "At the eye socket"
        ],
        correctAnswer: 1,
        explanation: "The main beam length measurement starts at the point where the center line of the antler along the outer side intersects the burr. (How to Score North American Big Game, p. 72-73)"
        buyUrl: "https://www.boone-crockett.org/how-score-north-american-big-game-5th-edition?ref=quiz"
    },
    {
        question: "What is done if an abnormal point arises between normal points when taking circumference measurements?",
        choices: [
            "The measurement is taken at the abnormal point",
            "The measurement is skipped",
            "The measurement is taken at the narrowest location on either side of the abnormal point",
            "The abnormal point is included in the circumference measurement"
        ],
        correctAnswer: 2,
        explanation: "When an abnormal point arises between normal points, the circumference measurements are taken at the narrowest location on either side of the abnormal point. (How to Score North American Big Game, p. 76)"
    },
    {
        question: "How is the greatest spread measurement best taken for American elk?",
        choices: [
            "With a flexible tape measure around the outside of the antlers",
            "By eye estimation",
            "Using a wall, carpenter's level, and ruler",
            "As a straight line measurement between the widest points"
        ],
        correctAnswer: 2,
        explanation: "The greatest-spread measurement is best taken by laying the rack on the floor against a vertical wall, using a carpenter's level, and measuring with a folding carpenter's ruler or quarter-inch steel tape. (How to Score North American Big Game, p. 69-70)"
    },
    {
        question: "What is the minimum length for a point to be counted on an American elk antler?",
        choices: [
            "1/2 inch",
            "1 inch",
            "2 inches",
            "3 inches"
        ],
        correctAnswer: 1,
        explanation: "A point is any projection at least one inch long and longer than wide at some location at least one inch from the tip of the projection. (How to Score North American Big Game, p. 67)"
    },
    {
        question: "How are G-1 points (brow tines) measured on American elk?",
        choices: [
            "From the top of the beam",
            "From the bottom of the beam",
            "From the center of the base line on the outside edge",
            "As a straight line from base to tip"
        ],
        correctAnswer: 2,
        explanation: "The length of G-1 is measured from the center of the base line on the outside edge of the tine straight out until it naturally transitions to the bottom edge of the tine, then continues over the curve to the tip. (How to Score North American Big Game, p. 75-76)"
    },
    {
        question: "What is done if a G-2 point is completely missing on an American elk antler?",
        choices: [
            "The rack is disqualified",
            "The H-1 and H-2 circumferences are taken at the same location",
            "An estimated measurement is used",
            "The G-2 on the opposite antler is treated as an abnormal point"
        ],
        correctAnswer: 1,
        explanation: "If a G-2 point is completely missing (didn't grow) on either or both antlers, then the H-1 and H-2 circumferences are taken at the same location, the narrowest place between the G-1 and G-3 points. (How to Score North American Big Game, p. 76)"
    },
    {
        question: "How are unmatched points at the end of the main beam treated on American elk?",
        choices: [
            "Always as abnormal points",
            "Always as normal points",
            "As normal points only if they are the longest point",
            "They are not counted at all"
        ],
        correctAnswer: 1,
        explanation: "Numerous unmatched normal points can occur at the end of a beam on American elk and are treated as normal points. (How to Score North American Big Game, p. 74-75)"
    },
    {
        question: "What is the correct way to measure a curved antler point on an American elk?",
        choices: [
            "Along the inside curve",
            "Along the outside curve",
            "As a straight line from base to tip",
            "By averaging the inside and outside measurements"
        ],
        correctAnswer: 1,
        explanation: "Antler points are measured along the outer side of their curve. In most cases, the normal points curve inward and are simply measured on the outside of the rack. (How to Score North American Big Game, p. 75)"
    },
    {
        question: "How is the inside spread credit determined for American elk?",
        choices: [
            "It's always the actual inside spread measurement",
            "It's the actual inside spread or the length of the longer main beam, whichever is less",
            "It's calculated as 25% of the total score",
            "It's not included in the final score"
        ],
        correctAnswer: 1,
        explanation: "The inside spread credit cannot exceed the length of the longer antler main beam. If the inside spread measurement does exceed the longer main beam, record the longer main beam length as the spread credit. (How to Score North American Big Game, p. 70)"
    },
    {
        question: "What should be done if a normal point is broken off to less than an inch long on an American elk antler?",
        choices: [
            "Estimate its original length",
            "Ignore it completely",
            "Record it as an abnormal point",
            "Record a zero and note it in the Remarks section"
        ],
        correctAnswer: 3,
        explanation: "If a normal point has been broken off to less than an inch long, record a zero to indicate its condition and note the action in the Remarks section. This preserves the sequence and avoids any artificial penalty for non-symmetry. (How to Score North American Big Game, p. 74)"
    },
    {
        question: "Where is the H-4 circumference taken on American elk if there are only four normal points?",
        choices: [
            "At the burr",
            "At the beam tip",
            "Halfway between the G-3 and the beam tip",
            "It's not measured"
        ],
        correctAnswer: 2,
        explanation: "On the extremely rare occasion when there are only four normal points (not including the beam tip) on the antler, the H-4 circumference is taken halfway between the G-4 point and the antler tip. (How to Score North American Big Game, p. 76)"
    },
    {
        question: "How are burr tines or 'beauty points' classified on American elk?",
        choices: [
            "As normal points",
            "As abnormal points",
            "They are not counted",
            "As G-1 points"
        ],
        correctAnswer: 1,
        explanation: "Burr tines or beauty points (points arising from the antler burr) are classified as abnormal points on American elk. (How to Score North American Big Game, p. 67)"
    },
    {
        question: "What is the minimum score for a typical American elk to qualify for Boone and Crockett All-Time records?",
        choices: [
            "360",
            "365",
            "370",
            "375"
        ],
        correctAnswer: 3,
        explanation: "The minimum score for a typical American elk to qualify for Boone and Crockett All-Time records is 375. (How to Score North American Big Game, p. 77)"
    },
    {
        question: "How many circumference measurements are always taken on American elk?",
        choices: [
            "Three",
            "Four",
            "Five",
            "Six"
        ],
        correctAnswer: 1,
        explanation: "Four circumferences are always taken on American elk, regardless of the number of normal points. (How to Score North American Big Game, p. 76)"
    },
    {
        question: "What is the most common location for an abnormal point on American elk?",
        choices: [
            "Above the G-1 point",
            "Above the G-2 point",
            "Above the G-3 point",
            "Above the G-4 point"
        ],
        correctAnswer: 3,
        explanation: "The most common location for an abnormal point on American elk is immediately above the G-4 point. (How to Score North American Big Game, p. 67)"
    },
    {
        question: "How is the Final Score calculated for a non-typical American elk?",
        choices: [
            "Sum of all measurements",
            "Sum of measurements minus differences",
            "Sum of measurements plus abnormal points",
            "Average of right and left antler scores"
        ],
        correctAnswer: 2,
        explanation: "For a non-typical American elk, the Final Score is calculated by subtracting the total differences from the subtotal, then adding the total of the lengths of the abnormal points. (How to Score North American Big Game, p. 77)"
    },
    {
        question: "What is the minimum number of normal points required on each antler for a mature typical American elk?",
        choices: [
            "Four",
            "Five",
            "Six",
            "Seven"
        ],
        correctAnswer: 2,
        explanation: "Racks of mature typical American elk bulls normally have six normal points on each antler (including main beam tip that is counted as a normal point, but not individually measured). (How to Score North American Big Game, p. 67)"
    },
    {
        question: "How are matched sets of points below the G-4 treated on American elk?",
        choices: [
            "As normal points",
            "As abnormal points",
            "They are not counted",
            "As G-1 points"
        ],
        correctAnswer: 1,
        explanation: "Any sets of matched points below the G-4 points, other than the normal G-1, G-2, and G-3 points, are always abnormal on American elk. (How to Score North American Big Game, p. 73)"
    },
    {
        question: "What is the minimum score for a non-typical American elk to qualify for Pope and Young?",
        choices: [
            "280",
            "290",
            "300",
            "310"
        ],
        correctAnswer: 2,
        explanation: "The minimum score for a non-typical American elk to qualify for Pope and Young is 300. (How to Score North American Big Game, p. 77)"
    },
    {
        question: "How many abnormal inches are required for an American elk to be classified as non-typical in Pope and Young?",
        choices: [
            "10 inches",
            "15 inches",
            "20 inches",
            "25 inches"
        ],
        correctAnswer: 2,
        explanation: "An American elk must have 20 abnormal inches to be classified as non-typical in Pope and Young. (How to Score North American Big Game, p. 77)"
    }
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (choiceIndex) => {
        setSelectedAnswer(choiceIndex);
        setShowExplanation(true);
        const correct = choiceIndex === questions[currentQuestion].correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const nextQuestion = () => {
        setShowExplanation(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowExplanation(false);
        setSelectedAnswer(null);
        setQuizComplete(false);
        setIsCorrect(null);
    };

    if (quizComplete) {
        return (
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Quiz Complete!</h1>
                <p className="text-xl mb-4">Your final score: {score} out of {questions.length}</p>
                <button
                    onClick={resetQuiz}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    const currentQ = questions[currentQuestion];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Whitetail Scoring Quiz</h1>
            <p className="mb-4">Question {currentQuestion + 1} of {questions.length}</p>
            <p className="text-lg font-semibold mb-4">{currentQ.question}</p>
            <div className="space-y-2">
                {currentQ.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-2 rounded ${
                            selectedAnswer === index
                                ? index === currentQ.correctAnswer
                                    ? 'bg-green-200'
                                    : 'bg-red-200'
                                : 'bg-gray-100 hover:bg-gray-200'
                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {choice}
                    </button>
                ))}
            </div>
            {isCorrect !== null && (
                <p className={`mt-4 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
            )}
            {showExplanation && (
                <Alert className="mt-4">
                    <AlertTitle>Explanation</AlertTitle>
                    <AlertDescription>
                        {currentQ.explanation}
                    </AlertDescription>
                </Alert>
            )}
            {showExplanation && (
                <div className="mt-4 space-y-4">
                    <button
                        onClick={nextQuestion}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                    <a
                        href={currentQ.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
                    >
                        Buy the Scoring Manual or the Chapter
                    </a>
                </div>
            )}
            <p className="mt-4">Current Score: {score} / {currentQuestion + 1}</p>
        </div>
    );
};

ReactDOM.render(<QuizApp />, document.getElementById('root'));
