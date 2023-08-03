import { Menu } from 'primereact/menu';

export default function Sidebar() {

  const items = [
    {label: 'Afiliados', icon: 'pi pi-fw pi-user'},
    {label: 'Categorias', icon: 'pi pi-fw pi-calendar'},
    {label: 'Noticias', icon: 'pi pi-fw pi-book'},
    {label: 'Alertas', icon: 'pi pi-fw pi-bell'},
    {label: 'Mensajes', icon: 'pi pi-fw pi-folder'},
    {label: 'Administradores', icon: 'pi pi-fw pi-user-plus'},
    {label: 'Informacion Util', icon: 'pi pi-fw pi-info-circle'},
    {label: 'Pagos por App', icon: 'pi pi-fw pi-dollar'},
    {label: 'Configuracion', icon: 'pi pi-fw pi-cog'}
  ];


  return (
    <div className="sidebar">
      <Menu model={items} />
    </div>
  )
}