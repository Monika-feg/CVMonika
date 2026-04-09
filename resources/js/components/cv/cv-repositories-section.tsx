import { ExternalLink, FolderGit2 } from 'lucide-react';
import CvSection from '@/components/cv/cv-section';
import type { RepositoryItem } from '@/components/cv/types';

type CvRepositoriesSectionProps = {
    repositories: RepositoryItem[];
};

export default function CvRepositoriesSection({ repositories }: CvRepositoriesSectionProps) {
    return (
        <CvSection title="GitHub-repon" icon={<FolderGit2 className="h-5 w-5" />}>
            <div className="grid gap-4 sm:grid-cols-2">
                {repositories.map((repo) => (
                    <article
                        key={repo.name}
                        className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/55 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-indigo-500/10 opacity-80" />
                        <div className="flex items-start justify-between gap-3">
                            <div className="relative">
                                <h3 className="text-lg font-semibold text-foreground">{repo.name}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {repo.description}
                                </p>
                                {/* extraLanguages is optional so repos can still render cleanly when
                                    GitHub data is missing or when only manual stack data is available. */}
                                {repo.extraLanguages && repo.extraLanguages.length > 0 ? (
                                    <p className="mt-3 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-fuchsia-200/60 bg-fuchsia-500/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-700 dark:border-fuchsia-400/20 dark:bg-fuchsia-400/10 dark:text-fuchsia-200">
                                        <span className="text-[0.65rem] text-muted-foreground">
                                            Extra språk
                                        </span>
                                        <span className="normal-case tracking-normal text-foreground/80">
                                            {repo.extraLanguages.join(' · ')}
                                        </span>
                                    </p>
                                ) : null}
                            </div>

                            <a
                                href={repo.url}
                                target="_blank"
                                rel="noreferrer"
                                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition group-hover:scale-105 group-hover:bg-muted group-hover:text-foreground"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {repo.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </CvSection>
    );
}