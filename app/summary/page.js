'use client'

import React from "react";

import Questions from "../questions/questions.json"

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";

import { useRouter, useSearchParams } from "next/navigation";


export default function Summary() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const selected = searchParams.get("selected")

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

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (

    <>
      <div>
        <h1>Formulating a Valid Research Question</h1>
        <h2>What did other students think:</h2>
      </div>

      <div>
        <h2>Research Question {number1}</h2>
        <p>
          <h2>{question1}</h2>
        </p>
      </div>

      <div>
        <h2>Research Question {number2}</h2>
        <p>
          <h2>{question2}</h2>
        </p>
      </div>

      <div>
        <h2>Research Question {number3}</h2>
        <p>
          <h2>{question3}</h2>
        </p>
      </div>

      <div>
        <button onClick="handleSubmit()">CONTINUE</button>
        <br></br>
        <br></br>
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