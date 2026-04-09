import type { ReactNode } from 'react';

type CvSectionProps = {
    title: string;
    icon: ReactNode;
    children: ReactNode;
};

export default function CvSection({ title, icon, children }: CvSectionProps) {
    return (
        <section className="space-y-6 rounded-[1.75rem] border border-border/70 bg-card/45 p-6 shadow-sm backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-background to-muted text-foreground shadow-sm">
                    {icon}
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        Sektion
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        {title}
                    </h2>
                </div>
            </div>
            {children}
        </section>
    );
}