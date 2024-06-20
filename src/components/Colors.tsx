import { ReactNode } from "react";

export const Orange = ({children}: {children: ReactNode}) => {
    return (
        <span className="text-orange-500">
            {children}
        </span>
    )
}