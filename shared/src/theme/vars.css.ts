import { createTheme } from '@vanilla-extract/css';
import * as colors from './colors';

export const [themeLight, vars] = createTheme({
  boxShadows: {
    dropdown: `8px 8px 10px ${colors.black10}`,
    btnPrimaryFocus: `0 7px 11px ${colors.mystic90}`,
    btnSecondaryFocus: `0 7px 11px ${colors.shark19}`,
  },
  colors: {
    transparent: colors.transparent,

    beta: colors.goldTips,
    primary: colors.hawkesBlue,
    text: colors.mineShaft,
    textHighlighted: colors.goldTips,
    interactive: colors.luckyPoint,
    interactiveHighlighted: colors.luckyPointLighter,
    alert: colors.flamingo,
    dropdown: colors.white,
    dropdownBorder: colors.selago,
    dropdownItem: colors.transparent,
    dropdownItemHover: colors.hawkesBlue,
    dropdownItemBorderBottom: colors.whiteLilac,
    dropdownItemActiveBefore: colors.cornflowerBlue,
    dropdownItemText: colors.silverChalice,
    dropdownItemHoverText: colors.black,
    dropdownItemActiveText: colors.black,
    dropdownItemIcon: colors.cornflowerBlue,
    dropdownItemHoverIcon: colors.indigo,
    dropdownItemActiveIcon: colors.indigo,
    btnPrimaryBg: colors.goldTips,
    btnPrimaryBgHover: colors.lightningYellow,
    btnPrimaryBgActive: colors.galliano,
    btnPrimaryBgDisabled: colors.mystic,
    btnPrimaryText: colors.catskillWhite,
    btnPrimaryTextDisabled: colors.manatee,
    btnSecondaryBg: colors.indigo,
    btnSecondaryBgHover: colors.indigoLight,
    btnSecondaryBgActive: colors.governorBay,
    btnSecondaryBgDisabled: colors.manatee,
    btnSecondaryText: colors.catskillWhite,
    btnSecondaryTextDisabled: colors.manatee,
    themeSwitcherBorder: colors.selago,
    themeSwitcherBorderHover: colors.luckyPoint,
    themeSwitcherSun: colors.white,
    themeSwitcherSunHover: colors.white,
    themeSwitcherMoon: colors.luckyPoint,
    spinner01: colors.black20,
    spinner02: colors.black,
    backdrop: colors.black10,

    footerBg: colors.luckyPoint,
    footerTitle: colors.spindle,
    footerBorder: colors.sapphire,
    footerColor: colors.spindle,
    footerLinkColor: colors.cornflowerBlue,
    footerLinkColorHover: colors.goldTips,
    footerSocialIcon: colors.indigo,
    footerSocialIconHover: colors.spindle,
  },
});

export const themeDark = createTheme(vars, {
  boxShadows: {
    dropdown: `8px 8px 10px ${colors.black10}`,
    btnPrimaryFocus: `0 7px 11px ${colors.mystic15}`,
    btnSecondaryFocus: `0 7px 11px ${colors.mystic15}`,
  },
  colors: {
    transparent: colors.transparent,

    beta: colors.goldTips,
    primary: colors.mako,
    text: colors.whiteLilac,
    textHighlighted: colors.goldTips,
    interactive: colors.silverChalice,
    interactiveHighlighted: colors.gray,
    alert: colors.flamingo,
    dropdown: colors.ebonyClay,
    dropdownBorder: colors.transparent,
    dropdownItem: colors.transparent,
    dropdownItemHover: colors.mako,
    dropdownItemBorderBottom: colors.bunker,
    dropdownItemActiveBefore: colors.indigo,
    dropdownItemText: colors.silverChalice,
    dropdownItemHoverText: colors.white,
    dropdownItemActiveText: colors.spindle,
    dropdownItemIcon: colors.doveGray,
    dropdownItemHoverIcon: colors.white,
    dropdownItemActiveIcon: colors.spindle,
    btnPrimaryBg: colors.goldTips,
    btnPrimaryBgHover: colors.saffron,
    btnPrimaryBgActive: colors.goldenGrass,
    btnPrimaryBgDisabled: colors.mystic,
    btnPrimaryText: colors.catskillWhite,
    btnPrimaryTextDisabled: colors.manatee,
    btnSecondaryBg: colors.cornflowerBlueLighter,
    btnSecondaryBgHover: colors.anakiwa,
    btnSecondaryBgActive: colors.cornflowerBlueDarken,
    btnSecondaryBgDisabled: colors.manatee,
    btnSecondaryText: colors.catskillWhite,
    btnSecondaryTextDisabled: colors.manatee,
    themeSwitcherBorder: colors.abbey,
    themeSwitcherBorderHover: colors.silverChalice,
    themeSwitcherSun: colors.silver,
    themeSwitcherSunHover: colors.mercury,
    themeSwitcherMoon: colors.abbey,
    spinner01: colors.white20,
    spinner02: colors.white,
    backdrop: colors.black10,

    footerBg: colors.ebonyClay,
    footerTitle: colors.silverChalice,
    footerBorder: colors.tuna,
    footerColor: colors.doveGray,
    footerLinkColor: colors.doveGray,
    footerLinkColorHover: colors.goldTips,
    footerSocialIcon: colors.doveGray,
    footerSocialIconHover: colors.silverChalice,
  },
});
