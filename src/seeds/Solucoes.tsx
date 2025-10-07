import { ISolucoes } from "@/interfaces/ISolucoes";
import { Activity, ChartLine, ChartNoAxesCombined, Columns4, MonitorCheck, SquareKanban, TrendingUp } from "lucide-react";

export let solucoes: ISolucoes[] = [
  { icon: <ChartNoAxesCombined className="w-10 h-10 text-black" />, title: "CRM Especializado em Cobrança e Vendas", desc: "Gestão completa de carteiras, leads e negociações. Automatize rotinas, atribua metas e monitore resultados em tempo real.", items: ['Workflows inteligentes por perfil de cliente;', 'Alertas e agendamentos automáticos;', 'Histórico completo de interações e movimentações;', 'Painel de produtividade individual e por equipe.'] },

  { icon: <Columns4 className="w-10 h-10 text-black" />, title: "Emissão Automatizada de Boletos", desc: "Elimine erros e reduza retrabalho com emissão e baixa automática", items: ['Geração e registro automático de boletos;','Segunda via com atualização de juros e multa;', 'Retorno CNAB e integração bancária via API;', 'Total integração com DocuSign e instituições financeiras.'] },
  
  { icon: <ChartLine className="w-10 h-10 text-black" />, title: "Relatórios e Dashboards Inteligentes", desc: "Tome decisões com base em dados reais e indicadores precisos.", items: ['Métricas em tempo real:', 'Inadimplência, taxa de recuperação e SLA;', 'Performance comercial e financeira;', 'Exportação de dados em CSV, Excel e PDF.'] },
  
  { icon: <TrendingUp className="w-10 h-10 text-black" />, title: "Métricas e Performance", desc: "Monitore resultados, engaje equipes e alcance metas com mais eficiência.", items: ['KPIs e metas personalizadas;', 'Análise preditiva de resultados;', 'Gamificação para motivação e produtividade.'] },

  { icon: <MonitorCheck className="w-10 h-10 text-black" />, title: "APIs e Integrações", desc: "Conecte a Cobrasis ao seu ecossistema digital.", items: ['ERPs, CRMs, bancos e gateways via RESTful API;', 'Conectores com Salesforce, RD Station e Bling;', 'Webhooks e logs completos de auditoria.'] },
  
]