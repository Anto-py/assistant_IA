import { forwardRef } from 'react'

const variantClasses = {
  default:
    'bg-retro-orange text-retro-paper border-2 border-retro-teal font-display uppercase tracking-wide hover:bg-retro-orange/90',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline:
    'border-2 border-retro-teal bg-transparent text-retro-teal hover:bg-retro-teal/10',
  secondary:
    'bg-retro-jaune text-retro-ink border-2 border-retro-teal hover:bg-retro-jaune/80',
  ghost:  'hover:bg-retro-teal/10 hover:text-retro-teal',
  link:   'text-retro-teal underline-offset-4 hover:underline',
}

const sizeClasses = {
  default: 'h-10 px-5 py-2',
  sm:      'h-9 px-3',
  lg:      'h-11 px-8',
  icon:    'h-10 w-10',
}

const Button = forwardRef(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    return (
      <button
        ref={ref}
        className={`${base} ${variantClasses[variant] ?? ''} ${sizeClasses[size] ?? ''} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
