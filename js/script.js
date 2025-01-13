const elementsData = {
    H: {
        atomicNumber: 1,
        name: "Hydrogen",
        symbol: "H",
        atomicMass: 1.008,
        category: "Nonmetal",
        electronConfiguration: "1s¹",
        electronegativity: 2.20,
        meltingPoint: "-259.16 °C",
        boilingPoint: "-252.87 °C",
        standardState: "Gas",
        image: "images/h.jpg"
    },
    He: {
        atomicNumber: 2,
        name: "Helium",
        symbol: "He",
        atomicMass: 4.0026,
        category: "Noble Gas",
        electronConfiguration: "1s²",
        electronegativity: "N/A",
        meltingPoint: "-272.2 °C",
        boilingPoint: "-268.93 °C",
        standardState: "Gas",
        image: "images/he.jpg"
    },
    Li: {
        atomicNumber: 3,
        name: "Lithium",
        symbol: "Li",
        atomicMass: 6.94,
        category: "Alkali Metal",
        electronConfiguration: "[He] 2s¹",
        electronegativity: 0.98,
        meltingPoint: "180.5 °C",
        boilingPoint: "1342 °C",
        standardState: "Solid",
        image: "images/li.jpg"
    },
    Be: {
        atomicNumber: 4,
        name: "Beryllium",
        symbol: "Be",
        atomicMass: 9.0122,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[He] 2s²",
        electronegativity: 1.57,
        meltingPoint: "1278 °C",
        boilingPoint: "2469 °C",
        standardState: "Solid",
        image: "images/be.jpg"
    },
    B: {
        atomicNumber: 5,
        name: "Boron",
        symbol: "B",
        atomicMass: 10.81,
        category: "Metalloid",
        electronConfiguration: "[He] 2s² 2p¹",
        electronegativity: 2.04,
        meltingPoint: "2076 °C",
        boilingPoint: "3927 °C",
        standardState: "Solid",
        image: "images/b.jpg"
    },
    C: {
        atomicNumber: 6,
        name: "Carbon",
        symbol: "C",
        atomicMass: 12.011,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p²",
        electronegativity: 2.55,
        meltingPoint: "3550 °C",
        boilingPoint: "4827 °C",
        standardState: "Solid",
        image: "images/c.jpg"
    },
    N: {
        atomicNumber: 7,
        name: "Nitrogen",
        symbol: "N",
        atomicMass: 14.007,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p³",
        electronegativity: 3.04,
        meltingPoint: "-210.1 °C",
        boilingPoint: "-195.8 °C",
        standardState: "Gas",
        image: "images/n.jpg"
    },
    O: {
        atomicNumber: 8,
        name: "Oxygen",
        symbol: "O",
        atomicMass: 15.999,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p⁴",
        electronegativity: 3.44,
        meltingPoint: "-218.79 °C",
        boilingPoint: "-182.96 °C",
        standardState: "Gas",
        image: "images/o.jpg"
    },
    F: {
        atomicNumber: 9,
        name: "Fluorine",
        symbol: "F",
        atomicMass: 18.998,
        category: "Halogen",
        electronConfiguration: "[He] 2s² 2p⁵",
        electronegativity: 3.98,
        meltingPoint: "-219.62 °C",
        boilingPoint: "-188.12 °C",
        standardState: "Gas",
        image: "images/f.jpg"
    },
    Ne: {
        atomicNumber: 10,
        name: "Neon",
        symbol: "Ne",
        atomicMass: 20.180,
        category: "Noble Gas",
        electronConfiguration: "[He] 2s² 2p⁶",
        electronegativity: "N/A",
        meltingPoint: "-248.59 °C",
        boilingPoint: "-246.08 °C",
        standardState: "Gas",
        image: "images/ne.jpg"
    },
    Na: {
        atomicNumber: 11,
        name: "Sodium",
        symbol: "Na",
        atomicMass: 22.990,
        category: "Alkali Metal",
        electronConfiguration: "[Ne] 3s¹",
        electronegativity: 0.93,
        meltingPoint: "97.72 °C",
        boilingPoint: "883 °C",
        standardState: "Solid",
        image: "images/na.jpg"
    },
    Mg: {
        atomicNumber: 12,
        name: "Magnesium",
        symbol: "Mg",
        atomicMass: 24.305,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Ne] 3s²",
        electronegativity: 1.31,
        meltingPoint: "650 °C",
        boilingPoint: "1090 °C",
        standardState: "Solid",
        image: "images/mg.jpg"
    },
    Al: {
        atomicNumber: 13,
        name: "Aluminium",
        symbol: "Al",
        atomicMass: 26.982,
        category: "Post-transition Metal",
        electronConfiguration: "[Ne] 3s² 3p¹",
        electronegativity: 1.61,
        meltingPoint: "660.32 °C",
        boilingPoint: "2519 °C",
        standardState: "Solid",
        image: "images/al.jpg"
    },
    Si: {
        atomicNumber: 14,
        name: "Silicon",
        symbol: "Si",
        atomicMass: 28.085,
        category: "Metalloid",
        electronConfiguration: "[Ne] 3s² 3p²",
        electronegativity: 1.90,
        meltingPoint: "1414 °C",
        boilingPoint: "3265 °C",
        standardState: "Solid",
        image: "images/si.jpg"
    },
    P: {
        atomicNumber: 15,
        name: "Phosphorus",
        symbol: "P",
        atomicMass: 30.974,
        category: "Nonmetal",
        electronConfiguration: "[Ne] 3s² 3p³",
        electronegativity: 2.19,
        meltingPoint: "44.1 °C",
        boilingPoint: "280.5 °C",
        standardState: "Solid",
        image: "images/p.jpg"
    },
    S: {
        atomicNumber: 16,
        name: "Sulfur",
        symbol: "S",
        atomicMass: 32.06,
        category: "Nonmetal",
        electronConfiguration: "[Ne] 3s² 3p⁴",
        electronegativity: 2.58,
        meltingPoint: "115.21 °C",
        boilingPoint: "444.72 °C",
        standardState: "Solid",
        image: "images/s.jpg"
    },
    Cl: {
        atomicNumber: 17,
        name: "Chlorine",
        symbol: "Cl",
        atomicMass: 35.45,
        category: "Halogen",
        electronConfiguration: "[Ne] 3s² 3p⁵",
        electronegativity: 3.16,
        meltingPoint: "-101.5 °C",
        boilingPoint: "-34.04 °C",
        standardState: "Gas",
        image: "images/cl.jpg"
    },
    Ar: {
        atomicNumber: 18,
        name: "Argon",
        symbol: "Ar",
        atomicMass: 39.948,
        category: "Noble Gas",
        electronConfiguration: "[Ne] 3s² 3p⁶",
        electronegativity: "N/A",
        meltingPoint: "-189.3 °C",
        boilingPoint: "-185.8 °C",
        standardState: "Gas",
        image: "images/ar.jpg"
    },
    K: {
        atomicNumber: 19,
        name: "Potassium",
        symbol: "K",
        atomicMass: 39.098,
        category: "Alkali Metal",
        electronConfiguration: "[Ar] 4s¹",
        electronegativity: 0.82,
        meltingPoint: "63.5 °C",
        boilingPoint: "759 °C",
        standardState: "Solid",
        image: "images/k.jpg"
    },
    Ca: {
        atomicNumber: 20,
        name: "Calcium",
        symbol: "Ca",
        atomicMass: 40.078,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Ar] 4s²",
        electronegativity: 1.00,
        meltingPoint: "842 °C",
        boilingPoint: "1484 °C",
        standardState: "Solid",
        image: "images/ca.jpg"
    },
    Sc: {
        atomicNumber: 21,
        name: "Scandium",
        symbol: "Sc",
        atomicMass: 44.956,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹ 4s²",
        electronegativity: 1.36,
        meltingPoint: "1541 °C",
        boilingPoint: "2836 °C",
        standardState: "Solid",
        image: "images/sc.jpg"
    },
    Ti: {
        atomicNumber: 22,
        name: "Titanium",
        symbol: "Ti",
        atomicMass: 47.867,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d² 4s²",
        electronegativity: 1.54,
        meltingPoint: "1668 °C",
        boilingPoint: "3287 °C",
        standardState: "Solid",
        image: "images/ti.jpg"
    },
    V: {
        atomicNumber: 23,
        name: "Vanadium",
        symbol: "V",
        atomicMass: 50.942,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d³ 4s²",
        electronegativity: 1.63,
        meltingPoint: "1910 °C",
        boilingPoint: "3407 °C",
        standardState: "Solid",
        image: "images/v.jpg"
    },
    Cr: {
        atomicNumber: 24,
        name: "Chromium",
        symbol: "Cr",
        atomicMass: 51.996,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁵ 4s¹",
        electronegativity: 1.66,
        meltingPoint: "1907 °C",
        boilingPoint: "2671 °C",
        standardState: "Solid",
        image: "images/cr.jpg"
    },
    Mn: {
        atomicNumber: 25,
        name: "Manganese",
        symbol: "Mn",
        atomicMass: 54.938,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁵ 4s²",
        electronegativity: 1.55,
        meltingPoint: "1246 °C",
        boilingPoint: "2061 °C",
        standardState: "Solid",
        image: "images/mn.jpg"
    },
    Fe: {
        atomicNumber: 26,
        name: "Iron",
        symbol: "Fe",
        atomicMass: 55.845,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁶ 4s²",
        electronegativity: 1.83,
        meltingPoint: "1538 °C",
        boilingPoint: "2862 °C",
        standardState: "Solid",
        image: "images/fe.jpg"
    },
    Co: {
        atomicNumber: 27,
        name: "Cobalt",
        symbol: "Co",
        atomicMass: 58.933,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁷ 4s²",
        electronegativity: 1.88,
        meltingPoint: "1495 °C",
        boilingPoint: "2927 °C",
        standardState: "Solid",
        image: "images/co.jpg"
    },
    Ni: {
        atomicNumber: 28,
        name: "Nickel",
        symbol: "Ni",
        atomicMass: 58.693,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁸ 4s²",
        electronegativity: 1.91,
        meltingPoint: "1455 °C",
        boilingPoint: "2913 °C",
        standardState: "Solid",
        image: "images/ni.jpg"
    },
    Cu: {
        atomicNumber: 29,
        name: "Copper",
        symbol: "Cu",
        atomicMass: 63.546,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s¹",
        electronegativity: 1.90,
        meltingPoint: "1085 °C",
        boilingPoint: "2562 °C",
        standardState: "Solid",
        image: "images/cu.jpg"
    },
    Zn: {
        atomicNumber: 30,
        name: "Zinc",
        symbol: "Zn",
        atomicMass: 65.38,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s²",
        electronegativity: 1.65,
        meltingPoint: "419.5 °C",
        boilingPoint: "907 °C",
        standardState: "Solid",
        image: "images/zn.jpg"
    },
    Ga: {
        atomicNumber: 31,
        name: "Gallium",
        symbol: "Ga",
        atomicMass: 69.723,
        category: "Post-transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹",
        electronegativity: 1.81,
        meltingPoint: "29.76 °C",
        boilingPoint: "2204 °C",
        standardState: "Solid",
        image: "images/ga.jpg"
    },
    Ge: {
        atomicNumber: 32,
        name: "Germanium",
        symbol: "Ge",
        atomicMass: 72.630,
        category: "Metalloid",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p²",
        electronegativity: 2.01,
        meltingPoint: "938.25 °C",
        boilingPoint: "2833 °C",
        standardState: "Solid",
        image: "images/ge.jpg"
    },
    As: {
        atomicNumber: 33,
        name: "Arsenic",
        symbol: "As",
        atomicMass: 74.922,
        category: "Metalloid",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p³",
        electronegativity: 2.18,
        meltingPoint: "817 °C (sublimes)",
        boilingPoint: "613 °C (sublimes)",
        standardState: "Solid",
        image: "images/as.jpg"
    },
    Se: {
        atomicNumber: 34,
        name: "Selenium",
        symbol: "Se",
        atomicMass: 78.971,
        category: "Nonmetal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴",
        electronegativity: 2.55,
        meltingPoint: "221 °C",
        boilingPoint: "685 °C",
        standardState: "Solid",
        image: "images/se.jpg"
    },
    Br: {
        atomicNumber: 35,
        name: "Bromine",
        symbol: "Br",
        atomicMass: 79.904,
        category: "Halogen",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵",
        electronegativity: 2.96,
        meltingPoint: "-7.2 °C",
        boilingPoint: "58.8 °C",
        standardState: "Liquid",
        image: "images/br.jpg"
    },
    Kr: {
        atomicNumber: 36,
        name: "Krypton",
        symbol: "Kr",
        atomicMass: 83.798,
        category: "Noble Gas",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶",
        electronegativity: 3.00,
        meltingPoint: "-157.36 °C",
        boilingPoint: "-153.22 °C",
        standardState: "Gas",
        image: "images/kr.jpg"
    },
    Rb: {
        atomicNumber: 37,
        name: "Rubidium",
        symbol: "Rb",
        atomicMass: 85.468,
        category: "Alkali Metal",
        electronConfiguration: "[Kr] 5s¹",
        electronegativity: 0.82,
        meltingPoint: "39.31 °C",
        boilingPoint: "688 °C",
        standardState: "Solid",
        image: "images/rb.jpg"
    },
    Sr: {
        atomicNumber: 38,
        name: "Strontium",
        symbol: "Sr",
        atomicMass: 87.62,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Kr] 5s²",
        electronegativity: 0.95,
        meltingPoint: "777 °C",
        boilingPoint: "1382 °C",
        standardState: "Solid",
        image: "images/sr.jpg"
    },
    Y: {
        atomicNumber: 39,
        name: "Yttrium",
        symbol: "Y",
        atomicMass: 88.906,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹ 5s²",
        electronegativity: 1.22,
        meltingPoint: "1526 °C",
        boilingPoint: "3336 °C",
        standardState: "Solid",
        image: "images/y.jpg"
    },
    Zr: {
        atomicNumber: 40,
        name: "Zirconium",
        symbol: "Zr",
        atomicMass: 91.224,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d² 5s²",
        electronegativity: 1.33,
        meltingPoint: "1855 °C",
        boilingPoint: "4409 °C",
        standardState: "Solid",
        image: "images/zr.jpg"
    },
    Nb: {
        atomicNumber: 41,
        name: "Niobium",
        symbol: "Nb",
        atomicMass: 92.906,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁴ 5s¹",
        electronegativity: 1.6,
        meltingPoint: "2477 °C",
        boilingPoint: "4744 °C",
        standardState: "Solid",
        image: "images/nb.jpg"
    },
    Mo: {
        atomicNumber: 42,
        name: "Molybdenum",
        symbol: "Mo",
        atomicMass: 95.95,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁵ 5s¹",
        electronegativity: 2.16,
        meltingPoint: "2623 °C",
        boilingPoint: "4639 °C",
        standardState: "Solid",
        image: "images/mo.jpg"
    },
    Tc: {
        atomicNumber: 43,
        name: "Technetium",
        symbol: "Tc",
        atomicMass: 98,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁵ 5s²",
        electronegativity: 1.9,
        meltingPoint: "2157 °C",
        boilingPoint: "4265 °C",
        standardState: "Solid",
        image: "images/tc.jpg"
    },
    Ru: {
        atomicNumber: 44,
        name: "Ruthenium",
        symbol: "Ru",
        atomicMass: 101.07,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁷ 5s¹",
        electronegativity: 2.2,
        meltingPoint: "2334 °C",
        boilingPoint: "4150 °C",
        standardState: "Solid",
        image: "images/ru.jpg"
    },
    Rh: {
        atomicNumber: 45,
        name: "Rhodium",
        symbol: "Rh",
        atomicMass: 102.91,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁸ 5s¹",
        electronegativity: 2.28,
        meltingPoint: "1964 °C",
        boilingPoint: "3695 °C",
        standardState: "Solid",
        image: "images/rh.jpg"
    },
    Pd: {
        atomicNumber: 46,
        name: "Palladium",
        symbol: "Pd",
        atomicMass: 106.42,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰",
        electronegativity: 2.20,
        meltingPoint: "1554.9 °C",
        boilingPoint: "2963 °C",
        standardState: "Solid",
        image: "images/pd.jpg"
    },
    Ag: {
        atomicNumber: 47,
        name: "Silver",
        symbol: "Ag",
        atomicMass: 107.87,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s¹",
        electronegativity: 1.93,
        meltingPoint: "961.8 °C",
        boilingPoint: "2162 °C",
        standardState: "Solid",
        image: "images/ag.jpg"
    },
    Cd: {
        atomicNumber: 48,
        name: "Cadmium",
        symbol: "Cd",
        atomicMass: 112.41,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s²",
        electronegativity: 1.69,
        meltingPoint: "321.07 °C",
        boilingPoint: "767 °C",
        standardState: "Solid",
        image: "images/cd.jpg"
    },
    In: {
        atomicNumber: 49,
        name: "Indium",
        symbol: "In",
        atomicMass: 114.82,
        category: "Post-transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹",
        electronegativity: 1.78,
        meltingPoint: "156.6 °C",
        boilingPoint: "2072 °C",
        standardState: "Solid",
        image: "images/in.jpg"
    },
    Sn: {
        atomicNumber: 50,
        name: "Tin",
        symbol: "Sn",
        atomicMass: 118.71,
        category: "Post-transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p²",
        electronegativity: 1.96,
        meltingPoint: "231.93 °C",
        boilingPoint: "2602 °C",
        standardState: "Solid",
        image: "images/sn.jpg"
    },
    Sb: {
        atomicNumber: 51,
        name: "Antimony",
        symbol: "Sb",
        atomicMass: 121.76,
        category: "Metalloid",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p³",
        electronegativity: 2.05,
        meltingPoint: "630.63 °C",
        boilingPoint: "1587 °C",
        standardState: "Solid",
        image: "images/sb.jpg"
    },
    Te: {
        atomicNumber: 52,
        name: "Tellurium",
        symbol: "Te",
        atomicMass: 127.60,
        category: "Metalloid",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁴",
        electronegativity: 2.1,
        meltingPoint: "449.51 °C",
        boilingPoint: "988 °C",
        standardState: "Solid",
        image: "images/te.jpg"
    },
    I: {
        atomicNumber: 53,
        name: "Iodine",
        symbol: "I",
        atomicMass: 126.90,
        category: "Halogen",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵",
        electronegativity: 2.66,
        meltingPoint: "113.7 °C",
        boilingPoint: "184.3 °C",
        standardState: "Solid",
        image: "images/i.jpg"
    },
    Xe: {
        atomicNumber: 54,
        name: "Xenon",
        symbol: "Xe",
        atomicMass: 131.29,
        category: "Noble Gas",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶",
        electronegativity: 2.6,
        meltingPoint: "-111.8 °C",
        boilingPoint: "-108.1 °C",
        standardState: "Gas",
        image: "images/xe.jpg"
    },
    Cs: {
        atomicNumber: 55,
        name: "Cesium",
        symbol: "Cs",
        atomicMass: 132.91,
        category: "Alkali Metal",
        electronConfiguration: "[Xe] 6s¹",
        electronegativity: 0.79,
        meltingPoint: "28.44 °C",
        boilingPoint: "671 °C",
        standardState: "Solid",
        image: "images/cs.jpg"
    },
    Ba: {
        atomicNumber: 56,
        name: "Barium",
        symbol: "Ba",
        atomicMass: 137.33,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Xe] 6s²",
        electronegativity: 0.89,
        meltingPoint: "727 °C",
        boilingPoint: "1870 °C",
        standardState: "Solid",
        image: "images/ba.jpg"
    },
    La: {
        atomicNumber: 57,
        name: "Lanthanum",
        symbol: "La",
        atomicMass: 138.91,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 5d¹ 6s²",
        electronegativity: 1.10,
        meltingPoint: "920 °C",
        boilingPoint: "3464 °C",
        standardState: "Solid",
        image: "images/la.jpg"
    },
    Ce: {
        atomicNumber: 58,
        name: "Cerium",
        symbol: "Ce",
        atomicMass: 140.12,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹ 5d¹ 6s²",
        electronegativity: 1.12,
        meltingPoint: "798 °C",
        boilingPoint: "3424 °C",
        standardState: "Solid",
        image: "images/ce.jpg"
    },
    Pr: {
        atomicNumber: 59,
        name: "Praseodymium",
        symbol: "Pr",
        atomicMass: 140.91,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f³ 6s²",
        electronegativity: 1.13,
        meltingPoint: "931 °C",
        boilingPoint: "3290 °C",
        standardState: "Solid",
        image: "images/pr.jpg"
    },
    Nd: {
        atomicNumber: 60,
        name: "Neodymium",
        symbol: "Nd",
        atomicMass: 144.24,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁴ 6s²",
        electronegativity: 1.14,
        meltingPoint: "1024 °C",
        boilingPoint: "3074 °C",
        standardState: "Solid",
        image: "images/nd.jpg"
    },
    Pm: {
        atomicNumber: 61,
        name: "Promethium",
        symbol: "Pm",
        atomicMass: 145,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁵ 6s²",
        electronegativity: 1.13,
        meltingPoint: "1042 °C",
        boilingPoint: "3000 °C",
        standardState: "Solid",
        image: "images/pm.jpg"
    },
    Sm: {
        atomicNumber: 62,
        name: "Samarium",
        symbol: "Sm",
        atomicMass: 150.36,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁶ 6s²",
        electronegativity: 1.17,
        meltingPoint: "1072 °C",
        boilingPoint: "1794 °C",
        standardState: "Solid",
        image: "images/sm.jpg"
    },
    Eu: {
        atomicNumber: 63,
        name: "Europium",
        symbol: "Eu",
        atomicMass: 151.96,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁷ 6s²",
        electronegativity: 1.2,
        meltingPoint: "822 °C",
        boilingPoint: "1529 °C",
        standardState: "Solid",
        image: "images/eu.jpg"
    },
    Gd: {
        atomicNumber: 64,
        name: "Gadolinium",
        symbol: "Gd",
        atomicMass: 157.25,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁷ 5d¹ 6s²",
        electronegativity: 1.2,
        meltingPoint: "1313 °C",
        boilingPoint: "3273 °C",
        standardState: "Solid",
        image: "images/gd.jpg"
    },
    Tb: {
        atomicNumber: 65,
        name: "Terbium",
        symbol: "Tb",
        atomicMass: 158.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁹ 6s²",
        electronegativity: 1.1,
        meltingPoint: "1356 °C",
        boilingPoint: "3230 °C",
        standardState: "Solid",
        image: "images/tb.jpg"
    },
    Dy: {
        atomicNumber: 66,
        name: "Dysprosium",
        symbol: "Dy",
        atomicMass: 162.50,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁰ 6s²",
        electronegativity: 1.22,
        meltingPoint: "1412 °C",
        boilingPoint: "2567 °C",
        standardState: "Solid",
        image: "images/dy.jpg"
    },
    Ho: {
        atomicNumber: 67,
        name: "Holmium",
        symbol: "Ho",
        atomicMass: 164.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹¹ 6s²",
        electronegativity: 1.23,
        meltingPoint: "1474 °C",
        boilingPoint: "2700 °C",
        standardState: "Solid",
        image: "images/ho.jpg"
    },
    Er: {
        atomicNumber: 68,
        name: "Erbium",
        symbol: "Er",
        atomicMass: 167.26,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹² 6s²",
        electronegativity: 1.24,
        meltingPoint: "1529 °C",
        boilingPoint: "2868 °C",
        standardState: "Solid",
        image: "images/er.jpg"
    },
    Tm: {
        atomicNumber: 69,
        name: "Thulium",
        symbol: "Tm",
        atomicMass: 168.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹³ 6s²",
        electronegativity: 1.25,
        meltingPoint: "1545 °C",
        boilingPoint: "1950 °C",
        standardState: "Solid",
        image: "images/tm.jpg"
    },
    Yb: {
        atomicNumber: 70,
        name: "Ytterbium",
        symbol: "Yb",
        atomicMass: 173.05,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁴ 6s²",
        electronegativity: 1.1,
        meltingPoint: "824 °C",
        boilingPoint: "1196 °C",
        standardState: "Solid",
        image: "images/yb.jpg"
    },
    Lu: {
        atomicNumber: 71,
        name: "Lutetium",
        symbol: "Lu",
        atomicMass: 174.97,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹ 6s²",
        electronegativity: 1.27,
        meltingPoint: "1652 °C",
        boilingPoint: "3402 °C",
        standardState: "Solid",
        image: "images/lu.jpg"
    },
    Hf: {
        atomicNumber: 72,
        name: "Hafnium",
        symbol: "Hf",
        atomicMass: 178.49,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d² 6s²",
        electronegativity: 1.3,
        meltingPoint: "2233 °C",
        boilingPoint: "4603 °C",
        standardState: "Solid",
        image: "images/hf.jpg"
    },
    Ta: {
        atomicNumber: 73,
        name: "Tantalum",
        symbol: "Ta",
        atomicMass: 180.95,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d³ 6s²",
        electronegativity: 1.5,
        meltingPoint: "3017 °C",
        boilingPoint: "5458 °C",
        standardState: "Solid",
        image: "images/ta.jpg"
    },
    W: {
        atomicNumber: 74,
        name: "Tungsten",
        symbol: "W",
        atomicMass: 183.84,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁴ 6s²",
        electronegativity: 2.36,
        meltingPoint: "3422 °C",
        boilingPoint: "5555 °C",
        standardState: "Solid",
        image: "images/w.jpg"
    },
    Re: {
        atomicNumber: 75,
        name: "Rhenium",
        symbol: "Re",
        atomicMass: 186.21,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        electronegativity: 1.9,
        meltingPoint: "3186 °C",
        boilingPoint: "5596 °C",
        standardState: "Solid",
        image: "images/re.jpg"
    },
    Os: {
        atomicNumber: 76,
        name: "Osmium",
        symbol: "Os",
        atomicMass: 190.23,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        electronegativity: 2.2,
        meltingPoint: "3033 °C",
        boilingPoint: "5012 °C",
        standardState: "Solid",
        image: "images/os.jpg"
    },
    Ir: {
        atomicNumber: 77,
        name: "Iridium",
        symbol: "Ir",
        atomicMass: 192.22,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁷ 6s²",
        electronegativity: 2.2,
        meltingPoint: "2466 °C",
        boilingPoint: "4428 °C",
        standardState: "Solid",
        image: "images/ir.jpg"
    },
    Pt: {
        atomicNumber: 78,
        name: "Platinum",
        symbol: "Pt",
        atomicMass: 195.08,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        electronegativity: 2.28,
        meltingPoint: "1768.3 °C",
        boilingPoint: "3825 °C",
        standardState: "Solid",
        image: "images/pt.jpg"
    },
    Au: {
        atomicNumber: 79,
        name: "Gold",
        symbol: "Au",
        atomicMass: 196.97,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        electronegativity: 2.54,
        meltingPoint: "1064.18 °C",
        boilingPoint: "2970 °C",
        standardState: "Solid",
        image: "images/au.jpg"
    },
    Hg: {
        atomicNumber: 80,
        name: "Mercury",
        symbol: "Hg",
        atomicMass: 200.59,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        electronegativity: 2.00,
        meltingPoint: "-38.83 °C",
        boilingPoint: "356.73 °C",
        standardState: "Liquid",
        image: "images/hg.jpg"
    },
    Tl: {
        atomicNumber: 81,
        name: "Thallium",
        symbol: "Tl",
        atomicMass: 204.38,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        electronegativity: 1.62,
        meltingPoint: "304 °C",
        boilingPoint: "1473 °C",
        standardState: "Solid",
        image: "images/tl.jpg"
    },
    Pb: {
        atomicNumber: 82,
        name: "Lead",
        symbol: "Pb",
        atomicMass: 207.2,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        electronegativity: 2.33,
        meltingPoint: "327.46 °C",
        boilingPoint: "1749 °C",
        standardState: "Solid",
        image: "images/pb.jpg"
    },
    Bi: {
        atomicNumber: 83,
        name: "Bismuth",
        symbol: "Bi",
        atomicMass: 208.98,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        electronegativity: 2.02,
        meltingPoint: "271.3 °C",
        boilingPoint: "1564 °C",
        standardState: "Solid",
        image: "images/bi.jpg"
    },
    Po: {
        atomicNumber: 84,
        name: "Polonium",
        symbol: "Po",
        atomicMass: 209,
        category: "Metalloid",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        electronegativity: 2.0,
        meltingPoint: "254 °C",
        boilingPoint: "962 °C",
        standardState: "Solid",
        image: "images/po.jpg"
    },
    At: {
        atomicNumber: 85,
        name: "Astatine",
        symbol: "At",
        atomicMass: 210,
        category: "Halogen",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        electronegativity: 2.2,
        meltingPoint: "302 °C",
        boilingPoint: "337 °C",
        standardState: "Solid",
        image: "images/at.jpg"
    },
    Rn: {
        atomicNumber: 86,
        name: "Radon",
        symbol: "Rn",
        atomicMass: 222,
        category: "Noble Gas",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        electronegativity: "N/A",
        meltingPoint: "-71 °C",
        boilingPoint: "-61.7 °C",
        standardState: "Gas",
        image: "images/rn.jpg"
    },
    Fr: {
        atomicNumber: 87,
        name: "Francium",
        symbol: "Fr",
        atomicMass: 223,
        category: "Alkali Metal",
        electronConfiguration: "[Rn] 7s¹",
        electronegativity: 0.7,
        meltingPoint: "27 °C",
        boilingPoint: "677 °C",
        standardState: "Solid",
        image: "images/fr.jpg"
    },
    Ra: {
        atomicNumber: 88,
        name: "Radium",
        symbol: "Ra",
        atomicMass: 226,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Rn] 7s²",
        electronegativity: 0.9,
        meltingPoint: "700 °C",
        boilingPoint: "1737 °C",
        standardState: "Solid",
        image: "images/ra.jpg"
    },
    Ac: {
        atomicNumber: 89,
        name: "Actinium",
        symbol: "Ac",
        atomicMass: 227,
        category: "Actinide",
        electronConfiguration: "[Rn] 6d¹ 7s²",
        electronegativity: 1.1,
        meltingPoint: "1050 °C",
        boilingPoint: "3198 °C",
        standardState: "Solid",
        image: "images/ac.jpg"
    },
    Th: {
        atomicNumber: 90,
        name: "Thorium",
        symbol: "Th",
        atomicMass: 232.04,
        category: "Actinide",
        electronConfiguration: "[Rn] 6d² 7s²",
        electronegativity: 1.3,
        meltingPoint: "1750 °C",
        boilingPoint: "4788 °C",
        standardState: "Solid",
        image: "images/th.jpg"
    },
    Pa: {
        atomicNumber: 91,
        name: "Protactinium",
        symbol: "Pa",
        atomicMass: 231.04,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f² 6d¹ 7s²",
        electronegativity: 1.5,
        meltingPoint: "1568 °C",
        boilingPoint: "4027 °C",
        standardState: "Solid",
        image: "images/pa.jpg"
    },
    U: {
        atomicNumber: 92,
        name: "Uranium",
        symbol: "U",
        atomicMass: 238.03,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f³ 6d¹ 7s²",
        electronegativity: 1.38,
        meltingPoint: "1135 °C",
        boilingPoint: "4131 °C",
        standardState: "Solid",
        image: "images/u.jpg"
    },
    Np: {
        atomicNumber: 93,
        name: "Neptunium",
        symbol: "Np",
        atomicMass: 237,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁴ 6d¹ 7s²",
        electronegativity: 1.36,
        meltingPoint: "644 °C",
        boilingPoint: "3902 °C",
        standardState: "Solid",
        image: "images/np.jpg"
    },
    Pu: {
        atomicNumber: 94,
        name: "Plutonium",
        symbol: "Pu",
        atomicMass: 244,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁶ 7s²",
        electronegativity: 1.28,
        meltingPoint: "639.4 °C",
        boilingPoint: "3228 °C",
        standardState: "Solid",
        image: "images/pu.jpg"
    },
    Am: {
        atomicNumber: 95,
        name: "Americium",
        symbol: "Am",
        atomicMass: 243,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁷ 7s²",
        electronegativity: 1.3,
        meltingPoint: "1176 °C",
        boilingPoint: "2011 °C",
        standardState: "Solid",
        image: "images/am.jpg"
    },
    Cm: {
        atomicNumber: 96,
        name: "Curium",
        symbol: "Cm",
        atomicMass: 247,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁷ 6d¹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "1340 °C",
        boilingPoint: "3110 °C",
        standardState: "Solid",
        image: "images/cm.jpg"
    },
    Bk: {
        atomicNumber: 97,
        name: "Berkelium",
        symbol: "Bk",
        atomicMass: 247,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "986 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/bk.jpg"
    },
    Cf: {
        atomicNumber: 98,
        name: "Californium",
        symbol: "Cf",
        atomicMass: 251,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁰ 7s²",
        electronegativity: 1.3,
        meltingPoint: "900 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/cf.jpg"
    },
    Es: {
        atomicNumber: 99,
        name: "Einsteinium",
        symbol: "Es",
        atomicMass: 252,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹¹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "860 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/es.jpg"
    },
    Fm: {
        atomicNumber: 100,
        name: "Fermium",
        symbol: "Fm",
        atomicMass: 257,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹² 7s²",
        electronegativity: 1.3,
        meltingPoint: "1527 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/fm.jpg"
    },
    Md: {
        atomicNumber: 101,
        name: "Mendelevium",
        symbol: "Md",
        atomicMass: 258,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹³ 7s²",
        electronegativity: 1.3,
        meltingPoint: "827 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/md.jpg"
    },
    No: {
        atomicNumber: 102,
        name: "Nobelium",
        symbol: "No",
        atomicMass: 259,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁴ 7s²",
        electronegativity: 1.3,
        meltingPoint: "827 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/no.jpg"
    },
    Lr: {
        atomicNumber: 103,
        name: "Lawrencium",
        symbol: "Lr",
        atomicMass: 262,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁴ 7s² 7p¹",
        electronegativity: 1.3,
        meltingPoint: "1627 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/lr.jpg"
    },
    Rf: {
        atomicNumber: 104,
        name: "Rutherfordium",
        symbol: "Rf",
        atomicMass: 267,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d² 7s²",
        electronegativity: "N/A",
        meltingPoint: "2400 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/rf.jpg"
    },
    Db: {
        atomicNumber: 105,
        name: "Dubnium",
        symbol: "Db",
        atomicMass: 270,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d³ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/db.jpg"
    },
    Sg: {
        atomicNumber: 106,
        name: "Seaborgium",
        symbol: "Sg",
        atomicMass: 271,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁴ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/sg.jpg"
    },
    Bh: {
        atomicNumber: 107,
        name: "Bohrium",
        symbol: "Bh",
        atomicMass: 274,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁵ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/bh.jpg"
    },
    Hs: {
        atomicNumber: 108,
        name: "Hassium",
        symbol: "Hs",
        atomicMass: 277,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁶ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/hs.jpg"
    },
    Mt: {
        atomicNumber: 109,
        name: "Meitnerium",
        symbol: "Mt",
        atomicMass: 278,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁷ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/mt.jpg"
    },
    Ds: {
        atomicNumber: 110,
        name: "Darmstadtium",
        symbol: "Ds",
        atomicMass: 281,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁸ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/ds.jpg"
    },
    Rg: {
        atomicNumber: 111,
        name: "Roentgenium",
        symbol: "Rg",
        atomicMass: 282,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁹ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/rg.jpg"
    },
    Cn: {
        atomicNumber: 112,
        name: "Copernicium",
        symbol: "Cn",
        atomicMass: 285,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Gas",
        image: "images/cn.jpg"
    },
    Nh: {
        atomicNumber: 113,
        name: "Nihonium",
        symbol: "Nh",
        atomicMass: 286,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/nh.jpg"
    },
    Fl: {
        atomicNumber: 114,
        name: "Flerovium",
        symbol: "Fl",
        atomicMass: 289,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/fl.jpg"
    },
    Mc: {
        atomicNumber: 115,
        name: "Moscovium",
        symbol: "Mc",
        atomicMass: 290,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/mc.jpg"
    },
    Lv: {
        atomicNumber: 116,
        name: "Livermorium",
        symbol: "Lv",
        atomicMass: 293,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/lv.jpg"
    },
    Ts: {
        atomicNumber: 117,
        name: "Tennessine",
        symbol: "Ts",
        atomicMass: 294,
        category: "Halogen",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/ts.jpg"
    },
    Og: {
        atomicNumber: 118,
        name: "Oganesson",
        symbol: "Og",
        atomicMass: 294,
        category: "Noble Gas",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Gas",
        image: "images/og.jpg"
    }

};


// script.js

// A helper object to map "display category names" to their CSS classes:
const categoryToClass = {
    "Alkali Metal": "alkali-metal",
    "Alkaline Earth Metal": "alkaline-earth-metal",
    "Transition Metal": "transition-metal",
    "Lanthanide": "lanthanoid",    // 'Lanthanide' => .lanthanoid
    "Lanthanides": "lanthanoid",   // Some people may type "Lanthanides", so we alias it
    "Actinide": "actinoid",
    "Actinides": "actinoid",
    "Metalloid": "metalloid",
    "Halogen": "halogen",
    "Noble Gas": "noble-gas",
    "Post-transition Metal": "other-metal", // or "post-transition-metal" if you prefer
    "Nonmetal": "nonmetal",
    // You can add more synonyms if needed, e.g. "Other Metal" => "other-metal"
  };
  
  // A function to remove highlights from all elements in case a user searches again quickly
  function removeAllHighlights() {
    document.querySelectorAll('.highlight').forEach(el => {
      el.classList.remove('highlight');
    });
  }
  
  // The main search handling function:
  function handleSearch(query) {
    // 1) Trim and standardize the input
    const searchQuery = query.trim().toLowerCase();
    if (!searchQuery) return;
  
    // 2) Check for numeric (atomic number)
    if (!isNaN(searchQuery)) {
      const atomicNum = parseInt(searchQuery);
      // Find the element whose atomicNumber == atomicNum
      for (const [symbolKey, data] of Object.entries(elementsData)) {
        if (data.atomicNumber === atomicNum) {
          // Found a match => open the modal
          openElementModal(symbolKey);
          return;
        }
      }
      alert(`No element found with atomic number: ${atomicNum}`);
      return;
    }
  
    // 3) Check if user typed a category name (e.g., "Alkali Metal", "Noble Gas", etc.)
    //    We'll compare the capitalized form of user input with keys in categoryToClass
    //    But to be flexible, let's just see if any categoryToClass key matches ignoring case:
    for (const catName of Object.keys(categoryToClass)) {
      if (catName.toLowerCase() === searchQuery) {
        highlightCategory(categoryToClass[catName]);
        return;
      }
    }
  
    // 4) Check exact match for element name or symbol
    //    We'll do two passes: one for name, one for symbol
    //    (You can combine them into one pass if you like.)
    
    // 4a) Check by exact name
    for (const [symbolKey, data] of Object.entries(elementsData)) {
      if (data.name.toLowerCase() === searchQuery) {
        openElementModal(symbolKey);
        return;
      }
    }
  
    // 4b) Check by exact symbol
    for (const [symbolKey, data] of Object.entries(elementsData)) {
      if (symbolKey.toLowerCase() === searchQuery) {
        openElementModal(symbolKey);
        return;
      }
    }
  
    // 5) If we get here, no match
    alert(`No element or category found matching: "${query}".\n` +
          'Try searching by exact element symbol (e.g., "Na"), ' +
          'name (e.g., "Sodium"), atomic number (e.g., "11"), or group/category (e.g., "Alkali Metal").');
  }
  
  // Function to open the modal for a given element symbol
  function openElementModal(symbol) {
    const elementData = elementsData[symbol];
    if (!elementData) {
      alert(`No data found for symbol: ${symbol}`);
      return;
    }
  
    // Populate the modal content
    document.getElementById('elementModalLabel').textContent = `${elementData.name} (${elementData.symbol})`;
    document.querySelector('.modal-image img').src = elementData.image;
    document.querySelector('.modal-details').innerHTML = `
      <h5>${elementData.name} (${elementData.symbol})</h5>
      <ul class="list-unstyled">
          <li><strong>Atomic Number:</strong> ${elementData.atomicNumber}</li>
          <li><strong>Atomic Mass:</strong> ${elementData.atomicMass}</li>
          <li><strong>Category:</strong> ${elementData.category}</li>
          <li><strong>Electron Configuration:</strong> ${elementData.electronConfiguration}</li>
          <li><strong>Electronegativity:</strong> ${elementData.electronegativity}</li>
          <li><strong>Melting Point:</strong> ${elementData.meltingPoint}</li>
          <li><strong>Boiling Point:</strong> ${elementData.boilingPoint}</li>
      </ul>
    `;
    document.querySelector('.modal-footer a').href = `details/${symbol.toLowerCase()}.html`;
  
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('elementModal'));
    modal.show();
  }
  
  // Function to highlight all elements that belong to a particular CSS class (e.g., 'alkali-metal')
  function highlightCategory(cssClass) {
    removeAllHighlights(); // Make sure to remove old highlights first
  
    // Find all elements that match the class
    const elementsToHighlight = document.querySelectorAll(`.${cssClass}`);
    if (elementsToHighlight.length === 0) {
      alert(`No elements found for category: ${cssClass}`);
      return;
    }
  
    // Add the highlight class
    elementsToHighlight.forEach(el => {
      el.classList.add('highlight');
    });
  
    // Remove the highlight after 3 seconds
    setTimeout(() => {
      elementsToHighlight.forEach(el => {
        el.classList.remove('highlight');
      });
    }, 3000);
  }
  
  // ===========================
  // Existing Code: Add click event listeners for modals
  // (unchanged from your snippet, just ensure it's after the above functions)
  // ===========================
  document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', function () {
      const symbol = element.querySelector('.symbol').textContent.trim();
      openElementModal(symbol);
    });
  });
  
  // ===========================
  // New: Listen for form submission
  // ===========================
  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('searchInput').value;
    handleSearch(query);
  });
  