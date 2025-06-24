import { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductViewPage } from "./pages/ProductViewPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UnderConstructionPage } from "./pages/UnderConstructionPage";
import { GlobalStyle } from "./styles";
import { ContactPage } from "./pages/ContactPage";
import { Products } from "./data/Products";
import { Info } from "./data/Info";

export function App() {
  const product = Products.items;
  const category = Products.filter.category;
  const menu = Info.menu;
  const siteName = Info.name;

  const location = useLocation();
  const path = location.pathname;

  const isUnderConstruction = menu.some((route) => route.link === path);

  const isValidRoute = (path) => {
    const menuLinks = menu.map((item) => item.link);
    const extraRoutes = ["/produto/:id", "/produtos/:category"];
    return [...menuLinks, ...extraRoutes].some((pattern) =>
      matchPath({ path: pattern, end: true }, path)
    );
  };

  const smoothScrollToTop = (duration) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const step = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, start * (1 - eased));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    smoothScrollToTop(1500);

    const links = [
      {
        id: "tabler-icons",
        href: "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css",
      },
      {
        id: "font-awesome",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
      },
    ];

    links.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.id = id;
        document.head.appendChild(link);
      }
    });

    const url = new URL(window.location.href);
    const path = url.pathname;
    const searchParams = new URLSearchParams(url.search);
    let titleBase = "";

    if (matchPath({ path: "/produto/:id", end: true }, path)) {
      const id = path.split("/")[2];
      const foundProduct = product.find(
        (item) => String(item.id) === String(id)
      );
      titleBase = foundProduct ? foundProduct.name : "Produto não encontrado";
    } else if (matchPath({ path: "/produtos/:category", end: true }, path)) {
      const categoryPath = path.split("/")[2];
      const categoryItem = category?.find(
        (item) => item.value === categoryPath
      );

      const brand = searchParams.get("brand");
      const gender = searchParams.get("gender");
      const condition = searchParams.get("condition");
      const subcategorys = searchParams.getAll("cat");

      const partes = [];
      if (categoryItem) partes.push(categoryItem.name);
      if (brand) partes.push(capitalize(brand));
      if (gender) partes.push(capitalize(gender));
      if (condition) partes.push(capitalize(condition));
      if (subcategorys.length) partes.push(...subcategorys.map(capitalize));

      titleBase = partes.length
        ? partes.join(" - ")
        : "Categoria não encontrada";
    } else {
      const routeTitleFromMenu = menu.find((item) => item.link === path)?.name;

      if (routeTitleFromMenu) {
        titleBase = routeTitleFromMenu;
      } else if (isUnderConstruction) {
        titleBase = "Página em Construção";
      } else if (!isValidRoute(path)) {
        titleBase = "404 - Página não Encontrada";
      } else {
        titleBase = "";
      }
    }

    document.title = titleBase ? `${titleBase} | ${siteName}` : siteName;

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return () => {
      links.forEach(({ id }) => {
        const existing = document.getElementById(id);
        if (existing) {
          existing.remove();
        }
      });
    };
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos/:category" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
          <Route path="/contato" element={<ContactPage />} />
          {isUnderConstruction &&
            menu
              .slice(2, 14)
              .map(({ link }, i) => (
                <Route
                  key={i}
                  path={link}
                  element={<UnderConstructionPage />}
                />
              ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
