
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    outline: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-50);
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.4;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    height: auto;
  }

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

  label:hover .p-checkbox .p-checkbox-box,
  label:hover .p-radiobutton .p-radiobutton-box {
    border-width: .2rem;
    border-color: var(--pink-600);
  }

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