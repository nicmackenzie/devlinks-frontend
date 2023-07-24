import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

   :root{
     --color-grey-0: #ffffff;
     --color-grey-50: #f9fafb;
     --color-grey-200: #e5e7eb;
     --color-grey-300: #d1d5db;
     --color-grey-500: #6b7280;
     --color-grey-700: #374151;

     --color-brand-50: #f5f3ff;
     --color-brand-100: #ede9fe;
     --color-brand-200: #ddd6fe;
     --color-brand-300: #c4b5fd;
     --color-brand-400: #a78bfa;
     --color-brand-500: #8b5cf6;
     --color-brand-600: #7c3aed;
     --color-brand-700: #6d28d9;
     --color-brand-800: #5b21b6;
     --color-brand-900: #4c1d95;

     --color-red-100: #fee2e2;
     --color-red-700: #b91c1c;
     --color-red-800: #991b1b;

     --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
     --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
     --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

     --border-radius-tiny: 3px;
     --border-radius-sm: 5px;
     --border-radius-md: 7px;
     --border-radius-lg: 9px;
   }

   *,
   *::after,
   *::before{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body{
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
   }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
  
  
  button:has(svg) {
    line-height: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
`;
