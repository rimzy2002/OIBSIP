# Oasis Infobyte Internship Program (OIBSIP)
### Track: Web Development & Designing — Level 1 Completed (All 3 Tasks)

Welcome to the official internship repository for **Refais Mohamed Rimzy** as part of the **Oasis Infobyte Internship Program (OIBSIP)** in the **Web Development & Designing** domain.

According to the official **SIP Task List**, the completion rule for the Web Development track is:
> *“Complete ALL tasks within one chosen Level (Level 1, 2, or 3).”*

This repository fulfills **100% of Level 1** by delivering all **3 tasks**:
1. **Task 1: Landing Page** (`EcoBrew Landing Page`)
2. **Task 2: Personal Portfolio** (`Personal Portfolio Website`)
3. **Task 3: Temperature Converter Website** (`ThermoSphere Smart Temperature Converter`)

---

## 📌 Projects Directory & Summary

| Level | Task | Project Name | Tech Stack | Source Folder | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Level-1** | **Task 1** | **EcoBrew Landing Page** | HTML5, CSS3 (Flexbox, Grid) | [RefaisMohamedRimzy_Task1_LandingPage](./Level-1/RefaisMohamedRimzy_Task1_LandingPage/) | ✅ **Completed** |
| **Level-1** | **Task 2** | **Personal Portfolio Website** | HTML5, CSS3, JavaScript (Vanilla) | [RefaisMohamedRimzy_Task2_Portfolio](./Level-1/RefaisMohamedRimzy_Task2_Portfolio/) | ✅ **Completed** |
| **Level-1** | **Task 3** | **ThermoSphere Temperature Converter** | HTML5, CSS3, JavaScript (Vanilla) | [RefaisMohamedRimzy_Task3_TemperatureConverter](./Level-1/RefaisMohamedRimzy_Task3_TemperatureConverter/) | ✅ **Completed** |

---

## 🚀 Overview of Completed Tasks

### 1. Task 1: EcoBrew Landing Page
- **Folder**: [`Level-1/RefaisMohamedRimzy_Task1_LandingPage`](./Level-1/RefaisMohamedRimzy_Task1_LandingPage/)
- **Objective**: Build a visually polished static landing page establishing foundational HTML5 semantic structure and modern CSS3 layout skills.
- **Key Features**:
  - Sticky glassmorphic header navigation bar with brand anchor links.
  - Responsive hero section with bold typography, brand tagline, and call-to-action button.
  - Three distinct content sections: Sustainable Services Grid, Carbon-Neutral About Story, and Customer Testimonials.
  - Clean responsive footer with social and informational links.
  - Mobile-first Flexbox and CSS Grid layout with zero element overlaps.
- **Tech Stack**: HTML5, CSS3 (Custom properties, Grid, Flexbox).

---

### 2. Task 2: Personal Portfolio Website
- **Folder**: [`Level-1/RefaisMohamedRimzy_Task2_Portfolio`](./Level-1/RefaisMohamedRimzy_Task2_Portfolio/)
- **Objective**: Create a personal portfolio website serving as an interactive digital resume highlighting developer identity, skills, projects, and contact avenues.
- **Key Features**:
  - Hero profile section with custom vector developer avatar, live availability status pill, and quick social links (GitHub, LinkedIn, Email).
  - Internship progress metrics banner.
  - About Me biography section outlining engineering philosophy and four core development pillars.
  - Visual categorized skills grid spanning Frontend, Backend/Storage, and Workflow Tools.
  - Featured projects showcase with interactive mockups and source links.
  - Career and internship journey timeline.
  - Fully interactive contact form with client-side regex email validation and success toast alert.
  - Smooth scrolling navigation with `IntersectionObserver` active section highlighting and mobile drawer.
- **Tech Stack**: HTML5, CSS3, JavaScript (Vanilla ES6+), Google Fonts (*Outfit*, *Plus Jakarta Sans*).

---

### 3. Task 3: ThermoSphere Smart Temperature Converter
- **Folder**: [`Level-1/RefaisMohamedRimzy_Task3_TemperatureConverter`](./Level-1/RefaisMohamedRimzy_Task3_TemperatureConverter/)
- **Objective**: Build an interactive web utility that converts temperature values between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with real-time validation and edge-case protection.
- **Key Features**:
  - Precision conversion between Celsius, Fahrenheit, and Kelvin scales.
  - **Simultaneous all-unit output cards**: View all scales at once with step-by-step mathematical formula explanations.
  - **Dynamic Thermal Spectrum Meter**: Animated visual gauge that reflects temperature classification (Freezing, Room, Body, Boiling, Extreme).
  - **Adaptive Ambient Theme**: UI background and glow shift dynamically from icy blue for sub-zero to fiery red for boiling heat.
  - **Absolute Zero Safety Guard**: Detects inputs below absolute zero ($< -273.15^\circ\text{C}$, $< -459.67^\circ\text{F}$, $< 0\,\text{K}$) with an educational physics warning banner.
  - **Input Validation**: Strict error rejection for empty or non-numeric inputs.
  - **Common Benchmark Presets**: One-click buttons for Freezing, Room Temp, Body Temp, Boiling Point, and Absolute Zero.
  - Built-in mathematical formulas reference drawer.
- **Tech Stack**: HTML5, CSS3, JavaScript (Vanilla ES6+), Google Fonts (*JetBrains Mono*, *Outfit*, *Plus Jakarta Sans*).

---

## 📁 Repository Directory Structure

```text
OIBSIP/
├── Level-1/
│   ├── RefaisMohamedRimzy_Task1_LandingPage/
│   │   ├── assets/
│   │   │   └── images/
│   │   │       ├── coffee_bean.jpg
│   │   │       ├── desktop-wireframe.png
│   │   │       └── mobile-wireframe.png
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── screenshots/
│   │   │   ├── desktop-home.png
│   │   │   └── mobile-home.png
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── RefaisMohamedRimzy_Task2_Portfolio/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── main.js
│   │   ├── screenshots/
│   │   │   ├── desktop-home.png
│   │   │   └── mobile-home.png
│   │   ├── index.html
│   │   └── README.md
│   │
│   └── RefaisMohamedRimzy_Task3_TemperatureConverter/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── converter.js
│       ├── screenshots/
│       │   ├── desktop-home.png
│       │   └── mobile-home.png
│       ├── index.html
│       └── README.md
│
└── README.md
```

---

## 💻 How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rimzy2002/OIBSIP.git
   cd OIBSIP
   ```

2. **Open Any Task Directly**:
   All projects are built using pure web standards (HTML5, CSS3, JavaScript) with zero runtime dependencies:
   - **Task 1 (Landing Page)**: Open `Level-1/RefaisMohamedRimzy_Task1_LandingPage/index.html` in your web browser.
   - **Task 2 (Personal Portfolio)**: Open `Level-1/RefaisMohamedRimzy_Task2_Portfolio/index.html` in your web browser.
   - **Task 3 (Temperature Converter)**: Open `Level-1/RefaisMohamedRimzy_Task3_TemperatureConverter/index.html` in your web browser.

---

## 👨‍💻 Intern Information

- **Name**: Refais Mohamed Rimzy
- **Internship ID / Cohort**: Oasis Infobyte SIP
- **Domain**: Web Development & Designing
- **GitHub**: [@rimzy2002](https://github.com/rimzy2002)
- **Repository**: [https://github.com/rimzy2002/OIBSIP](https://github.com/rimzy2002/OIBSIP)
- **Email**: [rimzy2002rr@gmail.com](mailto:rimzy2002rr@gmail.com)

---
*Built with passion and dedication for the Oasis Infobyte Internship Program.*
