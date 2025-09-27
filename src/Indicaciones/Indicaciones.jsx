import { useState, useEffect, useRef } from 'react'
import './Indicaciones.css'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import data from './Defectos.json'
import { motion, useInView } from 'framer-motion'

export default function Indicaciones() {
    const [progress, setProgress] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const wrapperRef = useRef(null)
    const isInView = useInView(wrapperRef, { once: true, threshold: 0.3 })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
            
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            const animateSlider = async () => {
                await sleep(1000);
                const waitTime = 20;
                await sleep(300);
                for (let i = 0; i <= 30; i++) {
                    setProgress(i);
                    await sleep(waitTime);
                }
                for (let i = 30; i >= 0; i--) {
                    setProgress(i);
                    await sleep(waitTime);
                }
            };
            animateSlider()
        }
    }, [isInView, hasAnimated])

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

    return <section className="indicaciones-wrapper" id='indicaciones-wrapper' ref={wrapperRef}>
        <motion.h2 
            className='indicaciones-title'
            style={{ 
                display: "inline-block",
                overflow: "hidden", 
                whiteSpace: "nowrap" 
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: "auto" } : { width: 0 }}
            transition={{ 
                duration: 2, 
                ease: "easeInOut"
            }}
        >
            Indicaciones claras e intuitivas
        </motion.h2>
        <div className='indicaciones-progress-wrapper'>
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="indicaciones-slider"
                style={{ '--progress': `${progress}%` }}
            />

            <div className='indicaciones-text-container'>
                <span>Antes</span>
                <span>Después</span>
            </div>

            <div className="indicaciones-container-wrapper">
                <div className="indicaciones-image-container">
                    <img
                        src="/resources/indicaciones/indicaciones sin marcar.png"
                        className="indicaciones-image"
                    />
                    <div
                        className="indicaciones-image-overlay"
                        style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
                    >
                        <img
                            src="/resources/indicaciones/indicaciones marcada.png"
                            className="indicaciones-image"
                        />
                    </div>
                </div>

                <div
                    className="indicaciones-divider"
                    style={{ left: `${progress}%` }}
                />
            </div>
        </div>

        <article className='indicaciones-defectos-wrapper'>
            <h3 className='indicaciones-subtitulo'>Defectos</h3>
            <div className='indicaciones-defectos-content'>
                <motion.table 
                    className='indicaciones-defectos'
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeOut",
                        delay: 0.3
                    }}
                >
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
                </motion.table>
                <aside className='indicaciones-alt-text-container'>
                    <motion.h3 
                        className='indicaciones-alt-text'
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ 
                            duration: 1, 
                            ease: "easeOut",
                            delay: 0.5
                        }}
                    >
                        Análisis visual con informe detallado de los resultados obtenidos.
                    </motion.h3>
                </aside>
            </div>
        </article>
    </section>
}
