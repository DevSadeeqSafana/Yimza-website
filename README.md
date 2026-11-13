# Yimza Consult Website

Next.js site for [Yimza Consult](https://www.yimzaconsult.com.ng) — IT consultancy, training, academic support, and management products (YimzaCare / YimzaEdu).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
RESEND_API_KEY=re_xxx
FORM_TO_EMAIL=info@yimzaconsult.com
FORM_FROM_EMAIL=Yimza Consult <onboarding@resend.dev>
```

### Confirming form delivery (audit P-06)

1. Set `RESEND_API_KEY` and a verified `FORM_FROM_EMAIL` in Resend.
2. Set `FORM_TO_EMAIL` to the monitored inbox.
3. Submit `/contact` and `/training` forms.
4. Confirm the email arrives (check spam). Reply-To is the visitor address.
5. Without `RESEND_API_KEY`, local `next dev` logs submissions to the server console instead of sending.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Client asset hand-off

Still needed for production polish:

- Real team photos and confirmed names/roles
- Named testimonial photos / org logos
- Product UI screenshots for YimzaCare and YimzaEdu
- LinkedIn URL (if any)
- Confirmed mailbox + Resend domain verification
- Final legal review of Privacy / Terms / Training Terms drafts
