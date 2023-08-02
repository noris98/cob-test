import Image from 'next/image'

export default function Navbar() {
  return(
    <div className="navbar-top">
      <div className="navbar-logo">
        <Image
          src="/cob.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <h3 className="title-logo">COB</h3>
      </div>
      <div className="user-info">
        <div className="user-data">
          <h3>Benjamin Lopez</h3>
          <span><i className="pi pi-sign-out" style={{ fontSize: '1rem' }}></i>Cerrar Sesion</span>
        </div>
        <div className="user-logo">
          <Image
            src="/user.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
}