
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // Reset de estilos básicos
  *, *::before, *::after {
    outline: none;
    list-style: none;
    box-sizing: border-box;
  }

  // Estilo base do body
  body {
    background-color: var(--gray-50);
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.4;
    overflow-x: hidden;
  }

  // Remove sublinhado de links
  a {
    text-decoration: none;
    color: inherit;
  }

  // Remove margin/padding de listas
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  // Garante que imagens ocupem largura total
  img {
    width: 100%;
    height: auto;
  }

  // Algumas classes utilitárias personalizadas
  .max-w-36rem { max-width: 36rem; }
  .max-w-75rem { max-width: 75rem; }
  .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .rotate-340 { transform: rotate(330deg) !important; }
  .no-effect:focus, .no-effect:active {
    background-color: transparent !important;
    border: none !important;
  }
  .no-effect:focus { outline: none !important; }
  .p-sidebar-mask { padding-top: 4.6rem!important; z-index: 3 !important; }

  // Animações para entrada/saída de componentes
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideOut {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(-30px); }
  }
  .fadein {
    animation: fadeSlideIn 0.6s ease forwards;
    z-index: 2;
  }
  .fadeout {
    animation: fadeSlideOut 0.6s ease forwards;
    z-index: 1;
  }

  // Scroll horizontal sem barra visível
  .scroll-container {
    overflow-x: auto;
    scrollbar-width: none;
  }
  .scroll-container::-webkit-scrollbar {
    height: 0;
    transition: height 0.3s ease;
  }
  .scroll-container:hover::-webkit-scrollbar { height: 8px; }
  .scroll-container::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);
    border-radius: .25rem;
  }

  // Estilo dos checkboxes e radio buttons (PrimeReact)
  .p-checkbox .p-checkbox-box,
  .p-radiobutton .p-radiobutton-box {
    border: .12rem solid var(--gray-600);
    transition: all 0.2s;
  }

  .p-checkbox .p-checkbox-box {
    border-radius: .25rem;
  }

  .p-checkbox.p-highlight .p-checkbox-box,
  .p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: var(--pink-600);
    background: var(--pink-600);
    color: var(--surface-a);
  }

  .p-checkbox .p-checkbox-box .p-checkbox-icon,
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    color: var(--surface-a);
  }

  .p-checkbox.p-highlight .p-checkbox-box .p-checkbox-icon,
  .p-radiobutton.p-highlight .p-radiobutton-icon {
    color: var(--surface-a);
  }

  // Deixa borda rosa quando o label está com hover
  label:hover .p-checkbox .p-checkbox-box,
  label:hover .p-radiobutton .p-radiobutton-box {
    border-width: .2rem;
    border-color: var(--pink-600);
  }

  // Ajustes visuais em dropdowns e preview de imagens
  .p-dropdown {
    & .p-dropdown-label { padding: .6rem 0; }
    & .p-dropdown-trigger { width: 2rem; }
  }
  .p-image-preview-indicator {
    background-color: transparent;
    & i {
      font-size: 2rem;
      padding: 3rem;
      background-color: var(--pink-600);
      color: var(--surface-a);
      opacity: 0.6;
      border-radius: 50%;
    }
  }
  .p-dropdown-panel { 
    & .p-dropdown-items {
      & .p-dropdown-item {
        &.p-highlight {
          color: var(--pink-600);
        }
      }
    }
  }
`;