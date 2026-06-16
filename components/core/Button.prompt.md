Arena Play's pill CTA button with neon glow — use for every call-to-action (Rezervă, Vezi jocurile, WhatsApp).

```jsx
<Button variant="primary" size="lg">Rezervă acum</Button>
<Button variant="outline" iconRight={<span>→</span>}>Vezi jocurile</Button>
```

Variants: `primary` (cyan, main CTA), `secondary` (violet), `accent` (green, "go"/success), `outline` (glowing hairline), `ghost` (bare nav). Sizes `sm | md | lg`. Pass `iconLeft`/`iconRight` (Lucide nodes), `fullWidth`, `as="a"` for links. Hover brightens fill + glow; press scales to 0.97.
