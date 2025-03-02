import { Currency, Money } from '@bitzlato/money-js';
import { WalletItemData } from 'src/components/WalletItem/WalletItem';
import { createMoney, PENCE_CCY } from 'src/helpers/money';
import { GeneralBalance } from 'src/modules/account/types';
import { Wallet } from 'src/modules/user/wallets/types';

export function getList(wallets: Wallet[], balances: GeneralBalance[]): WalletItemData[] {
  const res: WalletItemData[] = [];

  for (let wallet of wallets) {
    const ccy = wallet.currency;
    const id = ccy.code;
    const item = balances.find((d) => d.currency_id === id);
    const balance = item ? getBalance(ccy, item) : wallet.balance;
    res.push({
      name: wallet.name,
      currency: ccy.code,
      icon: wallet.icon_id,
      balance,
      balanceP2P: createMoney(item?.p2p_balance ?? 0, ccy),
      balanceMarket: item?.market_balance ? createMoney(item.market_balance, ccy) : wallet.balance,
      locked: item ? getLocked(ccy, item) : wallet.locked,
      approximate: createMoney(wallet.price, PENCE_CCY).multiply(balance.toString()),
      hasTransfer: item !== undefined,
    });
  }

  return res;
}

function getBalance(ccy: Currency, balance: GeneralBalance): Money {
  let m = createMoney(0, ccy);
  if (balance.market_balance !== null) {
    m = m.add(createMoney(balance.market_balance, ccy));
  }
  if (balance.p2p_balance !== null) {
    m = m.add(createMoney(balance.p2p_balance, ccy));
  }
  return m;
}

function getLocked(ccy: Currency, balance: GeneralBalance): Money {
  let m = createMoney(0, ccy);
  if (balance.market_hold !== null) {
    m = m.add(createMoney(balance.market_hold, ccy));
  }
  if (balance.p2p_hold !== null) {
    m = m.add(createMoney(balance.p2p_hold, ccy));
  }
  return m;
}
