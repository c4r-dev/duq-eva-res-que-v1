'use client'

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";
import Raven2 from "@/assets/feedback-button-2.svg";
import Raven3 from "@/assets/feedback-button-3.svg";


export default function FeedBack() {

  const searchParams = useSearchParams()
  const selected = searchParams.get("selected")

  const router = useRouter()

  const [answerQ1, setAnswerq1] = useState("");
  const [fbtool, setFBTool] = useState('No Selection')

  const onValueChange = (event) => {
    setFBTool(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answerQ1 && !fbtool) {
      alert("Selection and Answer is required to Submit.");
      return;
    }

    try {
      const res = await fetch("/api/studentInput", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ answerQ1, fbtool }),
      });

      if (res.ok) {
        // router.push("/closeWindow");
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
      </div>

      <p>

        working paragraph
      </p>

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
        </label>

      </div>

      <div><br></br></div>

      <div className="flex-container2">
        <input
          onChange={(e) => setAnswerq1(e.target.value)}
          value={answerQ1}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Your answer."
        />
        <button type="submit">
          SUBMIT RESPONSE
        </button>
      </div>
    </form>
  );
}