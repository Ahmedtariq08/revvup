"use client";
import { Brand } from "@/actions/cars/brands";
import { InputCrossIcon, SearchIcon } from "@components/common/icons";
import React, { useEffect, useMemo, useRef, useState } from "react";

type SearchCarsProps = {
    initialBrands: Brand[];
};

type BrandOptions = ReturnType<typeof mapBrandsToOptions>;

const mapBrandsToOptions = (brands: Brand[]) => {
    const options = [];
    if (Array.isArray(brands)) {
        for (let i = 0; i < brands.length; i++) {
            const { id, name, models, logo } = brands[i];
            if (Array.isArray(models)) {
                for (let j = 0; j < models.length; j++) {
                    const model = models[j];
                    const label = `${name} ${model.name}`;
                    options.push({ id, label, name, logo });
                }
            }
        }
    }
    return options;
};

const matchOptions = (query: string, options: BrandOptions): BrandOptions => {
    return options.filter((option) => {
        return option.label.toLowerCase().includes(query.toLowerCase());
    });
};

const SearchCars: React.FC<SearchCarsProps> = ({ initialBrands }) => {
    // Memoize the options to ensure they are computed only once
    const initalOptions = useMemo(
        () => mapBrandsToOptions(initialBrands),
        [initialBrands],
    );

    const [query, setQuery] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState(initalOptions);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Filter the options based on query
    useEffect(() => {
        if (query.trim() === "") {
            setFilteredOptions(initalOptions);
        } else {
            const results = matchOptions(query, initalOptions);
            setFilteredOptions(results);
        }
    }, [query, initalOptions]);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setQuery("");
                setFilteredOptions([]); // Close dropdown if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef, dropdownRef]);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // Handle option selection
    const handleOptionClick = (option: any) => {
        setQuery(option.label); // Update the input field with the selected option
        setFilteredOptions([]); // Hide options after selection
    };

    const handleClearInput = () => {
        setQuery("");
    };

    return (
        <div className="relative">
            <label className="input input-bordered flex items-center gap-2">
                <SearchIcon />
                <input
                    ref={inputRef}
                    type="text"
                    spellCheck={false}
                    className="grow"
                    placeholder="Search for cars by brand or model"
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="btn-ghost p-0" onClick={handleClearInput}>
                    <InputCrossIcon width={15} height={15} />
                </button>
            </label>

            {/* Show dropdown only if there are filtered options and the query is not empty */}
            {filteredOptions.length > 0 && query.length > 0 && (
                <ul
                    ref={dropdownRef}
                    className="dropdown-content mt-2 p-2 shadow bg-base-100 z-10 w-full rounded-box absolute max-h-40 overflow-y-auto"
                >
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-base-200 flex items-center cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                        >
                            <img
                                src={option.logo}
                                alt={option.name}
                                className="w-6 h-6 mr-2"
                            />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            {/* Show 'No results found' if query has results but no match */}
            {query.length > 0 && filteredOptions.length === 0 && (
                <ul className="dropdown-content mt-2 p-2 shadow bg-base-100 z-10 w-full rounded-box absolute max-h-40 overflow-y-auto">
                    <li className="p-2 text-gray-500">No results found</li>
                </ul>
            )}
        </div>
    );
};

export default SearchCars;
