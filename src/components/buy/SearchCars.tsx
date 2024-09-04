"use client";

import { Brand } from "@/types/brands.schema";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "../common/icons";

type SearchCarsProps = {
    initialBrands: Brand[];
};

type BrandOptions = Brand & { label: string };

const mapBrandsToOptions = (brands: Brand[]): BrandOptions[] => {
    const options: BrandOptions[] = [];
    if (Array.isArray(brands)) {
        for (let i = 0; i < brands.length; i++) {
            const brand = brands[i].brandName;
            const models = brands[i].models;
            if (Array.isArray(models)) {
                for (let j = 0; j < models.length; j++) {
                    const model = models[j];
                    const label = `${brand} ${model}`;
                    options.push({ label, ...brands[i] });
                }
            }
        }
    }
    return options;
};

const matchOptions = (query: string, options: BrandOptions[]): BrandOptions[] => {
    return options.filter((option) => {
        return option.label.toLowerCase().includes(query.toLowerCase());
    });
};

// TODO - Add cross icon in search to remove the query
// TODO - Selected value gets selected in seach bar and fetches results

const SearchCars: React.FC<SearchCarsProps> = ({ initialBrands }) => {
    const initalOptions = mapBrandsToOptions(initialBrands);
    const [query, setQuery] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState<BrandOptions[]>(initalOptions);

    useEffect(() => {
        if (query.trim() === "") {
            setFilteredOptions(initalOptions);
        } else {
            const results = matchOptions(query, initalOptions);
            setFilteredOptions(results);
        }
    }, [query, initialBrands]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const boldString = (text: string) => {
        const strRegExp = new RegExp(query, "gi");
        return text.replace(strRegExp, `<b>${query}</b>`);
    };

    //REVIEW -
    const highlightQuery = (text: string) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, "gi"));
        return (
            <>
                {parts.map((part, index) =>
                    part.toLowerCase() === query.toLowerCase() ? (
                        <span key={index} className="font-bold">
                            {part}
                        </span>
                    ) : (
                        part
                    ),
                )}
            </>
        );
    };

    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
                <SearchIcon />
                <input
                    type="text"
                    spellCheck={false}
                    className="grow"
                    placeholder="Search for cars by brand or model"
                    value={query}
                    onChange={handleInputChange}
                />
            </label>
            {filteredOptions.length > 0 && query.length > 0 && (
                <ul className="dropdown-content mt-2 p-2 shadow bg-base-100 z-10 w-9/10 rounded-box absolute max-h-40 overflow-y-auto">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-base-200 flex items-center"
                        >
                            <img
                                src={option.logo}
                                alt={option.brandName}
                                className="w-6 h-6 mr-2"
                            />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchCars;
