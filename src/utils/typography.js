import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';

const options = {
    baseFontSize: '18px',
    baseLineHeight: 1.5,
    googleFonts: [
        {
            name: 'Lato',
            styles: [
                '100',
                '100i',
                '300',
                '300i',
                '400',
                '400i',
                '700',
                '700i',
                '900',
                '900i'
            ]
        },
        {
            name: 'Open Sans',
            styles: [
                '300',
                '300i',
                '400',
                '400i',
                '600',
                '600i',
                '700',
                '700i',
                '800',
                '800i'
            ]
        }
    ],
    headerFontFamily: ['Lato', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    plugins: [
        new CodePlugin(),
    ]
};

const typography = new Typography(options);

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;