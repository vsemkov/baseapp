declare global {
    interface Config {
        api: {
            authUrl: string;
            tradeUrl: string;
            applogicUrl: string;
            rangerUrl: string;
            finexUrl: string;
        };
        auth0?: {
            domain: string;
            client_id: string;
            redirect_uri: string;
            auth_url: string;
            signedin_url: string;
        };
        finex: string | boolean;
        withCredentials: string | boolean;
        incrementalOrderBook: string | boolean;
        isResizable: string | boolean;
        isDraggable: string | boolean;
        showLanding: string | boolean;
        sentryEnabled: string | boolean;
        captchaLogin: string | boolean;
        usernameEnabled: string | boolean;
        gaTrackerKey: string;
        minutesUntilAutoLogout: string;
        msAlertDisplayTime: string;
        msPricesUpdates: string;
        sessionCheckInterval: string;
        balancesFetchInterval: string;
        passwordEntropyStep: string | number;
        storage: {
            defaultStorageLimit: string | number;
            orderBookSideLimit: string | number;
        };
        languages: string[];
        kycSteps: string[];
        captcha_type: 'recaptcha' | 'geetest' | 'none';
        captcha_id?: string;
        password_min_entropy: string | number;
        palette?: string;
        wizard_step?: string;
        barong_upload_size_min_range?: string;
        barong_upload_size_max_range?: string;
        themeSwitcher: 'visible' | 'hidden';

        openOrdersFetchInterval: string;
        signInUrl: string;
        signUpUrl: string;
        logoUrl: string;
        logoDarkUrl: string;
        sonic?: string | boolean;
    }

    interface Window {
        env: Config;
    }
}

export {};