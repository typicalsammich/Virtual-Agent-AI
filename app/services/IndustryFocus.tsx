"use client";

import { useState } from "react";

const industryOptions = {
  home: { name: "Home Services", category: "ROOFING · HVAC · PLUMBING · RESTORATION", headline: "Turn urgent calls into booked jobs.", description: "When a homeowner needs help, the business that responds first usually wins. The AI keeps the conversation moving while intent is high.", caller: "My AC is running, but the house keeps getting warmer.", captures: "Service needed, location, urgency, and preferred appointment time", next: "Book an available visit or alert the on-call team", result: "A qualified service request ready for dispatch" },
  legal: { name: "Law Firms", category: "CLIENT INTAKE · QUALIFICATION · CONSULTATIONS", headline: "Give every potential client a professional first response.", description: "The AI responds calmly, gathers the essential facts, and routes each matter according to the firm’s intake rules.", caller: "I was injured in an accident last week and need to know what to do next.", captures: "Practice area, incident summary, location, timing, and contact details", next: "Schedule a consultation or send the intake to the correct team", result: "Complete intake delivered before the opportunity goes cold" },
  mortgage: { name: "Mortgage & Finance", category: "BORROWER INTAKE · LEAD RESPONSE · FOLLOW-UP", headline: "Respond while borrower interest is still high.", description: "New inquiries receive immediate attention and loan professionals get the context needed for a productive follow-up.", caller: "I’m buying my first home and want to understand what I might qualify for.", captures: "Loan goal, property status, timeline, location, and contact preference", next: "Route the inquiry and schedule a call with the right loan professional", result: "A qualified borrower inquiry ready for follow-up" },
  realEstate: { name: "Real Estate Teams", category: "BUYER LEADS · SELLER INQUIRIES · SHOWINGS", headline: "Convert property interest into real conversations.", description: "The AI qualifies buyers and sellers, answers listing questions, and makes sure motivated prospects reach the right agent quickly.", caller: "I saw the listing on Oak Street and would like to tour it this weekend.", captures: "Property, buying or selling intent, timeline, financing status, and availability", next: "Schedule a showing or route the lead to the assigned agent", result: "A motivated prospect with a clear next step" },
  healthcare: { name: "Healthcare & Dental", category: "PATIENT INTAKE · APPOINTMENTS · ROUTING", headline: "Make it easier for patients to get the right help.", description: "Routine questions, appointment requests, and office routing are handled consistently while urgent matters follow your escalation rules.", caller: "I chipped a tooth and want to see if you have an appointment today.", captures: "Reason for visit, urgency, patient status, insurance basics, and availability", next: "Offer an appointment or follow the office’s urgent-call procedure", result: "A prepared appointment request sent to the front desk" },
  automotive: { name: "Automotive Services", category: "REPAIR REQUESTS · ESTIMATES · SCHEDULING", headline: "Keep service bays filled without tying up the front desk.", description: "The AI gathers vehicle and service details, answers common questions, and moves qualified requests toward an appointment.", caller: "My check-engine light came on and the car is starting to shake.", captures: "Vehicle, symptoms, urgency, service history, and preferred time", next: "Schedule a diagnostic visit or escalate a safety concern", result: "A detailed repair request ready for the service advisor" },
  property: { name: "Property Management", category: "LEASING · MAINTENANCE · TENANT ROUTING", headline: "Handle tenant and leasing calls without the constant interruption.", description: "The AI separates routine questions from urgent issues and gives every caller a clear, documented next step.", caller: "There’s water coming through the ceiling in my apartment.", captures: "Property, unit, issue type, severity, access details, and callback number", next: "Trigger emergency maintenance or create a documented service request", result: "The right issue routed to the right person immediately" },
  insurance: { name: "Insurance Agencies", category: "QUOTE REQUESTS · POLICY QUESTIONS · CLAIMS ROUTING", headline: "Respond to prospects before they request the next quote.", description: "The AI handles first-touch conversations, collects accurate policy details, and routes opportunities or service requests correctly.", caller: "I just bought a house and need a homeowners insurance quote.", captures: "Coverage needed, property or vehicle basics, timeline, and contact details", next: "Schedule an agent call or send a complete quote request", result: "A ready-to-work insurance opportunity" },
} as const;

type IndustryOption = keyof typeof industryOptions;

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
        <div className="industryCaller"><small>EXAMPLE CALL</small><blockquote>“{industry.caller}”</blockquote></div>
      </div>
      <div className="industryResponse">
        <article><small>WHAT THE AI CAPTURES</small><p>{industry.captures}</p></article>
        <article><small>NEXT STEP</small><p>{industry.next}</p></article>
        <div className="industryResult"><span>✓</span><div><small>BUSINESS OUTCOME</small><strong>{industry.result}</strong></div></div>
      </div>
    </div>
  </div>;
}
