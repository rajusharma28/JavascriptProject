
function Header() {
  return (
    <>
      <div className="heading" >
        <img
          src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
          height="50px"
          width="50px"
          alt="Myntra Logo"
        />

        <div className="option">
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
          <button>Home and Living</button>
          <button>Beauty</button>
          <button>Studio</button>
        </div>

        <input placeholder="Search for products, brands and more" />

        <div className="profile-section">
          <button>Profile</button>
          <button>Wishlist</button>
          <button>Bag</button>
        </div>
      </div>
    </>
  );
}

export default Header;