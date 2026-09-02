# CyberArmor Registration — one-time setup

The form (`/cyberarmor-registration`) now submits directly to
[FormSubmit.co](https://formsubmit.co), which emails every entry (including
the payment receipt as an attachment) straight to
**atmecyberarmor@gmail.com**. There is no backend, no credentials, and
nothing to deploy for this to work — it's a plain HTML form POST.

## The one thing you must do: confirm the inbox

FormSubmit requires proving you own the destination address before it will
deliver anything there. The **first** time someone submits the form after
it goes live, FormSubmit sends a confirmation email to
`atmecyberarmor@gmail.com` with an activation link. Open that inbox and
click the link — every submission after that (including the one that
triggered it) will arrive normally. Until this is done, submissions are
silently dropped, so it's worth doing one test submission yourself right
after deploying and confirming from that inbox before telling anyone the
form is live.

## What the recipient sees

Each email arrives as a table with these rows: Full Name, USN, Semester,
Institute, Phone, email, Aadhaar Number, UTR / Transaction Number, and the
payment receipt attached as a file. Hitting "Reply" on the email replies
directly to the student's own address (FormSubmit reads that from the
"email" field automatically).

## Notes

- **Size limit**: FormSubmit caps attachments at 10 MB total per
  submission; the form's own client-side limit is lower than that.
- **Spam**: the form currently leaves FormSubmit's default spam handling
  in place. If real registrations start getting challenged or spam gets
  through, FormSubmit supports a `_captcha=false` hidden field to disable
  its checkpoint, or `_blacklist` to filter by keyword — say the word and
  I'll wire either in.
- **No spreadsheet**: unlike the earlier design, this path does not also
  populate a Google Sheet — every registration lives only in that Gmail
  inbox (searchable, exportable via Gmail's own tools) unless you forward
  or file them elsewhere yourselves.
- **Aadhaar numbers** are emailed as plain text in each notification —
  treat that inbox with the same care you would a spreadsheet containing
  the same data.
