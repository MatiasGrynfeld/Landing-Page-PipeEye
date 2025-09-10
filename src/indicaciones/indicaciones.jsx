import { use } from 'react'
import '../css/indicaciones.css'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import data from './defectos.json'

export default function Indicaciones() {
    const columns = [
        {
            accessorKey: "tipo",
            header: "Tipo"
        },
        {
            accessorKey: "xy",
            header: "XY",
            cell: ({ getValue }) => {
                const value = getValue();
                return `(${value[0]}, ${value[1]})`;
            }
        },
        {
            accessorKey: "confianza",
            header: "Confianza",
            cell: ({ getValue }) => {
                const value = getValue();
                const percent = Math.round(value * 100);
                return <div className='indicaciones-confianza-cell'>
                    <progress value={value} max="1" className='indicaciones-confianza-progress'></progress>
                    {percent}%
                    </div>
            }
        }
    ]
    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
    return <section className="indicaciones-wrapper">
        <h2 className='indicaciones-title'>Indicaciones claras e intuitivas</h2>
        <div className='indicaciones-progress-wrapper'></div>
        <article className='indicaciones-defectos-wrapper'>
            <h3 className='indicaciones-subtitulo'>Defectos</h3>
            <div className='indicaciones-defectos-content'>
                <table className='indicaciones-defectos'>
                    <thead className='indicaciones-defectos-header'>
                        {
                            table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map(header => (
                                            <th key={header.id}>
                                                {
                                                    flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody className='indicaciones-defectos-body'>
                        {
                            table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {
                                        row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {
                                                    flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <aside className='indicaciones-alt-text-container'>
                    <h3 className='indicaciones-alt-text'>Análisis visual con informe detallado de los resultados obtenidos.</h3>
                </aside>
            </div>
        </article>
    </section>
}