
"use client";
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';


const Text = () => {
    const clickHandler = (mode) => {
        mode ? toast.success("This is a success toast!") : toast.error("This is an error toast!");
    }
    return (
        <div>
            <Button className="bg-red-600" variant="default" onClick={() => clickHandler(false)}>Button</Button>
            Hellow text
        </div>
    );
};

export default Text;