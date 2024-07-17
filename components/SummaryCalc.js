'use client'

import React, { useState, useEffect} from "react";

import Questions from "../app/questions/questions.json"

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";

import { useRouter, useSearchParams } from "next/navigation";

export default function SummaryCalc() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const selected = searchParams.get("selected")

  const [output, setOutput] = useState(null)

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

  console.log("*")
  console.log(output)
  console.log("*")

  if (!output) return <div>Loading...</div>;

  return (

    <>

      <div>
        <h1>Formulating a Valid Research Question</h1>
        <h2>What did other students think:</h2>
      </div>

      <div>dave</div>

      <div>
        <ul>
          {output.map((t) => {
            <li>t.questionAnswer</li>
          }
          )}
          <li>dave</li>
        </ul>
      </div>


      <div>
        <h2>Research Question {number1}</h2>
        <h2>{question1}</h2>
      </div>

      <div>
        <h2>Research Question {number2}</h2>
        <h2>{question2}</h2>
      </div>

      <div>
        <h2>Research Question {number3}</h2>
        <h2>{question3}</h2>
      </div>

      <div>
        <button onSubmit={handleSubmit}>CONTINUE</button>
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