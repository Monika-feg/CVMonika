import { GraduationCap } from 'lucide-react';
import CvSection from '@/components/cv/cv-section';
import type { EducationItem } from '@/components/cv/types';

type CvEducationSectionProps = {
    education: EducationItem[];
};

export default function CvEducationSection({ education }: CvEducationSectionProps) {
    return (
        <CvSection title="Utbildning" icon={<GraduationCap className="h-5 w-5" />}>
            <div className="space-y-4">
                {education.map((item) => (
                    <article
                        key={`${item.title}-${item.period}`}
                        className="rounded-2xl border border-border/70 bg-background/60 p-5"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-1">
                                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.details}</p>
                            </div>
                            <p className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-700 dark:text-sky-300">
                                {item.period}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </CvSection>
    );
}