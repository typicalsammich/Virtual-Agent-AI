"use client";

import { useRef, useState } from "react";

type TranscriptLine = { time: number; speaker: string; text: string };
type IndustryData = { name: string; category: string; headline: string; description: string; caller: string; captures: string; next: string; result: string; audio?: string; transcript?: TranscriptLine[] };

const industryOptions: Record<string, IndustryData> = {
  plumbing: { name: "Plumbing", category: "EMERGENCY INTAKE · DISPATCH · BOOKING", headline: "Turn urgent plumbing calls into clear next steps.", description: "Hear a real example of the AI responding calmly, identifying the risk, and collecting the location needed for a fast handoff.", caller: "Real emergency plumbing call handled by Lamora from intake through service-area screening.", captures: "Leak source, active damage, safety risk, address, and callback details", next: "Prioritize the emergency and alert the on-call plumbing team", result: "An urgent plumbing request ready for dispatch", audio: "/audio/plumbing-demo.mp3", transcript: [
    { time: 0, speaker: "Virtual Agent", text: "Thank you for calling." },
    { time: 1, speaker: "Virtual Agent", text: "My name is Lamora." },
    { time: 3, speaker: "Virtual Agent", text: "How can I help you today?" },
    { time: 6, speaker: "Caller", text: "Yes, I'm actually calling because literally, my toilet, it's like." },
    { time: 17, speaker: "Caller", text: "I don't know what's wrong with it, but it's leaking from the wall." },
    { time: 22, speaker: "Caller", text: "Like, the pipe is leaking from the wall." },
    { time: 25, speaker: "Caller", text: "There's, like, towards the bottom of the dam, towards the bottom of it, towards the bottom of the fucking toilet." },
    { time: 37, speaker: "Virtual Agent", text: "I am sorry to hear you are dealing with a leak." },
    { time: 39, speaker: "Virtual Agent", text: "Since you mentioned water is actively leaking from the wall and the base of the toilet, I want to make sure we address this properly." },
    { time: 46, speaker: "Virtual Agent", text: "Is there water currently flooding your floor or causing damage to your property?" },
    { time: 51, speaker: "Caller", text: "Yes, it's causing damage and it's about to even flood." },
    { time: 55, speaker: "Caller", text: "I have, like, towels and shit right there to make sure it doesn't flood and make sure, like, the water doesn't go everywhere." },
    { time: 63, speaker: "Virtual Agent", text: "I understand this is an urgent situation." },
    { time: 66, speaker: "Virtual Agent", text: "Please prioritize your safety and try to contain the water as best you can while I assist you." },
    { time: 71, speaker: "Virtual Agent", text: "Plumbing and Heating provides 24/7 emergency plumbing support, and I can help you get a technician dispatched to your location." },
    { time: 78, speaker: "Virtual Agent", text: "Could you please provide me with your full name, the address where this is happening, and your phone number so I can get this request started for you?" },
    { time: 86, speaker: "Caller", text: "Yes, my name is." },
    { time: 89, speaker: "Caller", text: "Phone number is." },
    { time: 94, speaker: "Caller", text: "And my address is California." },
    { time: 102, speaker: "Virtual Agent", text: "I appreciate you providing that information." },
    { time: 105, speaker: "Virtual Agent", text: "I must inform you that our service areas are limited to Denver, Aurora, Highlands Ranch, Centennial and Englewood." },
    { time: 112, speaker: "Virtual Agent", text: "So we are unable to provide service in California." },
    { time: 114, speaker: "Virtual Agent", text: "You should contact a local plumbing professional in your area immediately to address this emergency." },
  ] },
  moving: { name: "Moving Services", category: "MOVE DETAILS · QUOTES · LEAD INTAKE", headline: "Qualify complex moving requests on the first call.", description: "Listen as the AI gathers useful details about a long-distance move, heavy equipment, and the customer’s next step toward a quote.", caller: "I have a lot of heavy gym equipment to move from California to Texas.", captures: "Origin, destination, heavy items, estimated weight, timing, and quote interest", next: "Prepare the move details and guide the caller toward a quote", result: "A detailed moving lead ready for an estimator", audio: "/audio/moving-demo.mp3", transcript: [
    { time: 0, speaker: "Virtual Agent", text: "Thank you for calling." },
    { time: 1, speaker: "Virtual Agent", text: "My name is Lamora." },
    { time: 2, speaker: "Virtual Agent", text: "How can I help you today?" },
    { time: 4, speaker: "Caller", text: "Hey." },
    { time: 5, speaker: "Caller", text: "Yes, I'm actually." },
    { time: 6, speaker: "Caller", text: "Recently I'm actually moving out my mom's house and getting my own apartment." },
    { time: 12, speaker: "Caller", text: "And now with that being said, I need help moving." },
    { time: 15, speaker: "Caller", text: "I need help literally moving a lot of this stuff." },
    { time: 18, speaker: "Caller", text: "I have a lot of weight, a lot of gym equipment, a lot of fitness, so a lot of things are very, very heavy." },
    { time: 27, speaker: "Caller", text: "And so with that being said, I don't know how much that will be, but you know, I'll need it for about." },
    { time: 32, speaker: "Caller", text: "I need you guys for about two hours." },
    { time: 35, speaker: "Virtual Agent", text: "I understand you are moving a lot of heavy gym equipment from your mom's house to your new apartment." },
    { time: 39, speaker: "Virtual Agent", text: "It is important to know that our standard service involves us delivering the all steel container to your location and then you load it yourself at your own pace." },
    { time: 47, speaker: "Virtual Agent", text: "We do not automatically provide moving labor or staff to help you lift those heavy items into the container, though we can discuss if any labor services are available in your specific area." },
    { time: 57, speaker: "Virtual Agent", text: "To give you an idea of capacity, our 12 foot and 16 foot containers can each hold up to 6,000 pounds, which might be suitable for your fitness gear." },
    { time: 66, speaker: "Virtual Agent", text: "Could you tell me which city you are moving from and which city you are moving to so I can check service availability?" },
    { time: 73, speaker: "Caller", text: "I'm actually moving from Corona, California all the way to Texas." },
    { time: 82, speaker: "Virtual Agent", text: "Moving from Corona, California to Texas is considered a long distance move and we definitely service both of those locations." },
    { time: 89, speaker: "Virtual Agent", text: "Since you mentioned having a lot of heavy gym equipment, please keep in mind that our 16 foot container has a maximum weight limit of 6,000 pounds, so we would need to ensure your total load stays within that safety capacity." },
    { time: 100, speaker: "Virtual Agent", text: "Because pricing for long distance moves depends on the specific distance, container size and current rates, I cannot give you an exact cost right now without running a formal quote." },
    { time: 110, speaker: "Virtual Agent", text: "Would you like me to guide you on how to get a quote online or would you prefer to speak with a customer service representative who can walk you through the pricing details over the phone?" },
    { time: 120, speaker: "Caller", text: "Matter of fact, yeah, I actually want somebody." },
    { time: 123, speaker: "Caller", text: "Yeah, I want somebody." },
    { time: 125, speaker: "Caller", text: "Just transfer me over." },
    { time: 127, speaker: "Virtual Agent", text: "I can certainly help you get connected with a live representative who can provide that specific quote and discuss your options for the heavy items." },
  ] },
  home: { name: "Home Services", category: "ROOFING · HVAC · PLUMBING · RESTORATION", headline: "Turn urgent calls into booked jobs.", description: "When a homeowner needs help, the business that responds first usually wins. The AI keeps the conversation moving while intent is high.", caller: "My AC is running, but the house keeps getting warmer.", captures: "Service needed, location, urgency, and preferred appointment time", next: "Book an available visit or alert the on-call team", result: "A qualified service request ready for dispatch" },
  legal: { name: "Law Firms", category: "CLIENT INTAKE · QUALIFICATION · CONSULTATIONS", headline: "Give every potential client a professional first response.", description: "The AI responds calmly, gathers the essential facts, and routes each matter according to the firm’s intake rules.", caller: "I was injured in an accident last week and need to know what to do next.", captures: "Practice area, incident summary, location, timing, and contact details", next: "Schedule a consultation or send the intake to the correct team", result: "Complete intake delivered before the opportunity goes cold" },
  mortgage: { name: "Mortgage & Finance", category: "BORROWER INTAKE · LEAD RESPONSE · FOLLOW-UP", headline: "Respond while borrower interest is still high.", description: "New inquiries receive immediate attention and loan professionals get the context needed for a productive follow-up.", caller: "I’m buying my first home and want to understand what I might qualify for.", captures: "Loan goal, property status, timeline, location, and contact preference", next: "Route the inquiry and schedule a call with the right loan professional", result: "A qualified borrower inquiry ready for follow-up" },
  realEstate: { name: "Real Estate Teams", category: "BUYER LEADS · SELLER INQUIRIES · SHOWINGS", headline: "Convert property interest into real conversations.", description: "The AI qualifies buyers and sellers, answers listing questions, and makes sure motivated prospects reach the right agent quickly.", caller: "I saw the listing on Oak Street and would like to tour it this weekend.", captures: "Property, buying or selling intent, timeline, financing status, and availability", next: "Schedule a showing or route the lead to the assigned agent", result: "A motivated prospect with a clear next step" },
  healthcare: { name: "Healthcare & Dental", category: "PATIENT INTAKE · APPOINTMENTS · ROUTING", headline: "Make it easier for patients to get the right help.", description: "Routine questions, appointment requests, and office routing are handled consistently while urgent matters follow your escalation rules.", caller: "I chipped a tooth and want to see if you have an appointment today.", captures: "Reason for visit, urgency, patient status, insurance basics, and availability", next: "Offer an appointment or follow the office’s urgent-call procedure", result: "A prepared appointment request sent to the front desk" },
  automotive: { name: "Automotive Services", category: "REPAIR REQUESTS · ESTIMATES · SCHEDULING", headline: "Keep service bays filled without tying up the front desk.", description: "The AI gathers vehicle and service details, answers common questions, and moves qualified requests toward an appointment.", caller: "My check-engine light came on and the car is starting to shake.", captures: "Vehicle, symptoms, urgency, service history, and preferred time", next: "Schedule a diagnostic visit or escalate a safety concern", result: "A detailed repair request ready for the service advisor" },
  property: { name: "Property Management", category: "LEASING · MAINTENANCE · TENANT ROUTING", headline: "Handle tenant and leasing calls without the constant interruption.", description: "The AI separates routine questions from urgent issues and gives every caller a clear, documented next step.", caller: "There’s water coming through the ceiling in my apartment.", captures: "Property, unit, issue type, severity, access details, and callback number", next: "Trigger emergency maintenance or create a documented service request", result: "The right issue routed to the right person immediately" },
  insurance: { name: "Insurance Agencies", category: "QUOTE REQUESTS · POLICY QUESTIONS · CLAIMS ROUTING", headline: "Respond to prospects before they request the next quote.", description: "The AI handles first-touch conversations, collects accurate policy details, and routes opportunities or service requests correctly.", caller: "I just bought a house and need a homeowners insurance quote.", captures: "Coverage needed, property or vehicle basics, timeline, and contact details", next: "Schedule an agent call or send a complete quote request", result: "A ready-to-work insurance opportunity" },
} as const;

type IndustryOption = string;

export function IndustryFocus() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryOption>("home");
  const industry = industryOptions[selectedIndustry];

  return <div className="industryFocus">
    <div className="industryFocusIntro">
      <p className="eyebrow">BUILT FOR HIGH-VALUE SERVICE BUSINESSES</p>
      <h2>See how it works<br />for your industry.</h2>
      <div className="industryPickerCopy"><p>Select a business type to see a realistic call, what the AI captures, and the next step it can complete.</p><label htmlFor="industry-select">CHOOSE YOUR INDUSTRY</label><div className="industrySelectWrap"><select id="industry-select" value={selectedIndustry} onChange={(event) => setSelectedIndustry(event.target.value as IndustryOption)}>{(Object.keys(industryOptions) as IndustryOption[]).map((key) => <option key={key} value={key}>{industryOptions[key].name}</option>)}</select><span>⌄</span></div></div>
    </div>

    <div className="industrySpotlight" key={selectedIndustry} aria-live="polite">
      <div className="industrySpotlightCopy">
        <div className="industrySpotlightMeta"><span>{industry.name}</span><small>{industry.category}</small></div>
        <h3>{industry.headline}</h3>
        <p>{industry.description}</p>
        <div className="industryCaller"><small>REAL-WORLD CALL EXAMPLE</small><blockquote>Listen to how Virtual Agent AI handles the conversation and guides the caller toward the right next step.</blockquote></div>
        {industry.audio && industry.transcript ? <CallAudio src={industry.audio} transcript={industry.transcript} title={`${industry.name} call demo`} /> : null}
      </div>
      <div className="industryResponse">
        <article><small>WHAT THE AI CAPTURES</small><p>{industry.captures}</p></article>
        <article><small>NEXT STEP</small><p>{industry.next}</p></article>
        <div className="industryResult"><span>✓</span><div><small>BUSINESS OUTCOME</small><strong>{industry.result}</strong></div></div>
      </div>
    </div>
  </div>;
}

function CallAudio({ src, transcript, title }: { src: string; transcript: TranscriptLine[]; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const active = transcript.reduce((match, line, index) => currentTime >= line.time ? index : match, 0);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";
    return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) await audio.play();
    else audio.pause();
  };

  return <div className="callAudio">
    <div className="callAudioHead"><span><i /> CALL AUDIO</span><small>{title}</small></div>
    <audio
      ref={audioRef}
      preload="metadata"
      src={src}
      onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
      onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onEnded={() => setPlaying(false)}
    />
    <div className="customAudioPlayer">
      <button type="button" className="audioPlayButton" onClick={togglePlayback} aria-label={playing ? "Pause call audio" : "Play call audio"}>{playing ? "❚❚" : "▶"}</button>
      <span className="audioTime">{formatTime(currentTime)}</span>
      <input
        className="audioProgress"
        type="range"
        min="0"
        max={duration || 0}
        step="0.1"
        value={Math.min(currentTime, duration || 0)}
        onChange={(event) => {
          const audio = audioRef.current;
          if (!audio) return;
          const next = Number(event.target.value);
          audio.currentTime = next;
          setCurrentTime(next);
        }}
        aria-label="Call audio progress"
      />
      <span className="audioTime">{formatTime(duration)}</span>
      <button type="button" className="audioMuteButton" onClick={() => { const audio = audioRef.current; if (audio) audio.muted = !audio.muted; }} aria-label="Mute or unmute audio">⌕</button>
    </div>
    <div className="callTranscript" aria-live="polite">
      <div className="callTranscriptLabel"><span>CALL TRANSCRIPT</span><time>{formatTime(currentTime)}</time></div>
      {transcript.map((line, index) => <p key={`${line.time}-${line.speaker}`} className={index === active ? "active" : index < active ? "complete" : ""}><b>{line.speaker}</b><span>{line.text}</span></p>)}
    </div>
  </div>;
}
