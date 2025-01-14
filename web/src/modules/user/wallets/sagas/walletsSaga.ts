import { call, put } from 'redux-saga/effects';
import { AccountBalanceSource, CurrencySource, sendError, WalletSource } from '../../../';
import { API, RequestOptions } from '../../../../api';
import { walletsData, walletsError, WalletsFetch } from '../actions';

const OPTIONS: RequestOptions = {
  apiVersion: 'peatio',
};

export function* walletsSaga(action: WalletsFetch) {
  try {
    const accounts: AccountBalanceSource[] = yield call(API.get(OPTIONS), '/account/balances');
    const currencies: CurrencySource[] = yield call(API.get(OPTIONS), '/public/currencies');

    const wallets = currencies.map<WalletSource>((currency) => {
      const account = accounts.find((wallet) => wallet.currency === currency.id) ?? {
        currency: currency.id,
        balance: '0.0',
        locked: '0.0',
        limit_24_hour: '0.0',
        limit_1_month: '0.0',
      };

      return {
        ...account,
        ...currency,
      };
    });

    yield put(walletsData(wallets));
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: 'alert',
        extraOptions: {
          actionError: walletsError,
        },
      }),
    );
  }
}
