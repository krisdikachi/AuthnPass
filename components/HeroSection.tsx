'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { useMemo } from 'react';

interface HeroSectionProps {

  partnerLogos?: { src: string; alt: string }[];
  backgroundImageLight?: string;
  backgroundImageDark?: string;
}

const userReviews = [
  {
    text: "AuthnPass made our onboarding so much smoother! The fingerprint auth is incredibly fast and secure. Our users love it.",
    reviewerName: "Alice Johnson, Startup Founder",
    imageSrc: "/alice.jpg",
  },
  {
    text: " The irony: passwordless auth often needs a password as backup. The real challenge isn't killing passwords - it's making the transition graceful when fingerprint fails. AuthnPass nailed it.",
    reviewerName: "Mojo Auth, Security Expert",
    imageSrc: "/mojoauth.png",
  },
  {
    text: "Finally, a passwordless solution that just works! No more password resets, huge time for devs.",
    reviewerName: "Nwuko Onyedikachi, AndroTechList Founder",
    imageSrc: "/founder.jpg",
  },
  {
    text: "The security features are top-notch. Knowing our users are protected against phishing with minimal effort is a game changer.",
    reviewerName: "David Lee, Lead Developer",
    imageSrc: "/dev.png",
  },
  {
    text: "Super easy to implement in our Next.js app. The fallbacks ensure everyone can still access their accounts.",
    reviewerName: "Eve Green, Next.js Engineer",
    imageSrc: "/a.jpg",
  },
]

export default function HeroSection({
  // partnerLogos = defaultPartnerLogos, // Apply default here
  backgroundImageLight,
  backgroundImageDark,
}: HeroSectionProps) { // Corrected function signature

  const { theme } = useTheme()
  const imageAltText = "AuthnPass Passwordless Authentication Background";

  const backgroundImage = useMemo(() => {
    return theme === 'dark'
    ? (backgroundImageDark || backgroundImageLight) // Use a default dark image if none provided
    : (backgroundImageLight || backgroundImageDark)
}, [theme, backgroundImageLight, backgroundImageDark]);

  return (
    <>
      <section className="flex flex-col lg:flex-row pt-14 w-full">

        <div className="relative w-full lg:w-3/5 h-[450px] overflow-hidden border-r border-[#cabe9a] dark:border-black ">

          {backgroundImage ? (
            <div className="absolute inset-0">
              <Image
                src={backgroundImage}
                alt="Hero background"
                fill // Ensure the Image component fills the container
           
                className="object-cover transition-opacity duration-300"
                priority
              />

              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex flex-col justify-end">
                <h3 className="text-[#cabe9a] text-left text-3xl font-bold mx-4 font-mono bg-black w-fit doubleShadow2">AuthnPass.</h3>

                <div className='border border-[#cabe9a] h-20 bg-[#ffffff0e] Imageoverlay doubleShadow m-4'>
                  <p className="text-[#cabe9a] text-left font-mono uppercase font-bold lg:text-3xl px-1.5 ">Passwordless AuthenTication</p>
                  <p className="text-[#cabe9a] text-left px-1.5">                    Open-Source SDK • WebAuthn-Powered • Sign Up in Seconds – No Passwords Needed
                  </p>
                </div>
              </div>


            </div>

          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"></div>
          )}

        </div>

        <div className="relative w-full lg:w-2/5 flex flex-col h-full ">
          <div className="flex relative flex-col gap-2 md:px-12 px-4 border-y border-[1.2px] border-t-0 border-zinc-300 dark:border-zinc-800/70 py-4 bg-stone-200/80 dark:bg-zinc-900/60 flex-grow justify-center">
            <div className="flex items-center gap-4">
              <span className="text-sm dark:text-zinc-100/40 text-zinc-800/70 -mr-3 font-pixel font-lighter">01.</span>
              <span className="shrink-0 font-mono flex flex-col md:flex-row md:items-center gap-2 lg:text-sm xl:text-base dark:text-[#cabe9a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24zm127.8 176a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-26.5 32c-29.4 0-53.3 23.9-53.3 53.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4h-69.3zm368 80c14.7 0 26.7-11.9 26.7-26.7V233.4c0-8-3.2-15.6-8.8-21.2L366.6 98.8c-5.6-5.6-13.2-8.8-21.2-8.8H256c-14.7 0-26.7 11.9-26.7 26.7v56.1c34.1 8 61.7 32.8 73.6 65.2c4.1-7.5 6.4-16.2 6.4-25.3v-69.3l202.7 202.7v69.3c0 14.7 11.9 26.7 26.7 26.7zm53.3-53.3c0 29.4-23.9 53.3-53.3 53.3h-69.3L233 150.7v-69.3c0-14.7 11.9-26.7 26.7-26.7h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8 0-15.6 3.2-21.2 8.8L233 183v69.3c0 14.7-11.9 26.7-26.7 26.7H130c-13.3 0-24 10.7-24 24s10.7 24 24 24h88c8 0 15.6-3.2 21.2-8.8l202.7-202.7h69.3z"></path>
                </svg>Passwordless Authentication</span></div>
            <p className="text-zinc-500 text-sm ml-6 font-sans">  AuthnPass is the open-source SDK that brings device-native fingerprint authentication to any web app.
              Powered by WebAuthn standards – secure, phishing-resistant, and ridiculously fast.</p></div>
          <div className="flex flex-col gap-2 md:px-12 px-4 border-y border-[1.2px] dark:border-zinc-900/70 border-zinc-300 py-4 bg-white dark:bg-transparent flex-grow justify-center dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#9d9da31f_inset] flex-grow">
            <div className="flex items-center gap-4">
              <span className="text-sm dark:text-zinc-100/40 text-zinc-800/70 -mr-3 font-pixel font-lighter">02.</span>
              <span className="shrink-0 font-mono flex flex-col md:flex-row md:items-center gap-2 lg:text-sm xl:text-base dark:text-[#cabe9a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z"></path>
                  <path fill="currentColor" d="M16 25.277V6h8v10.805a7 7 0 0 1-3.7 6.173Z"></path></svg>Bot, Fraud &amp; Protection Layer</span></div>
            <p className="text-zinc-500 text-sm ml-6 font-sans">Prevent abuse with bot detection, real-time behavior analysis, IP blocking, email validation, and more.</p></div>
          <div className="flex flex-col gap-2 md:px-12 px-4 border-y border-[1.2px]  dark:border-zinc-800/70 border-zinc-300 py-4 bg-stone-200/80 dark:bg-zinc-900/60 flex-grow justify-center flex-grow">
            <div className="flex items-center gap-4">
              <span className="shrink-0 text-sm dark:text-zinc-100/40 text-zinc-800/70 -mr-3 font-pixel font-lighter">03.</span><span className="shrink-0 font-mono flex flex-col md:flex-row md:items-center gap-2 lg:text-sm xl:text-base dark:text-[#cabe9a]"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m15.489 21.27l-3.558-3.558l.708-.708l2.85 2.85l5.688-5.688l.708.707zM12 11l7.692-5H4.308zm0 1.116L4 6.885v10.5q0 .269.173.442t.443.173H9.4l1 1H3V5h18v6.542l-1 1V6.885zm0 0"></path></svg>Fast Authentication &amp; Integration</span></div>
            <p className="text-zinc-500 text-sm ml-6 font-sans"> Developers: Integrate in <strong>under 5 minutes</strong> with React, Next.js, Vue, or Vanilla JS.
              No servers needed for biometrics – everything stays on-device. Fallbacks to PIN or magic links for full compatibility.</p></div>
          <div className="flex flex-col gap-2 md:px-12 px-4 border-y border-[1.2px] dark:border-zinc-900/70 border-zinc-300 py-4 bg-white dark:bg-transparent flex-grow justify-center dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#9d9da31f_inset] flex-grow"><div className="flex items-center gap-4">
            <span className="text-sm dark:text-zinc-100/40 text-zinc-800/70 -mr-3 font-pixel font-lighter">04.</span>
            <span className="shrink-0 font-mono flex flex-col md:flex-row md:items-center gap-2 lg:text-sm xl:text-base dark:text-[#cabe9a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 26c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M5 26c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m22 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 4v8h8v8h8v8h8v8h8v8h8v8h8v8H6V4z"></path></svg>Global Session Storage</span></div>
            <p className="text-zinc-500 text-sm ml-6 font-sans">Globally distributed, high-speed storage layer designed for session and auth data.</p></div>


        
</div>

                       

      </section>
      <div className="parentOffer mt-[70px]">
        <h3 className="dark:text-[#cabe9a] offer font-mono text-2xl sm:text-[20px] text-[#000] text-center font-bold">What We Offer</h3>
        <div className="border-t bg-transparent mt-4 md:mt-2 border-dashed border-neutral-300/70 dark:border-zinc-800/70 flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="w-1/2 md:w-auto border-b md:border-b-0 border-r border-neutral-300/70 dark:border-zinc-800/70 px-4 md:px-8 py-4 md:py-6 flex items-center justify-center flex-grow"><p className="text-neutral-600 dark:text-zinc-400 text-base md:text-xl">Admin</p></div><div className="w-1/2 md:w-auto md:border-b-0 border-b border-r border-neutral-300/70 dark:border-zinc-800/70 px-4 md:px-8 py-4 md:py-6 flex items-center justify-center flex-grow"><p className="text-neutral-600 dark:text-zinc-400 text-base md:text-xl">Analytics</p></div>
          <div className="w-1/2 md:w-auto border-r border-b md:border-b-0 border-neutral-300/70 dark:border-zinc-800/70 px-4 md:px-8 py-4 md:py-6 flex items-center justify-center flex-grow relative">
            <div className=" bg-sky-100 h-2 w-full blur-2xl absolute top-1/2"></div>
            <p className="text-neutral-600 dark:text-zinc-400 text-base md:text-xl">Passwordless</p></div>
          <div className="w-1/2 md:w-auto border-r border-b md:border-b-0 border-neutral-300/70 dark:border-zinc-800/70 px-4 md:px-8 py-4 md:py-6 flex items-center justify-center flex-grow"><p className="text-neutral-600 dark:text-zinc-400 text-base md:text-xl">Storage</p></div><div className="w-full md:w-auto border-r border-neutral-300/70 dark:border-zinc-800/70 px-4 md:px-8 py-4 md:py-6 flex items-center justify-center flex-grow">
            <p className="text-neutral-600 dark:text-zinc-400 text-base md:text-xl">Enterprise</p></div></div>
      </div>
    

      <div className="mt-16 py-8 bg-gray-50 dark:bg-zinc-900 overflow-hidden relative">
        {/* Neon lightning background effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* This div creates a radial gradient glow matching the theme color */}
          <div className="absolute inset-0 bg-gradient-radial from-[#cabe9a]/30 to-transparent blur-3xl opacity-50 dark:opacity-30 animate-pulse-light"></div>
        </div>

        <h3 className="dark:text-[#cabe9a] text-center font-mono text-2xl sm:text-[20px] text-[#000] font-bold mb-8 relative z-10">What Our early testers Say</h3>
        <div className="relative z-10 w-full flex overflow-hidden group">
          {/* The inner container will scroll. We duplicate the content to create a seamless loop. */}
          {/* The `min-w-max` ensures the flex container is wide enough for all items. */}
          <div className="flex animate-marquee-reviews group-hover:animation-pause min-w-max">
            {/* First set of reviews */}
            {userReviews.map((review, index) => (
              <div key={`review-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] mx-4 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-[#cabe9a]/50 flex flex-col items-center text-center">
                {/* Reviewer Image Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
                  {review.imageSrc ? (
                    <Image
                      src={review.imageSrc} // Ensure correct path
                      alt={review.reviewerName}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  ) : (
                  
                    <svg
                      className="w-10 h-10 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-[#cabe9a]">- {review.reviewerName}</p>
              </div>
            ))}
            {/* Second set of reviews (duplicate for seamless loop) */}
            {userReviews.map((review, index) => (
              <div key={`review-duplicate-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] mx-4 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-[#cabe9a]/50 flex flex-col items-center text-center">
                {/* Reviewer Image Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
                  {review.imageSrc ? (
                    <Image
                      src={review.imageSrc} // Ensure correct path
                      alt={review.reviewerName}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  ) : (
                    // Generic user icon placeholder if no image is provided
                    <svg
                      className="w-10 h-10 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-[#cabe9a]">- {review.reviewerName}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
    
    </>
  )
}
 


 
