import Image from 'next/image'

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function Navbar() {
  return (
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
          <div className='user-data-exit'>
            <i className="pi pi-sign-out"></i>
            <span>Cerrar Sesion</span>
          </div>
        </div>
        <div className="user-logo">
          <Image
            src="/user.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  )
}