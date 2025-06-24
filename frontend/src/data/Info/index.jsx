export const Info = {
  name: "Digital Store",
  icon: "ti ti-brand-tabler-filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  address:
    "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
  phone: "(85) 3051-3411",
  menu: [
    { name: "Home", link: "/", style: "" },
    { name: "Produtos", link: "/produtos", style: "" },
    { name: "Categorias", link: "/categorias", style: "" },
    { name: "Meus Pedidos", link: "/meus-pedidos", style: "" },
    { name: "Contato", link: "/contato", style: "" },
    { name: "Sobre Digital Store", link: "/sobre", style: "" },
    { name: "Segurança", link: "/seguranca", style: "" },
    { name: "Wishlist", link: "/wishlist", style: "" },
    { name: "Blog", link: "/blog", style: "" },
    { name: "Trabalhe conosco", link: "/trabalhe-conosco", style: "" },
    { name: "Contato", link: "/contato", style: "" },
    {
      name: "Cadastre-se",
      link: "/cadastrar",
      style: "underline hover:text-pink-700",
    },
    {
      name: "Entrar",
      link: "/entrar",
      style: "p-button py-2 px-4 bg-pink-600 text-white hover:bg-pink-700",
    },
    { name: "Carrinho", link: "/carrinho", style: "" },
    { name: "Camisetas", link: "/produtos/camisetas", style: "" },
    { name: "Calças", link: "/produtos/calcas", style: "" },
    { name: "Bonés", link: "/produtos/bones", style: "" },
    { name: "Headphones", link: "/produtos/headphones", style: "" },
    { name: "Tênis", link: "/produtos/tenis", style: "" },
  ],
  menusections: {
    menuheader: [
      {
        title: "",
        items: [0, 1, 2, 3],
        class: "font-semibold py-3 pb-1 border-bottom-3 border-0",
        active: "text-pink-600 border-pink-600",
        hover: "hover:text-pink-600 hover:border-pink-600",
      },
    ],
    menufooter: [
      {
        title: "Informação",
        items: [5, 6, 7, 8, 9, 3],
        class: "mb-2",
        active: "text-pink-600",
        hover: "hover:text-pink-600",
      },
      {
        title: "Categorias",
        items: [14, 15, 16, 17, 18],
        class: "mb-2",
        active: "text-pink-600",
        hover: "hover:text-pink-600",
      },
    ],
  },
  social: {
    title: "Redes Sociais",
    tblank: true,
    redes: [
      {
        icon: "fa-brands fa-facebook-f",
        label: "Facebook",
        link: "#",
      },
      {
        icon: "fa-brands fa-instagram",
        label: "Instagram",
        link: "#",
      },
      {
        icon: "fa-brands fa-twitter",
        label: "Twitter",
        link: "#",
      },
    ],
  },
};
