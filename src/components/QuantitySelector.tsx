import React, { useEffect, useState } from 'react';

interface QuantitySelectorProps {
    onQuantityChange?: (quantity: number) => void;
    initialQuantity?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    onQuantityChange,
    initialQuantity = 1
}) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);


    const handleIncrease = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        if (onQuantityChange) onQuantityChange(newQty);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            if (onQuantityChange) onQuantityChange(newQty);
        }
    };

    return (
        <div className="flex items-center border rounded-md w-fit px-2 py-1 space-x-3">
            <button
                onClick={handleDecrease}
                className="text-xl font-bold text-gray-700 hover:text-red-500"
                disabled={quantity <= 1}
            >
                −
            </button>
            <span className="text-lg font-medium w-6 text-center">{quantity}</span>
            <button
                onClick={handleIncrease}
                className="text-xl font-bold text-gray-700 hover:text-green-600"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
