import '/public/css/style.css';
import '/public/fonts/segoe-fluent-icons/segoe-fluent-icons.css';

import './';
import colorSchemeProvider from '@sagemodeninja/color-scheme-provider';
import { DesignToken } from '@sagemodeninja/design-token-provider';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle_mode');

    toggleBtn.addEventListener('click', () => colorSchemeProvider.toggle());
    colorSchemeProvider.subscribeNotification(applyDesignTokens);

    applyDesignTokens();
});

function applyDesignTokens() {
    // Design tokens
    const fillTextPrimary = new DesignToken<string>('fill-text-primary');
    const backgroundFillMicaBase = new DesignToken<string>('background-fill-mica-base');
    const fillAccentDefault = new DesignToken<string>('fill-accent-default');

    const isLight = colorSchemeProvider.colorScheme === 'light';

    document.body.classList.toggle('dark', !isLight);
    fillTextPrimary.setDefault(isLight ? 'rgb(0 0 0 / 89.56%)' : '#ffffff');
    backgroundFillMicaBase.setDefault(isLight ? '#f3f3f3' : '#202020');
    fillAccentDefault.setDefault(isLight ? '#005FB8' : '#60CDFF');
}
