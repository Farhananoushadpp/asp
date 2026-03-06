/**
 * ASP Global Marine Trading LLC - Products Main Page
 *
 * Professional Product Catalog with Modern Design
 * Enhanced layout with attractive visuals and user experience
 */

import { Link } from "react-router-dom";
import { Package, Award, Users } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const ProductsPage = () => {
  const productCategories = [
    {
      id: "engine-spares-2stroke",
      title: "Engine Spares - 2 Stroke",
      description:
        "Complete range of 2-stroke engine spare parts for marine applications including pistons, liners, and fuel pumps.",
      image: "/products/categories/engine-2stroke.jpg",
      brands: ["YANMAR", "HIMSEN", "WARTSILA", "MAN", "SULZER", "WINGD"],
      featured: true,
    },
    {
      id: "engine-spares-4stroke",
      title: "Engine Spares - 4 Stroke",
      description:
        "Comprehensive 4-stroke engine components and spare parts for marine vessels including valves and bearings.",
      image: "/products/categories/engine-4stroke.jpg",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS", "CATERPILLAR"],
    },
    {
      id: "turbochargers-auxiliary",
      title: "Turbochargers & Auxiliary",
      description:
        "High-performance turbochargers, superchargers, and auxiliary engine systems for enhanced vessel operations.",
      image: "/products/categories/turbocharger.jpg",
      brands: ["ABB", "MAN", "IHI", "MHI", "KBB"],
    },
    {
      id: "pumps-marine-industrial",
      title: "Pumps - Marine & Industrial",
      description:
        "Complete range of marine and industrial pumping systems including centrifugal, gear, and screw pumps.",
      image: "/products/categories/pumps.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "KSB", "GRUNDFOS"],
    },
    {
      id: "hvac-compressors",
      title: "HVAC Compressors",
      description:
        "Marine HVAC systems, compressors, and climate control solutions for comfortable vessel environments.",
      image: "/products/categories/hvac.jpg",
      brands: ["CARRIER", "TRANE", "DAIKIN", "MITSUBISHI"],
    },
    {
      id: "boilers-incinerators-heat-exchangers",
      title: "Boilers & Heat Exchangers",
      description:
        "Marine boilers, incinerators, and heat exchange systems for thermal management and waste handling.",
      image: "/products/categories/boilers.jpg",
      brands: ["ALFA LAVAL", "AALBORG", "KAWASAKI"],
    },
    {
      id: "air-compressor-spares",
      title: "Air Compressor Spares",
      description:
        "Air compressors and spare parts for marine applications including starting air and control air systems.",
      image: "/products/categories/air-compressor.jpg",
      brands: ["ATLAS COPCO", "KAESER", "INGERSOLL RAND"],
    },
    {
      id: "hydraulic-systems",
      title: "Hydraulic Systems",
      description:
        "Complete hydraulic systems, components, and spare parts for steering, deck machinery, and cargo handling.",
      image: "/products/categories/hydraulic.jpg",
      brands: ["PARKER", "REXROTH", "DANFOSS", "EATON"],
    },
    {
      id: "purifiers",
      title: "Purifiers & Separators",
      description:
        "Marine purifiers, separators, and filtration systems for fuel oil, lube oil, and water treatment.",
      image: "/products/categories/purifiers.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "GEA", "WESTFALIA"],
    },
    {
      id: "deck-stores-general",
      title: "Deck Stores & General",
      description:
        "Comprehensive deck stores, safety equipment, and general marine supplies for vessel operations.",
      image: "/products/categories/deck-stores.jpg",
      brands: ["VIKING", "SURVITEC", "WILHELMSEN", "SMIT"],
    },
    {
      id: "engine-stores",
      title: "Engine Stores",
      description:
        "Complete engine stores including gaskets, seals, filters, and maintenance supplies for marine engines.",
      image: "/products/categories/engine-stores.jpg",
      brands: ["FREUDENBERG", "ELASTOL", "DANFOSS", "SKF"],
    },
    {
      id: "lsa-ffa",
      title: "LSA & FFA Equipment",
      description:
        "Life-saving appliances and firefighting equipment meeting SOLAS and international maritime standards.",
      image: "/products/categories/safety.jpg",
      brands: ["VIKING", "SURVITEC", "HONEYWELL", "KIDDE"],
    },
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <PageHero
        title="Products Catalog"
        subtitle="Marine Equipment & Solutions"
        icon={Package}
        badges={[
          { icon: Award, text: "ISO 9001:2015" },
          { icon: Users, text: "Global Network" },
        ]}
      />

      {/* All Categories */}
      <section className="all-categories section-spacing-top">
        <div className="container">
          <div className="section-header">
            <h2>Product Categories</h2>
            <p>Complete range of marine equipment and solutions</p>
          </div>

          <div className="grid-responsive-5">
            {productCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <Link
                    to={`/products/${category.id}`}
                    className="category-link"
                  >
                    View Products
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
