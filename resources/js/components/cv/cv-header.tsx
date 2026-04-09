
import AppearanceTabs from '@/components/appearance-tabs';
import type { Hero, Profile } from '@/components/cv/types';

type CvHeaderProps = {
    hero: Hero;
    profile: Profile;
};

export default function CvHeader({ hero, profile }: CvHeaderProps) {
    return (
        <>
            <div className="relative px-4 pt-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-6xl justify-end">
                    <AppearanceTabs includeSystem={false} />
                </div>
            </div>

            <div className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background to-muted/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-40 max-w-2xl bg-gradient-to-r from-fuchsia-300/25 via-sky-300/20 to-indigo-300/25 blur-3xl dark:from-fuchsia-500/10 dark:via-sky-500/10 dark:to-indigo-500/10" />
                    <div className="relative flex min-h-[34rem] flex-col items-center justify-center gap-6 px-6 py-16 text-center sm:px-10">
                        {/* The wide viewBox keeps longer greetings from getting clipped on the curve. */}
                        <svg viewBox="0 0 700 120" className="w-full max-w-2xl overflow-visible">
                            <defs>
                                <path id="curve" d="M 60,92 Q 350,18 640,92" />
                            </defs>
                            <text
                                className="fill-transparent"
                                style={{
                                    fontSize: '2.15rem',
                                    fontFamily: "'Concert One', cursive",
                                    fontWeight: '700',
                                }}
                            >
                                <textPath
                                    href="#curve"
                                    startOffset="50%"
                                    textAnchor="middle"
                                    fill="url(#grad)"
                                >
                                    {hero.greeting}
                                </textPath>
                            </text>
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f762ac" />
                                    <stop offset="50%" stopColor="#ca9cf5" />
                                    <stop offset="100%" stopColor="#93c5fd" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="space-y-3">
                            <p className="text-base font-medium text-sky-700 dark:text-sky-300">
                                {profile.title}
                            </p>
                            <p className="text-sm text-muted-foreground">{profile.location}</p>
                        </div>

                        <p className="max-w-3xl text-balance px-4 text-center text-lg font-medium leading-8 text-foreground md:text-xl">
                            {profile.summary}
                        </p>

                        <p className="max-w-2xl text-balance px-4 text-center text-base leading-8 text-muted-foreground">
                            {profile.intro}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}