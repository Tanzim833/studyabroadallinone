/* @ds-bundle: {"format":4,"namespace":"StudyAbroadAllInOneDesignSystem_c572a1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"ArticleCard","sourcePath":"components/editorial/ArticleCard.jsx"},{"name":"TopicFilterRail","sourcePath":"components/editorial/TopicFilterRail.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"PricingComparisonRow","sourcePath":"components/pricing/PricingComparisonRow.jsx"},{"name":"PricingComparisonTable","sourcePath":"components/pricing/PricingComparisonTable.jsx"},{"name":"PricingPillButton","sourcePath":"components/pricing/PricingPillButton.jsx"},{"name":"PricingTierCard","sourcePath":"components/pricing/PricingTierCard.jsx"},{"name":"CreamCallout","sourcePath":"components/surfaces/CreamCallout.jsx"},{"name":"CtaBandLight","sourcePath":"components/surfaces/CtaBandLight.jsx"},{"name":"DemoGridCard","sourcePath":"components/surfaces/DemoGridCard.jsx"},{"name":"FeatureCardTabbed","sourcePath":"components/surfaces/FeatureCardTabbed.jsx"},{"name":"HeroBand","sourcePath":"components/surfaces/HeroBand.jsx"},{"name":"LogoStrip","sourcePath":"components/surfaces/LogoStrip.jsx"},{"name":"SignatureCard","sourcePath":"components/surfaces/SignatureCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"80d32fd75ca4","components/core/Button.jsx":"e6ce42aa6406","components/core/Icon.jsx":"e4d5ae4eba60","components/core/IconButton.jsx":"ef1dcd82a02c","components/core/TextLink.jsx":"22d27b6b08a6","components/editorial/ArticleCard.jsx":"0a01a96be7cc","components/editorial/TopicFilterRail.jsx":"c5990a1fae6e","components/forms/TextInput.jsx":"9cbccb3b68f9","components/navigation/Footer.jsx":"e4488e1c7fb4","components/navigation/TopNav.jsx":"c3a186d1fda6","components/pricing/PricingComparisonRow.jsx":"46f5b51f6bcc","components/pricing/PricingComparisonTable.jsx":"a9c3c3b08f60","components/pricing/PricingPillButton.jsx":"1a4848d8538e","components/pricing/PricingTierCard.jsx":"472ae41a510e","components/surfaces/CreamCallout.jsx":"77401548e8ab","components/surfaces/CtaBandLight.jsx":"8dc5b1eb1d35","components/surfaces/DemoGridCard.jsx":"f568df7f12b9","components/surfaces/FeatureCardTabbed.jsx":"80b3297ecc4e","components/surfaces/HeroBand.jsx":"b84e33e81976","components/surfaces/LogoStrip.jsx":"db726370bdf5","components/surfaces/SignatureCard.jsx":"3c01f077a03c","ui_kits/website/Assessment.jsx":"d20320399295","ui_kits/website/Fragments.jsx":"541c122aca78","ui_kits/website/Guides.jsx":"d629d54bee6b","ui_kits/website/Home.jsx":"527cc69fa91d","ui_kits/website/Packages.jsx":"3e0ead8675ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StudyAbroadAllInOneDesignSystem_c572a1 = window.StudyAbroadAllInOneDesignSystem_c572a1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: {
    color: 'var(--colors-muted)',
    background: 'var(--colors-canvas)',
    border: '1px solid var(--colors-hairline)'
  },
  info: {
    color: 'var(--colors-info)',
    background: 'var(--colors-canvas)',
    border: '1px solid var(--colors-info-border)'
  },
  success: {
    color: 'var(--colors-success)',
    background: 'var(--colors-canvas)',
    border: '1px solid var(--colors-success-border)'
  },
  count: {
    color: 'var(--colors-on-primary)',
    background: 'var(--colors-primary)',
    border: '1px solid var(--colors-primary)',
    minWidth: 22,
    justifyContent: 'center',
    padding: '1px 6px',
    fontSize: 12,
    letterSpacing: 0
  },
  'on-dark': {
    color: 'var(--colors-on-dark)',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,.55)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.35,
      letterSpacing: '.16px',
      padding: '3px 8px',
      borderRadius: 'var(--rounded-sm)',
      whiteSpace: 'nowrap',
      ...T[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    onPointerCancel: () => setP(false)
  }];
}
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--typography-button-size)',
  fontWeight: 500,
  lineHeight: 1.4,
  padding: '16px 24px',
  borderRadius: 'var(--rounded-lg)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent'
};
const V = {
  primary: [{
    background: 'var(--colors-primary)',
    color: 'var(--colors-on-primary)',
    borderColor: 'var(--colors-primary)',
    boxShadow: 'var(--elevation-button-rest)'
  }, {
    background: 'var(--colors-primary-active)',
    borderColor: 'var(--colors-primary-active)'
  }],
  secondary: [{
    background: 'var(--colors-canvas)',
    color: 'var(--colors-ink)',
    borderColor: 'var(--colors-hairline)'
  }, {
    background: 'var(--colors-surface-soft)',
    borderColor: 'var(--colors-border-strong)'
  }],
  'secondary-on-dark': [{
    background: 'var(--colors-canvas)',
    color: 'var(--colors-ink)',
    borderColor: 'var(--colors-canvas)'
  }, {
    background: 'var(--colors-surface-strong)',
    borderColor: 'var(--colors-surface-strong)'
  }],
  legal: [{
    background: 'var(--colors-link)',
    color: 'var(--colors-on-primary)',
    borderColor: 'var(--colors-link)',
    fontSize: 'var(--typography-legal-size)',
    fontWeight: 600,
    lineHeight: 1.2,
    padding: '12px 10px',
    borderRadius: 'var(--rounded-xs)'
  }, {
    background: 'var(--colors-link-active)',
    borderColor: 'var(--colors-link-active)'
  }]
};
const DIS = {
  primary: {
    background: 'var(--colors-border-strong)',
    borderColor: 'var(--colors-border-strong)',
    color: 'var(--colors-on-primary)',
    boxShadow: 'none'
  },
  secondary: {
    background: 'var(--colors-canvas)',
    borderColor: 'var(--colors-border-strong)',
    color: 'var(--colors-border-strong)'
  },
  'secondary-on-dark': {
    opacity: .5
  },
  legal: {
    opacity: .5
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  active = false,
  fullWidth = false,
  icon,
  children,
  onClick,
  href,
  type = 'button',
  style
}) {
  const [p, h] = usePress();
  const [rest, act] = V[variant] || V.primary;
  const s = {
    ...base,
    ...rest,
    ...(size === 'sm' && variant !== 'legal' ? {
      padding: '10px 16px',
      fontSize: 14
    } : {}),
    ...((p || active) && !disabled ? act : {}),
    ...(disabled ? {
      ...DIS[variant],
      cursor: 'not-allowed'
    } : {}),
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    style: s
  }, h), children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Geometry copied from Lucide (lucide.dev, ISC). 24px grid, 2px stroke, round caps.
const P = {
  check: [['path', {
    d: 'M20 6 9 17l-5-5'
  }]],
  x: [['path', {
    d: 'M18 6 6 18'
  }], ['path', {
    d: 'm6 6 12 12'
  }]],
  menu: [['line', {
    x1: 4,
    x2: 20,
    y1: 12,
    y2: 12
  }], ['line', {
    x1: 4,
    x2: 20,
    y1: 6,
    y2: 6
  }], ['line', {
    x1: 4,
    x2: 20,
    y1: 18,
    y2: 18
  }]],
  'arrow-right': [['path', {
    d: 'M5 12h14'
  }], ['path', {
    d: 'm12 5 7 7-7 7'
  }]],
  'chevron-left': [['path', {
    d: 'm15 18-6-6 6-6'
  }]],
  'chevron-right': [['path', {
    d: 'm9 18 6-6-6-6'
  }]],
  'chevron-down': [['path', {
    d: 'm6 9 6 6 6-6'
  }]],
  minus: [['path', {
    d: 'M5 12h14'
  }]],
  search: [['circle', {
    cx: 11,
    cy: 11,
    r: 8
  }], ['path', {
    d: 'm21 21-4.3-4.3'
  }]],
  calendar: [['path', {
    d: 'M8 2v4'
  }], ['path', {
    d: 'M16 2v4'
  }], ['rect', {
    width: 18,
    height: 18,
    x: 3,
    y: 4,
    rx: 2
  }], ['path', {
    d: 'M3 10h18'
  }]],
  'map-pin': [['path', {
    d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'
  }], ['circle', {
    cx: 12,
    cy: 10,
    r: 3
  }]],
  'circle-check': [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', {
    d: 'm9 12 2 2 4-4'
  }]],
  clock: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['polyline', {
    points: '12 6 12 12 16 14'
  }]],
  'file-text': [['path', {
    d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'
  }], ['path', {
    d: 'M14 2v4a2 2 0 0 0 2 2h4'
  }], ['path', {
    d: 'M10 9H8'
  }], ['path', {
    d: 'M16 13H8'
  }], ['path', {
    d: 'M16 17H8'
  }]],
  share: [['circle', {
    cx: 18,
    cy: 5,
    r: 3
  }], ['circle', {
    cx: 6,
    cy: 12,
    r: 3
  }], ['circle', {
    cx: 18,
    cy: 19,
    r: 3
  }], ['line', {
    x1: 8.59,
    x2: 15.42,
    y1: 13.51,
    y2: 17.49
  }], ['line', {
    x1: 15.41,
    x2: 8.59,
    y1: 6.51,
    y2: 10.49
  }]],
  'arrow-left': [['path', {
    d: 'm12 19-7-7 7-7'
  }], ['path', {
    d: 'M19 12H5'
  }]]
};
function Icon({
  name = 'check',
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style
}) {
  const parts = P[name] || P.check;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, parts.map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  })));
}
Icon.names = Object.keys(P);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    onPointerCancel: () => setP(false)
  }];
}
function IconButton({
  children,
  label,
  onClick,
  active = false,
  disabled = false,
  style
}) {
  const [p, h] = usePress();
  const on = (p || active) && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, h, {
    style: {
      width: 'var(--icon-button-size)',
      height: 'var(--icon-button-size)',
      borderRadius: 'var(--rounded-full)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: on ? 'var(--colors-surface-soft)' : 'var(--colors-canvas)',
      border: '1px solid ' + (on ? 'var(--colors-border-strong)' : 'var(--colors-hairline)'),
      color: disabled ? 'var(--colors-border-strong)' : 'var(--colors-ink)',
      flex: 'none',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    onPointerCancel: () => setP(false)
  }];
}
function TextLink({
  href = '#',
  children,
  onClick,
  arrow = false,
  tone = 'link',
  style
}) {
  const [p, h] = usePress();
  const c = tone === 'ink' ? p ? 'var(--colors-muted)' : 'var(--colors-ink)' : tone === 'on-dark' ? 'var(--colors-on-dark)' : p ? 'var(--colors-link-active)' : 'var(--colors-link)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick
  }, h, {
    style: {
      color: c,
      textDecoration: tone === 'on-dark' ? 'underline' : 'none',
      textUnderlineOffset: 3,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      cursor: 'pointer',
      ...style
    }
  }), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleCard.jsx
try { (() => {
const BG = {
  peach: 'var(--colors-signature-peach)',
  mint: 'var(--colors-signature-mint)',
  yellow: 'var(--colors-signature-yellow)',
  mustard: 'var(--colors-signature-mustard)',
  cream: 'var(--colors-signature-cream)',
  coral: 'var(--colors-signature-coral)',
  forest: 'var(--colors-signature-forest)'
};
function ArticleCard({
  image,
  tone = 'mint',
  thumbLabel,
  category,
  title,
  meta,
  href = '#',
  onClick
}) {
  const dark = tone === 'coral' || tone === 'forest';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 16,
      margin: -16,
      borderRadius: 'var(--rounded-md)',
      background: 'var(--colors-canvas)',
      textDecoration: 'none',
      color: 'inherit',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      borderRadius: 'var(--rounded-md)',
      overflow: 'hidden',
      background: BG[tone],
      display: 'flex',
      alignItems: 'flex-end',
      padding: 16
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 'calc(100% + 32px)',
      height: 'calc(100% + 32px)',
      margin: -16,
      objectFit: 'cover'
    }
  }) : thumbLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.2,
      color: dark ? 'var(--colors-on-dark)' : 'var(--colors-ink)'
    }
  }, thumbLabel)), category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--colors-muted)'
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.4,
      color: 'var(--colors-ink)',
      textWrap: 'pretty'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-muted)'
    }
  }, meta));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/TopicFilterRail.jsx
try { (() => {
function TopicFilterRail({
  groups = [],
  active,
  onSelect,
  allLabel = 'All guides',
  allCount
}) {
  const item = (label, count) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onSelect && onSelect(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        width: '100%',
        textAlign: 'left',
        font: 'inherit',
        fontSize: 14,
        lineHeight: 1.25,
        padding: '8px 0',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        color: on ? 'var(--colors-ink)' : 'var(--colors-muted)',
        fontWeight: on ? 500 : 400
      }
    }, /*#__PURE__*/React.createElement("span", null, label), on && count != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "count"
    }, count));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: 'none',
      background: 'var(--colors-canvas)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, item(allLabel, allCount)), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.heading,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--colors-ink)',
      paddingBottom: 8,
      borderBottom: '1px solid var(--colors-hairline)',
      marginBottom: 4
    }
  }, g.heading), g.items.map(it => item(it.label, it.count)))));
}
Object.assign(__ds_scope, { TopicFilterRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/TopicFilterRail.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function TextInput({
  label,
  hint,
  status,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  prefix,
  suffix,
  disabled = false,
  forceFocus = false,
  id,
  style
}) {
  const [f, setF] = React.useState(false);
  const focus = f || forceFocus;
  const bc = status === 'success' ? 'var(--colors-success-border)' : focus ? 'var(--colors-info-border)' : 'var(--colors-hairline)';
  const iid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.35,
      letterSpacing: '.16px',
      color: 'var(--colors-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--input-height)',
      padding: '0 16px',
      background: disabled ? 'var(--colors-surface-soft)' : 'var(--colors-canvas)',
      border: '1px solid ' + bc,
      borderRadius: 'var(--rounded-sm)',
      boxShadow: focus && status !== 'success' ? '0 0 0 1px var(--colors-info-border)' : 'none'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--colors-muted)',
      fontSize: 14
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    id: iid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: 'inherit',
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-ink)',
      padding: '12px 0'
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--colors-muted)',
      fontSize: 14
    }
  }, suffix)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.35,
      color: status === 'success' ? 'var(--colors-success)' : 'var(--colors-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const DEF = [{
  title: 'Destinations',
  links: ['Romania', 'Italy', 'Hungary', 'Germany', 'Malaysia', 'Canada']
}, {
  title: 'Scholarships',
  links: ['Romania MFA', 'ARICE', 'Italy DSU', 'Stipendium Hungaricum', 'Erasmus Mundus']
}, {
  title: 'Services',
  links: ['Free Assessment', 'University Admission', 'Visa Filing', 'Document Attestation', 'Embassy Interview Prep']
}, {
  title: 'Guides',
  links: ['Country Guides', 'Visa Checklists', 'SOP & Motivation Letters', 'Intake Calendar 2027']
}, {
  title: 'About Us',
  links: ['Our Counsellors', 'Student Stories', 'Careers', 'Contact']
}, {
  title: 'Dhaka Office',
  lines: ['House 00, Road 00, Dhanmondi', 'Dhaka 1209, Bangladesh', 'Sat–Thu, 10:00–19:00'],
  links: ['Privacy Policy', 'Terms of Service', 'Refund Policy']
}];
function Footer({
  columns = DEF,
  brand = 'STUDY ABROAD ALL IN ONE',
  year = 2026
}) {
  const lk = {
    fontSize: 14,
    lineHeight: 1.25,
    color: 'var(--colors-muted)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--colors-canvas)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 48px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      gap: '32px 16px'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--colors-ink)',
      marginBottom: 4
    }
  }, c.title), (c.lines || []).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      ...lk
    }
  }, t)), (c.links || []).map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: lk
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 48px 32px',
      borderTop: '1px solid var(--colors-hairline)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-between',
      fontSize: 14,
      color: 'var(--colors-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '.08em',
      fontWeight: 500,
      color: 'var(--colors-ink)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Study Abroad All In One. Licensed education consultancy, Dhaka.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function useContainerWidth(ref) {
  const [w, setW] = React.useState(1280);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(ref.current);
    setW(ref.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  return w;
}
const DEF = ['Destinations', 'Scholarships', 'Universities', 'Visa Guides', 'Packages'];
function TopNav({
  brand = 'STUDY ABROAD ALL IN ONE',
  links = DEF,
  active,
  onNavigate,
  onBrand,
  onAssessment,
  onConsultation,
  onLogin,
  sticky = true
}) {
  const ref = React.useRef(null);
  const w = useContainerWidth(ref);
  const [open, setOpen] = React.useState(false);
  const mobile = w < 1024;
  const compact = w < 1180;
  const go = l => {
    setOpen(false);
    onNavigate && onNavigate(l);
  };
  const mark = /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onBrand && onBrand();
    },
    style: {
      fontSize: mobile ? 13 : 14,
      fontWeight: 500,
      letterSpacing: '.08em',
      color: 'var(--colors-ink)',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, brand);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'var(--colors-canvas)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 'var(--nav-height)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: mobile ? '0 24px' : '0 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, mark, !mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: compact ? 16 : 24,
      flex: 1,
      minWidth: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(l);
    },
    style: {
      fontSize: 14,
      lineHeight: 1.25,
      color: active === l ? 'var(--colors-ink)' : 'var(--colors-body)',
      fontWeight: active === l ? 500 : 400,
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l))), !mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, !compact && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onAssessment
  }, "Free Assessment"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onConsultation
  }, "Book Consultation"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    tone: "ink",
    onClick: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, "Student Login")), mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: open ? 'Close menu' : 'Open menu',
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 18
  })))), mobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: '64px 0 0 0',
      background: 'var(--colors-canvas)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      overflowY: 'auto',
      zIndex: 49
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(l);
    },
    style: {
      fontSize: 24,
      lineHeight: 1.35,
      color: 'var(--colors-ink)',
      padding: '12px 0',
      borderBottom: '1px solid var(--colors-hairline)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onConsultation && onConsultation();
    }
  }, "Book Consultation"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onAssessment && onAssessment();
    }
  }, "Free Assessment"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    tone: "ink",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onLogin && onLogin();
    },
    style: {
      fontSize: 16,
      justifyContent: 'center',
      padding: 12
    }
  }, "Student Login"))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingComparisonRow.jsx
try { (() => {
function PricingComparisonRow({
  label,
  values = [],
  heading = false,
  labelWidth = 280
}) {
  const cell = (v, i) => {
    let c = v;
    if (v === true) c = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 18,
      color: "var(--colors-ink)"
    });else if (v === false || v == null) c = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "minus",
      size: 18,
      color: "var(--colors-border-strong)"
    });
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      role: "cell",
      style: {
        display: 'flex',
        alignItems: 'center',
        fontSize: heading ? 16 : 14,
        fontWeight: heading ? 575 : 400,
        color: heading ? 'var(--colors-pricing-ink)' : 'var(--colors-body)'
      }
    }, c);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "row",
    style: {
      display: 'grid',
      gridTemplateColumns: labelWidth + 'px repeat(' + values.length + ',minmax(140px,1fr))',
      gap: 16,
      padding: '12px 0',
      borderBottom: '1px solid var(--colors-hairline)',
      fontFamily: 'var(--font-pricing)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "rowheader",
    style: {
      fontSize: heading ? 20 : 14,
      fontWeight: heading ? 475 : 400,
      lineHeight: 1.3,
      color: heading ? 'var(--colors-pricing-ink)' : 'var(--colors-body)'
    }
  }, label), values.map(cell));
}
Object.assign(__ds_scope, { PricingComparisonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingComparisonRow.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingComparisonTable.jsx
try { (() => {
function PricingComparisonTable({
  plans = [],
  sections = [],
  labelWidth = 280
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      fontFamily: 'var(--font-pricing)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "table",
    style: {
      minWidth: labelWidth + plans.length * 156
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      background: 'var(--colors-canvas)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PricingComparisonRow, {
    heading: true,
    label: "Compare packages",
    values: plans,
    labelWidth: labelWidth
  })), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0 8px',
      fontSize: 14,
      fontWeight: 575,
      color: 'var(--colors-pricing-ink)',
      borderBottom: '1px solid var(--colors-hairline)'
    }
  }, s.title), s.rows.map(r => /*#__PURE__*/React.createElement(__ds_scope.PricingComparisonRow, {
    key: r.label,
    label: r.label,
    values: r.values,
    labelWidth: labelWidth
  }))))));
}
Object.assign(__ds_scope, { PricingComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingPillButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    onPointerCancel: () => setP(false)
  }];
}
function PricingPillButton({
  variant = 'outline',
  children,
  onClick,
  fullWidth = true,
  active = false,
  style
}) {
  const [p, h] = usePress();
  const on = p || active;
  const solid = variant === 'solid';
  const bg = solid ? on ? 'var(--colors-primary-active)' : 'var(--colors-primary)' : on ? 'var(--colors-surface-strong)' : 'var(--colors-canvas)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, h, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : undefined,
      padding: '12px 24px',
      borderRadius: 'var(--rounded-pill)',
      fontFamily: 'var(--font-pricing)',
      fontSize: 16,
      fontWeight: 575,
      lineHeight: 1.4,
      cursor: 'pointer',
      background: bg,
      color: solid ? 'var(--colors-on-primary)' : 'var(--colors-pricing-ink)',
      border: '1px solid ' + (solid ? 'transparent' : 'var(--colors-hairline)'),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { PricingPillButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingPillButton.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingTierCard.jsx
try { (() => {
function PricingTierCard({
  name,
  price,
  unit,
  description,
  features = [],
  ctaLabel = 'Choose package',
  ctaVariant,
  onCta,
  featured = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: featured ? 'var(--colors-surface-soft)' : 'var(--colors-canvas)',
      borderRadius: 'var(--rounded-md)',
      padding: 32,
      fontFamily: 'var(--font-pricing)',
      color: 'var(--colors-pricing-ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 475,
      lineHeight: 1.3
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      minHeight: 36
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44.8,
      fontWeight: 475,
      lineHeight: 1.1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, price), unit && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement(__ds_scope.PricingPillButton, {
    variant: ctaVariant || 'outline',
    onClick: onCta
  }, ctaLabel), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      lineHeight: 1.3,
      color: 'var(--colors-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--colors-ink)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, f)))));
}
Object.assign(__ds_scope, { PricingTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingTierCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CreamCallout.jsx
try { (() => {
function CreamCallout({
  stat,
  title,
  body,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--colors-signature-cream)',
      borderRadius: 'var(--rounded-md)',
      padding: 24,
      color: 'var(--colors-ink)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, stat && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.2
    }
  }, stat), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      textWrap: 'pretty'
    }
  }, body), children);
}
Object.assign(__ds_scope, { CreamCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CreamCallout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CtaBandLight.jsx
try { (() => {
function CtaBandLight({
  title,
  body,
  ctaLabel = 'Book Free Consultation',
  onCta,
  secondary
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--colors-surface-strong)',
      borderRadius: 'var(--rounded-lg)',
      padding: 48,
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'var(--colors-ink)',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      maxWidth: 520
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta
  }, ctaLabel), secondary));
}
Object.assign(__ds_scope, { CtaBandLight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CtaBandLight.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/DemoGridCard.jsx
try { (() => {
const BG = {
  peach: 'var(--colors-signature-peach)',
  mint: 'var(--colors-signature-mint)',
  yellow: 'var(--colors-signature-yellow)',
  mustard: 'var(--colors-signature-mustard)',
  forest: 'var(--colors-signature-forest)',
  cream: 'var(--colors-signature-cream)',
  canvas: 'var(--colors-canvas)'
};
function DemoGridCard({
  tone = 'peach',
  title,
  caption,
  children,
  minHeight,
  style
}) {
  const dark = tone === 'forest';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: BG[tone],
      borderRadius: 'var(--rounded-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight,
      color: dark ? 'var(--colors-on-dark)' : 'var(--colors-ink)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, (title || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '8px 8px 0'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, title), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.25,
      opacity: dark ? .85 : 1,
      color: dark ? 'inherit' : 'var(--colors-body)'
    }
  }, caption)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minWidth: 0
    }
  }, children));
}
Object.assign(__ds_scope, { DemoGridCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/DemoGridCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCardTabbed.jsx
try { (() => {
function useContainerWidth(ref) {
  const [w, setW] = React.useState(1280);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(ref.current);
    setW(ref.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  return w;
}
function FeatureCardTabbed({
  tabs = [],
  defaultIndex = 0,
  onChange
}) {
  const ref = React.useRef(null);
  const w = useContainerWidth(ref);
  const narrow = w < 760;
  const [i, setI] = React.useState(defaultIndex);
  const t = tabs[i] || {};
  const pick = k => {
    setI(k);
    onChange && onChange(k);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      background: 'var(--colors-surface-soft)',
      borderRadius: 'var(--rounded-lg)',
      padding: 32,
      fontFamily: 'var(--font-sans)',
      display: 'grid',
      gridTemplateColumns: narrow ? 'minmax(0,1fr)' : '280px minmax(0,1fr)',
      gap: narrow ? 24 : 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-orientation": narrow ? 'horizontal' : 'vertical',
    style: {
      display: 'flex',
      flexDirection: narrow ? 'row' : 'column',
      gap: 4,
      overflowX: narrow ? 'auto' : 'visible'
    }
  }, tabs.map((tb, k) => /*#__PURE__*/React.createElement("button", {
    key: tb.label,
    role: "tab",
    "aria-selected": k === i,
    onClick: () => pick(k),
    style: {
      textAlign: 'left',
      font: 'inherit',
      fontSize: narrow ? 16 : 20,
      lineHeight: 1.5,
      fontWeight: 400,
      padding: narrow ? '8px 12px' : '10px 16px',
      border: 0,
      borderRadius: 'var(--rounded-md)',
      cursor: 'pointer',
      whiteSpace: narrow ? 'nowrap' : 'normal',
      background: k === i ? 'var(--colors-canvas)' : 'transparent',
      color: k === i ? 'var(--colors-ink)' : 'var(--colors-muted)'
    }
  }, tb.label))), /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, t.preview && /*#__PURE__*/React.createElement("div", null, t.preview), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.35,
      letterSpacing: '.12px',
      color: 'var(--colors-ink)'
    }
  }, t.title), t.body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      maxWidth: 560
    }
  }, t.body)), t.steps && /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column'
    }
  }, t.steps.map((s, k) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '32px minmax(0,1fr)',
      gap: 12,
      padding: '12px 0',
      borderTop: '1px solid var(--colors-hairline)',
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--colors-muted)',
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, s)))), t.linkLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    arrow: true
  }, t.linkLabel))));
}
Object.assign(__ds_scope, { FeatureCardTabbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCardTabbed.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/HeroBand.jsx
try { (() => {
function HeroBand({
  eyebrow,
  title,
  subtitle,
  primaryLabel = 'Book Free Consultation',
  secondaryLabel = 'Check Eligibility',
  onPrimary,
  onSecondary,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--colors-canvas)',
      padding: '96px 0',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 48px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 520px',
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      color: 'var(--colors-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'var(--colors-ink)',
      textWrap: 'balance'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onPrimary
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onSecondary
  }, secondaryLabel))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      minWidth: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/LogoStrip.jsx
try { (() => {
function useContainerWidth(ref) {
  const [w, setW] = React.useState(1280);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(ref.current);
    setW(ref.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  return w;
}
const DEF = ['University of Bucharest', 'Politecnico di Milano', 'Sapienza Roma', 'University of Padova', 'Babeș-Bolyai', 'University of Debrecen'];
function LogoStrip({
  label = 'Students placed at',
  items = DEF
}) {
  const ref = React.useRef(null);
  const w = useContainerWidth(ref);
  const cols = w < 768 ? 3 : 6;
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: 'var(--colors-canvas)',
      padding: '32px 0',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: w < 768 ? '0 24px' : '0 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      color: 'var(--colors-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',minmax(0,1fr))',
      gap: 16
    }
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.2,
      color: 'var(--colors-muted)',
      filter: 'grayscale(1)'
    }
  }, typeof n === 'string' ? n : n)))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SignatureCard.jsx
try { (() => {
function useContainerWidth(ref) {
  const [w, setW] = React.useState(1280);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(ref.current);
    setW(ref.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  return w;
}
const BG = {
  coral: 'var(--colors-signature-coral)',
  forest: 'var(--colors-signature-forest)',
  dark: 'var(--colors-surface-dark)'
};
function SignatureCard({
  tone = 'coral',
  eyebrow,
  title,
  body,
  ctaLabel,
  onCta,
  children,
  minHeight
}) {
  const ref = React.useRef(null);
  const w = useContainerWidth(ref);
  const narrow = w < 760;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      background: BG[tone],
      color: 'var(--colors-on-dark)',
      borderRadius: 'var(--rounded-lg)',
      padding: narrow ? 32 : 48,
      fontFamily: 'var(--font-sans)',
      display: 'grid',
      gridTemplateColumns: children && !narrow ? 'minmax(0,1fr) minmax(0,1fr)' : 'minmax(0,1fr)',
      gap: 48,
      alignItems: 'end',
      minHeight
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignSelf: 'stretch',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      opacity: .85
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'inherit',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      maxWidth: 460,
      textWrap: 'pretty'
    }
  }, body)), ctaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary-on-dark",
    onClick: onCta
  }, ctaLabel))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, children));
}
Object.assign(__ds_scope, { SignatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SignatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Assessment.jsx
try { (() => {
const {
  TextInput: TI,
  Button: BtnA,
  Badge: BadgeA,
  CreamCallout: CC
} = window.StudyAbroadAllInOneDesignSystem_c572a1;
function AssessmentScreen({
  go
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap assess"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      color: 'var(--colors-muted)'
    }
  }, "Free assessment"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'var(--colors-ink)'
    }
  }, "Tell us your results. We'll reply within one working day."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)',
      maxWidth: 480
    }
  }, "A counsellor reviews your SSC, HSC or Honours results and calls you with a shortlist. No fee, no obligation."), /*#__PURE__*/React.createElement(CC, {
    style: {
      marginTop: 24,
      maxWidth: 420
    },
    title: "What to keep nearby",
    body: "SSC and HSC certificates, Honours transcript if any, IELTS or MOI letter, and your passport."
  })), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      background: 'var(--colors-surface-soft)',
      borderRadius: 12,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(BadgeA, {
    tone: "success"
  }, "Request received"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      lineHeight: 1.35,
      color: 'var(--colors-ink)'
    }
  }, "Thank you. A counsellor will call you tomorrow between 10:00 and 19:00."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BtnA, {
    variant: "secondary",
    onClick: () => go('Packages')
  }, "View packages"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 20,
      background: 'var(--colors-surface-soft)',
      borderRadius: 12,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(TI, {
    label: "Full name",
    placeholder: "e.g. Nusrat Jahan"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "Mobile",
    prefix: "+880",
    placeholder: "1XXX-XXXXXX"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "SSC GPA",
    suffix: "/ 5.00",
    placeholder: "5.00"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "HSC GPA",
    suffix: "/ 5.00",
    placeholder: "4.83"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "Honours CGPA (if any)",
    suffix: "/ 4.00",
    placeholder: "3.45"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "IELTS overall",
    placeholder: "or leave empty for MOI"
  }), /*#__PURE__*/React.createElement(TI, {
    label: "Preferred country",
    placeholder: "Romania, Italy, Hungary\u2026",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BtnA, {
    type: "submit"
  }, "Request free assessment")))));
}
Object.assign(window, {
  AssessmentScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Assessment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Fragments.jsx
try { (() => {
const {
  Badge,
  Icon,
  TextInput,
  Button
} = window.StudyAbroadAllInOneDesignSystem_c572a1;
const bdt = n => '৳' + Math.round(n).toLocaleString('en-IN');
function Panel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--colors-canvas)',
      borderRadius: 'var(--rounded-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      color: 'var(--colors-ink)',
      ...style
    }
  }, children);
}
function Row({
  l,
  r,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderBottom: last ? 0 : '1px solid var(--colors-hairline)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--colors-body)'
    }
  }, l), r);
}
function Seg({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--colors-surface-soft)',
      padding: 4,
      borderRadius: 8
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => onChange(o),
    style: {
      flex: 1,
      font: 'inherit',
      fontSize: 13,
      fontWeight: 500,
      padding: '6px 8px',
      border: 0,
      borderRadius: 6,
      cursor: 'pointer',
      background: o === value ? 'var(--colors-canvas)' : 'transparent',
      color: o === value ? 'var(--colors-ink)' : 'var(--colors-muted)',
      boxShadow: o === value ? '0 0 0 1px var(--colors-hairline)' : 'none'
    }
  }, o)));
}
const PROGRAMS = {
  "Bachelor's": [['University of Bucharest — CS', 4.0], ['Politecnico di Milano — Eng.', 4.5], ['University of Debrecen — Business', 3.5], ['Sapienza Roma — Economics', 4.25]],
  "Master's": [['Babeș-Bolyai — Data Science', 3.0], ['University of Padova — MSc Physics', 3.25], ['Politecnico di Milano — MSc CS', 3.5], ['University of Pécs — MBA', 2.75]]
};
function CgpaMatcher() {
  const [lvl, setLvl] = React.useState("Bachelor's");
  const [g, setG] = React.useState(lvl === "Bachelor's" ? '4.50' : '3.40');
  const v = parseFloat(g) || 0;
  const list = PROGRAMS[lvl];
  const scale = lvl === "Bachelor's" ? '/ 5.00 HSC' : '/ 4.00 CGPA';
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Seg, {
    options: Object.keys(PROGRAMS),
    value: lvl,
    onChange: x => {
      setLvl(x);
      setG(x === "Bachelor's" ? '4.50' : '3.40');
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: lvl === "Bachelor's" ? 'HSC GPA' : 'Honours CGPA',
    value: g,
    onChange: e => setG(e.target.value),
    suffix: scale
  }), /*#__PURE__*/React.createElement("div", null, list.map(([n, min], i) => /*#__PURE__*/React.createElement(Row, {
    key: n,
    last: i === list.length - 1,
    l: /*#__PURE__*/React.createElement("span", null, n, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--colors-muted)'
      }
    }, "min ", min.toFixed(2))),
    r: v >= min ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Eligible") : /*#__PURE__*/React.createElement(Badge, null, "Below min")
  }))));
}
function CostCalculator() {
  const [t, setT] = React.useState('2800');
  const [l, setL] = React.useState('550');
  const rate = 130;
  const eur = (parseFloat(t.replace(/,/g, '')) || 0) + (parseFloat(l) || 0) * 12;
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(TextInput, {
    label: "Tuition per year",
    prefix: "\u20AC",
    value: t,
    onChange: e => setT(e.target.value)
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Living cost per month",
    prefix: "\u20AC",
    value: l,
    onChange: e => setL(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--colors-hairline)',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      color: 'var(--colors-muted)'
    }
  }, "First-year total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      lineHeight: 1.2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, bdt(eur * rate)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--colors-muted)'
    }
  }, "\u20AC", eur.toLocaleString('en-IN'), " at an indicative \u09F3", rate, " / \u20AC")));
}
const LANG = [['Romania', null, true], ['Italy', 6.0, true], ['Hungary', 5.5, true], ['Germany', 6.5, false], ['Malaysia', 5.5, true]];
function LanguageChecker() {
  const [moi, setMoi] = React.useState('Yes');
  const [s, setS] = React.useState('6.0');
  const v = parseFloat(s) || 0;
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Medium of Instruction letter"), /*#__PURE__*/React.createElement(Seg, {
    options: ['Yes', 'No'],
    value: moi,
    onChange: setMoi
  })), /*#__PURE__*/React.createElement(TextInput, {
    label: "IELTS overall",
    value: s,
    onChange: e => setS(e.target.value),
    placeholder: "Leave empty if none"
  }), /*#__PURE__*/React.createElement("div", null, LANG.map(([c, min, m], i) => {
    const ok = moi === 'Yes' && m || min != null && v >= min;
    return /*#__PURE__*/React.createElement(Row, {
      key: c,
      last: i === LANG.length - 1,
      l: c,
      r: ok ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, moi === 'Yes' && m ? 'MOI accepted' : 'IELTS ok') : /*#__PURE__*/React.createElement(Badge, null, min ? 'IELTS ' + min.toFixed(1) : 'MOI only')
    });
  })));
}
const TODAY = new Date('2026-11-18');
const DEADLINES = [['Romania MFA scholarship', '2027-03-15'], ['Italy pre-enrolment (Universitaly)', '2027-04-30'], ['Italy DSU regional', '2027-07-31'], ['Hungary Stipendium Hungaricum', '2027-01-15'], ['Romania Sept intake — dossier', '2027-06-20']];
function DeadlineTracker({
  dark
}) {
  const list = DEADLINES.map(([n, d]) => [n, d, Math.ceil((new Date(d) - TODAY) / 864e5)]).sort((a, b) => a[2] - b[2]);
  return /*#__PURE__*/React.createElement(Panel, null, list.map(([n, d, left], i) => /*#__PURE__*/React.createElement(Row, {
    key: n,
    last: i === list.length - 1,
    l: /*#__PURE__*/React.createElement("span", null, n, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--colors-muted)'
      }
    }, new Date(d).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }))),
    r: left < 90 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, left, " days") : /*#__PURE__*/React.createElement(Badge, null, left, " days")
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--colors-muted)'
    }
  }, "Illustrative dates \u2014 confirm on each portal."));
}
function Journey() {
  const steps = [['University shortlist', 'Week 1'], ['Offer letter', 'Week 4–8'], ['Ministry & embassy attestation', 'Week 8–10'], ['Visa file & interview', 'Week 10–14'], ['Pre-departure briefing', 'Week 15']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--colors-canvas)',
      borderRadius: 'var(--rounded-md)',
      padding: 16,
      color: 'var(--colors-ink)'
    }
  }, steps.map(([s, w], i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr auto',
      gap: 12,
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: i < steps.length - 1 ? '1px solid var(--colors-hairline)' : 0,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: i < 2 ? 'var(--colors-primary)' : 'var(--colors-surface-soft)',
      color: i < 2 ? '#fff' : 'var(--colors-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i < 2 ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, i + 1)), /*#__PURE__*/React.createElement("span", null, s), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--colors-muted)',
      fontSize: 13
    }
  }, w))));
}
function Checklist({
  items
}) {
  return /*#__PURE__*/React.createElement(Panel, null, items.map(([l, s], i) => /*#__PURE__*/React.createElement(Row, {
    key: l,
    last: i === items.length - 1,
    l: l,
    r: s === 'done' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Verified") : s === 'info' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "In review") : /*#__PURE__*/React.createElement(Badge, null, "Pending")
  })));
}
Object.assign(window, {
  Panel,
  CgpaMatcher,
  CostCalculator,
  LanguageChecker,
  DeadlineTracker,
  Journey,
  Checklist,
  bdt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Fragments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Guides.jsx
try { (() => {
const {
  TopicFilterRail,
  ArticleCard,
  Button: ButtonG
} = window.StudyAbroadAllInOneDesignSystem_c572a1;
const ARTICLES = [['Italy DSU', 'Europe Scholarships', 'peach', 'Italy', 'Italy DSU 2027: ISEE parificato from Bangladesh, explained', '11 min read'], ['Romania MFA', 'Europe Scholarships', 'mint', 'Romania', 'Romania MFA scholarship: who qualifies and how to file', '8 min read'], ['Stipendium Hungaricum', 'Europe Scholarships', 'yellow', 'Hungary', 'Stipendium Hungaricum timeline for January applicants', '6 min read'], ['Schengen D-visa', 'Visa Checklists', 'cream', 'D-visa', 'Italy D-visa: the documents VFS Dhaka asks for', '9 min read'], ['Bank solvency', 'Visa Checklists', 'mustard', 'Solvency', 'Bank solvency certificates: amounts and sponsor letters', '5 min read'], ['SOP templates', 'SOP & Motivation Letters', 'forest', 'SOP', 'A motivation letter structure that admissions officers read', '7 min read'], ['Study gap', 'SOP & Motivation Letters', 'peach', 'Gap year', 'Explaining a study gap in your SOP', '4 min read'], ['Romania', 'Country Guides', 'mint', 'Romania', 'Living in Bucharest on €550 a month', '10 min read'], ['Italy', 'Country Guides', 'coral', 'Italy', 'Choosing between Milan, Padova and Rome', '12 min read']];
const GROUPS = ['Europe Scholarships', 'Visa Checklists', 'SOP & Motivation Letters', 'Country Guides'].map(h => ({
  heading: h,
  items: [...new Set(ARTICLES.filter(a => a[1] === h).map(a => a[0]))].map(l => ({
    label: l,
    count: ARTICLES.filter(a => a[0] === l).length * 4 + 1
  }))
}));
function GuidesScreen() {
  const [topic, setTopic] = React.useState('All guides');
  const list = topic === 'All guides' ? ARTICLES : ARTICLES.filter(a => a[0] === topic);
  const stripes = ['--colors-signature-coral', '--colors-signature-peach', '--colors-signature-yellow', '--colors-signature-mint', '--colors-signature-forest', '--colors-signature-mustard', '--colors-signature-cream'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--colors-surface-dark-elevated)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '42%',
      display: 'flex'
    }
  }, stripes.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: [3, 1, 2, 1, 4, 1, 2][i],
      background: 'var(' + s + ')'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      color: 'var(--colors-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      opacity: .85
    }
  }, "Guides"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 48,
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, "Country guides, visa checklists and scholarship notes."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25
    }
  }, "Written by our counsellors and updated each intake."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ButtonG, {
    variant: "secondary-on-dark"
  }, "Get the 2027 intake calendar"))))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap guides"
  }, /*#__PURE__*/React.createElement(TopicFilterRail, {
    groups: GROUPS,
    active: topic,
    onSelect: setTopic,
    allCount: ARTICLES.length * 4 + 3
  }), /*#__PURE__*/React.createElement("div", {
    className: "articles"
  }, list.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a[4],
    tone: a[2],
    thumbLabel: a[3],
    category: a[1],
    title: a[4],
    meta: a[5] + ' · Updated Nov 2026',
    onClick: e => e.preventDefault()
  }))))));
}
Object.assign(window, {
  GuidesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Guides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  HeroBand,
  LogoStrip,
  SignatureCard,
  FeatureCardTabbed,
  DemoGridCard,
  CreamCallout,
  CtaBandLight
} = window.StudyAbroadAllInOneDesignSystem_c572a1;
function SectionHead({
  eyebrow,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 640,
      marginBottom: 48
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.16px',
      color: 'var(--colors-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'var(--colors-ink)',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)'
    }
  }, body));
}
const TABS = [{
  label: 'Romania September Intake',
  title: 'Romania, September 2027',
  body: 'Tuition from €2,000 a year at state universities, English-taught programmes, and the MFA scholarship for non-EU students.',
  steps: ['Shortlist 3–5 programmes that accept your HSC or Honours result', 'Translate and notarise certificates, then Education Board and MOFA attestation', 'Submit to the university; letter of acceptance from the Ministry of Education', 'File the long-stay D-visa with the Romanian embassy covering Bangladesh'],
  linkLabel: 'Romania country guide',
  preview: /*#__PURE__*/React.createElement(Checklist, {
    items: [['Letter of acceptance', 'done'], ['Proof of tuition payment', 'info'], ['Bank solvency certificate', 'pending']]
  })
}, {
  label: 'Italy DSU & PhD Track',
  title: 'Italy: DSU regional scholarship and PhD calls',
  body: 'DSU covers tuition and can include a yearly stipend and accommodation. We prepare your ISEE parificato with your family documents from Bangladesh.',
  steps: ['Pre-enrol on Universitaly and receive the DOV / CIMEA statement', 'Collect family income, property and household documents', 'Apply to the regional DSU office before its deadline', 'Track PhD calls and prepare research proposal drafts'],
  linkLabel: 'Italy DSU guide',
  preview: /*#__PURE__*/React.createElement(Checklist, {
    items: [['Universitaly pre-enrolment', 'done'], ['ISEE parificato', 'info'], ['DSU application', 'pending']]
  })
}, {
  label: 'Document & Ministry Attestation',
  title: 'Attestation without the back-and-forth',
  body: 'We schedule Education Board, Ministry of Education and Ministry of Foreign Affairs attestation in the correct order, then courier the originals back to you.',
  steps: ['SSC, HSC and Honours certificates and transcripts', 'Education Board verification', 'Ministry of Education attestation', 'MOFA attestation and embassy legalisation where required'],
  preview: /*#__PURE__*/React.createElement(Checklist, {
    items: [['SSC & HSC certificates', 'done'], ['Education Board', 'done'], ['MOFA attestation', 'info']]
  })
}, {
  label: 'Embassy Interview Prep',
  title: 'Embassy interview, rehearsed',
  body: 'Two mock interviews with a counsellor who has sat on the other side of the file, plus a written brief of questions asked this season.',
  steps: ['Study plan and financial sponsor narrative', 'Mock interview one: academic intent', 'Mock interview two: finances and return plans', 'Final file check the day before your appointment'],
  preview: /*#__PURE__*/React.createElement(Checklist, {
    items: [['Mock interview 1', 'done'], ['Mock interview 2', 'pending'], ['Final file check', 'pending']]
  })
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "For HSC, Bachelor's and Master's applicants from Bangladesh",
    title: "Study abroad with one team handling admission, scholarship and visa.",
    subtitle: "We shortlist universities that accept your results, file your scholarship, attest your documents and prepare your embassy interview. Fees are listed up front.",
    onPrimary: () => go('Assessment'),
    onSecondary: () => go('Assessment')
  }), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SignatureCard, {
    tone: "coral",
    eyebrow: "Europe & global admissions",
    title: "From offer letter to embassy appointment, one file and one counsellor.",
    body: "Romania, Italy, Hungary, Germany and Malaysia. We handle university applications, ministry attestation and student visa filing in the order embassies expect.",
    ctaLabel: "See packages",
    onCta: () => go('Packages')
  }, /*#__PURE__*/React.createElement(Journey, null)))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How we work",
    title: "Each intake has its own checklist. We keep it for you.",
    body: "Pick a track to see the steps and the documents we track on your behalf."
  }), /*#__PURE__*/React.createElement(FeatureCardTabbed, {
    tabs: TABS
  }))), /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Free tools",
    title: "Check where you stand before you pay anything."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bento"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(DemoGridCard, {
    tone: "peach",
    title: "Academic eligibility & CGPA matcher",
    caption: "SSC, HSC and Honours results against programme minimums."
  }, /*#__PURE__*/React.createElement(CgpaMatcher, null)), /*#__PURE__*/React.createElement(SignatureCard, {
    tone: "forest",
    title: "Italy DSU opens in July.",
    ctaLabel: "Prepare ISEE",
    onCta: () => go('Guides')
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(DemoGridCard, {
    tone: "mint",
    title: "Tuition & living cost",
    caption: "EUR to BDT for your first year."
  }, /*#__PURE__*/React.createElement(CostCalculator, null)), /*#__PURE__*/React.createElement(CreamCallout, {
    stat: "1,240+",
    title: "Student visas filed since 2019",
    body: "Across Romania, Italy, Hungary and Malaysia, from our Dhanmondi office."
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(DemoGridCard, {
    tone: "yellow",
    title: "MOI & IELTS requirement checker",
    caption: "Which countries accept your Medium of Instruction letter."
  }, /*#__PURE__*/React.createElement(LanguageChecker, null)), /*#__PURE__*/React.createElement(DemoGridCard, {
    tone: "mustard",
    title: "2027 intake deadline tracker",
    caption: "Days left from today."
  }, /*#__PURE__*/React.createElement(DeadlineTracker, null)))))), /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SignatureCard, {
    tone: "dark",
    eyebrow: "September 2027 intake",
    title: "Applications for September open this winter. Start your file now.",
    body: "A 30-minute assessment is free. You leave with a country shortlist and a document checklist.",
    ctaLabel: "Check eligibility",
    onCta: () => go('Assessment')
  }))), /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(CtaBandLight, {
    title: "Talk to a counsellor in Dhaka this week.",
    body: "In person at Dhanmondi or on video. Parents are welcome to join.",
    onCta: () => go('Assessment')
  }))));
}
Object.assign(window, {
  HomeScreen,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Packages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PricingTierCard,
  PricingComparisonTable,
  CtaBandLight: CtaBandLightP
} = window.StudyAbroadAllInOneDesignSystem_c572a1;
const TIERS = [{
  name: 'Initial Assessment',
  price: 'Free',
  unit: '30-minute session',
  description: 'Profile review, country shortlist and a document checklist.',
  features: ['SSC / HSC / Honours result review', 'Study-gap explanation advice', 'Country and budget shortlist'],
  ctaLabel: 'Book free session'
}, {
  name: 'University Admission',
  price: '৳45,000',
  unit: 'up to 3 applications',
  description: 'Shortlist, documents and university submissions.',
  features: ['5-university shortlist', 'SOP & motivation letter, 2 review rounds', 'Application submission and follow-up', 'Offer letter review']
}, {
  name: 'Complete Visa & Scholarship',
  price: '৳95,000',
  unit: 'admission through visa decision',
  description: 'Everything in Admission, plus scholarship and embassy filing.',
  features: ['Up to 6 applications', 'Scholarship filing (MFA, DSU, Stipendium)', 'Ministry & MOFA attestation', 'Visa file and 2 mock interviews'],
  featured: true,
  ctaVariant: 'solid',
  ctaLabel: 'Choose complete'
}, {
  name: 'Visa Filing Only',
  price: '৳35,000',
  unit: 'with an offer letter in hand',
  description: 'For students who already hold an admission letter.',
  features: ['Embassy document checklist', 'Bank solvency & sponsor guidance', '1 mock interview']
}];
const SECTIONS = [{
  title: 'Applications',
  rows: [{
    label: 'University applications',
    values: ['—', '3', '6', '—']
  }, {
    label: 'SOP & motivation letter reviews',
    values: [false, '2 rounds', 'Unlimited', false]
  }, {
    label: 'Application fee handling',
    values: [false, true, true, false]
  }]
}, {
  title: 'Scholarships',
  rows: [{
    label: 'Romania MFA / ARICE filing',
    values: [false, false, true, false]
  }, {
    label: 'Italy DSU & ISEE parificato',
    values: [false, false, true, false]
  }]
}, {
  title: 'Visa & documents',
  rows: [{
    label: 'Education Board & MOFA attestation',
    values: [false, false, true, 'Add-on']
  }, {
    label: 'Visa file preparation',
    values: [false, false, true, true]
  }, {
    label: 'Mock embassy interviews',
    values: [false, false, '2', '1']
  }, {
    label: 'Pre-departure briefing',
    values: [false, true, true, true]
  }]
}];
function PackagesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pricing)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 720,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 44.8,
      fontWeight: 475,
      lineHeight: 1.1,
      color: 'var(--colors-pricing-ink)'
    }
  }, "Consultancy packages"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.25,
      color: 'var(--colors-body)'
    }
  }, "One fee, listed before you start. University application fees, embassy fees and VFS charges are paid directly by you and are not included.")), /*#__PURE__*/React.createElement("div", {
    className: "tiers"
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PricingTierCard, _extends({
    key: t.name
  }, t, {
    onCta: () => go('Assessment')
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-pricing)',
      margin: '0 0 24px',
      fontSize: 28,
      fontWeight: 475,
      lineHeight: 1.2,
      color: 'var(--colors-pricing-ink)'
    }
  }, "Compare packages"), /*#__PURE__*/React.createElement(PricingComparisonTable, {
    plans: TIERS.map(t => t.name),
    sections: SECTIONS
  }))), /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(CtaBandLightP, {
    title: "Not sure which package fits?",
    body: "Start with the free assessment. Your counsellor will recommend one, or none.",
    onCta: () => go('Assessment')
  }))));
}
Object.assign(window, {
  PackagesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Packages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.TopicFilterRail = __ds_scope.TopicFilterRail;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.PricingComparisonRow = __ds_scope.PricingComparisonRow;

__ds_ns.PricingComparisonTable = __ds_scope.PricingComparisonTable;

__ds_ns.PricingPillButton = __ds_scope.PricingPillButton;

__ds_ns.PricingTierCard = __ds_scope.PricingTierCard;

__ds_ns.CreamCallout = __ds_scope.CreamCallout;

__ds_ns.CtaBandLight = __ds_scope.CtaBandLight;

__ds_ns.DemoGridCard = __ds_scope.DemoGridCard;

__ds_ns.FeatureCardTabbed = __ds_scope.FeatureCardTabbed;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.SignatureCard = __ds_scope.SignatureCard;

})();
