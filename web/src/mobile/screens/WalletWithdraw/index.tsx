import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useMemberLevelFetch } from 'src/hooks/useMemberLevelsFetch';
import { selectWallet } from 'src/modules/user/wallets';
import { Subheader } from 'src/mobile/components';
import { Withdraw } from 'src/containers/Withdraw';
import { useGeneralWallet } from 'src/hooks/useGeneralWallets';
import { WalletMobileBalance } from '../SelectedWalletScreen/WalletMobileBalance';
import { useT } from 'src/hooks/useT';
import { Box } from 'src/components/Box/Box';

export const WalletWithdraw: React.FC = () => {
  const currency = useParams<{ currency?: string }>().currency?.toUpperCase() ?? '';
  const t = useT();
  const history = useHistory();
  const wallet = useSelector(selectWallet(currency));

  useMemberLevelFetch();

  const generalWallet = useGeneralWallet(currency);

  return (
    <Box col spacing="sm">
      <Subheader
        title={t('page.body.wallets.tabs.withdraw')}
        backTitle={t('page.body.wallets.balance')}
        onGoBack={() => history.goBack()}
      />
      {generalWallet && <WalletMobileBalance wallet={generalWallet} />}
      {wallet && <Withdraw wallet={wallet} />}
    </Box>
  );
};
