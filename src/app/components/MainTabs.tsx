import { TabView, TabPanel } from 'primereact/tabview';

export default function MainTabs({tableOne, tableTwo}) {

    return (
        <div>
            <TabView>
                <TabPanel header="Datos personales">
                    {tableOne}
                </TabPanel>
                <TabPanel header="Estado de pagos">
                    {tableTwo}
                </TabPanel>
        </TabView>
        </div>
    )
}

