function toRgba(cssVariable){
  const color = `var(${cssVariable})`
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`
}

import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      mulish: 'Mulish, sans-serif',
    },
    screens:{
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet)',
      desktop: 'var(--screen-desktop)',
      tv: 'vat(--screen-tv)',
    },
    spacing:{
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    fontSize: {
      xs: 'var(--font-xs)',
      sm: 'var(--font-sm)',
      md: 'var(--font-md)',
      lg: 'var(--font-lg)',
      xl: 'var(--font-xl)',
    },
    

    extend: {
      colors: {
        primary: toRgba('--primary'),
        secondary: toRgba('--secondary'),
        tertiary: toRgba('--tertiary'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),
        icon: toRgba('--icon'),
        outline: toRgba('--outline'),
        divider: toRgba('--divider'),
        'bg-light': toRgba('--bg-light'),
        'bg-dark': toRgba('--bg-dark'),
        'bg-disabled': toRgba('--bg-disabled'),
        'text-primary': toRgba('--text-primary'),
        'text-secondary': toRgba('--text-secondary'),
        'text-tertiary': toRgba('--text-tertiary'),
        'text-disabled': toRgba('--text-disabled'),
      },
      boxShadow:{
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur:{
        default: 'var(--blur)',
      },
      borderRadius:{
        none: 'var(--border-radius-none) /* 0px */',
        sm: 'var(--border-radius-sm) /* 4px */',
        md: 'var(--border-radius-md) /* 8px */',
        lg: 'var(--border-radius-lg) /* 16px */',
      },
    },
  },
  plugins: [],
};
export default config;

// Essa função atua como uma fábrica de funções para converter valores de variáveis CSS para uma representação RGBA. Aqui está uma explicação passo a passo:

// 1- A função toRgba recebe um argumento chamado cssVariable, que parece ser uma variável CSS.

// 2- Dentro da função, é criada uma string chamada color, que usa a template string para envolver a variável CSS em uma função var().

// 3- A função retorna outra função que recebe um objeto com uma propriedade chamada opacityValue.

// 4- Dentro dessa segunda função, é gerada uma string que representa a cor RGBA. Usa-se a variável color e a opacityValue para formar a string no formato rgba(${color}, ${opacityValue}).