import React, { useState, useEffect, ReactNode, ReactElement, ComponentType } from 'react';

type EditableProps = {
    isEditable: boolean,
    editableComponent: ReactElement,
    children: ReactElement,
};

const Editable = ({ isEditable, editableComponent, children } : EditableProps) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isEditable) {
            setIsFocused(false);
        }
    }, [isEditable]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className='w-full'
        >
            {isEditable && isFocused ? (
                React.cloneElement(editableComponent, {
                    onBlur: handleBlur,
                    autoFocus: true
                })
            ) : (
                children
            )}
        </div>
    );
};

export default Editable;
