import { ComponentType, SVGProps } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  onClick?: () => void
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
  iconClassName?: string
  type?: 'button' | 'submit'
}

export const ActionButton = ({ onClick, icon: Icon, className, iconClassName, type }: Props) => {
  return (
    <button
      className={cn(
        'rounded-md border p-2 hover:bg-gray-100 cursor-pointer',
        className,
      )}
      onClick={onClick}
      type={type}
    >
      <Icon className={cn('size-3', iconClassName)} />
    </button>
  )
}

// Usage:
// import { PencilIcon } from '@heroicons/react/24/outline'

// <ActionButton 
//   onClick={() => {}} 
//   icon={PencilIcon} 
//   className="absolute top-2 right-11"
//   iconClassName="text-blue-500"
// />
