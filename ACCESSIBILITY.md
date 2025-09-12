# Accessibility Features

This document outlines the accessibility features and considerations implemented in the VoltBridge website to ensure an inclusive experience for all users.

## Table of Contents
- [Reduced Motion](#reduced-motion)
- [Keyboard Navigation](#keyboard-navigation)
- [Focus Management](#focus-management)
- [Screen Reader Support](#screen-reader-support)
- [Color Contrast](#color-contrast)
- [Semantic HTML](#semantic-html)
- [Testing](#testing)

## Reduced Motion

We respect users' motion preferences through multiple layers of support:

1. **CSS Media Queries**: All animations check `prefers-reduced-motion` media query
2. **JavaScript Detection**: Motion is disabled when users have indicated a preference for reduced motion
3. **User Toggle**: A motion toggle in the UI allows users to control animations
4. **Framer Motion**: All animations respect reduced motion preferences

### Implementation Details

- Uses `window.matchMedia('(prefers-reduced-motion: reduce)')` to detect system preferences
- Stores user preference in `localStorage` for persistence
- Updates the `data-motion` attribute on the HTML element
- CSS custom properties control animation behavior

## Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus styles are clearly visible with high contrast
- Custom focus management for modals and dialogs
- Skip to main content link available as the first focusable element

## Focus Management

- Focus is trapped in modals and dialogs
- Focus is returned to the triggering element when dialogs close
- Focus states are clearly visible with custom styles
- Dynamic content changes are announced to screen readers

## Screen Reader Support

- ARIA attributes for all interactive components
- Proper heading structure throughout the site
- Descriptive alt text for all images
- ARIA live regions for dynamic content updates
- Proper form labeling and error messaging

## Color Contrast

- All text meets WCAG 2.1 AA contrast requirements
- Color is not used as the sole means of conveying information
- Interactive elements have sufficient contrast in all states

## Semantic HTML

- Proper use of HTML5 semantic elements
- Logical heading hierarchy
- Lists for related items
- Tables for tabular data with proper headers

## Testing

### Automated Testing
- ESLint with jsx-a11y plugin
- Axe accessibility testing
- Color contrast checking

### Manual Testing
- Keyboard navigation
- Screen reader testing (VoiceOver, NVDA, JAWS)
- Zoom testing (200%)
- High contrast mode
- Mobile and touch device testing

## Browser Support

- Latest versions of Chrome, Firefox, Safari, and Edge
- Mobile browsers on iOS and Android

## Known Issues

None at this time.

## Getting Help

If you encounter any accessibility issues, please contact us at [accessibility@voltbridge.co.uk](mailto:accessibility@voltbridge.co.uk).

## Resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [WebAIM WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [A11Y Project](https://www.a11yproject.com/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
