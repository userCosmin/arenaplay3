/* @ds-bundle: {"format":3,"namespace":"ArenaPlayDesignSystem_492f49","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GameCard","sourcePath":"components/core/GameCard.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PriceCard","sourcePath":"components/core/PriceCard.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatCounter","sourcePath":"components/core/StatCounter.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2133edb9e6b4","components/core/Button.jsx":"3038e1347e32","components/core/Card.jsx":"3dc9e0863b97","components/core/GameCard.jsx":"a643c9c735df","components/core/Input.jsx":"90b6c621438b","components/core/PriceCard.jsx":"a7eda0a7d161","components/core/SectionHeading.jsx":"9b1ccb89e544","components/core/StatCounter.jsx":"4c7ec3f8a4ec","ui_kits/website/BookingScreen.jsx":"a362e0add4d8","ui_kits/website/EduScreen.jsx":"de12d63cd689","ui_kits/website/ExperienceGrid.jsx":"abc172c317b6","ui_kits/website/Footer.jsx":"c5874b4f7f5e","ui_kits/website/GamesScreen.jsx":"6af5265042c8","ui_kits/website/Hero.jsx":"acb0f30d7054","ui_kits/website/Nav.jsx":"74cb134b2cb8","ui_kits/website/PartyScreen.jsx":"6e931c3cee78","ui_kits/website/Sections.jsx":"67229e1ef379","ui_kits/website/data.js":"1ffae207a76a","ui_kits/website/ui.jsx":"af4ead781e13"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArenaPlayDesignSystem_492f49 = window.ArenaPlayDesignSystem_492f49 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — Badge / Chip
 * Small status or tag pill. Use for game categories, "Multiplayer",
 * age ratings, availability. tone sets the color; solid fills it.
 */
function Badge({
  children,
  tone = 'primary',
  solid = false,
  size = 'md',
  style,
  ...props
}) {
  const tones = {
    primary: {
      c: 'var(--ap-primary)',
      bg: 'rgba(0,229,255,0.12)',
      bd: 'rgba(0,229,255,0.4)'
    },
    secondary: {
      c: 'var(--ap-secondary-300)',
      bg: 'rgba(123,46,255,0.16)',
      bd: 'rgba(123,46,255,0.45)'
    },
    accent: {
      c: 'var(--ap-accent)',
      bg: 'rgba(0,255,148,0.12)',
      bd: 'rgba(0,255,148,0.4)'
    },
    neutral: {
      c: 'var(--ap-text-secondary)',
      bg: 'rgba(184,193,217,0.1)',
      bd: 'var(--ap-border-strong)'
    },
    warning: {
      c: 'var(--ap-warning)',
      bg: 'rgba(255,197,61,0.14)',
      bd: 'rgba(255,197,61,0.4)'
    }
  }[tone];
  const pad = size === 'sm' ? '0.2rem 0.55rem' : '0.32rem 0.75rem';
  const fs = size === 'sm' ? '0.6875rem' : '0.75rem';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      padding: pad,
      fontFamily: 'var(--ap-font-mono)',
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--ap-radius-pill)',
      color: solid ? 'var(--ap-text-on-bright)' : tones.c,
      background: solid ? tones.c : tones.bg,
      border: `1px solid ${solid ? 'transparent' : tones.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — Button
 * Pill button with neon glow. Primary = cyan fill, secondary = violet,
 * accent = green, outline = glowing hairline, ghost = bare.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '0.5rem 1rem',
      font: '0.8125rem',
      gap: '0.4rem'
    },
    md: {
      padding: '0.75rem 1.5rem',
      font: '0.9375rem',
      gap: '0.5rem'
    },
    lg: {
      padding: '1rem 2rem',
      font: '1.0625rem',
      gap: '0.6rem'
    }
  }[size];
  const fills = {
    primary: {
      background: hover ? 'var(--ap-primary-300)' : 'var(--ap-primary)',
      color: 'var(--ap-text-on-bright)',
      boxShadow: hover ? 'var(--ap-glow-primary-md)' : 'var(--ap-glow-primary-sm)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--ap-secondary-300)' : 'var(--ap-secondary)',
      color: '#fff',
      boxShadow: hover ? 'var(--ap-glow-secondary-md)' : '0 0 0 1px rgba(123,46,255,.35)',
      border: '1px solid transparent'
    },
    accent: {
      background: hover ? 'var(--ap-accent-300)' : 'var(--ap-accent)',
      color: 'var(--ap-text-on-bright)',
      boxShadow: hover ? 'var(--ap-glow-accent-md)' : '0 0 0 1px rgba(0,255,148,.3)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'rgba(0,229,255,0.08)' : 'transparent',
      color: 'var(--ap-primary)',
      boxShadow: hover ? 'var(--ap-glow-primary-sm)' : 'none',
      border: '1px solid var(--ap-border-primary)'
    },
    ghost: {
      background: hover ? 'rgba(184,193,217,0.08)' : 'transparent',
      color: 'var(--ap-text-primary)',
      boxShadow: 'none',
      border: '1px solid transparent'
    }
  }[variant];
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes.gap,
      padding: sizes.padding,
      fontFamily: 'var(--ap-font-display)',
      fontSize: sizes.font,
      fontWeight: 600,
      letterSpacing: '0.01em',
      borderRadius: 'var(--ap-radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'transform var(--ap-dur-fast) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), background var(--ap-dur) var(--ap-ease-out)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...fills,
      ...style
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — Card
 * The standard dark glass panel. Hover lifts surface + cyan hairline + glow.
 * Use `glow` to feature a card permanently; `as="a"` for clickable cards.
 */
function Card({
  children,
  glow = 'none',
  interactive = true,
  padded = true,
  as = 'div',
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const glowShadow = {
    none: lift ? 'var(--ap-glow-primary-sm), var(--ap-inset-top)' : 'var(--ap-inset-top)',
    primary: 'var(--ap-glow-primary-md), var(--ap-inset-top)',
    secondary: 'var(--ap-glow-secondary-md), var(--ap-inset-top)',
    accent: 'var(--ap-glow-accent-md), var(--ap-inset-top)'
  }[glow];
  const border = glow !== 'none' ? `1px solid var(--ap-border-${glow === 'secondary' ? 'secondary' : 'primary'})` : `1px solid ${lift ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: lift ? 'var(--ap-surface-2)' : 'var(--ap-surface-1)',
      border,
      borderRadius: 'var(--ap-radius-lg)',
      boxShadow: glowShadow,
      padding: padded ? 'var(--ap-space-5)' : 0,
      transform: lift ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), background var(--ap-dur) var(--ap-ease-out), border-color var(--ap-dur) var(--ap-ease-out)',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GameCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — GameCard
 * Catalog tile for a VR/PlayStation/simulator title. Full-bleed image with
 * dark scrim, category + multiplayer/age badges, hover zoom + glow.
 */
function GameCard({
  title,
  category,
  image,
  players,
  age,
  multiplayer = false,
  description,
  onClick,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      borderRadius: 'var(--ap-radius-lg)',
      overflow: 'hidden',
      border: `1px solid ${hover ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`,
      background: 'var(--ap-surface-1)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--ap-glow-primary-sm)' : 'none',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out), border-color var(--ap-dur) var(--ap-ease-out)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--ap-dur-slow) var(--ap-ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(5,8,22,0) 30%, rgba(5,8,22,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '0.75rem',
      left: '0.75rem',
      display: 'flex',
      gap: '0.4rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "primary",
    size: "sm"
  }, category), multiplayer && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    size: "sm"
  }, "Multiplayer")), age && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '0.75rem',
      right: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm"
  }, age))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ap-space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h4)',
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), players && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-xs)',
      letterSpacing: '0.08em',
      color: 'var(--ap-text-tertiary)',
      textTransform: 'uppercase'
    }
  }, players)));
}
Object.assign(__ds_scope, { GameCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GameCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — Input
 * Dark form field. Supports label, icon, error. Focus = cyan ring + glow.
 * Use type="textarea" to render a multiline field.
 */
function Input({
  label,
  icon,
  error,
  hint,
  type = 'text',
  id,
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `ap-${Math.random().toString(36).slice(2, 8)}`;
  const isArea = type === 'textarea';
  const Field = isArea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: isArea ? 'flex-start' : 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '0.85rem',
      top: isArea ? '0.85rem' : '50%',
      transform: isArea ? 'none' : 'translateY(-50%)',
      color: focus ? 'var(--ap-primary)' : 'var(--ap-text-tertiary)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    type: isArea ? undefined : type,
    rows: isArea ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--ap-font-body)',
      fontSize: 'var(--ap-text-body)',
      color: 'var(--ap-text-primary)',
      background: 'var(--ap-surface-3)',
      border: `1px solid ${error ? 'var(--ap-danger)' : focus ? 'var(--ap-primary)' : 'var(--ap-border-strong)'}`,
      borderRadius: 'var(--ap-radius-md)',
      padding: icon ? '0.8rem 1rem 0.8rem 2.6rem' : '0.8rem 1rem',
      outline: 'none',
      resize: isArea ? 'vertical' : undefined,
      boxShadow: focus ? '0 0 0 3px rgba(0,229,255,0.18)' : 'none',
      transition: 'border-color var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out)',
      boxSizing: 'border-box'
    }
  }, props))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ap-text-xs)',
      color: error ? 'var(--ap-danger)' : 'var(--ap-text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — PriceCard
 * Pricing tile for sessions (30 lei) and packages (100 lei/pers).
 * `featured` gives it the violet glow + ribbon; `features` lists inclusions.
 */
function PriceCard({
  title,
  price,
  unit = 'lei',
  per,
  period,
  features = [],
  cta = 'Rezervă',
  onCta,
  featured = false,
  badge,
  icon,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ap-space-4)',
      background: featured ? 'var(--ap-surface-2)' : 'var(--ap-surface-1)',
      border: featured ? '1px solid var(--ap-border-secondary)' : `1px solid ${hover ? 'var(--ap-border-primary)' : 'var(--ap-border)'}`,
      borderRadius: 'var(--ap-radius-xl)',
      padding: 'var(--ap-space-6)',
      boxShadow: featured ? 'var(--ap-glow-secondary-md), var(--ap-inset-top)' : hover ? 'var(--ap-glow-primary-sm)' : 'var(--ap-inset-top)',
      transform: hover && !featured ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--ap-dur) var(--ap-ease-out), box-shadow var(--ap-dur) var(--ap-ease-out)',
      ...style
    }
  }, props), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--ap-space-5)',
      right: 'var(--ap-space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? 'secondary' : 'accent',
    solid: featured
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h4)',
      fontWeight: 600
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1,
      color: featured ? 'var(--ap-secondary-300)' : 'var(--ap-accent)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: '0.8125rem',
      color: 'var(--ap-text-secondary)'
    }
  }, unit, per ? ` / ${per}` : '')), period && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-tertiary)',
      marginTop: '-0.5rem'
    }
  }, period), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '0.6rem',
      alignItems: 'flex-start',
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-accent)',
      flex: 'none',
      marginTop: '0.05rem'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'secondary' : 'primary',
    fullWidth: true,
    onClick: onCta,
    style: {
      marginTop: 'auto'
    }
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — SectionHeading
 * Eyebrow + title (+ optional lead). The canonical section opener.
 * align center or left; title can carry a gradient run.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  gradient = false,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ap-space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: lead ? '52ch' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, props), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-eyebrow)',
      letterSpacing: 'var(--ap-ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ap-primary)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h2)',
      fontWeight: 700,
      letterSpacing: 'var(--ap-ls-tight)',
      lineHeight: 'var(--ap-lh-snug)',
      margin: 0,
      ...(gradient ? {
        background: 'var(--ap-gradient-brand)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      } : {
        color: 'var(--ap-text-primary)'
      })
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      lineHeight: 'var(--ap-lh-relaxed)',
      color: 'var(--ap-text-secondary)',
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arena Play — StatCounter
 * Animated count-up stat readout. Mono value in a brand color + label.
 * Counts up once when scrolled into view.
 */
function StatCounter({
  value = 0,
  suffix = '',
  prefix = '',
  label,
  tone = 'primary',
  duration = 1400,
  style,
  ...props
}) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = now => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const color = {
    primary: 'var(--ap-primary)',
    secondary: 'var(--ap-secondary-300)',
    accent: 'var(--ap-accent)',
    white: 'var(--ap-text-primary)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color
    }
  }, prefix, display.toLocaleString('ro-RO'), suffix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-xs)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCounter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingScreen.jsx
try { (() => {
// Arena Play — Rezervare (booking) screen with form
const {
  Input,
  Button: BBtn,
  SectionHeading: BHeading,
  Card: BCard,
  Badge: BBadge
} = window.ArenaPlayDesignSystem_492f49;
function BookingScreen() {
  const {
    EXPERIENCES
  } = window.APData;
  const [exp, setExp] = useState('VR Dinamic · Free-Roam');
  const [people, setPeople] = useState(4);
  const [sent, setSent] = useState(false);
  const options = EXPERIENCES.map(e => e.title);
  if (sent) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBlock: 'var(--ap-section-y)',
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(BCard, {
      glow: "accent",
      interactive: false,
      style: {
        textAlign: 'center',
        maxWidth: 460,
        padding: 'var(--ap-space-7)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ap-accent)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 48
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--ap-font-display)',
        fontSize: 'var(--ap-text-h3)',
        margin: '16px 0 8px'
      }
    }, "Cerere trimis\u0103!"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--ap-text-secondary)',
        marginBottom: 24
      }
    }, "Te contact\u0103m \xEEn cel mai scurt timp pentru confirmarea rezerv\u0103rii."), /*#__PURE__*/React.createElement(BBtn, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Trimite alt\u0103 cerere")));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(BHeading, {
    eyebrow: "Rezervare",
    title: "Rezerv\u0103-\u021Bi portalul",
    align: "center",
    lead: "Alege experien\u021Ba, data \u0219i num\u0103rul de participan\u021Bi. Confirm\u0103m rapid prin telefon sau WhatsApp."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 28,
      marginTop: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(BCard, {
    interactive: false
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-xs)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-secondary)'
    }
  }, "Experien\u021Ba"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 10
    }
  }, options.map(o => {
    const a = exp === o;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: o,
      onClick: () => setExp(o),
      style: {
        padding: '8px 14px',
        borderRadius: 'var(--ap-radius-pill)',
        cursor: 'pointer',
        fontSize: 13,
        background: a ? 'rgba(0,229,255,.12)' : 'transparent',
        color: a ? 'var(--ap-primary)' : 'var(--ap-text-secondary)',
        border: `1px solid ${a ? 'var(--ap-border-primary)' : 'var(--ap-border-strong)'}`
      }
    }, o);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nume complet",
    placeholder: "Numele t\u0103u",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    type: "tel",
    placeholder: "07xx xxx xxx",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Data",
    type: "date",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ora",
    type: "time",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 'var(--ap-text-xs)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-secondary)'
    }
  }, "Participan\u021Bi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--ap-surface-3)',
      border: '1px solid var(--ap-border-strong)',
      borderRadius: 'var(--ap-radius-md)',
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPeople(Math.max(1, people - 1)),
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid var(--ap-border)',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, people), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPeople(Math.min(16, people + 1)),
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid var(--ap-border)',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "+")))), /*#__PURE__*/React.createElement(Input, {
    label: "Mesaj (op\u021Bional)",
    type: "textarea",
    placeholder: "Petrecere, team building, grup \u0219colar...?"
  }), /*#__PURE__*/React.createElement(BBtn, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Trimite cererea de rezervare"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BCard, {
    interactive: false
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 16,
      marginBottom: 14
    }
  }, "Program"), [['Luni – Joi', 'Închis'], ['Vineri', '16:30 – 21:30'], ['Sâmbătă – Duminică', '11:30 – 21:30']].map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderTop: '1px solid var(--ap-border)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-text-secondary)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      color: h === 'Închis' ? 'var(--ap-text-tertiary)' : 'var(--ap-accent)'
    }
  }, h)))), /*#__PURE__*/React.createElement(BCard, {
    interactive: false
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 16,
      marginBottom: 12
    }
  }, "Contact direct"), [['phone', '076 849 1858', 'tel:+40768491858'], ['message-circle', 'WhatsApp', 'https://wa.me/40768491858'], ['map-pin', 'Alba Mall, Alba Iulia', '#']].map(([ic, t, href]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), t)))))));
}
window.BookingScreen = BookingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EduScreen.jsx
try { (() => {
// Arena Play — Arena Edu / After School XR screen
const {
  SectionHeading: EHeading,
  Card: ECard,
  Button: EBtn,
  Badge: EBadge
} = window.ArenaPlayDesignSystem_492f49;
function EduScreen({
  onNav
}) {
  const {
    IMG
  } = window.APData;
  const benefits = [{
    icon: 'brain',
    t: 'Atenție & concentrare',
    d: 'Imersiunea elimină distragerile — copiii rămân în lecție.'
  }, {
    icon: 'sparkles',
    t: 'Învățare prin experiență',
    d: 'Nu doar citesc despre concepte — le trăiesc direct.'
  }, {
    icon: 'lightbulb',
    t: 'Gândire critică & creativitate',
    d: 'Rezolvă, explorează, întreabă — activ, nu pasiv.'
  }, {
    icon: 'users',
    t: 'Spirit de echipă',
    d: 'Activități de grup sincronizate, ghidate de profesor.'
  }, {
    icon: 'cpu',
    t: 'Competențe digitale',
    d: 'Familiaritate naturală cu tehnologia de mâine.'
  }, {
    icon: 'heart',
    t: 'Motivație pentru școală',
    d: 'Învățare memorabilă care aprinde curiozitatea.'
  }];
  const trips = ['Sistemul Solar în VR', 'Explorarea corpului uman', 'Oceanele lumii', 'Civilizații antice', 'Lumea animalelor sălbatice', 'Minunile create de om', 'Simulări științifice STEM', 'Simulator de zbor educațional'];
  const steps = ['Sosirea grupului', 'Introducere & instruire', 'Activități educaționale VR', 'Experiențe interactive de grup', 'Întrebări & concluzii'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ap-gradient-void)',
      paddingBlock: 'clamp(3rem,7vw,5.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-accent)",
    size: 480,
    style: {
      top: -100,
      left: -120
    }
  }), /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-primary)",
    size: 460,
    style: {
      bottom: -200,
      right: -120
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EBadge, {
    tone: "accent"
  }, "Arena Edu \xB7 After School XR"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h1)',
      fontWeight: 700,
      letterSpacing: '-.02em',
      margin: '16px 0'
    }
  }, "Transform\u0103m \xEEnv\u0103\u021Barea \xEEntr-o aventur\u0103"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.7,
      maxWidth: '46ch'
    }
  }, "Prin tehnologia VR \u0219i XR, copiii nu doar \xEEnva\u021B\u0103 \u2014 experimenteaz\u0103 direct conceptele. Profesorul teleporteaz\u0103 \xEEntreaga clas\u0103, sincron, printre canioane uria\u0219e, ora\u0219e legendare \u0219i vulcani activi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(EBtn, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('book')
  }, "Solicit\u0103 ofert\u0103 After School"), /*#__PURE__*/React.createElement(EBtn, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "https://wa.me/40768491858",
    target: "_blank"
  }, "Programeaz\u0103 o vizit\u0103"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--ap-radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--ap-border-primary)',
      boxShadow: 'var(--ap-glow-accent-md)',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.edu,
    alt: "Edu XR",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(EHeading, {
    eyebrow: "Beneficii pentru copii",
    title: "Mai mult dec\xE2t un ecran",
    align: "center",
    lead: "Mai pu\u021Bin timp pasiv \xEEn fa\u021Ba ecranelor. Mai mult\u0103 explorare, \xEEnv\u0103\u021Bare \u0219i experien\u021Be memorabile."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginTop: 44
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.t,
    delay: i % 3 * 70
  }, /*#__PURE__*/React.createElement(ECard, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 600,
      fontSize: 'var(--ap-text-h4)',
      margin: '12px 0 8px'
    }
  }, b.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.6
    }
  }, b.d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)',
      background: 'var(--ap-gradient-void)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EHeading, {
    eyebrow: "Excursii virtuale",
    title: "Unde mergem azi?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 24
    }
  }, trips.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '10px 16px',
      borderRadius: 'var(--ap-radius-pill)',
      background: 'var(--ap-surface-1)',
      border: '1px solid var(--ap-border)',
      fontSize: 13.5,
      color: 'var(--ap-text-secondary)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EHeading, {
    eyebrow: "Cum se desf\u0103\u0219oar\u0103",
    title: "O sesiune, pas cu pas"
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '24px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(0,229,255,.12)',
      border: '1px solid var(--ap-border-primary)',
      color: 'var(--ap-primary)',
      fontFamily: 'var(--ap-font-mono)',
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ap-text-primary)'
    }
  }, s))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ECard, {
    glow: "accent",
    interactive: false,
    style: {
      textAlign: 'center',
      padding: 'clamp(2rem,5vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement(EBadge, {
    tone: "accent"
  }, "Pentru \u0219coli & centre after school"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h2)',
      fontWeight: 700,
      margin: '16px 0 12px'
    }
  }, "Partener pentru \u0218coala Altfel & \u0218coala Verde"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      color: 'var(--ap-text-secondary)',
      maxWidth: '54ch',
      margin: '0 auto 24px'
    }
  }, "Grupuri organizate, con\u021Binut adaptat v\xE2rstei, siguran\u021B\u0103 \u0219i supraveghere permanent\u0103. Activitate educa\u021Bional\u0103 inovatoare, complet diferit\u0103 de cea clasic\u0103."), /*#__PURE__*/React.createElement(EBtn, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('book')
  }, "Solicit\u0103 prezentare pentru \u0219coala ta")))));
}
window.EduScreen = EduScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EduScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ExperienceGrid.jsx
try { (() => {
// Arena Play — experience categories grid
const {
  Card: ExCard,
  SectionHeading: ExHeading
} = window.ArenaPlayDesignSystem_492f49;
function ExperienceGrid() {
  const {
    EXPERIENCES
  } = window.APData;
  const toneColor = {
    primary: 'var(--ap-primary)',
    secondary: 'var(--ap-secondary-300)',
    accent: 'var(--ap-accent)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ExHeading, {
    eyebrow: "Experien\u021Be imersive",
    title: "\u0218ase moduri de a juca",
    align: "center",
    lead: "De la free-roam wireless la simulatoare cu cockpit dedicat \u2014 alege-\u021Bi portalul."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18,
      marginTop: 48
    }
  }, EXPERIENCES.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.title,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(ExCard, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 52,
      height: 52,
      borderRadius: 'var(--ap-radius-md)',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--ap-border)',
      color: toneColor[e.tone],
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h4)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.6
    }
  }, e.text)))))));
}
window.ExperienceGrid = ExperienceGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ExperienceGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Arena Play — Footer + floating WhatsApp button
function Footer({
  onNav
}) {
  const {
    IMG
  } = window.APData;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--ap-border)',
      background: 'var(--ap-surface-1)',
      paddingTop: 'var(--ap-space-8)',
      paddingBottom: 'var(--ap-space-6)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logo,
    alt: "Arena Play",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 700,
      letterSpacing: '.06em'
    }
  }, "ARENA PLAY")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.6,
      maxWidth: '34ch'
    }
  }, "Intr\u0103 \xEEn lumea realit\u0103\u021Bii virtuale la Arena Play Club. Jocuri, adrenalin\u0103 \u0219i distrac\u021Bie pentru toate v\xE2rstele."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ap-primary)',
      marginTop: 16
    }
  }, "Join the game")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-tertiary)',
      marginBottom: 14
    }
  }, "Navigare"), [['games', 'Jocurile noastre'], ['party', 'Petreceri'], ['edu', 'Arena Edu'], ['book', 'Rezervare']].map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      display: 'block',
      padding: '5px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-tertiary)',
      marginBottom: 14
    }
  }, "Program"), ['Luni – Joi: închis', 'Vineri: 16:30 – 21:30', 'Sâmbătă – Duminică: 11:30 – 21:30'].map(t => /*#__PURE__*/React.createElement("p", {
    key: t,
    style: {
      padding: '5px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ap-text-tertiary)',
      marginBottom: 14
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40768491858",
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: '5px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  })), "076 849 1858"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:arenaplayalbaiulia@gmail.com",
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: '5px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  })), "Email"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      padding: '5px 0',
      color: 'var(--ap-text-secondary)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  })), "Str. T. Vladimirescu 50A,", /*#__PURE__*/React.createElement("br", null), "Alba Mall, Alba Iulia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12
    }
  }, ['instagram', 'facebook'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "https://www.facebook.com/people/Arena-Play-Club-Alba-Iulia/61582612882075/",
    target: "_blank",
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--ap-radius-md)',
      border: '1px solid var(--ap-border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ap-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  })))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      borderTop: '1px solid var(--ap-border)',
      marginTop: 32,
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ap-text-tertiary)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Arena Play Club \xB7 Alba Iulia. Toate drepturile rezervate."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ap-text-tertiary)'
    }
  }, "ANPC \xB7 SOL / SAL")));
}
function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40768491858?text=Bun%C4%83!%20Doresc%20informa%C8%9Bii%20despre%20rezerv%C4%83rile%20Arena%20Play.",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 80,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: hover ? '14px 20px 14px 16px' : 14,
      borderRadius: 'var(--ap-radius-pill)',
      background: '#25D366',
      color: '#063d1c',
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 700,
      fontSize: 14,
      boxShadow: '0 0 0 1px rgba(37,211,102,.5), 0 8px 30px rgba(37,211,102,.4)',
      transition: 'all .25s var(--ap-ease-out)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 26,
    color: "#063d1c"
  }), hover && /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Scrie-ne"));
}
window.Footer = Footer;
window.WhatsAppButton = WhatsAppButton;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GamesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Arena Play — Games catalog screen with category filters
const {
  GameCard,
  Badge: GBadge,
  SectionHeading: GHeading
} = window.ArenaPlayDesignSystem_492f49;
function GamesScreen() {
  const {
    GAMES,
    FILTERS
  } = window.APData;
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? GAMES : GAMES.filter(g => g.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(GHeading, {
    eyebrow: "Jocurile noastre",
    title: "Alege-\u021Bi aventura",
    lead: "Peste 50 de titluri \u0219i experien\u021Be \u2014 de la free-roam la simulatoare. Filtreaz\u0103 dup\u0103 platform\u0103."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 32,
      marginBottom: 36
    }
  }, FILTERS.map(f => {
    const active = filter === f.id;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      onClick: () => setFilter(f.id),
      style: {
        padding: '8px 18px',
        borderRadius: 'var(--ap-radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--ap-font-mono)',
        fontSize: 12,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        background: active ? 'var(--ap-primary)' : 'transparent',
        color: active ? 'var(--ap-text-on-bright)' : 'var(--ap-text-secondary)',
        border: `1px solid ${active ? 'transparent' : 'var(--ap-border-strong)'}`,
        boxShadow: active ? 'var(--ap-glow-primary-sm)' : 'none',
        transition: 'all .2s var(--ap-ease-out)'
      }
    }, f.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, list.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: g.title + i,
    delay: i % 4 * 60
  }, /*#__PURE__*/React.createElement(GameCard, _extends({}, g, {
    onClick: () => {}
  })))))));
}
window.GamesScreen = GamesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GamesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Arena Play — Hero + animated stat strip
const {
  Button: HBtn,
  Badge: HBadge,
  StatCounter
} = window.ArenaPlayDesignSystem_492f49;
function Hero({
  onNav
}) {
  const {
    IMG
  } = window.APData;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ap-gradient-void)'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-primary)",
    size: 520,
    style: {
      top: -120,
      left: -100
    }
  }), /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-secondary)",
    size: 560,
    style: {
      top: 40,
      right: -160
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center',
      paddingBlock: 'clamp(3rem, 7vw, 6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(HBadge, {
    tone: "primary"
  }, "Next level party \xB7 Alba Iulia")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-display)',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-.02em',
      margin: '18px 0 0'
    }
  }, "Intr\u0103 \xEEn viitorul", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ap-gradient-aurora)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "distrac\u021Biei"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.7,
      maxWidth: '46ch',
      marginTop: 20
    }
  }, "Arena VR dinamic\u0103, wireless \u0219i f\u0103r\u0103 limite. Tr\u0103ie\u0219te ac\u021Biunea cu tot corpul \u2014 nu doar cu privirea \u2014 \xEEn cea mai modern\u0103 destina\u021Bie de divertisment din Alba Iulia.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('book')
  }, "Rezerv\u0103 acum"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "outline",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "gamepad-2",
      size: 18
    }),
    onClick: () => onNav('games')
  }, "Vezi jocurile")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--ap-radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--ap-border-primary)',
      boxShadow: 'var(--ap-glow-primary-md)',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.interior,
    alt: "Arena Play interior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg, rgba(0,229,255,.08), rgba(123,46,255,.18))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('games'),
    style: {
      position: 'absolute',
      left: 20,
      bottom: 20,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 16px 10px 12px',
      borderRadius: 'var(--ap-radius-pill)',
      cursor: 'pointer',
      background: 'var(--ap-glass)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--ap-glass-border)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--ap-primary)',
      color: 'var(--ap-text-on-bright)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "Tur virtual"))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingBottom: 'clamp(2.5rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(28px,6vw,72px)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--ap-border)',
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement(StatCounter, {
    value: 16,
    label: "Juc\u0103tori simultan",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: 50,
    suffix: "+",
    label: "Jocuri & experien\u021Be"
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: 6,
    label: "Tipuri de experien\u021Be",
    tone: "secondary"
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: 2024,
    label: "Echipamente gen. nou\u0103",
    tone: "white"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Arena Play — sticky translucent top nav
const {
  Button: APButton
} = window.ArenaPlayDesignSystem_492f49;
function Nav({
  current,
  onNav
}) {
  const {
    IMG
  } = window.APData;
  const links = [{
    id: 'home',
    label: 'Acasă'
  }, {
    id: 'games',
    label: 'Jocuri'
  }, {
    id: 'party',
    label: 'Petreceri'
  }, {
    id: 'edu',
    label: 'Arena Edu'
  }, {
    id: 'book',
    label: 'Rezervare'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--ap-glass)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--ap-glass-border)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logo,
    alt: "Arena Play",
    style: {
      height: 34,
      width: 'auto',
      filter: 'drop-shadow(0 0 10px rgba(0,229,255,.5))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 700,
      letterSpacing: '.06em',
      fontSize: 18,
      color: '#fff'
    }
  }, "ARENA PLAY")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      padding: '8px 14px',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--ap-font-body)',
      borderRadius: 'var(--ap-radius-pill)',
      color: current === l.id ? 'var(--ap-primary)' : 'var(--ap-text-secondary)',
      background: current === l.id ? 'rgba(0,229,255,0.1)' : 'transparent',
      transition: 'color .2s, background .2s'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(APButton, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav('home')
  }, "Card fidelitate"), /*#__PURE__*/React.createElement(APButton, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onNav('book')
  }, "Rezerv\u0103"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartyScreen.jsx
try { (() => {
// Arena Play — Petreceri aniversare screen
const {
  PriceCard: PPrice,
  SectionHeading: PHeading,
  Card: PCard,
  Button: PBtn,
  Badge: PBadge
} = window.ArenaPlayDesignSystem_492f49;
function PartyScreen({
  onNav
}) {
  const {
    IMG
  } = window.APData;
  const included = [{
    icon: 'clock',
    t: '3 ore acces exclusiv',
    d: '30 min pizza · 120 min joc · 30 min tort & ieșire'
  }, {
    icon: 'users',
    t: '16 jucători simultan',
    d: 'Minim 10 persoane per eveniment'
  }, {
    icon: 'mail',
    t: 'Invitație digitală',
    d: 'Una pentru fiecare invitat'
  }, {
    icon: 'pizza',
    t: 'Pizza & băuturi',
    d: '1 pizza / 2 copii · apă la discreție · cafea adulți'
  }];
  const audiences = [{
    icon: 'cake',
    t: 'Copii',
    d: 'Aventuri VR sigure, supravegheate, pe vârsta lor.'
  }, {
    icon: 'gamepad-2',
    t: 'Adolescenți',
    d: 'Multiplayer competitiv și free-roam plin de adrenalină.'
  }, {
    icon: 'party-popper',
    t: 'Adulți',
    d: 'Petreceri private, team nights și evenimente corporate.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ap-gradient-void)',
      paddingBlock: 'clamp(3rem,7vw,5.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-secondary)",
    size: 520,
    style: {
      top: -120,
      right: -120
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PBadge, {
    tone: "secondary"
  }, "Petreceri aniversare"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h1)',
      fontWeight: 700,
      letterSpacing: '-.02em',
      margin: '16px 0'
    }
  }, "Petrecerea ta, \xEEn alt\u0103 dimensiune"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.7,
      maxWidth: '46ch'
    }
  }, "Arena Play este destina\u021Bia ideal\u0103 pentru evenimente de neuitat \xEEn realitatea virtual\u0103. Acces exclusiv la toate echipamentele, \xEEntr-un spa\u021Biu numai al vostru."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('book')
  }, "Rezerv\u0103 petrecere"), /*#__PURE__*/React.createElement(PBtn, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "tel:+40768491858"
  }, "076 849 1858"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--ap-radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--ap-border-secondary)',
      boxShadow: 'var(--ap-glow-secondary-md)',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.gg2,
    alt: "Petrecere VR",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, audiences.map((a, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: a.t,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(PCard, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-secondary-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 600,
      fontSize: 'var(--ap-text-h4)',
      margin: '14px 0 8px'
    }
  }, a.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-sm)',
      color: 'var(--ap-text-secondary)',
      lineHeight: 1.6
    }
  }, a.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 32,
      marginTop: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PHeading, {
    eyebrow: "Ce include pachetul",
    title: "Totul preg\u0103tit pentru voi"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      marginTop: 28
    }
  }, included.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: 'var(--ap-radius-md)',
      background: 'rgba(0,255,148,.1)',
      color: 'var(--ap-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 600,
      fontSize: 15
    }
  }, f.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ap-text-tertiary)',
      lineHeight: 1.5
    }
  }, f.d)))))), /*#__PURE__*/React.createElement(PPrice, {
    title: "Pachet eveniment",
    price: 100,
    per: "persoan\u0103",
    featured: true,
    badge: "Tot inclus",
    period: "Minim 10 persoane \xB7 16 se pot juca simultan",
    features: ['3 ore acces exclusiv la toate echipamentele', 'Invitație digitală pentru fiecare invitat', 'Pizza (1 / 2 copii) · apă la discreție', 'Cafea pentru adulți', 'Discount Food Court Alba Mall'],
    cta: "Rezerv\u0103 petrecere",
    onCta: () => onNav('book')
  })))));
}
window.PartyScreen = PartyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Arena Play — pricing strip (program & tarife) + final CTA band
const {
  PriceCard: PSPrice,
  SectionHeading: PSHeading,
  Button: PSBtn,
  Badge: PSBadge
} = window.ArenaPlayDesignSystem_492f49;
function PricingStrip({
  onNav
}) {
  const sessions = [{
    title: 'PlayStation',
    icon: 'gamepad-2'
  }, {
    title: 'VR static',
    icon: 'glasses'
  }, {
    title: 'VR dinamic · XR',
    icon: 'orbit'
  }, {
    title: 'Simulator racing',
    icon: 'car'
  }, {
    title: 'Simulator zbor',
    icon: 'plane'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)',
      background: 'var(--ap-gradient-void)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PSHeading, {
    eyebrow: "Program & tarife",
    title: "O sesiune, orice lume",
    lead: "Sesiuni de 30 de minute (20 min joc + 10 min igienizare). Vineri 16:30\u201321:30 \xB7 S\xE2mb\u0103t\u0103\u2013Duminic\u0103 11:30\u201321:30 \xB7 Luni\u2013Joi \xEEnchis."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14,
      marginTop: 40
    }
  }, sessions.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ap-surface-1)',
      border: '1px solid var(--ap-border)',
      borderRadius: 'var(--ap-radius-lg)',
      padding: 'var(--ap-space-5)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ap-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 600,
      fontSize: 15
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--ap-accent)',
      lineHeight: 1
    }
  }, "30", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ap-font-mono)',
      fontSize: 12,
      color: 'var(--ap-text-secondary)',
      marginLeft: 4
    }
  }, "lei"))))))));
}
function FinalCTA({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--ap-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--ap-radius-xl)',
      border: '1px solid var(--ap-border-secondary)',
      background: 'var(--ap-gradient-violet)',
      padding: 'clamp(2.5rem, 6vw, 5rem)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    color: "var(--ap-primary)",
    size: 420,
    style: {
      top: -160,
      left: '40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ap-font-display)',
      fontSize: 'var(--ap-text-h1)',
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 14
    }
  }, "Gata pentru urm\u0103torul nivel?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--ap-text-lg)',
      color: 'rgba(255,255,255,.82)',
      maxWidth: '48ch',
      margin: '0 auto 28px'
    }
  }, "Rezerv\u0103 o sesiune, o petrecere sau un team building. 16 persoane se pot juca simultan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PSBtn, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18
    }),
    onClick: () => onNav('book')
  }, "Rezerv\u0103 acum"), /*#__PURE__*/React.createElement(PSBtn, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.3)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    }),
    as: "a",
    href: "https://wa.me/40768491858",
    target: "_blank"
  }, "WhatsApp"))))));
}
window.PricingStrip = PricingStrip;
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Arena Play — UI kit demo data (real catalog from arenaplay.ro)
const IMG = {
  logo: 'https://dahhf9dlbgvrg.cloudfront.net/logo.png',
  interior: 'https://dahhf9dlbgvrg.cloudfront.net/arena-play-about-us.jpg',
  ps: 'https://dahhf9dlbgvrg.cloudfront.net/playstation.jpg',
  psImg: 'https://dahhf9dlbgvrg.cloudfront.net/playstation-image.jpg',
  gg1: 'https://dahhf9dlbgvrg.cloudfront.net/gg1.jpg',
  gg2: 'https://dahhf9dlbgvrg.cloudfront.net/gg2.jpg',
  gg3: 'https://dahhf9dlbgvrg.cloudfront.net/gg3.jpg',
  edu: 'https://dahhf9dlbgvrg.cloudfront.net/eduxr.png'
};
const GAMES = [{
  title: 'Beat Saber',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Muzical',
  image: IMG.gg1,
  players: '1 jucător',
  age: '10+',
  multiplayer: true,
  description: 'Lovești cuburi care vin spre tine în ritmul unei muzici electrizante.'
}, {
  title: 'ShootXR',
  category: 'VR dinamic',
  cat: 'vr-dinamic',
  genre: 'Acțiune',
  image: IMG.gg2,
  players: '1-12 jucători',
  age: '14+',
  multiplayer: true,
  description: 'Design futurist, efecte impresionante și tracking avansat — ideal pentru petreceri.'
}, {
  title: 'Journey XR',
  category: 'VR dinamic',
  cat: 'vr-dinamic',
  genre: 'Aventură',
  image: IMG.gg3,
  players: '1-12 jucători',
  age: '6+',
  multiplayer: true,
  description: 'Călătorești prin cinci lumi spectaculoase folosind doar mâinile tale.'
}, {
  title: 'Among Us VR',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Strategie',
  image: IMG.gg2,
  players: '4-10 jucători',
  age: '10+',
  multiplayer: true,
  description: 'Descoperă impostorul printre astronauți înainte să fie prea târziu.'
}, {
  title: 'Red Matter 2',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Aventură',
  image: IMG.gg1,
  players: '1 jucător',
  age: '13+',
  multiplayer: false,
  description: 'O lume sci-fi plină de mistere, planete îndepărtate și puzzle-uri.'
}, {
  title: 'Arizona Sunshine 2',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Acțiune',
  image: IMG.gg3,
  players: '1-4 jucători',
  age: '17+',
  multiplayer: true,
  description: 'O lume plină de zombie — arme și abilități pentru a-i învinge.'
}, {
  title: 'Job Simulator',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Simulator',
  image: IMG.gg2,
  players: '1 jucător',
  age: '10+',
  multiplayer: false,
  description: 'Roboții au preluat munca — vezi cum era viața oamenilor la lucru.'
}, {
  title: 'Iron Man VR',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Acțiune',
  image: IMG.gg1,
  players: '1 jucător',
  age: '10+',
  multiplayer: false,
  description: 'Pune-ți armura high-tech și zboară luptând cu roboți și răufăcători.'
}, {
  title: 'Star Wars: Vader Immortal',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Aventură',
  image: IMG.gg3,
  players: '1 jucător',
  age: '10+',
  multiplayer: false,
  description: 'Învață să folosești Forța și mânuiește o sabie laser în împărăția lui Vader.'
}, {
  title: 'The Walking Dead: S&S',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Acțiune',
  image: IMG.gg2,
  players: '1 jucător',
  age: '17+',
  multiplayer: false,
  description: 'Supraviețuiește într-o lume de zombie cu arme reale și decizii grele.'
}, {
  title: 'PowerWash Simulator',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Simulator',
  image: IMG.gg1,
  players: '1 jucător',
  age: '10+',
  multiplayer: true,
  description: 'Un jet de apă super-puternic și de curățat case, mașini și parcuri.'
}, {
  title: 'PlayStation Plus',
  category: 'PlayStation',
  cat: 'playstation',
  genre: 'Console',
  image: IMG.ps,
  players: '1-4 jucători',
  age: '4+',
  multiplayer: true,
  description: 'Toată biblioteca PlayStation Plus pe console de ultimă generație.'
}, {
  title: 'Simulator Zbor',
  category: 'Simulator zbor',
  cat: 'sim-zbor',
  genre: 'Simulator',
  image: IMG.psImg,
  players: '1 jucător',
  age: '10+',
  multiplayer: false,
  description: 'Next Level Racing® Flight Simulator — Commercial, Military, General Aviation.'
}, {
  title: 'Simulator Racing',
  category: 'Simulator racing',
  cat: 'sim-racing',
  genre: 'Simulator',
  image: IMG.gg3,
  players: '1 jucător',
  age: '10+',
  multiplayer: false,
  description: 'Monza Racing R16 V2 DD Base — direct drive, senzație reală de pistă.'
}, {
  title: 'Edu XR',
  category: 'VR dinamic',
  cat: 'vr-dinamic',
  genre: 'Educational',
  image: IMG.edu,
  players: 'grup școlar',
  age: '6+',
  multiplayer: true,
  description: 'Teleportează clasa printre canioane, orașe legendare și vulcani activi.'
}, {
  title: 'Cubism',
  category: 'VR static',
  cat: 'vr-static',
  genre: 'Puzzle',
  image: IMG.gg1,
  players: '1 jucător',
  age: '6+',
  multiplayer: false,
  description: 'Puzzle-uri geometrice 3D minimaliste, satisfacție pură la fiecare soluție.'
}];
const FILTERS = [{
  id: 'all',
  label: 'Toate jocurile'
}, {
  id: 'vr-static',
  label: 'VR static'
}, {
  id: 'vr-dinamic',
  label: 'VR dinamic'
}, {
  id: 'playstation',
  label: 'PlayStation'
}, {
  id: 'sim-zbor',
  label: 'Simulator zbor'
}, {
  id: 'sim-racing',
  label: 'Simulator racing'
}];
const EXPERIENCES = [{
  icon: 'orbit',
  title: 'VR Dinamic · Free-Roam',
  text: 'Te miști liber, wireless, în medii virtuale complexe. Acțiune cu tot corpul.',
  tone: 'primary'
}, {
  icon: 'glasses',
  title: 'VR Static',
  text: 'Sute de titluri imersive dintr-un singur loc — de la puzzle la acțiune.',
  tone: 'secondary'
}, {
  icon: 'users',
  title: 'Multiplayer VR',
  text: 'Până la 16 jucători simultan. Cooperare și competiție în aceeași arenă.',
  tone: 'accent'
}, {
  icon: 'gamepad-2',
  title: 'PlayStation',
  text: 'Cele mai noi jocuri pe console de ultimă generație, în confort total.',
  tone: 'primary'
}, {
  icon: 'car',
  title: 'Simulator Racing',
  text: 'Scaun direct-drive Monza R16 — senzația reală a pistei.',
  tone: 'secondary'
}, {
  icon: 'plane',
  title: 'Simulator Zbor',
  text: 'Cockpit dedicat Boeing Commercial Edition pentru aviație completă.',
  tone: 'accent'
}];
window.APData = {
  IMG,
  GAMES,
  FILTERS,
  EXPERIENCES
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ui.jsx
try { (() => {
// Arena Play UI kit — shared helpers (Icon via Lucide, layout primitives)
const {
  useState,
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      lineHeight: 0,
      ...style
    }
  });
}

// Soft blurred color orb for hero/section backgrounds
function Orb({
  color = 'var(--ap-primary)',
  size = 480,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      filter: 'blur(120px)',
      opacity: 0.4,
      pointerEvents: 'none',
      ...style
    }
  });
}

// Scroll/mount reveal wrapper (fade + rise)
function Reveal({
  children,
  delay = 0,
  style
}) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => setShown(true), delay);
        io.disconnect();
      }
    }), {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity .6s var(--ap-ease-out), transform .6s var(--ap-ease-out)',
      ...style
    }
  }, children);
}
const Container = ({
  children,
  wide,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: wide ? 'var(--ap-container-wide)' : 'var(--ap-container)',
    marginInline: 'auto',
    paddingInline: 'var(--ap-gutter)',
    ...style
  }
}, children);
Object.assign(window, {
  Icon,
  Orb,
  Reveal,
  Container
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GameCard = __ds_scope.GameCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCounter = __ds_scope.StatCounter;

})();
