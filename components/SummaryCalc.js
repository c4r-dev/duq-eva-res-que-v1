'use client'

import React, { useState, useEffect } from "react";

import Questions from "../app/questions/questions.json"

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";

import { useRouter, useSearchParams } from "next/navigation";

export default function SummaryCalc() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const selected = searchParams.get("selected")

  const [outputs, setOutput] = useState(null)

  let question1 = ''
  let question2 = ''
  let question3 = ''
  let number1 = ''
  let number2 = ''
  let number3 = ''

  Questions.forEach(function (elem) {
    if (elem.category === selected) {
      if (elem.number === "1") {
        number1 = elem.number
        question1 = elem.question
      } else if (elem.number === "2") {
        number2 = elem.number
        question2 = elem.question
      } else {
        number3 = elem.number
        question3 = elem.question
      }
    }
  })

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

    fetchData()

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

  if (!outputs) return <div>Loading...</div>;

  let Q = {
    goodcnt: 0,
    bettercnt: 0,
    greatcnt: 0,
    goodpct: 0,
    betterpct: 0,
    greatpct: 0
  }
  let q1 = Object.create(Q)
  let q2 = Object.create(Q)
  let q3 = Object.create(Q)

  outputs.forEach((item) => {
    if (item.number === "1") {
      if (item.fbtool === "Good") {
        q1.goodcnt++
      } else if (item.fbtool === "Better") {
        q1.bettercnt++
      } else {
        q1.greatcnt++
      }
    } else if (item.number === "2") {
      if (item.fbtool === "Good") {
        q2.goodcnt++
      } else if (item.fbtool === "Better") {
        q2.bettercnt++
      } else {
        q2.greatcnt++
      }
    } else {
      if (item.fbtool === "Good") {
        q3.goodcnt++
      } else if (item.fbtool === "Better") {
        q3.bettercnt++
      } else {
        q3.greatcnt++
      }
    }
  });

  let count = q1.goodcnt + q1.bettercnt + q1.greatcnt
  q1.goodpct = Math.round(q1.goodcnt / count * 100)
  q1.betterpct = Math.round(q1.bettercnt / count * 100)
  q1.greatpct = Math.round(q1.greatcnt / count * 100)
  count = q2.goodcnt + q2.bettercnt + q2.greatcnt
  q2.goodpct = Math.round(q2.goodcnt / count * 100)
  q2.betterpct = Math.round(q2.bettercnt / count * 100)
  q2.greatpct = Math.round(q2.greatcnt / count * 100)
  count = q3.goodcnt + q3.bettercnt + q3.greatcnt
  q3.goodpct = Math.round(q3.goodcnt / count * 100)
  q3.betterpct = Math.round(q3.bettercnt / count * 100)
  q3.greatpct = Math.round(q3.greatcnt / count * 100)

  return (

    <>

      <div>
        <h1>Formulating a Valid Research Question</h1>
        <h2>What did other students think:</h2>
      </div>

      <div>
        <h2>Research Question {number1}</h2>
        <h2>{question1}</h2>
        <div>
          <h1>{q1.goodpct}% {q1.betterpct}% {q1.greatpct}%</h1>
          <button onSubmit={handleSubmit}>SHOW ANSWERS</button>
          <br></br>
        </div>
      </div>

      <div>
        <h2>Research Question {number2}</h2>
        <h2>{question2}</h2>
        <div>
          <h1>{q2.goodpct}% {q2.betterpct}% {q2.greatpct}%</h1>
          <button onSubmit={handleSubmit}>SHOW ANSWERS</button>
          <br></br>
        </div>
      </div>

      <div>
        <h2>Research Question {number3}</h2>
        <h2>{question3}</h2>
        <div>
          <h1>{q3.goodpct}% {q3.betterpct}% {q3.greatpct}%</h1>
          <button onSubmit={handleSubmit}>SHOW ANSWERS</button>
          <br></br>
          <br></br>
        </div>
      </div>

      <div>
        <Image
          priority
          src={Raven1}
          alt="Follow us at c4r.io"
        />
      </div>

    </>
  );
}