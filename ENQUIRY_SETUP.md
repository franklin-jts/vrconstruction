# Enquiry Data Collection Setup Guide

## Current Form Fields
Your website collects:
1. **Name** (text input)
2. **Mobile Number** (tel input)
3. **Project Type** (dropdown: Independent House, Villa, Duplex, Renovation)

## Option 1: Google Sheets (FREE & EASY) ⭐ RECOMMENDED

### Step 1: Create a Google Form
1. Go to https://forms.google.com
2. Create new form with fields:
   - Name
   - Mobile Number
   - Project Type (Multiple choice)
3. Get the form ID from the URL: `https://forms.google.com/u/0/forms/d/[FORM_ID]/edit`

### Step 2: Integrate with Website
Add this to your form's onSubmit:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('entry.123456', name); // Replace 123456 with field ID
  formData.append('entry.789012', mobile);
  formData.append('entry.345678', projectType);
  
  fetch('https://docs.google.com/forms/d/[FORM_ID]/formResponse', {
    method: 'POST',
    body: formData,
  })
  .then(() => alert('Enquiry submitted!'))
  .catch(err => console.error(err));
}
```

### Step 3: View Responses
- Responses auto-save in Google Sheets
- Sheet URL in form settings

---

## Option 2: Email Notification (Using Backend) 

Setup EmailJS or similar service to send form data to your email.

---

## Option 3: Firebase (FREE with quota)

Store enquiry data in Firebase Realtime Database or Firestore.

---

## Option 4: Custom Backend API

Build a simple Node.js/Express backend to save enquiry data to a database.

---

## Forms to Update

### File 1: `src/components/Hero.jsx` (Line 184)
```jsx
<form onSubmit={handleSubmit}>
  <input value={name} onChange={(e) => setName(e.target.value)} />
  <input value={mobile} onChange={(e) => setMobile(e.target.value)} />
  <button>Submit</button>
</form>
```

### File 2: `src/components/FinalCta.jsx` (Line 58)
Same structure as Hero form.

---

## What I Recommend

Use **Google Forms** (Option 1) because:
✅ Free
✅ No coding needed
✅ Automatic email notifications
✅ Responses organized in Google Sheets
✅ Easy to share with team
✅ No backend needed

---

## Next Steps

Tell me which option you prefer, and I'll:
1. Create the integration code
2. Update the form components
3. Test the submission
4. Deploy to GitHub

Which method would you like to use?
