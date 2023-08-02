import { Menu } from 'primereact/menu';

export default function Sidebar() {

  const items = [
    {label: 'Afiliados', icon: 'pi pi-fw pi-plus'},
    {label: 'Categorias', icon: 'pi pi-fw pi-trash'},
    {label: 'Noticias', icon: 'pi pi-fw pi-plus'},
    {label: 'Alertas', icon: 'pi pi-fw pi-trash'},
    {label: 'Mensajes', icon: 'pi pi-fw pi-plus'},
    {label: 'Administradores', icon: 'pi pi-fw pi-trash'},
    {label: 'Informacion Util', icon: 'pi pi-fw pi-plus'},
    {label: 'Pagos por App', icon: 'pi pi-fw pi-trash'},
    {label: 'Configuracion', icon: 'pi pi-fw pi-plus'}
  ];


  return (
    <div className="sidebar">
      <Menu model={items} />
    </div>
  )
}