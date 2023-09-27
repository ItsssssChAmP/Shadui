"use client"

import * as React from "react"

import { MultiSelect } from "@/registry/new-york/ui/multi-select"

export default function MultiSelectDemo() {
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
        <MultiSelect
            options={[
                { value: "React", label: "React" },
                { value: "Vue", label: "Vue" },
                { value: "Svelte", label: "Svelte" },
                { value: "Angular", label: "Angular" },
            ]}
            selected={selected}
            onChange={setSelected}
            className="sm:w-[300px]"
            placeholder="Select a framework"
        />
    )
}