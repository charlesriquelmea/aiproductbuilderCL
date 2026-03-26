"use client";

import {
    Badge
} from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import {
    CheckCircle,
    Code,
    Workflow,
    Bot
} from "lucide-react";

export default function ROISection() {
    return (
        <section className="w-full bg-[#0a0a0a] text-zinc-100 py-16 px-6">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Encabezado */}
                <div className="text-center space-y-4">
                    <Badge className="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-3 py-1 rounded-full">
                        EL RETORNO DE TU INVERSIÓN (ROI)
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#c4b5fd] via-indigo-400 to-blue-400">
                        No compras un curso. Construyes un portafolio rentable desde el Día 1.
                    </h1>
                    <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
                        La educación tradicional te da un diploma. El AI Engineer Builder te entrega proyectos reales con demanda inmediata.
                        En 8 semanas, tendrás un portafolio valorizado en más de <span className="font-bold text-green-400">3.000.000 CLP</span>.
                    </p>
                </div>

                {/* Grid principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Columna Izquierda */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-[#c4b5fd]">El Valor de Mercado</h2>

                        {/* Fila 1 */}
                        <div className="border border-violet-500/40 rounded-lg p-4 bg-violet-950/20 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Code className="w-6 h-6 text-[#c4b5fd]" />
                                    <span className="font-medium">Landing Pages en Next.js</span>
                                </div>
                                <span className="text-green-400 font-semibold">500k - 700k CLP</span>
                            </div>
                            <p className="text-sm text-[#a1a1aa] leading-relaxed">
                                Sitios web profesionales y de alta conversión, optimizados para producción y analítica.
                                Representan tu primera entrega profesional y validan tu capacidad de generar ingresos inmediatos en el mercado freelance.
                            </p>
                        </div>

                        {/* Fila 2 */}
                        <div className="border border-indigo-500/35 rounded-lg p-4 bg-indigo-950/20 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Workflow className="w-6 h-6 text-indigo-400" />
                                    <span className="font-medium">Workflows Automatizados (n8n)</span>
                                </div>
                                <span className="text-green-400 font-semibold">Desde 500k CLP</span>
                            </div>
                            <p className="text-sm text-[#a1a1aa] leading-relaxed">
                                Diseñarás flujos que conectan aplicaciones, reducen tareas repetitivas y aumentan la eficiencia operativa.
                                Cada implementación se traduce en un ahorro tangible para el cliente, justificando el valor de mercado y tu facturación inmediata.
                            </p>
                        </div>

                        {/* Fila 3 */}
                        <div className="border border-teal-500/30 rounded-lg p-4 bg-indigo-950/20 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Bot className="w-6 h-6 text-teal-400" />
                                    <span className="font-medium">Web Apps con IA</span>
                                </div>
                                <span className="text-green-400 font-semibold">+2.000.000 CLP</span>
                            </div>
                            <p className="text-sm text-[#a1a1aa] leading-relaxed">
                                Construirás aplicaciones web modernas integradas con modelos de IA para resolver problemas reales:
                                cotizadores inteligentes, formularios dinámicos y directorios con búsqueda avanzada.
                                Estas soluciones premium posicionan tu portafolio en el rango más alto del mercado.
                            </p>
                        </div>

                        {/* Valor total */}
                        <div className="border border-violet-500/40 rounded-lg p-6 bg-gradient-to-r from-violet-950/40 to-indigo-950/40 text-center">
                            <p className="text-lg font-semibold">
                                Valor Total del Portafolio:{" "}
                                <span className="text-green-400 font-bold">+3.000.000 CLP</span>
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha */}
                    <Card className="bg-[#111111] border border-violet-500/40 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-[#c4b5fd]">
                                Tu Inversión
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-[#a1a1aa] space-y-2">
                                <p>
                                    Inversión:{" "}
                                    <span className="line-through text-red-400">900.000 CLP</span>{" "}
                                    <span className="font-bold text-green-400">700.000 CLP con referido</span>
                                </p>
                            </div>

                            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-black font-semibold px-3 py-1 rounded-full">
                                ROI de 3x a 4x garantizado en habilidades
                            </Badge>

                            {/* Checklist */}
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-zinc-200">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    8 semanas de dedicación
                                </li>
                                <li className="flex items-center gap-2 text-zinc-200">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    Hasta 3 cuotas sin interés
                                </li>
                                <li className="flex items-center gap-2 text-zinc-200">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    Capacidad de facturar desde el Día 1
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}