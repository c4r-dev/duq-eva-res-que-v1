'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Image from 'next/image';

import Raven1 from "./assets/feedback-button-1.svg";
import Raven2 from "./assets/feedback-button-2.svg";
import Raven3 from "./assets/feedback-button-3.svg";

export default function FeedBack() {

  const router = useRouter()

  const [rqtool, setRQTool] = useState('')

  const onValueChange = (event) => {
    setRQTool(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rqtool)  {
      alert("Selection is required to Continue.");
      return;  
    }
    
    router.push(`/startRaven?rqtool=${rqtool}`);

  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <h1>Formulating a Valid Research Question</h1>
      </div>

      <div className="flex-container">

        <input
          type="radio"
          name="rqtoolanswer"
          id="rqtoolbs"
          value={"bs"}
          checked={rqtool === 'bs'}
          onChange={onValueChange}
        />
        <label htmlFor="rqtoolbs">
          <Image
            priority
            src={Raven1}
            alt="Follow us at c4r.io"
          />
          Basic Science
        </label>

        <input
          type="radio"
          name="rqtoolanswer"
          id="rqtoolcs"
          value={"cs"}
          checked={rqtool === 'cs'}
          onChange={onValueChange}
        />
        <label htmlFor="rqtoolcs">
          <Image
            priority
            src={Raven2}
            alt="Follow us at c4r.io"
          />
          Clinical Science
        </label>

        <input
          type="radio"
          name="rqtoolanswer"
          id="rqtoolph"
          value={"ph"}
          checked={rqtool === 'ph'}
          onChange={onValueChange}
        />
        <label htmlFor="rqtoolph">
          <Image
            priority
            src={Raven3}
            alt="Follow us at c4r.io"
          />
          Public Health
        </label>

      </div>
      <div>
        <button type="submit">
          CONTINUE
        </button>
      </div>
    </form>
  )
}