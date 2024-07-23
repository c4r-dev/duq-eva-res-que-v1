'use client'

import { useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image';

import Raven1 from '../assets/feedback-button-1.svg';
import { Suspense } from "react";

export default function ResQuesThree() {

  let selected = ''
  function Search() {
    const searchParams = useSearchParams()
    selected = searchParams.get("rqtool")
    return <input placeholder="Search..." />
  }

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/resQuesOne?selected=${selected}`);
  };

  return (

    <>
      <Suspense>
        <Search/>
      </Suspense>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <h1>Formulating a Valid Research Question</h1>
          <br></br>
          <h1>We will be evalutating 3 research questions in a row.</h1>
        </div>
        <div>
          <Image
            priority
            src={Raven1}
            alt="Follow us at c4r.io"
          />
        </div>
        <div>
          <br></br>
        </div>

        <div>
          <button type="submit">
            CONTINUE
          </button>
        </div>
      </form>
    </>
  )
}

export const dynamic = 'force-dynamic';