# Design Guidelines

## 1. Brand Identity

### 1.1 Colors

#### Primary Colors
- Purple (#8B5CF6)
- White (#FFFFFF)
- Black (#000000)

#### Secondary Colors
- Light Purple (#A78BFA)
- Dark Purple (#7C3AED)
- Gray (#6B7280)
- Light Gray (#F3F4F6)

### 1.2 Typography

#### Font Family
- Primary: Inter
- Secondary: System UI

#### Font Sizes
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- H4: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### 1.3 Logo Usage
- Minimum size: 32px
- Clear space: 1x logo width
- Color variations: Full color, Monochrome, White

## 2. UI Components

### 2.1 Buttons

#### Primary Button
```css
background-color: #8B5CF6;
color: #FFFFFF;
padding: 0.5rem 1rem;
border-radius: 0.375rem;
font-weight: 500;
```

#### Secondary Button
```css
background-color: #F3F4F6;
color: #6B7280;
padding: 0.5rem 1rem;
border-radius: 0.375rem;
font-weight: 500;
```

### 2.2 Forms

#### Input Fields
```css
border: 1px solid #E5E7EB;
border-radius: 0.375rem;
padding: 0.5rem 0.75rem;
```

#### Labels
```css
font-size: 0.875rem;
font-weight: 500;
color: #374151;
```

### 2.3 Cards

#### Service Cards
```css
background-color: #FFFFFF;
border-radius: 0.5rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
padding: 1.5rem;
```

## 3. Layout

### 3.1 Grid System
- 12-column grid
- Gutter width: 1.5rem
- Max container width: 1280px

### 3.2 Spacing
- Base unit: 0.25rem (4px)
- Common spacings:
  - Small: 0.5rem (8px)
  - Medium: 1rem (16px)
  - Large: 1.5rem (24px)
  - Extra Large: 2rem (32px)

### 3.3 Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 4. Components

### 4.1 Navigation
- Fixed header
- Responsive menu
- Breadcrumb navigation
- Active state indicators

### 4.2 Service Cards
- Consistent height
- Clear pricing display
- Feature list
- Call-to-action button

### 4.3 Payment Form
- Clear section headers
- Input validation
- Secure payment indicators
- Order summary

## 5. Accessibility

### 5.1 Color Contrast
- Text contrast ratio: 4.5:1 minimum
- Large text contrast ratio: 3:1 minimum
- Interactive elements contrast ratio: 3:1 minimum

### 5.2 Keyboard Navigation
- Focus indicators
- Logical tab order
- Skip links
- ARIA labels

### 5.3 Screen Readers
- Semantic HTML
- Alt text for images
- ARIA roles
- Descriptive link text

## 6. Responsive Design

### 6.1 Mobile First
- Start with mobile layout
- Progressive enhancement
- Touch-friendly targets
- Simplified navigation

### 6.2 Breakpoint Behavior
- Fluid layouts
- Responsive images
- Collapsible menus
- Stacked content

## 7. Animation

### 7.1 Transitions
- Duration: 200ms
- Easing: ease-in-out
- Properties: opacity, transform

### 7.2 Micro-interactions
- Button hover states
- Form focus states
- Loading indicators
- Success/error messages

## 8. Assets

### 8.1 Icons
- Consistent stroke width
- Clear meaning
- Appropriate size
- Accessible alternatives

### 8.2 Images
- Optimized file size
- Responsive sizes
- Alt text
- Lazy loading

## 9. Implementation

### 9.1 CSS
- Use CSS variables
- Follow BEM methodology
- Mobile-first media queries
- Utility classes

### 9.2 Components
- Reusable components
- Props documentation
- State management
- Error handling 