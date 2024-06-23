"use client";

import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { tags } from "@/data/tags";

export function TutorialsTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return <Tabs value={value} onChange={handleChange} variant="scrollable">
        {tags.map((tag, index) => <Tab key={index} label={tag.label} id={`simple-tab-${index}`} />
        )}
    </Tabs>;
}
