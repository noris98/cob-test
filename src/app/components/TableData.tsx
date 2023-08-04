import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';

export default function TableData() {

    const products = [{
      nombre: "Nico",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Seba",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Franco",
      profesion: "12312222",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Matias",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
    {
      nombre: "Pablo",
      profesion: "asdasdas",
      afiliado: "12312222",
      dni: 121222122,
      telefono: 3876419468,
      email: "pabloroemra@asdas"
    },
  ]

    const actionBodyTemplate = () => {
      return <Button type="button" className="table-btn">Ver</Button>;
  };

  return (
    <>
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="profesion" header="Profesión"></Column>
        <Column field="afiliado" header="Afiliado"></Column>
        <Column field="dni" header="DNI"></Column>
        <Column field="telefono" header="Teléfono"></Column>
        <Column field="email" header="Email" className="email-datatable"></Column>
        <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
      </DataTable>
    </>
  );
}
