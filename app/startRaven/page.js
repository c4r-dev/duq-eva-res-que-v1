'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-text-1.svg";
import Raven2 from "@/assets/feedback-button-text-2.svg";
import Raven3 from "@/assets/feedback-button-text-3.svg";


export default function FeedBack() {

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // router.push("/closeWindow");

  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <h1>Formulating a Valid Research Question</h1>
      </div>

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
      <div>
        <button type="submit">
          submit
        </button>
      </div>
    </form>
  )
}