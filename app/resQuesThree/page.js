'use client'

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Questions from "../questions/questions.json"

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";
import Raven2 from "@/assets/feedback-button-2.svg";
import Raven3 from "@/assets/feedback-button-3.svg";


export default function ResQuesTwo() {

  const searchParams = useSearchParams()
  const selected = searchParams.get("selected")
  let question = ''
  let number = ''
  let category = ''

  Questions.forEach(function(elem){
    if (elem.category === selected && elem.number === "3") {
      category=elem.category
      number=elem.number
      question = elem.question
    }
  })

  const router = useRouter()

  const [questionAnswer, setQuestionAnswer] = useState("");
  const [fbtool, setFBTool] = useState('No Selection')

  const onValueChange = (event) => {
    setFBTool(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionAnswer && !fbtool) {
      alert("Selection and Answer is required to Submit.");
      return;
    }

    try {
      const res = await fetch("/api/studentInput", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ category, number, fbtool, questionAnswer }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error("Failed to create an answer.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <h1>Formulating a Valid Research Question</h1>
        <h2>Question 2</h2>
      </div>

      <p>
        <h2>{question}</h2>
      </p>

      <div><br></br></div>
      <div><h2>How good is this research question?</h2></div>
      <div><br></br></div>

      <div className="flex-container">

        <input
          type="radio"
          name="fbtoolanswer"
          id="fbtoolns"
          value={"Not Sure"}
          checked={fbtool === 'Not Sure'}
          onChange={onValueChange}
        />
        <label htmlFor="fbtoolns">
          <Image
            priority
            src={Raven1}
            alt="Follow us at c4r.io"
          />
          Good
        </label>

        <input
          type="radio"
          name="fbtoolanswer"
          id="fbtoolgd"
          value={"Good"}
          checked={fbtool === 'Good'}
          onChange={onValueChange}
        />
        <label htmlFor="fbtoolgd">
          <Image
            priority
            src={Raven2}
            alt="Follow us at c4r.io"
          />
          Better
        </label>

        <input
          type="radio"
          name="fbtoolanswer"
          id="fbtoolgr"
          value={"Great"}
          checked={fbtool === 'Great'}
          onChange={onValueChange}
        />
        <label htmlFor="fbtoolgr">
          <Image
            priority
            src={Raven3}
            alt="Follow us at c4r.io"
          />
          Great
        </label>

      </div>

      <div className="flex-container2">
        <input
          onChange={(e) => setQuestionAnswer(e.target.value)}
          value={questionAnswer}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Your answer."
        />
        <button type="submit">
          SUBMIT RESPONSE and GO TO QUESTION 3
        </button>
      </div>
    </form>
  );
}