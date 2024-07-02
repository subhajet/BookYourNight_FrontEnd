import "./Navbar.css"
export const Navbar = () => {
    return (    
      <header className="heading d-flex align-center">
        <h1 className="heading-1">
          <a className="link" href="/">
            TraveIO
          </a>
        </h1>
         <div className="form-container d-flex align-center cursor-pointer shadow">
         <span className="form-option">Any Where</span>
         <span className="border-right-1px"></span>
         <span className="form-option">Any Week</span>
         <span className="border-right-1px"></span>
         <span className="form-option">Any Guests</span>
         <span class="search material-symbols-outlined">search</span>
         </div>
        <nav class="d-flex align-center gap-large">
          <div className="nav d-flex align-center cursor-pointer">
            <span className="material-symbols-outlined profile-option menu">menu</span>
            <span className="material-symbols-outlined profile-option person ">person_2</span>
          </div>
        </nav>
      </header>    
    );
  };
  