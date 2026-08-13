"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";

type Industry = {
  name: string;
  greeting: string;
  scenarios: {
    caller: string;
    exchanges: [string, string][];
  }[];
  captured: [string, string][];
  result: string;
};

const industries: Industry[] = [
  {
    name: "Home Services",
    greeting: "Thanks for calling. I can help get the right technician moving. What service do you need today?",
    scenarios: [
      { caller: "My AC stopped cooling and the house is getting warm. Can someone come out today?", exchanges: [["Is the system running at all, or has it shut off completely?", "It is running, but the air coming out is warm."], ["What is the service address?", "It is 248 Oak Ridge Drive."], ["What arrival window works best today?", "Any time after one o’clock would be great."]] },
      { caller: "There is water coming through the ceiling below our upstairs bathroom.", exchanges: [["Is water still actively leaking right now?", "Yes. We shut off the sink, but it is still dripping."], ["Is there any electrical equipment near the affected area?", "No, but the ceiling is starting to stain."], ["What address should the technician come to?", "Seventy-two Brookfield Lane."]] },
    ],
    captured: [["Intent", "Urgent repair"], ["Priority", "Same day"], ["Next step", "Offer eligible times"], ["Team alert", "Dispatch summary"]],
    result: "A qualified service request with the urgency, address, availability, and next action already organized.",
  },
  {
    name: "Law Firms",
    greeting: "Thank you for calling. I can collect a few details and help determine the right next step for your inquiry.",
    scenarios: [
      { caller: "I need to speak with someone about a contract dispute and I’m not sure where to start.", exchanges: [["Is this a business or personal contract?", "It is a contract between my company and a vendor."], ["Are there any upcoming deadlines or court dates?", "They gave us ten days to respond."], ["What is the best time for a consultation?", "Tomorrow morning would be ideal."]] },
      { caller: "I was injured in a car accident last week and the insurance company keeps calling me.", exchanges: [["Have you already retained an attorney for this matter?", "No, I have not spoken with one yet."], ["Did the accident happen in this state?", "Yes, it happened here on Friday."], ["Do you have a preferred time for an intake call?", "After three this afternoon works."]] },
    ],
    captured: [["Matter", "Contract dispute"], ["Urgency", "Deadline check"], ["Next step", "Consultation request"], ["Team alert", "Intake summary"]],
    result: "A structured potential-client intake with the matter type, deadline context, conflict details, and consultation request.",
  },
  {
    name: "Dental & Medical",
    greeting: "Thank you for calling. I can help with scheduling and general office information. How can I help today?",
    scenarios: [
      { caller: "I’m a new patient and want to know if there are appointments available next week.", exchanges: [["What type of visit would you like to schedule?", "A routine exam and cleaning."], ["Are mornings or afternoons easier?", "Tuesday or Thursday afternoon would work."], ["What is the best number for the office to use?", "They can use the number I am calling from."]] },
      { caller: "One of my fillings feels loose and I’d like to get it checked soon.", exchanges: [["Are you having severe pain, swelling, or bleeding?", "No swelling, just some sensitivity when I eat."], ["Are you an existing patient with the office?", "Yes, I was there about six months ago."], ["What availability do you have tomorrow?", "I can come in any time before noon."]] },
    ],
    captured: [["Caller", "New patient"], ["Visit", "Appointment request"], ["Next step", "Offer approved times"], ["Team alert", "Booking details"]],
    result: "A complete scheduling request using office-approved information and escalation rules for clinical questions.",
  },
  {
    name: "Real Estate",
    greeting: "Thanks for calling. Are you looking to buy, sell, rent, or ask about a specific property?",
    scenarios: [
      { caller: "I saw a property online and want to schedule a showing this weekend.", exchanges: [["Which property are you interested in?", "The three-bedroom home on Magnolia Avenue."], ["Are you already represented by an agent?", "No, I am just starting my search."], ["Would Saturday morning or Sunday afternoon work better?", "Saturday around eleven would be perfect."]] },
      { caller: "I’m thinking of selling my home and want to understand what it might be worth.", exchanges: [["What city and neighborhood is the property in?", "It is in Northwood, near the elementary school."], ["Have you made any major upgrades recently?", "We remodeled the kitchen last year."], ["When would you be available for a pricing consultation?", "Wednesday after five works best."]] },
    ],
    captured: [["Intent", "Buyer showing"], ["Property", "Listing identified"], ["Next step", "Agent scheduling"], ["Team alert", "Hot lead summary"]],
    result: "A showing-ready buyer lead with the property, representation status, availability, and preferred contact method.",
  },
  {
    name: "Financial Services",
    greeting: "Thank you for calling. I can help route your question and collect the details your team will need.",
    scenarios: [
      { caller: "I’m interested in refinancing and would like to understand what the next step is.", exchanges: [["Is this for a primary home or an investment property?", "It is our primary residence."], ["What is your main goal for refinancing?", "We would like to lower the monthly payment."], ["When can a specialist reach you?", "Tomorrow between noon and two."]] },
      { caller: "We are looking to buy our first home and want to know what we may qualify for.", exchanges: [["Have you started a loan application with anyone yet?", "No, this is our first call."], ["Do you have a target purchase timeframe?", "We hope to move within four months."], ["Would you like to schedule a discovery call?", "Yes, weekday evenings are easiest."]] },
    ],
    captured: [["Intent", "Refinance inquiry"], ["Property", "Use captured"], ["Next step", "Discovery call"], ["Team alert", "Lead summary"]],
    result: "A properly routed inquiry with the borrower’s intent, property context, availability, and scheduled next conversation.",
  },
  {
    name: "Automotive",
    greeting: "Thanks for calling. I can help with service scheduling and collect a few details about your vehicle.",
    scenarios: [
      { caller: "My check-engine light came on and I need to know when I can bring the car in.", exchanges: [["What is the vehicle year, make, and model?", "It is a 2021 Toyota RAV4."], ["Is the light flashing or steady?", "It is steady and the car still drives normally."], ["What drop-off time works best?", "First thing tomorrow morning."]] },
      { caller: "My brakes started making a grinding sound on the way home tonight.", exchanges: [["Does the vehicle still stop normally, or does the pedal feel different?", "The pedal feels soft, so I parked it."], ["What vehicle do you have?", "A 2018 Honda Accord."], ["Would you need help arranging a tow?", "Yes, that would be helpful."]] },
    ],
    captured: [["Intent", "Diagnostic service"], ["Urgency", "Safety screened"], ["Next step", "Service booking"], ["Team alert", "Vehicle summary"]],
    result: "A service-ready request with vehicle details, warning-light context, symptoms, and an approved appointment path.",
  },
  {
    name: "Cleaning Services",
    greeting: "Thanks for calling. I can help put together the right cleaning request. What kind of space needs service?",
    scenarios: [
      { caller: "I need a move-out cleaning for a two-bedroom apartment at the end of the month.", exchanges: [["How many bathrooms are in the apartment?", "Two bathrooms, and the apartment is about eleven hundred square feet."], ["Does it need appliance or carpet cleaning too?", "Yes, please include the oven and refrigerator."], ["What date must the cleaning be completed by?", "The keys are due back on the thirtieth."]] },
      { caller: "I’m looking for recurring cleaning every other week for our house.", exchanges: [["How many bedrooms and bathrooms are there?", "Four bedrooms and three bathrooms."], ["Are there any pets or access details the team should know?", "We have one friendly dog and a side-door code."], ["Which weekday would you prefer?", "Thursday mornings would be best."]] },
    ],
    captured: [["Service", "Move-out clean"], ["Property", "2-bedroom apartment"], ["Next step", "Quote workflow"], ["Team alert", "Job summary"]],
    result: "A quote-ready cleaning request with the property size, service date, address, and relevant add-ons already captured.",
  },
  {
    name: "Insurance",
    greeting: "Thank you for calling. I can help collect the reason for your call and connect you with the right person.",
    scenarios: [
      { caller: "I’m shopping for coverage for a new home and would like to request a quote.", exchanges: [["When is the expected closing date?", "We are scheduled to close on September fifteenth."], ["Will this be your primary residence?", "Yes, we will be living there full time."], ["When can a licensed agent reach you?", "Tomorrow morning is best."]] },
      { caller: "I started a small contracting business and need to ask about liability coverage.", exchanges: [["What type of contracting work do you perform?", "Mostly residential painting and drywall."], ["Do you have employees or subcontractors?", "Two employees and occasional subcontractors."], ["When would you like an agent to call?", "Any time after two today."]] },
    ],
    captured: [["Intent", "Home quote"], ["Timeline", "Effective date"], ["Next step", "Agent follow-up"], ["Team alert", "Quote summary"]],
    result: "A clean quote request routed to a licensed team member with coverage type, timeline, and property context.",
  },
];

const goals = [
  { key: "book", label: "Book each appointment", buttonCopy: "Offer approved times and confirm the next step while the caller is engaged.", outcome: "Checks eligibility, finds an approved opening, and confirms the appointment before the caller hangs up.", closing: "I have two approved openings available: Tuesday at 10:30 or Wednesday at 2:00. Which works better for you?", reply: "Tuesday at 10:30 works for me.", confirmation: "Perfect. You are confirmed for Tuesday at 10:30. I’ll send the details by text now.", action: "APPOINTMENT CONFIRMED" },
  { key: "qualify", label: "Qualify new leads", buttonCopy: "Capture fit, urgency, and decision-ready details before your team follows up.", outcome: "Completes a consistent intake, identifies urgency, and routes a useful summary to the right person.", closing: "Thanks, I have the key details. I’m marking this as a qualified request for the right specialist to review.", reply: "Great. The number I’m calling from is the best way to reach me.", confirmation: "Got it. Your summary is ready, and the right team member will follow up in your preferred window.", action: "QUALIFIED LEAD ROUTED" },
  { key: "cover", label: "Cover nights & overflow", buttonCopy: "Answer immediately, resolve routine calls, and escalate urgent requests safely.", outcome: "Keeps callers from reaching voicemail after hours and applies your exact rules for routine and urgent requests.", closing: "I have everything I need. This meets the urgent-response rule, so I’m notifying the on-call team now.", reply: "Thank you. I’ll keep my phone nearby.", confirmation: "The alert has been sent, and I’ll text you a confirmation with what happens next.", action: "ON-CALL ALERT SENT" },
] as const;

export function DemoExperience() {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [goalKey, setGoalKey] = useState<(typeof goals)[number]["key"]>("book");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [callRun, setCallRun] = useState(0);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const industry = industries[industryIndex];
  const goal = useMemo(() => goals.find((item) => item.key === goalKey) ?? goals[0], [goalKey]);
  const scenario = industry.scenarios[scenarioIndex % industry.scenarios.length];
  const transcript = useMemo(() => {
    const lines: { speaker: "AI RECEPTIONIST" | "CALLER"; text: string }[] = [
      { speaker: "AI RECEPTIONIST", text: industry.greeting },
      { speaker: "CALLER", text: scenario.caller },
    ];
    scenario.exchanges.forEach(([question, answer]) => {
      lines.push({ speaker: "AI RECEPTIONIST", text: question }, { speaker: "CALLER", text: answer });
    });
    lines.push(
      { speaker: "AI RECEPTIONIST", text: goal.closing },
      { speaker: "CALLER", text: goal.reply },
      { speaker: "AI RECEPTIONIST", text: goal.confirmation },
    );
    return lines;
  }, [goal, industry, scenario]);

  const startDifferentCall = (nextIndustryIndex = industryIndex) => {
    const choices = industries[nextIndustryIndex].scenarios.length;
    const nextScenario = choices < 2 ? 0 : (scenarioIndex + 1 + Math.floor(Math.random() * (choices - 1))) % choices;
    setScenarioIndex(nextScenario);
    setVisibleLines(1);
    setElapsedSeconds(0);
    setCallRun((run) => run + 1);
  };

  useEffect(() => {
    const revealTimer = window.setInterval(() => {
      setVisibleLines((current) => {
        if (current >= transcript.length) {
          window.clearInterval(revealTimer);
          return current;
        }
        return current + 1;
      });
    }, 1050);
    const callTimer = window.setInterval(() => setElapsedSeconds((current) => current + 1), 1000);
    return () => {
      window.clearInterval(revealTimer);
      window.clearInterval(callTimer);
    };
  }, [callRun, transcript.length]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    startDifferentCall(0);
    // Randomize the first caller after hydration; later runs always pick a different scenario.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleLines]);

  const callTime = `${String(Math.floor(elapsedSeconds / 60)).padStart(2, "0")}:${String(elapsedSeconds % 60).padStart(2, "0")}`;
  const callComplete = visibleLines >= transcript.length;

  return <>
    <SiteHeader />
    <main className="demoPage">
      <section className="demoHero">
        <div className="demoHeroCopy">
          <p className="eyebrow">DESIGN YOUR CALL EXPERIENCE</p>
          <h1>Don’t watch a generic demo. Build the call your business needs.</h1>
          <p>Choose the work you want handled. We’ll show how the conversation, qualification, routing, and handoff fit together before you book anything.</p>
          <div className="demoHeroActions">
            <a className="button" href="#call-plan">Build my call plan <span>↓</span></a>
            <a className="demoTextLink" href="#how-it-works">See the complete handoff <span>↘</span></a>
          </div>
          <div className="demoHeroTrust"><span>✓ Built around your workflow</span><span>✓ No generic recording</span><span>✓ No commitment</span></div>
        </div>
        <div className="demoHeroProof" aria-label="What the experience covers">
          <div className="demoProofHead"><span><i /> YOUR CALL BLUEPRINT</span><b>4 PARTS</b></div>
          <div className="demoProofList">
            <article><span>01</span><div><strong>First response</strong><p>The greeting, tone, and information callers hear immediately.</p></div></article>
            <article><span>02</span><div><strong>Useful questions</strong><p>The details needed to understand fit, intent, and urgency.</p></div></article>
            <article><span>03</span><div><strong>Business action</strong><p>Booking, routing, escalation, or a defined follow-up path.</p></div></article>
            <article><span>04</span><div><strong>Clean handoff</strong><p>A structured summary your team can act on without replaying voicemail.</p></div></article>
          </div>
          <p className="demoProofFoot"><span>●</span> Every part changes to match your selected business.</p>
        </div>
      </section>

      <section className="callPlan" id="call-plan">
        <div className="callPlanHeading">
          <div><p className="eyebrow">INTERACTIVE CALL PLAN</p><h2>See the system before the sales call.</h2></div>
          <p>This is not a prerecorded demo. Change the industry and goal to preview the actual structure we would build around your calls.</p>
        </div>

        <div className="callPlanControls">
          <label htmlFor="demoIndustry">Choose your industry</label>
          <div className="demoSelectWrap"><select id="demoIndustry" value={industryIndex} onChange={(event) => { const next = Number(event.target.value); setIndustryIndex(next); startDifferentCall(next); }}>{industries.map((item, index) => <option value={index} key={item.name}>{item.name}</option>)}</select><span>⌄</span></div>
          <fieldset><legend>Choose the main outcome</legend><div>{goals.map((item) => <button type="button" key={item.key} className={goalKey === item.key ? "active" : ""} aria-pressed={goalKey === item.key} onClick={() => { setGoalKey(item.key); startDifferentCall(); }}><i /><span><strong>{item.label}</strong><small>{item.buttonCopy}</small></span></button>)}</div></fieldset>
        </div>

        <div className="callPlanWorkspace" key={`${industryIndex}-${goalKey}-${callRun}`}>
          <div className="callConversation">
            <div className="liveCallHeader">
              <div><span className="phoneMark">☎</span><span><small>INBOUND PHONE CALL</small><strong>{industry.name} caller</strong></span></div>
              <div className="liveCallStatus"><i /><b>LIVE</b><time>{callTime}</time></div>
            </div>
            <div className="audioActivity" aria-hidden="true"><span>CALL AUDIO</span><div>{Array.from({ length: 26 }, (_, index) => <i key={index} style={{ animationDelay: `${(index % 7) * -0.12}s` }} />)}</div></div>
            <div className="phoneTranscript" ref={transcriptRef} aria-live="polite" aria-label="Live phone call transcript">
              {transcript.slice(0, visibleLines).map((line, index) => <article className={line.speaker === "CALLER" ? "callerLine" : "aiLine"} key={`${index}-${line.text}`}>
                <span className="transcriptAvatar">{line.speaker === "CALLER" ? "C" : "AI"}</span>
                <div><small><b>{line.speaker}</b><time>{`00:${String(index * 3 + 1).padStart(2, "0")}`}</time></small><p>{line.text}</p></div>
              </article>)}
              {!callComplete && <div className="transcriptThinking"><span><i /><i /><i /></span>{visibleLines % 2 === 0 ? "Listening to caller…" : "Preparing the next response…"}</div>}
            </div>
            <div className="transcriptFooter"><span>{visibleLines} of {transcript.length} call lines shown</span><button type="button" onClick={() => startDifferentCall()}>↻ Run another call</button></div>
          </div>
          <div className={`callOutcome ${callComplete ? "complete" : "building"}`}>
            <div className="callOutcomeHead"><span>LIVE HANDOFF PREVIEW</span><b>{callComplete ? "READY" : "BUILDING"}</b></div>
            <p className="selectedGoal"><small>PRIMARY GOAL</small><strong>{goal.label}</strong><span>{goal.outcome}</span></p>
            <div className="capturedDetails">{industry.captured.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
            <div className="callResult"><span>✓</span><div><small>{goal.action}</small><strong>{industry.result}</strong></div></div>
          </div>
        </div>
      </section>

      <section className="demoProcess" id="how-it-works">
        <div className="demoProcessIntro"><p className="eyebrow">FROM IDEA TO WORKING SYSTEM</p><h2>A walkthrough should end with a plan, not another pitch.</h2><p>We use your real call types to map the safest, most useful first version of the receptionist.</p></div>
        <div className="demoProcessTrack">
          <article><span>01</span><strong>Bring one real call</strong><p>A missed lead, booking request, after-hours inquiry, or intake your team handles repeatedly.</p></article>
          <article><span>02</span><strong>Define a successful outcome</strong><p>Choose what the caller and your team should have when the conversation ends.</p></article>
          <article><span>03</span><strong>Map questions and exceptions</strong><p>Set the information to collect, the rules to follow, and the moments that require a person.</p></article>
          <article><span>04</span><strong>Leave with a blueprint</strong><p>See a practical first workflow and decide whether it is worth building, without pressure.</p></article>
        </div>
      </section>

      <section className="demoConversion">
        <div className="demoConversionCopy"><p className="eyebrow">YOUR NEXT CALL IS THE BEST TEST</p><h2>Bring us the conversation your team cannot keep missing.</h2><p>We’ll turn it into a clear call blueprint using your services, questions, availability, and escalation rules.</p></div>
        <div className="demoConversionActions">
          <a className="button" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Build my live walkthrough <span>↗</span></a>
          <a href="tel:7146955646"><small>PREFER TO CALL?</small><strong>(714) 695-5646 <span>↗</span></strong></a>
          <p><span>✓</span> No commitment. Bring one scenario. Leave with a usable plan.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
