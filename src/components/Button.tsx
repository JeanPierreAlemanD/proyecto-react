
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    width?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'tertiary';
}


function Button({
    label,
    disabled,
    className,
    size = 'md',
    width = 'lg',
    variant = 'primary',
    onClick,
    ...rest
}: ButtonProps) {
    const baseClass = 'px-4 py-2 rounded font-sembold cursor-pointer';
    const sizeClass = {
        sm: 'text-sm py-1 px-2',
        md: 'text-md py-2 px-4',
        lg: 'text-lg py-3 px-6',
        xl: 'text-xl py-3 px-6'
    }[size];

    const widthClass = {
        sm: 'w-20',    // 80px aprox
        md: 'w-32',    // 128px aprox
        lg: 'w-48',    // 192px aprox
        xl: 'w-56',    // 224px aprox
    }[width];

    const variantClass = {
        primary: 'bg-black-500 text-white hover:bg-black-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        tertiary: 'bg-transparent text-black-500 border border-black-500 hover:bg-black-500 hover:text-white'
    }[variant];


    return <button
        className={`${baseClass} 
                    ${sizeClass}
                    ${widthClass} 
                    ${className}
                    ${variantClass}`} {...rest}
        onClick={onClick}
        disabled={disabled}>
        {label}
    </button>

}

export default Button;