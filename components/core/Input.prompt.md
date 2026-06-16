Dark form field for the booking/contact forms. Cyan focus ring + glow.

```jsx
<Input label="Nume" placeholder="Numele tău" />
<Input label="Telefon" type="tel" icon={<PhoneIcon/>} />
<Input label="Mesaj" type="textarea" hint="Spune-ne câți participanți." />
```

`type="textarea"` for multiline; pass `error` to show the danger state. Labels are uppercase mono.
