import { InputText } from 'primereact/inputtext';
import { Chip } from 'primereact/chip';

export default function MainTopFilter() {

    return (
        <div>
            <h3>Afiliados</h3>
            <div className='top-filter'>
                <div className='filter-chip'>
                    <div className="btn-filter">
                        <i className="pi pi-list"></i>
                        <span>Filtros</span>
                    </div>
                    <Chip label="Odontologo" removable />
                </div>
                <div>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Buscar" />
                    </span>
                </div>
            </div>
        </div>
    )
}

