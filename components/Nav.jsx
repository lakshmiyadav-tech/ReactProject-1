function Navigation(){
 return (
     <nav>
      <div className='logo'>
        <img src="/logo.png" alt="logo" width={118} />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>login</button>
     </nav>
 );
}

export default Navigation;