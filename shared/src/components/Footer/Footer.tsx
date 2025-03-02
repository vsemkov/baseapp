import { Box } from 'components/Box';
import cn from 'classnames';
import { Icon } from 'components/Icon';
import { Stack } from 'components/Stack';
import { createT } from 'i18n';
import { FC, useState } from 'react';
import { Language, RenderLinkComponent, Theme } from 'types';
import { themeDark, themeLight } from 'theme/vars.css';
import * as s from './Footer.css';
import { FooterMenu } from './FooterMenu';

type Product = 'p2p' | 'payment-gateway' | 'cryptoloan' | 'exchange';
export const getProductLink = (locale: string, product: Product) => {
  switch (product) {
    case 'exchange':
      return 'https://market.bitzlato.com/';

    default:
      return `https://bitzlato.com/${locale}/${product}`;
  }
};

const faqLinks: Record<string, string> = {
  en: 'https://bitzlato.com/faq_category/exchange-en/',
  ru: 'https://bitzlato.com/ru/faq_category/exchange-en-2/',
};

export const getBitzlatoLink = (locale: string, section: string) => {
  switch (section) {
    case 'faq':
      return faqLinks[locale] ?? faqLinks.en;

    default:
      return `https://bitzlato.com/${locale === 'en' ? '' : `${locale}/`}${section}`;
  }
};

interface Props {
  theme: Theme;
  language: Language;
  renderMarketLink: RenderLinkComponent;
}

export const Footer: FC<Props> = ({ theme, language, renderMarketLink }) => {
  const [active, setActive] = useState<string | undefined>();
  const themeClassName = theme === 'light' ? themeLight : themeDark;
  const t = createT(language);

  const handleClick = (section: string) =>
    setActive((prev) => (prev !== section ? section : undefined));

  return (
    <>
      <Box
        className={cn(themeClassName, s.footer)}
        bg="footerBg"
        borderBottomWidth="2x"
        borderBottomColor="footerBorder"
        borderBottomStyle="solid"
        py={['4x', '7x']}
        px={['4x', '0']}
      >
        <Stack
          direction={['column', 'row']}
          justifyContent="center"
          marginBottom={['0', '9x']}
          marginRight={['0', '8x']}
        >
          <FooterMenu
            section="products"
            title={t('Products')}
            active={active === 'products'}
            onTitleClick={handleClick}
          >
            <Box as="a" className={s.link} href={getProductLink(language, 'p2p')}>
              {t('P2P Platform')}
            </Box>
            <Box as="a" className={s.link} href={getProductLink(language, 'exchange')}>
              {t('Exchange')}
            </Box>
            <Box as="a" className={s.link} href={getProductLink(language, 'payment-gateway')}>
              {t('Payment Gateway')}
            </Box>
            <Box as="a" className={s.link} href={getProductLink(language, 'cryptoloan')}>
              {t('Crypto Loan')}
            </Box>
          </FooterMenu>
          <FooterMenu
            section="information"
            title={t('Information')}
            active={active === 'information'}
            onTitleClick={handleClick}
          >
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'knowledgebase')}>
              {t('Support')}
            </Box>
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'faq')}>
              {t('FAQ')}
            </Box>
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'blog')}>
              {t('Blog')}
            </Box>
            {renderMarketLink({
              key: 'api',
              className: s.link,
              to: '/docs',
              children: t('API'),
            })}
          </FooterMenu>
          <FooterMenu
            section="company"
            title={t('Company')}
            active={active === 'company'}
            onTitleClick={handleClick}
          >
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'about')}>
              {t('About us')}
            </Box>
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'reviews')}>
              {t('Reviews')}
            </Box>
            {renderMarketLink({
              key: 'fees',
              className: s.link,
              to: '/fees',
              children: t('Fees'),
            })}
          </FooterMenu>
          <FooterMenu
            section="legal_documents"
            title={t('Legal documents')}
            active={active === 'legal_documents'}
            onTitleClick={handleClick}
          >
            <Box
              as="a"
              className={s.link}
              href={getBitzlatoLink(language, 'official-replies-from-bitzlato')}
            >
              {t('Official replies from Bitzlato')}
            </Box>
            <Box
              as="a"
              className={s.link}
              href={getBitzlatoLink(
                language,
                'anti-money-laundering-policy-and-know-your-client-policy',
              )}
            >
              {t('AML/KYC Policy')}
            </Box>
            <Box
              as="a"
              className={s.link}
              href={getBitzlatoLink(language, 'terms-of-service-bitzlato')}
            >
              {t('Terms of Service Bitzlato')}
            </Box>
            <Box
              as="a"
              className={s.link}
              href={getBitzlatoLink(language, 'exchange-terms-and-conditions')}
            >
              {t('Exchange terms and conditions')}
            </Box>
            <Box as="a" className={s.link} href={getBitzlatoLink(language, 'policy')}>
              {t('Security Policy')}
            </Box>
          </FooterMenu>
        </Stack>

        {language === 'ru' ? (
          <Stack justifyContent="center" marginRight="4x">
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://t.me/bitzlato"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Telegram Channel')}
            >
              <Icon name="telegram" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.facebook.com/bitzlato.ru"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Facebook')}
            >
              <Icon name="facebook" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.instagram.com/bitzlato"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Instagram')}
            >
              <Icon name="instagram" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.youtube.com/c/BZRussia"
              target="_blank"
              rel="noopener noreferrer"
              title={t('YouTube')}
            >
              <Icon name="youtube" />
            </Box>
          </Stack>
        ) : (
          <Stack justifyContent="center" marginRight="4x">
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://t.me/bitzlato"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Telegram Channel')}
            >
              <Icon name="telegram" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.facebook.com/bitzlato"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Facebook')}
            >
              <Icon name="facebook" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.instagram.com/bitzlato.en"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Instagram')}
            >
              <Icon name="instagram" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://www.youtube.com/channel/UCz11WIy4qSWRrRVpEl0Txqg"
              target="_blank"
              rel="noopener noreferrer"
              title={t('YouTube')}
            >
              <Icon name="youtube" />
            </Box>
            <Box
              as="a"
              className={s.socialNetwork}
              href="https://twitter.com/bitzlato"
              target="_blank"
              rel="noopener noreferrer"
              title={t('Twitter')}
            >
              <Icon name="twitter" />
            </Box>
          </Stack>
        )}
      </Box>

      <Box
        className={cn(themeClassName, s.footer)}
        bg="footerBg"
        color="footerColor"
        fontSize="small"
        py="7x"
        textAlign="center"
      >
        {t('copyright')}
      </Box>
    </>
  );
};
