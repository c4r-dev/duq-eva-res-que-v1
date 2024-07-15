'use client'

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image';

import Raven1 from "@/assets/feedback-button-1.svg";


export default function FeedBack() {

  const searchParams = useSearchParams()
  const selected = searchParams.get("rqtool")

  const router = useRouter()

  const handleSubmit = async () => {
    router.push(`/resQues1?rqtool=${rqtool}`);
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <h1>Formulating a Valid Research Question</h1>
      </div>
      <div>
          <Image
            priority
            src={Raven1}
            alt="Follow us at c4r.io"
          />
        </div>
      <div>
        {selected}
      </div>

      <div>
        <button type="submit">
          CONTINUE
        </button>
      </div>
    </form>
  )
}