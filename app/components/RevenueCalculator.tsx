"use client";

import { useState } from "react";

export function RevenueCalculator() {
  const [calls, setCalls] = useState(5);
  const [customerValue, setCustomerValue] = useState(500);
  const [closeRate, setCloseRate] = useState(30);
  const [showResults, setShowResults] = useState(false);
  const monthly = Math.round(calls * 30 * customerValue * (closeRate / 100));
  const yearly = monthly * 12;

  return <section className="recovery">
    <div className="recoveryIntro">
      <p className="lossPill">↘ Revenue Leakage</p>
      <h2>The Cost of Missed Communication</h2>
      <p>Missed calls and slow follow-up quietly drain revenue. See what those missed opportunities could be worth to your business.</p>
    </div>

    <div className="recoveryGrid">
      <div className="recoveryStory">
        <Question n="01" text="How many calls does your business miss every day?" />
        <Question n="02" text="How many of those callers could become customers?" />
        <Question n="03" text="How much is one new customer worth?" />
        <Question n="04" text="How much revenue could slow follow-up be costing you?" />
        <div className={"lossSummary " + (showResults ? "revealed" : "concealed")}>
          <small>POTENTIAL REVENUE LEAKAGE</small>
          <strong>{showResults ? String.fromCharCode(36) + monthly.toLocaleString() : "???"} <span>per month</span></strong>
          <p>If one additional customer is worth more than better call handling, recovering even a single missed opportunity makes the system valuable.</p>
        </div>
      </div>

      <div className="calc">
        <div className="calcTop"><CalculatorIcon /> Opportunity Calculator</div>
        <label htmlFor="missedCalls">Missed calls per day</label>
        <input id="missedCalls" type="number" min="0" value={calls} onChange={(e) => { setCalls(Number(e.target.value) || 0); setShowResults(false); }} />
        <label htmlFor="customerValue">Average new customer value ($)</label>
        <input id="customerValue" type="number" min="0" value={customerValue} onChange={(e) => { setCustomerValue(Number(e.target.value) || 0); setShowResults(false); }} />
        <label htmlFor="closeRate">Estimated % of callers who would buy (%)</label>
        <input id="closeRate" type="number" min="0" max="100" value={closeRate} onChange={(e) => { setCloseRate(Math.min(100, Number(e.target.value) || 0)); setShowResults(false); }} />
        <button className="calculateButton" onClick={() => setShowResults(true)}>See What You Could Be Missing</button>
        <div className={"results " + (showResults ? "revealed" : "concealed")}>
          <div><small>PER MONTH</small><strong>{showResults ? String.fromCharCode(36) + monthly.toLocaleString() : "???"}</strong></div>
          <div><small>PER YEAR</small><strong>{showResults ? String.fromCharCode(36) + yearly.toLocaleString() : "???"}</strong></div>
        </div>
        <a className="recoverButton" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Recover These Opportunities <span>→</span></a>
      </div>
    </div>
  </section>;
}

function CalculatorIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm1 3v4h10V5H7Zm0 7v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm-8 4v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"/></svg>;
}

function Question({ n, text }: { n: string; text: string }) {
  return <div className="question"><b>{n}</b><span>{text}</span></div>;
}
