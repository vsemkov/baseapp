import { CommonState, OrderSide, OrderStatusType, OrderType } from '../../types';
import { MarketId } from '../markets';

export interface OrderBookOrder {
  id: number;
  side: OrderSide;
  ord_type: OrderType;
  price: string;
  avg_price: string;
  state: OrderStatusType;
  market: string;
  created_at: string;
  volume: string;
  remaining_volume: string;
  executed_volume: string;
  trades_count: number;
}

export interface OrderBookState extends CommonState {
  asks: OrderBookOrder[];
  bids: OrderBookOrder[];
  loading: boolean;
}

export interface OrderBookEntry extends CommonState {
  remaining_volume: string;
  volume: string;
}

export interface DepthState extends CommonState {
  asks: string[][];
  bids: string[][];
  loading: boolean;
}

export interface DepthIncrementState {
  marketId?: MarketId;
  asks: string[][];
  bids: string[][];
  loading: boolean;
  sequence: number | null;
}

export interface DepthIncrementUpdateData {
  asks: string[][] | string[] | null;
  bids: string[][] | string[] | null;
  sequence: number | null;
}
