import React, { useState } from 'react'

export default function SelectDropdown() {
const [select, setSeletc ] = useState("")
    return (
        <div>
            <select >
                <option value="select all">Select All</option>
                <option value="rent">Rent</option>
                <option value="for sale">For Sale</option>
            </select>
        </div>
    )
}
