import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { compose } from 'redux';
import { IntlProps } from '../../bootstrap';
import { TabPanel } from '../../components';
import { HistoryElement } from '../../containers/HistoryElement';
import { CanCan } from '../../containers';
import { setDocumentTitle } from '../../helpers';
import {
  fetchHistory,
  marketsFetch,
  resetHistory,
  walletsFetch,
  RootState,
  selectAbilities,
  AbilitiesInterface,
} from '../../modules';

interface ReduxProps {
  abilities: AbilitiesInterface;
}

interface DispatchProps {
  resetHistory: typeof resetHistory;
  fetchMarkets: typeof marketsFetch;
  fetchWallets: typeof walletsFetch;
  fetchHistory: typeof fetchHistory;
}

type Props = DispatchProps & IntlProps & ReduxProps;

interface State {
  tab: string;
  currentTabIndex: number;
}

class History extends React.Component<Props, State> {
  public state = {
    tab: 'deposits',
    currentTabIndex: 0,
  };

  public tabMapping = CanCan.checkAbilityByAction('read', 'QuickExchange', this.props.abilities)
    ? ['deposits', 'withdraws', 'trades', 'transfers', 'quick_exchange']
    : ['deposits', 'withdraws', 'trades', 'transfers'];

  public componentDidMount() {
    setDocumentTitle('History');
    this.props.fetchMarkets();
    this.props.fetchWallets();
  }

  public componentWillUnmount() {
    this.props.resetHistory();
  }

  public render() {
    return (
      <div className="pg-history-tab pg-container">
        <div className="pg-history-tab__tabs-content">
          <TabPanel
            panels={this.renderTabs()}
            onTabChange={this.handleMakeRequest}
            currentTabIndex={this.state.currentTabIndex}
            onCurrentTabChange={this.onCurrentTabChange}
          />
        </div>
      </div>
    );
  }

  private onCurrentTabChange = (index: number) => this.setState({ currentTabIndex: index });

  private handleMakeRequest = (index: number) => {
    if (this.state.tab === this.tabMapping[index]) {
      return;
    }
    this.props.resetHistory();
    this.setState({ tab: this.tabMapping[index] });
  };

  private renderTabs = () => {
    const { tab } = this.state;

    const tabs = [
      {
        content: tab === 'deposits' ? <HistoryElement type="deposits" /> : null,
        label: this.props.intl.formatMessage({ id: 'page.body.history.deposit' }),
      },
      {
        content: tab === 'withdraws' ? <HistoryElement type="withdraws" /> : null,
        label: this.props.intl.formatMessage({ id: 'page.body.history.withdraw' }),
      },
      {
        content: tab === 'trades' ? <HistoryElement type="trades" /> : null,
        label: this.props.intl.formatMessage({ id: 'page.body.history.trade' }),
      },
      {
        content: tab === 'transfers' ? <HistoryElement type="transfers" /> : null,
        label: this.props.intl.formatMessage({ id: 'page.body.history.transfer' }),
      },
    ];

    return tabs;
  };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
  abilities: selectAbilities(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = (dispatch) => ({
  fetchMarkets: () => dispatch(marketsFetch()),
  fetchWallets: () => dispatch(walletsFetch()),
  fetchHistory: (payload) => dispatch(fetchHistory(payload)),
  resetHistory: () => dispatch(resetHistory()),
});

export const HistoryScreen = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(History) as React.ComponentClass;
