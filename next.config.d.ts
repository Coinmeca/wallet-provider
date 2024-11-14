declare const path: any;
/** @type {import('next').NextConfig} */
declare const nextConfig: {
    rewrites(): Promise<{
        source: string;
        destination: string;
    }[]>;
    headers(): Promise<{
        source: string;
        headers: {
            key: string;
            value: string;
        }[];
    }[]>;
    webpack(config: any): any;
    i18n: {
        locales: string[];
        defaultLocale: string;
    };
    images: {
        remotePatterns: {
            protocol: string;
            hostname: string;
        }[];
    };
    experimental: {};
    compiler: {
        styledComponents: boolean;
    };
};
//# sourceMappingURL=next.config.d.ts.map