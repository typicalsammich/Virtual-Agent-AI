"use client";

import { useMemo, useState } from "react";

const BOOKING_URL = "https://calendar.app.google/SDQkfwQwqctAsQd7A";
const coverageOptions = ["Overflow only", "Nights & weekends", "24/7 coverage"];
const workflowOptions = ["Answer & route", "Qualify leads", "Book + integrate"];

function roundToFifty(value: number) {
  return Math.round(value / 50) * 50;
}

export function PricingEstimator() {
  const [calls, setCalls] = useState(300);
  const [coverage, setCoverage] = useState(1);
  const [workflow, setWorkflow] = useState(1);

  const estimate = useMemo(() => {
    const average = roundToFifty(250 + calls * 0.55 + [0, 180, 350][coverage] + [0, 220, 430][workflow]);
    return {
      average,
      low: roundToFifty(average * 0.85),
      high: roundToFifty(average * 1.2),
    };
  }, [calls, coverage, workflow]);

  return <section className="pricingEstimator" aria-label="Monthly pricing estimator">
    <div className="pricingControls">
      <div className="pricingControl">
        <div><label htmlFor="monthly-calls">Monthly call volume</label><output>{calls.toLocaleString()} calls</output></div>
        <input id="monthly-calls" type="range" min="100" max="1200" step="100" value={calls} onChange={(event) => setCalls(Number(event.target.value))} />
        <p><span>100</span><span>1,200+</span></p>
      </div>

      <div className="pricingControl">
        <div><label htmlFor="coverage">Coverage</label><output>{coverageOptions[coverage]}</output></div>
        <input id="coverage" type="range" min="0" max="2" step="1" value={coverage} onChange={(event) => setCoverage(Number(event.target.value))} />
        <p>{coverageOptions.map((option) => <span key={option}>{option}</span>)}</p>
      </div>

      <div className="pricingControl">
        <div><label htmlFor="workflow">Call workflow</label><output>{workflowOptions[workflow]}</output></div>
        <input id="workflow" type="range" min="0" max="2" step="1" value={workflow} onChange={(event) => setWorkflow(Number(event.target.value))} />
        <p>{workflowOptions.map((option) => <span key={option}>{option}</span>)}</p>
      </div>
    </div>

    <aside className="pricingEstimate" aria-live="polite">
      <p className="eyebrow">ESTIMATED AVERAGE</p>
      <strong>${estimate.average.toLocaleString()}<small>/month</small></strong>
      <p>Typical planning range: <b>${estimate.low.toLocaleString()} to ${estimate.high.toLocaleString()}/month</b></p>
      <span>This is an estimate, not a final quote. Your exact price is confirmed after a short review of your real call flow.</span>
      <a className="button" href={BOOKING_URL}>Book a pricing call <b>↗</b></a>
    </aside>
  </section>;
}
