"use client"

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('@/components/summaryCalc'), { ssr: false })

export default function Summary() {
  return (
    <DynamicComponent />
  );
}