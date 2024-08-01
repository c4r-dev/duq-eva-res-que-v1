"use client";

import React, { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";

import Questions from "../questions/questions.json";

import Image from "next/image";

import Raven1 from "../assets/feedback-button-1.svg";

import SideRaven from "../assets/raven-1-angled.svg";

import ravenChatIcon1 from "../assets/raven-chat-icon-1.svg";
import ravenChatIcon2 from "../assets/raven-chat-icon-2.svg";
import ravenChatIcon3 from "../assets/raven-chat-icon-3.svg";
import ravenChatIcon4 from "../assets/raven-chat-icon-4.svg";

export default function SummaryCalc() {
    const searchParams = useSearchParams();
    const selected = searchParams.get("selected");

    const [outputs, setOutput] = useState(null);
    const [is1Visible, setIs1Visible] = useState(false);
    const [is2Visible, setIs2Visible] = useState(false);
    const [is3Visible, setIs3Visible] = useState(false);

    let question1 = "";
    let question2 = "";
    let question3 = "";
    let number1 = "";
    let number2 = "";
    let number3 = "";

    Questions.forEach(function (elem) {
        if (elem.category === selected) {
            if (elem.number === "1") {
                number1 = elem.number;
                question1 = elem.question;
            } else if (elem.number === "2") {
                number2 = elem.number;
                question2 = elem.question;
            } else {
                number3 = elem.number;
                question3 = elem.question;
            }
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/studentInput");
                const result = await response.json();
                setOutput(result);
            } catch (error) {
                console.log("Error loading student answers: ", error);
            }
        };

        fetchData();
    }, []);

    if (!outputs) return <div>Loading...</div>;

    let Q = {
        goodcnt: 0,
        bettercnt: 0,
        greatcnt: 0,
        goodpct: 0,
        betterpct: 0,
        greatpct: 0,
        totalcnt: 0,
    };
    let q1 = Object.create(Q);
    let q2 = Object.create(Q);
    let q3 = Object.create(Q);
    let q1Answers = [];
    let q2Answers = [];
    let q3Answers = [];
    let q1a = [];
    let q2a = [];
    let q3a = [];

    outputs.forEach((item) => {
        if (item.category === selected) {
            if (item.number === "1") {
                if (item.fbtool === "Good") {
                    q1.goodcnt++;
                } else if (item.fbtool === "Better") {
                    q1.bettercnt++;
                } else {
                    q1.greatcnt++;
                }
                q1.totalcnt++;
                if (q1.totalcnt <= 10) {
                    q1a = item.questionAnswer;
                    let qFeedback = item.fbtool;
                    let answerInstance = {
                        answer: q1a,
                        feedback: qFeedback,
                    };
                    q1Answers.push(answerInstance);
                }
            } else if (item.number === "2") {
                if (item.fbtool === "Good") {
                    q2.goodcnt++;
                } else if (item.fbtool === "Better") {
                    q2.bettercnt++;
                } else {
                    q2.greatcnt++;
                }
                q2.totalcnt++;
                if (q2.totalcnt <= 10) {
                    q2a = item.questionAnswer;
                    let qFeedback = item.fbtool;
                    let answerInstance = {
                        answer: q2a,
                        feedback: qFeedback,
                    };
                    q2Answers.push(answerInstance);
                }
            } else {
                if (item.fbtool === "Good") {
                    q3.goodcnt++;
                } else if (item.fbtool === "Better") {
                    q3.bettercnt++;
                } else {
                    q3.greatcnt++;
                }
                q3.totalcnt++;
                if (q3.totalcnt <= 10) {
                    q3a = item.questionAnswer;
                    let qFeedback = item.fbtool;
                    let answerInstance = {
                        answer: q3a,
                        feedback: qFeedback,
                    };
                    q3Answers.push(answerInstance);
                }
            }
        }
    });

    q1.goodpct = Math.round((q1.goodcnt / q1.totalcnt) * 100);
    q1.betterpct = Math.round((q1.bettercnt / q1.totalcnt) * 100);
    q1.greatpct = Math.round((q1.greatcnt / q1.totalcnt) * 100);

    q2.goodpct = Math.round((q2.goodcnt / q2.totalcnt) * 100);
    q2.betterpct = Math.round((q2.bettercnt / q2.totalcnt) * 100);
    q2.greatpct = Math.round((q2.greatcnt / q2.totalcnt) * 100);

    q3.goodpct = Math.round((q3.goodcnt / q3.totalcnt) * 100);
    q3.betterpct = Math.round((q3.bettercnt / q3.totalcnt) * 100);
    q3.greatpct = Math.round((q3.greatcnt / q3.totalcnt) * 100);

    function getWinner(goodPct, betterPct, greatPct) {
        if (goodPct > betterPct && goodPct > greatPct) {
            return "q1";
        } else if (betterPct > goodPct && betterPct > greatPct) {
            return "q2";
        } else {
            return "q3";
        }
    }

    const q1Winner = getWinner(q1.goodpct, q1.betterpct, q1.greatpct);
    const q2Winner = getWinner(q2.goodpct, q2.betterpct, q2.greatpct);
    const q3Winner = getWinner(q3.goodpct, q3.betterpct, q3.greatpct);

    const toggle1Visibility = () => {
        setIs1Visible(!is1Visible);
    };

    const toggle2Visibility = () => {
        setIs2Visible(!is2Visible);
    };

    const toggle3Visibility = () => {
        setIs3Visible(!is3Visible);
    };

    const SummryInstance = ({
        title,
        question,
        questionData,
        answers,
        winner,
    }) => {
        // Map answers good better great to an array
        const colorMap = {
            Good: "#FFA800",
            Better: "#F4F734",
            Great: "#A0FF00",
        };
        const colorClassMap = {
            Good: "good-color",
            Better: "better-color",
            Great: "great-color",
        };
        const getColorClass = (feedback) => {
            console.log(feedback);
            console.log(colorClassMap[feedback]);
            return colorClassMap[feedback];
        };
        const getColor = (feedback) => {
            console.log(feedback);
            console.log(colorMap[feedback]);
            return colorMap[feedback];
        };

        const [showAnswers, setShowAnswers] = useState(true);

        const toggleAnswersVisibility = () => {
            // Calculate pixle height of answers
            const answersHeight = answers.length * 100;
            console.log(answersHeight);

            setShowAnswers(!showAnswers);

            // Assign css property collapse
            // const container = document.querySelector('.summary-instance-answer-bubble-container')
            // container.classList.toggle('collapsed')
        };
        return (
            <div className="summary-instance-container">
                <h2>{title}</h2>
                <h3>{question}</h3>
                <div className="summary-instance-stats-area">
                    {/* <h1>Good : Better : Great</h1>
          <h1>{q1.goodpct}% {q1.betterpct}% {q1.greatpct}%</h1> */}

                    <div className="stats-column">
                        <p>YOUR VOTE</p>
                    </div>
                    <div className="stats-column">
                        <p className={winner === "q1" ? "winner" : ""}>GOOD</p>
                        <p className={winner === "q2" ? "winner" : ""}>
                            BETTER
                        </p>
                        <p className={winner === "q3" ? "winner" : ""}>GREAT</p>
                    </div>
                    <div className="stats-column pct-column">
                        <p>{questionData.goodpct}%</p>
                        <p>{questionData.betterpct}%</p>
                        <p>{questionData.greatpct}%</p>
                    </div>
                    <div className="stats-column stats-bar-container">
                        <div
                            className="stats-bar good-bar"
                            style={{ width: `${questionData.goodpct}%` }}
                        ></div>
                        <div
                            className="stats-bar better-bar"
                            style={{ width: `${questionData.betterpct}%` }}
                        ></div>
                        <div
                            className="stats-bar great-bar"
                            style={{ width: `${questionData.greatpct}%` }}
                        ></div>
                    </div>
                </div>

                <div className="summary-instance-footer">
                    <h3>What would improve this research question?</h3>
                    <button onClick={toggleAnswersVisibility}>
                        {showAnswers ? "HIDE ANSWERS" : "SHOW ANSWERS"}
                    </button>
                </div>

                <div
                    className={`summary-instance-answer-bubble-container ${
                        showAnswers ? "" : "collapsed"
                    }`}
                >
                    <p>Other answers</p>
                    {/*  Render alternating speech bubbles */}
                    {answers.map((item, index) => (
                        <div
                            key={index}
                            className={`summary-instance-answer-bubble ${
                                index % 2 === 0 ? "left" : "right"
                            }`}
                        >
                            <div
                                className={`answer-bubble ${
                                    index % 2 === 0 ? "left" : "right"
                                }`}
                            >
                                <div
                                    className={`answer-bubble-body ${
                                        index % 2 === 0 ? "left" : "right"
                                    }`}
                                    style={{
                                        backgroundColor: getColor(
                                            item.feedback
                                        ),
                                    }}
                                >
                                    <h1>{item.answer}</h1>
                                    {/* <h1>{item.feedback}</h1> */}
                                </div>
                                <div
                                    className={`answer-bubble-triangle ${
                                        index % 2 === 0 ? "left" : "right"
                                    } ${getColorClass(item.feedback)}`}
                                ></div>
                                <div
                                    className={`answer-bubble-icon ${
                                        index % 2 === 0 ? "left" : "right"
                                    }`}
                                >
                                    {index % 2 === 0 && (
                                        <Image
                                            src={ravenChatIcon1}
                                            alt="Raven Chat Icon 1"
                                        />
                                    )}
                                    {index % 2 === 1 && (
                                        <Image
                                            src={ravenChatIcon2}
                                            alt="Raven Chat Icon 2"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="summary-screen-container">
                <header className="summary-screen-header">
                    <h1>Formulating a Valid Research Question</h1>
                </header>

                <div className="summary-area-container">
                    <h2>What did other students think:</h2>

                    <SummryInstance
                        title="Research Question 1"
                        question={question1}
                        questionData={q1}
                        answers={q1Answers}
                        winner={q1Winner}
                    />
                    <SummryInstance
                        title="Research Question 2"
                        question={question2}
                        questionData={q2}
                        answers={q2Answers}
                        winner={q2Winner}
                    />
                    <SummryInstance
                        title="Research Question 3"
                        question={question3}
                        questionData={q3}
                        answers={q3Answers}
                        winner={q3Winner}
                    />

                    <div className="summary-area-footer">
                        <button className="summary-continue-button">
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>

            {/* <div>
        <h2>Research Question {number1}</h2>
        <h2>{question1}</h2>
        <div>
          <h1>Good : Better : Great</h1>
          <h1>{q1.goodpct}% {q1.betterpct}% {q1.greatpct}%</h1>
          <button onClick={toggle1Visibility}>
            {is1Visible ? 'HIDE ' : 'SHOW '} ANSWERS
          </button>
          {is1Visible && (
            <div>
              <br></br>
              {q1Answers.map((item, index) => (
               <li key={index}>{item}</li>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2>Research Question {number2}</h2>
        <h2>{question2}</h2>
        <div>
          <h1>Good : Better : Great</h1>
          <h1>{q2.goodpct}% {q2.betterpct}% {q2.greatpct}%</h1>
          <button onClick={toggle2Visibility}>
            {is2Visible ? 'HIDE ' : 'SHOW '} ANSWERS
          </button>
          {is2Visible && (
            <div>
              <br></br>
              <ul>
                {q2Answers.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2>Research Question {number3}</h2>
        <h2>{question3}</h2>
        <div>
          <h1>Good : Better : Great</h1>
          <h1>{q3.goodpct}% {q3.betterpct}% {q3.greatpct}%</h1>
          <button onClick={toggle3Visibility}>
            {is3Visible ? 'HIDE ' : 'SHOW '} ANSWERS
          </button>
          {is3Visible && (
            <div>
              <br></br>
              <ul>
                {q3Answers.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div> */}

            <div>
                <br></br>
            </div>

            <div>
                <Image
                    priority
                    src={SideRaven}
                    alt="Follow us at c4r.io"
                    className="raven-footer-1"
                />
            </div>
        </>
    );
}
