





// Dewan Group


let dewanGroup = [
    {
        GroupName: "Dewan Group",
        Companyies: [
            {
                Name: "Dewan Motors",
                brands: [
                    {
                        brandName: "BMW",
                        models: [2021, 2022, 2023, 2024, 2025],
                        colors: ["gray", "white", "black", "and also Customized "],
                        varitents: ["M3", "M3 Convertible", "M5", "M5 CS", "M5 compition",]
                    },
                    {
                        brandName: "KIA",
                        models: [2022, 2023, 2024, 2025],
                        colors: ["gray", "white", "black", "and also Customized "],
                        varitents: ["Picanto", "Picanto Automatic", "Sportage ", "Spectra"]
                    },
                    {
                        brandName: "Hyundai",
                        models: [2024, 2025],
                        colors: ["gray", "white", "black", "and also Customized "],
                        varitents: ["Santro", "HR-V"]
                    }
                ]
            },
            {
                Name: "Dewan Cement",
                cementTypes: ["Ordinary port land", "Blast Furnace", "Black Diamond"],
                weight: "50kg/bag"
            },
            {
                Name: "Dewan Textile Mills",
                subCompines: {
                    company1: "Dewan Khalid Textile Mills Ltd.",
                    company2: "Dewan Mushtaq Textile Mills Ltd.",
                    company3: "Dewan Farooque Spinning Mills Ltd.",
                    company4: "Dewan Salman Fibre Ltd"
                }

            },
            {
                name: "Dewan Ethanol Manufactureing",
                uses: ["Alcohol Industry", "Pharmaceutical Industry", "HouseHold Chemicals ", "WindScreen Washing Fluid", "Food Industry", "Cosmetic and perfume Industry", "Industrial Chemicals"],
                products: [
                    {
                        name: "ANH Anhydrous Alcohol",
                        purity:"99.9 % Min"
                    },
                    {
                        name: "ENA  Neutral Alcohol",
                        purity:"96.2 % Min"
                    },
                    {
                        name: "B - Grade Alcohol",
                        purity:"93 % Min"
                    },
                ],
                supplyOptions: ["Bulk Vessel","ISO tank","FCL"]

            }
        ],
        University: {
            name: " Shaheed Benazir Bhutto Dewan University (SBBDU)",
            location: "30 A, Mehran Town Sector 23 Korangi Industrial Area, Karachi Hours ",
            Faculties: [
                {
                    Name: " Doctor of Physical Therapy - DPT",
                    duration: "5 year",
                    contact: "03368729555",
                    Addmission: "Fall 2025 admissions are open. ",
                    Requirments: "An FSc (Pre-Medical) degree with at least 60% marks is typically required for admission. "
                },
                {
                    Name: "Pharm D (Doctor of Pharmacy)",
                    duration: "5 year",
                    contact: "03368729555",
                    Addmission: "Fall 2025 admissions are open. ",
                    Requirments: "An FSc (Pre-Medical) degree with at least 60% marks is typically required for admission. "

                },
                {
                    name: " Management Sciences (BBA)",
                    duration: "4 year",
                    Addmission: "Close",
                    Requirments: "Minimum 45% marks in Intermediate or equivalent"
                },
                {
                    name: " Information Technology (BSCS)",
                    duration: "4 year",
                    Addmission: "Close",
                    Requirments: "minimum of 50% marks in your Intermediate (HSSC) or equivalent qualification, with a preference for candidates having a mathematical background"
                }
            ]
        }
    }
]

console.log(dewanGroup[0].Companyies[0]);
console.log(dewanGroup[0].Companyies[0].brands[0]);
console.log(dewanGroup[0].Companyies[0].brands[0].brandName === "BMW");
console.log(dewanGroup[0].Companyies[0].brands[0].brandName)