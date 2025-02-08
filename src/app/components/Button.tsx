"use client"

export default function Button({
  children,
  variant,
  className,
  ...props
}: { children: React.ReactNode; variant?: "ghost"; className?: string; [x: string]: any }) {
  return (
    <button
      className={`
        ${variant === "ghost" ? "bg-transparent hover:bg-gray-100" : "bg-emerald-600 hover:bg-emerald-700"}
        text-white ${variant === "ghost" ? "text-emerald-600 hover:text-emerald-700" : ""}
        px-4 py-2 rounded-md
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

