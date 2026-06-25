'use client';

import { useState, useRef } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();

const contactus =()=> {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit() {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const { data, error } = await forminit.submit('YOUR_FORM_ID', formData);

    if (error) {
      setStatus('error');
      setErrorMessage(error.message);
      return;
    }

    setStatus('success');
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* sender: who's submitting (built-in, max 1 per submission) */}
      {/* <input type="text"  name="fi-sender-firstName" placeholder="First name" />
      <input type="text"  name="fi-sender-lastName"  placeholder="Last name" /> */}
      {/* Single-field alternative to firstName/lastName */}
      <input type="text"  name="fi-sender-fullName"  placeholder="Full name" />
      <input type="email" name="fi-sender-email"     placeholder="Email" required />
      <input type="text"  name="fi-sender-phone"     placeholder="Phone" />
      {/* <input type="text"  name="fi-sender-title"     placeholder="Title (Mr., Ms., Dr.)" />
      <input type="text"  name="fi-sender-company"   placeholder="Company" />
      <input type="text"  name="fi-sender-position"  placeholder="Job title" />
      <input type="text"  name="fi-sender-address"   placeholder="Address" />
      <input type="text"  name="fi-sender-address2"  placeholder="Address line 2 (apt, suite, etc.)" />
      <input type="text"  name="fi-sender-city"      placeholder="City" />
      <input type="text"  name="fi-sender-postcode"  placeholder="Postcode / ZIP" />
      <input type="text"  name="fi-sender-country"   placeholder="Country (ISO 3166-1 alpha-2, e.g. US)" />
      <input type="hidden" name="fi-sender-userId"   value="ext_12345" /> */}

      {/* text: free-form answer, no validation */}
      {/* <textarea name="fi-text-message" placeholder="Message" />

      {/* number: any numeric value */}
      <input type="number" name="fi-number-budget" placeholder="Budget" />

      {/* email: a second email beyond the sender's */}
      <input type="email" name="fi-email-invitee" placeholder="Invitee email" />

      {/* phone: a second phone beyond the sender's, E.164 format */}
      <input type="text" name="fi-phone-emergency" placeholder="Emergency contact" />

      {/* url: validated as a URL */}
      {/* <input type="url" name="fi-url-website" placeholder="Your website" /> */}

      {/* <select name="fi-select-plan">
        <option value="basic">Basic</option>
        <option value="pro">Pro</option>
        <option value="enterprise">Enterprise</option>
      </select>

      <label><input type="radio" name="fi-radio-priority" value="low"  /> Low</label>
      <label><input type="radio" name="fi-radio-priority" value="high" /> High</label>

\      <label><input type="checkbox" name="fi-checkbox-features" value="api" />     API</label>
      <label><input type="checkbox" name="fi-checkbox-features" value="support" /> Support</label>

      <input type="range" name="fi-rating-satisfaction" min={1} max={5} step={1} defaultValue={3} />

      <input type="date" name="fi-date-appointment" />

      <input type="file" name="fi-file-resume" /> */} */
{/* 
      <select name="fi-country-shipping">
        <option value="US">United States</option>
        <option value="GB">United Kingdom</option>
      </select> */}

      {status === 'error' && (
        <p className="status-error">{errorMessage}</p>
      )}
      {status === 'success' && (
        <p className="status-success">Message sent successfully!</p>
      )}

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
export default contactus;