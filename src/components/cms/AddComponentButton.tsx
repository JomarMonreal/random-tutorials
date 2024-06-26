"use client";
import { AddBox } from '@mui/icons-material';
import { Button } from '@mui/material';

export function AddComponentButton({ onClick, label }: { onClick: () => void; label: string; }) {
    return <Button className='button-white flex gap-2 items-center' onClick={onClick}>
        <AddBox />
        <span>
            {label}
        </span>
    </Button>;
}
