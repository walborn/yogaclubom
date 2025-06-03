import { ComponentType, SVGProps } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  onClick?: () => void
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
  iconClassName?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const ActionButton = ({ onClick, icon: Icon, className, iconClassName, type, disabled }: Props) => {
  return (
    <button
      className={cn(
        'rounded-md border p-2 hover:bg-gray-100 cursor-pointer',
        { 'pointer-events-none opacity-50': disabled },
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
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
