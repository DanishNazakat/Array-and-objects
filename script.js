


let plains = [
    {
        pack: [
            {
                name: "Basic",
                monthly: 3.99,
                diskSpace: "100GB",
                dataTransfer: "1000 GB/Mo",
                sitePages: 10,
            },
            {
                name: "Standerd"
            }
        ]
    },
    {
        name: "Professional",
        monthly: 5.99,
        diskSpace: "500GB",
        dataTransfer: "5000 GB/Mo",
        sitePages: 50
    },
    {
        name: "ultimate",
        monthly: 9.99,
        diskSpace: "2000GB",
        dataTransfer: "20000 GB/Mo",
        sitePages: 500
    }
]

console.log(plains[1])
console.log(plains[0].pack[0].name);





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

            }
        ]
    }
]

console.log(dewanGroup[0].Companyies[0].brands[0].brandName === "BMW")