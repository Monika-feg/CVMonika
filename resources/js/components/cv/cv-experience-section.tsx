import { BriefcaseBusiness } from 'lucide-react';
import CvSection from '@/components/cv/cv-section';
import type { ExperienceItem } from '@/components/cv/types';

type CvExperienceSectionProps = {
    experience: ExperienceItem[];
};

export default function CvExperienceSection({ experience }: CvExperienceSectionProps) {
    return (
        <CvSection title="Erfarenhet" icon={<BriefcaseBusiness className="h-5 w-5" />}>
            <div className="relative space-y-6 before:absolute before:bottom-4 before:left-3 before:top-4 before:w-px before:bg-border">
                {experience.map((item) => (
                    <article
                        key={`${item.title}-${item.period}`}
                        className="relative ml-8 space-y-3 rounded-2xl border border-border/70 bg-background/60 p-5"
                    >
                        <span className="absolute -left-[2.15rem] top-6 h-3 w-3 rounded-full bg-fuchsia-500 ring-4 ring-background dark:ring-card" />

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                                {item.period}
                            </p>
                        </div>

                        <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                            {item.details.map((detail) => (
                                <li key={detail}>• {detail}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </CvSection>
    );
}