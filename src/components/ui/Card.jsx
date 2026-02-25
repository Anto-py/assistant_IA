import { forwardRef } from 'react'

const retroCardStyle = {
  border:       '3px solid #127676',
  borderRadius: '24px 8px 24px 8px',
  boxShadow:    'inset 0 0 0 2px rgba(228, 99, 46, 0.25)',
}

export const Card = forwardRef(({ className = '', style = {}, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-background text-card-foreground ${className}`}
    style={{ ...retroCardStyle, ...style }}
    {...props}
  />
))
Card.displayName = 'Card'

export const CardHeader = forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef(({ className = '', ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl font-display uppercase tracking-wide leading-none ${className}`}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef(({ className = '', ...props }, ref) => (
  <p ref={ref} className={`text-sm text-muted-foreground ${className}`} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = 'CardContent'
