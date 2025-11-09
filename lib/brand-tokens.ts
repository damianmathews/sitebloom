// SiteBloom Brand Tokens
// Positioning: Clean, trustworthy, trade-friendly. Understated premium.

export const colors = {
  sb: {
    ink: '#0B1220',      // primary ink
    iris: '#4C6FFF',     // action
    mint: '#27C3A7',     // accent/success
    sand: '#F5F2EC',     // warm background
    cloud: '#EEF2F7',    // ui background
    line: '#D9DFE7',     // borders
  },
} as const;

export const radius = {
  sm: '12px',
  md: '20px',
  lg: '24px',
  xl: '28px',
} as const;

export const shadows = {
  subtle: '0 1px 3px rgba(11, 18, 32, 0.08), 0 1px 2px rgba(11, 18, 32, 0.06)',
  card: '0 4px 6px rgba(11, 18, 32, 0.05), 0 2px 4px rgba(11, 18, 32, 0.04)',
  elevated: '0 10px 20px rgba(11, 18, 32, 0.08), 0 4px 8px rgba(11, 18, 32, 0.06)',
  focus: '0 0 0 2px rgba(76, 111, 255, 0.4)',
} as const;

export const spacing = {
  grid: 8, // 8px base grid
} as const;

// Framer Motion Variants
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.2 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.15 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  hoverScale: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  hoverElevate: {
    y: -2,
    boxShadow: shadows.elevated,
    transition: { duration: 0.2 },
  },
} as const;

// Typography scale (fluid with clamp)
export const typography = {
  display: {
    fontFamily: '"Inter Tight", system-ui, sans-serif',
    weights: {
      semibold: 600,
      bold: 700,
    },
  },
  text: {
    fontFamily: '"Inter", system-ui, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  scale: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',      // 12-14px
    sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',       // 14-16px
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',      // 16-18px
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.375rem)',   // 18-22px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem)',      // 20-26px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',       // 24-32px
    '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem)', // 30-42px
    '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3.25rem)',    // 36-52px
    '5xl': 'clamp(2.625rem, 2.25rem + 1.875vw, 3.875rem)', // 42-62px
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.4,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },
} as const;

// Export utility for reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Motion config respecting user preferences
export const getMotionConfig = () => {
  const shouldReduce = prefersReducedMotion();
  return {
    initial: shouldReduce ? false : 'initial',
    animate: shouldReduce ? false : 'animate',
    exit: shouldReduce ? false : 'exit',
    transition: shouldReduce ? { duration: 0 } : undefined,
  };
};
