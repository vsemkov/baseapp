import { isFinexEnabled, isWsApiEnabled } from '../../../api';
import { DEFAULT_TRADING_VIEW_INTERVAL } from '../../../constants';
import { Market, Ticker, TickerEvent } from '../markets';
import { marketStreams } from './actions';

export const generateSocketURI = (baseUrl: string, s: string[]) => {
  let uri = `${baseUrl}/?stream=${s.sort().join('&stream=')}`;
  if (isWsApiEnabled()) {
    uri += '&cancel_on_close=1';
  }
  return uri;
};

export const formatTicker = (events: {
  [pair: string]: TickerEvent;
}): { [pair: string]: Ticker } => {
  const tickers: Record<string, Ticker> = {};
  for (const market in events) {
    if (events.hasOwnProperty(market)) {
      const event: TickerEvent = events[market];
      const { amount, avg_price, high, last, low, open, price_change_percent, volume } = event;
      tickers[market] = {
        amount,
        avg_price,
        high,
        last,
        low,
        open,
        price_change_percent,
        volume,
      };
    }
  }

  return tickers;
};

export const streamsBuilder = (
  withAuth: boolean,
  prevSubscriptions: string[],
  market: Market | undefined,
) => {
  let streams: string[] = ['global.tickers'];

  if (withAuth) {
    streams = [...streams, 'order', 'trade', 'deposit_address', 'deposit', 'withdraw'];

    if (isFinexEnabled()) {
      streams = [...streams, 'balances'];
    }
  }
  if (market) {
    streams = [...streams, ...marketStreams(market).channels];
  }
  for (const stream of prevSubscriptions) {
    if (streams.indexOf(stream) < 0) {
      streams.push(stream);
    }
  }

  return streams;
};

export const periodsMapNumber: { [pair: string]: number } = {
  '1m': 1,
  '5m': 5,
  '15m': 15,
  '30m': 30,
  '1h': 60,
  '2h': 120,
  '4h': 240,
  '6h': 360,
  '12h': 720,
  '1d': 1440,
  '3d': 4320,
  '1w': 10080,
};

export const periodsMapString: { [pair: number]: string } = {
  1: '1m',
  5: '5m',
  15: '15m',
  30: '30m',
  60: '1h',
  120: '2h',
  240: '4h',
  360: '6h',
  720: '12h',
  1440: '1d',
  4320: '3d',
  10080: '1w',
};

export const periodStringToMinutes = (period: string): number =>
  periodsMapNumber[period] || +DEFAULT_TRADING_VIEW_INTERVAL;
export const periodMinutesToString = (period: number): string =>
  periodsMapString[period] || periodsMapString[+DEFAULT_TRADING_VIEW_INTERVAL];

export const marketKlineStreams = (marketId: string, periodString: string) => ({
  channels: [`${marketId}.kline-${periodString}`],
});
