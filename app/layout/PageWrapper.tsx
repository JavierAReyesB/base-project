import { cn } from '@/lib/utils'
import React from 'react'

interface PageWrapperProps {
  className?: string
  children: React.ReactNode
  title?: string
  description?: string
}

export function PageWrapper({
  className,
  children,
  title,
  description
}: PageWrapperProps) {
  return (
    <div
      className={cn(
        'flex-1 flex flex-col px-4 md:px-6 pt-[3.5rem] space-y-6',
        className
      )}
    >
      {(title || description) && (
        <div>
          {title && <h1 className='text-2xl font-bold'>{title}</h1>}
          {description && (
            <p className='text-sm text-muted-foreground'>{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
