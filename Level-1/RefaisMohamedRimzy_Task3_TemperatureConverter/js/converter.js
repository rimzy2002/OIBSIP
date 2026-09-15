/**
 * ThermoSphere | Smart Temperature Converter Logic
 * Oasis Infobyte Internship - Web Development & Designing (Level 1, Task 3)
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. DOM Elements
    // --------------------------------------------------------------------------
    const tempInput = document.getElementById('tempInput');
    const unitRadios = document.querySelectorAll('input[name="sourceUnit"]');
    const btnConvert = document.getElementById('btnConvert');
    const btnReset = document.getElementById('btnReset');
    const btnClear = document.getElementById('btnClear');
    const presetButtons = document.querySelectorAll('.preset-btn');

    // Display & Feedback Elements
    const errorAlert = document.getElementById('errorAlert');
    const errorMsg = document.getElementById('errorMsg');
    const absoluteZeroAlert = document.getElementById('absoluteZeroAlert');
    const absoluteZeroMsg = document.getElementById('absoluteZeroMsg');

    // Simultaneous Output Fields
    const valCelsius = document.getElementById('valCelsius');
    const valFahrenheit = document.getElementById('valFahrenheit');
    const valKelvin = document.getElementById('valKelvin');

    const formulaCelsius = document.getElementById('formulaCelsius');
    const formulaFahrenheit = document.getElementById('formulaFahrenheit');
    const formulaKelvin = document.getElementById('formulaKelvin');

    const cardCelsius = document.getElementById('cardCelsius');
    const cardFahrenheit = document.getElementById('cardFahrenheit');
    const cardKelvin = document.getElementById('cardKelvin');

    // Visual Spectrum Meter
    const gaugeFill = document.getElementById('gaugeFill');
    const thermalStatusBadge = document.getElementById('thermalStatusBadge');
    const visStatusText = document.getElementById('visStatusText');

    // --------------------------------------------------------------------------
    // 2. Constants & Boundaries
    // --------------------------------------------------------------------------
    const ABSOLUTE_ZERO = {
        C: -273.15,
        F: -459.67,
        K: 0
    };

    // --------------------------------------------------------------------------
    // 3. Core Calculation & Conversion Engine
    // --------------------------------------------------------------------------
    function performConversion() {
        // Clear previous alert states
        hideAlert(errorAlert);
        hideAlert(absoluteZeroAlert);

        const rawValue = tempInput.value.trim();

        // 1. Check for empty input
        if (rawValue === '') {
            showError('Please enter a temperature value to convert.');
            resetOutputDisplays();
            return;
        }

        // 2. Validate numeric input (allow negative, decimal, positive)
        const numericValue = Number(rawValue);
        if (isNaN(numericValue) || rawValue.endsWith('.') || rawValue === '-' || rawValue === '+') {
            showError(`"${rawValue}" is not a valid number. Please enter numeric digits (e.g. 25, -10.5, 98.6).`);
            resetOutputDisplays();
            return;
        }

        // Selected source unit
        const selectedUnitRadio = document.querySelector('input[name="sourceUnit"]:checked');
        const sourceUnit = selectedUnitRadio ? selectedUnitRadio.value : 'C';

        // 3. Check for absolute zero violations
        const limit = ABSOLUTE_ZERO[sourceUnit];
        if (numericValue < limit) {
            showAbsoluteZeroWarning(numericValue, sourceUnit, limit);
        }

        // 4. Calculate conversions to all three units
        let cVal, fVal, kVal;
        let cFormula, fFormula, kFormula;

        if (sourceUnit === 'C') {
            cVal = numericValue;
            fVal = (numericValue * 9 / 5) + 32;
            kVal = numericValue + 273.15;

            cFormula = 'Source Unit (Base value)';
            fFormula = `(${roundValue(numericValue)} × 9/5) + 32`;
            kFormula = `${roundValue(numericValue)} + 273.15`;
        } else if (sourceUnit === 'F') {
            cVal = (numericValue - 32) * 5 / 9;
            fVal = numericValue;
            kVal = (numericValue - 32) * 5 / 9 + 273.15;

            cFormula = `(${roundValue(numericValue)} − 32) × 5/9`;
            fFormula = 'Source Unit (Base value)';
            kFormula = `(${roundValue(numericValue)} − 32) × 5/9 + 273.15`;
        } else if (sourceUnit === 'K') {
            cVal = numericValue - 273.15;
            fVal = (numericValue - 273.15) * 9 / 5 + 32;
            kVal = numericValue;

            cFormula = `${roundValue(numericValue)} − 273.15`;
            fFormula = `(${roundValue(numericValue)} − 273.15) × 9/5 + 32`;
            kFormula = 'Source Unit (Base value)';
        }

        // 5. Update Output Cards
        valCelsius.textContent = formatOutput(cVal);
        valFahrenheit.textContent = formatOutput(fVal);
        valKelvin.textContent = formatOutput(kVal);

        formulaCelsius.textContent = cFormula;
        formulaFahrenheit.textContent = fFormula;
        formulaKelvin.textContent = kFormula;

        // Highlight Active Source Card
        updateActiveCardHighlight(sourceUnit);

        // 6. Update Dynamic Spectrum Gauge & Theme Styling
        updateThermalSpectrum(cVal);
    }

    // --------------------------------------------------------------------------
    // 4. Helper Formatting & UI State Utilities
    // --------------------------------------------------------------------------
    function formatOutput(num) {
        if (!isFinite(num)) return 'Error';
        // Display up to 2 decimal places cleanly
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    function roundValue(num) {
        return Math.round(num * 100) / 100;
    }

    function updateActiveCardHighlight(sourceUnit) {
        [cardCelsius, cardFahrenheit, cardKelvin].forEach(c => c.classList.remove('active-source'));

        if (sourceUnit === 'C') cardCelsius.classList.add('active-source');
        else if (sourceUnit === 'F') cardFahrenheit.classList.add('active-source');
        else if (sourceUnit === 'K') cardKelvin.classList.add('active-source');
    }

    function resetOutputDisplays() {
        valCelsius.textContent = '--';
        valFahrenheit.textContent = '--';
        valKelvin.textContent = '--';

        formulaCelsius.textContent = 'Awaiting input';
        formulaFahrenheit.textContent = 'Awaiting input';
        formulaKelvin.textContent = 'Awaiting input';

        [cardCelsius, cardFahrenheit, cardKelvin].forEach(c => c.classList.remove('active-source'));
        updateThermalSpectrum(25);
    }

    function showError(message) {
        if (errorMsg && errorAlert) {
            errorMsg.textContent = message;
            errorAlert.style.display = 'flex';
        }
    }

    function showAbsoluteZeroWarning(value, unit, limit) {
        if (absoluteZeroMsg && absoluteZeroAlert) {
            const unitLabel = unit === 'C' ? '°C' : (unit === 'F' ? '°F' : 'K');
            absoluteZeroMsg.innerHTML = `Entered <strong>${value} ${unitLabel}</strong> is below absolute zero (${limit} ${unitLabel}). Under the laws of thermodynamics, temperatures cannot fall below absolute zero as all thermal kinetic energy reaches zero.`;
            absoluteZeroAlert.style.display = 'flex';
        }
    }

    function hideAlert(element) {
        if (element) element.style.display = 'none';
    }

    // --------------------------------------------------------------------------
    // 5. Thermal Spectrum & Dynamic Theme Mapping
    // --------------------------------------------------------------------------
    function updateThermalSpectrum(celsiusTemp) {
        let percentage = 50;
        let status = 'Moderate (Room Temperature)';
        let themeClass = 'theme-moderate';

        if (celsiusTemp <= -273.15) {
            percentage = 2;
            status = 'Absolute Zero (−273.15°C)';
            themeClass = 'theme-freezing';
        } else if (celsiusTemp < 0) {
            percentage = Math.max(5, 20 + (celsiusTemp / 50) * 15);
            status = 'Sub-Zero Freezing';
            themeClass = 'theme-freezing';
        } else if (celsiusTemp === 0) {
            percentage = 20;
            status = 'Freezing Point of Water (0°C)';
            themeClass = 'theme-cold';
        } else if (celsiusTemp < 18) {
            percentage = 20 + (celsiusTemp / 18) * 15;
            status = 'Cool / Crisp';
            themeClass = 'theme-cold';
        } else if (celsiusTemp <= 26) {
            percentage = 35 + ((celsiusTemp - 18) / 8) * 15;
            status = 'Comfortable (Room Temperature)';
            themeClass = 'theme-moderate';
        } else if (celsiusTemp <= 38) {
            percentage = 50 + ((celsiusTemp - 26) / 12) * 15;
            status = celsiusTemp >= 36.5 && celsiusTemp <= 37.5 
                ? 'Human Body Temperature (~37°C)' 
                : 'Warm Summer Temperature';
            themeClass = 'theme-warm';
        } else if (celsiusTemp < 100) {
            percentage = 65 + ((celsiusTemp - 38) / 62) * 25;
            status = 'Very Hot / High Heat';
            themeClass = 'theme-hot';
        } else if (celsiusTemp === 100) {
            percentage = 90;
            status = 'Boiling Point of Water (100°C)';
            themeClass = 'theme-boiling';
        } else {
            percentage = Math.min(100, 90 + ((celsiusTemp - 100) / 100) * 10);
            status = 'Extreme Heat / Superheated';
            themeClass = 'theme-boiling';
        }

        // Apply gauge width
        if (gaugeFill) gaugeFill.style.width = `${percentage}%`;

        // Update badges
        if (thermalStatusBadge) thermalStatusBadge.textContent = status;
        if (visStatusText) visStatusText.textContent = status;

        // Apply body dynamic theme
        document.body.className = themeClass;
    }

    // --------------------------------------------------------------------------
    // 6. Event Listeners
    // --------------------------------------------------------------------------
    // Convert button explicit click
    btnConvert.addEventListener('click', performConversion);

    // Live real-time conversion as the user types
    tempInput.addEventListener('input', performConversion);

    // Enter key submits conversion
    tempInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performConversion();
        }
    });

    // Unit radio buttons switch
    unitRadios.forEach(radio => {
        radio.addEventListener('change', performConversion);
    });

    // Clear input button
    btnClear.addEventListener('click', () => {
        tempInput.value = '';
        tempInput.focus();
        resetOutputDisplays();
        hideAlert(errorAlert);
        hideAlert(absoluteZeroAlert);
    });

    // Reset button
    btnReset.addEventListener('click', () => {
        tempInput.value = '25';
        const celsiusRadio = document.querySelector('input[name="sourceUnit"][value="C"]');
        if (celsiusRadio) celsiusRadio.checked = true;
        hideAlert(errorAlert);
        hideAlert(absoluteZeroAlert);
        performConversion();
        tempInput.focus();
    });

    // Preset buttons
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-val');
            const unit = btn.getAttribute('data-unit');

            tempInput.value = val;
            const targetRadio = document.querySelector(`input[name="sourceUnit"][value="${unit}"]`);
            if (targetRadio) targetRadio.checked = true;

            performConversion();
        });
    });

    // Initial load calculation
    performConversion();
});
