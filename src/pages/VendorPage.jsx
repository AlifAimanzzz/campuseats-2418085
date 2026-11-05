import { Link, useParams } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import { useCart } from "../hooks/useCart.js";
import MenuList from "../components/MenuList.jsx";
import SpecialBanner from "../components/SpecialBanner.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { addToCart } = useCart();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);
  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">
          There is no vendor called "{id}". <Link to="/">Back to vendors</Link>
        </p>
      </section>
    );
  }

  const special = vendor.menu.find((i) => i.special && i.available);

  return (
    <section>
      <p>
        <Link to="/">← All vendors</Link>
      </p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>
      {special && <SpecialBanner item={special} onAdd={addToCart} />}
      <MenuList items={vendor.menu} />
    </section>
  );
}
export default VendorPage;
