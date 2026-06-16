The base dark-glass panel for everything boxed — feature tiles, info blocks, list items.

```jsx
<Card><h3>Team Building XR</h3><p>Adrenalină, strategie, colaborare.</p></Card>
<Card glow="accent" interactive={false}>Pachet recomandat</Card>
```

`glow` (`none|primary|secondary|accent`) gives a permanent featured ring; otherwise it lifts on hover. `interactive={false}` to disable hover; `padded={false}` for full-bleed media inside. `as="a"` for clickable cards.
