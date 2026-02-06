'use client'

import Image from 'next/image'

interface LogoProps {
  src?: string
  alt?: string
  size?: number
}

export default function Logo({ 
  src = '/mini.png', 
  alt = 'AuthnPass Logo',
  size = 30
}: LogoProps) {
  return (
    <div className="flex-shrink-0" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
       
        priority
        onError={(e) => {
         
        }}
      />
    </div>
  )
}

