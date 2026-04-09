import { Sparkles } from 'lucide-react';
import type { SidebarLink } from '@/components/cv/types';

type CvSidebarProps = {
    links: SidebarLink[];
    skills: string[];
    strengths: string[];
    languages: string[];
};

export default function CvSidebar({ links, skills, strengths, languages }: CvSidebarProps) {
    return (
        <aside className="space-y-8 lg:sticky lg:top-6">
            <section className="rounded-[1.75rem] border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
                <div className="mt-5 space-y-4 text-sm">
                    {links.map((item) => (
                        <div key={item.label} className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {item.label}
                            </p>

                            {item.href ? (
                                <a
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                    className="break-all text-foreground transition hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-foreground">{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-[1.75rem] border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                    <h2 className="text-lg font-semibold text-foreground">Kompetenser</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-muted-foreground"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="rounded-[1.75rem] border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-foreground">Styrkor</h2>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {strengths.map((strength) => (
                        <li key={strength} className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-sky-600 dark:bg-sky-400" />
                            {strength}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="rounded-[1.75rem] border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur-sm">
                <div className="space-y-3 text-sm text-muted-foreground">
                    <h2 className="text-lg font-semibold text-foreground">Språk</h2>
                    <ul className="space-y-3">
                        {languages.map((language) => (
                            <li key={language} className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-sky-600 dark:bg-sky-400" />
                                <span>{language}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </aside>
    );
}