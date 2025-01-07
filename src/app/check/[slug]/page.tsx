"use client"
import React from 'react'

import { useParams } from 'next/navigation'

const Check = () => {
  const data = useParams()
  console.log(data)
  return (
    <div>
      {data.slug}
    </div>
  )
}

export default Check
