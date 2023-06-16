import { CustomComponent } from '@sagemodeninja/custom-component';

declare module '@sagemodeninja/fluent-icon-element-component' {
    export class FluentFontIcon extends CustomComponent {
        fontFamily: string;
        glyph: string;
        fontSize: number;
        foreground: string;
        useAccent: boolean;
    }

    export class FluentSymbolIcon extends FluentFontIcon {
        symbol: string;
        glyphMap: { name: string; glyph: string }[];
    }

    export class FluentImageIcon extends CustomComponent {
        source: string;
        size: number;
        alt: string;
        title: string;
    }
}
