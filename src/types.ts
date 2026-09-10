export type SupportedChain = 'Ethereum' | 'Solana' | 'Arbitrum' | 'Bitcoin' | 'Polygon' | 'Base';

export interface TracePreset {
  id: string;
  name: string;
  label: string;
  address: string;
  chain: SupportedChain;
  chainType: 'eth' | 'sol' | 'arb' | 'btc' | 'poly' | 'base';
  shortAddress: string;
  targetExchange: string;
  tagColor: 'primary' | 'tertiary' | 'secondary' | 'warning';
}

export type EntityType =
  | 'genesis'
  | 'dex_pool'
  | 'mixer'
  | 'bridge'
  | 'peel_wallet'
  | 'exchange_deposit'
  | 'exchange_hot_wallet'
  | 'eoa';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical' | 'unassessed';

export interface TraceHopNode {
  id: string;
  hopIndex: number;
  entityName: string;
  entityType: EntityType;
  address: string;
  label: string;
  txHash: string;
  timestamp: string | null;
  amountEth: number;
  amountUsd: number | null;
  gasUsedGwei: number | null;
  riskLevel: RiskLevel | null;
  riskFactors: string[];
  blockNumber: number | null;
  vaspMatch?: boolean;
  details: {
    contractVerified: boolean | null;
    clusterTags: string[];
    heuristicMethod: string;
    flowPct: number | null;
    destinationMemo?: string;
  };
}

export interface TraceResult {
  summary?: { text: string; source: 'ai' | 'template'; reason?: string };
  rawTrace?: { candidates: { scoreBreakdown: { hopScore: number; valueScore: number; matchScore: number }; matchType: string }[] };
  id: string;
  queryAddress: string;
  chain: SupportedChain;
  status: 'analyzing' | 'completed' | 'failed';
  timestamp: string;
  totalHops: number;
  avgLatencyMs: number;
  confidenceScore: number;
  attributionExchange: string;
  depositMemo?: string;
  receivingHotWallet: string;
  flaggedMixers: boolean | null;
  volumeTracedEth: number;
  volumeTracedUsd: number | null;
  nodes: TraceHopNode[];
  logs: { time: string; message: string; status: 'DONE' | 'PROCESSING' | 'FLAG' }[];
  warnings?: string[];
  explanation?: string;
  cached?: boolean;
  demo?: boolean;
}

export interface MiniFlowStep {
  label: string;
  type: EntityType | 'dex' | 'mixer' | 'peel' | 'exchange' | 'bridge' | 'genesis';
  subLabel?: string;
  isTerminal?: boolean;
}

export interface HistoryItem {
  id: string;
  queryAddress: string;
  chain: SupportedChain;
  timestamp: string;
  targetExchange: string;
  hopsCount: number;
  confidence: number;
  amountEth: number;
  amountUsd: number | null;
  riskLevel: RiskLevel;
  hasMixer: boolean | null;
  peelScanMode: string;
  summaryText?: string;
  dexSwapsCount?: number;
  executionDuration?: string;
  miniFlow?: MiniFlowStep[];
  raw?: TraceResult;
}

export interface NodeClusterInfo {
  id: string;
  region: string;
  location: string;
  endpoint: string;
  status: 'ONLINE' | 'OPTIMAL' | 'SYNCING';
  latencyMs: number;
  blocksProcessed: string;
  mempoolTps: number;
  peers: number;
}
